import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import axios from "axios";
import Skeleton from "@mui/material/Skeleton";
import LinearProgress from "@mui/material/LinearProgress";
import { useQuery } from "@tanstack/react-query";
import {useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function ListarCategorias() {
  const navigate = useNavigate();
  const { isLoading, isError, data } = useQuery(
    ["categories"],
    async () =>
      await axios.get("https://los-santos-cars-api.onrender.com/categoria"),
    {
      staleTime: 40 * 1000,
      keepPreviousData: true,
    }
  );

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const detailCategory = (e) => {
      const categorySelected = e.target.textContent
      navigate("/detalle-categoria/" + categorySelected);
  }

  return (
    <Grid style={{ marginTop: 10 }} container spacing={2}>
      {isLoading ? (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      ) : (
        <>

            <Grid item xs={12}>
              <Typography variant="button" sx={{ fontSize: 35, fontWeight: 'bold' }}   color="text.secondary" >Categories</Typography>
            </Grid>

          {data.data.map((category) => (
            <Grid item xs={12} sm={6} md={2} lg={1} key={category._id}>
              <Card >
                <CardMedia
                  sx={{ height: 100 }}
                  image={category.imagen}
                  title={category.nombre}
                />
                <CardContent  sx={{ cursor: "pointer", height:10 }} >
                  <Typography
                    sx={{ fontSize: 13, fontWeight: 'bold' }}
                    color="text.secondary"
                    onClick={detailCategory}
                    variant="button"
                    
                  >
                    {category.nombre}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}          
            <Grid item  xs={12}>
              <Typography variant="button" sx={{ fontSize: 35, fontWeight: 'bold' }}   color="text.secondary">News</Typography>
          </Grid>
        </>
      )}
    </Grid>
  );
}

export default ListarCategorias;
