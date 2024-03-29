import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import LinearProgress from "@mui/material/LinearProgress";
import {useNavigate } from "react-router-dom";
import useMessage from "../src/hooks/useMessage";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import SwipeableTemporaryDrawer from '../componentes/drawerInfo';
function DetalleCategoria() {
  const navigate = useNavigate();
  const [MenssagePeticion] = useMessage();
  const { nameCategory } = useParams();
  const { isLoading, isError, data } = useQuery(
    [nameCategory],
    async () =>
      await axios.get(
        `https://los-santos-cars-api.onrender.com/categoria/${nameCategory}`
      ),{

        staleTime: 40 * 1000,
        keepPreviousData:false
    }
  );

  if (isError) {
    return <span>Error:</span>;
  }

  if (isLoading) {

    return <LinearProgress />;
  }



  const nuevoVehiculoComponent = () => {
    navigate("/new-vehicle");
  };

  const eliminarVehiculo = async (id) => {
    try {
      const response = await axios.delete(
        `https://los-santos-cars-api.onrender.com/api/vehiculos/deleteVehiculo/${id}`
      );
      MenssagePeticion(`Eliminado`, "success");
      getAllElementByCategories();
    } catch (error) {
      MenssagePeticion(`Error al eliminar ${error}`, "error");
    }
  };

  const deleteVehicle = async (id) => {
    const respuesta = await Swal.fire({
      title: "Deseas eliminar el vehiculo?",
      text: "Se eliminará de la lista",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then((result) => {
      return result.isConfirmed;
    });
    if (respuesta) {
      await eliminarVehiculo(id);
    }
  };
  const updateVehicle = (elements) => {
    navigate("/update", { state: elements });
  };

  if (!isLoading && !isError) {
    const vehicules = [
     /*  <Button
        onClick={nuevoVehiculoComponent}
        variant="outlined"
        style={{ marginBottom: "20", marginTop: "20" }}
      >
        Agregar Vehiculo
      </Button> */
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <Typography   sx={{fontWeight: 'bold', textTransform: 'uppercase', marginTop:'5px'  }}   color="text.secondary" variant="h3">{nameCategory}</Typography>
        </Grid>
        {data.data.map((elements) => (
          <Grid key={elements._id}  xs={12} sm={6} md={2}   item={6} style={{ marginTop: 10 }}>
            <Card>
              <CardMedia
                sx={{ height: 100 }}
                image={elements.imagen}
                title={elements.nombre}
              />
              <CardContent>
              <SwipeableTemporaryDrawer name={elements.nombre}  image={elements.imagen} description={elements.descripcion} price={elements.price} dlc={elements.dlc} ></SwipeableTemporaryDrawer>
              </CardContent>
             {/*  <CardActions>
                <Button
                  size="small"
                  color="warning"
                  onClick={() => deleteVehicle(elements._id)}
                  variant="contained"
                >
                  <DeleteOutlineIcon />
                </Button>
                <Button
                  size="small"
                  color="error"
                  onClick={() => updateVehicle(elements)}
                  variant="contained"
                >
                  <EditIcon />
                </Button>
              </CardActions> */}
            </Card>
          </Grid>
        ))}
      </Grid>,
    ];
    return vehicules;
  }
}

export default DetalleCategoria;
