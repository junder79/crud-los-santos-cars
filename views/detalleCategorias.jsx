import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import LinearProgress from '@mui/material/LinearProgress';
import ModalDetail from "../componentes/modalDetail";
function DetalleCategoria() {

    useEffect(() => {
        getAllElementByCategories();
      }, []);

    const [dataCars, setData] = useState([]);  
    const [statusCarga, setCargado] = useState(false);  
    const getAllElementByCategories = async () => {
        try {
            setCargado(true);
            const response = await axios.get("https://los-santos-cars-api.onrender.com/categoria/cars");
            setCargado(false);
            setData(response.data);
        } catch (error) {
            console.log("Error " + error);
        }
       
    }

    const {id} = useParams();
    return ( 
       <>
            {
          statusCarga ?    <LinearProgress />  :  null  } 
        <Grid container spacing={2}>
            

            {
            dataCars.map((elements)=>(
                <Grid item={6}>
                <Card sx={{ minWidth: 275 }}>
                <CardMedia
        sx={{ height: 140 }}
        image={elements.imagen}
        title={elements.nombre}
      />
        <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" >
           {elements.id}
        </Typography>
        
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
           {elements.nombre}
        </Typography>
        <Typography variant="body2">
           {elements.descripcion}
        </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" variant="contained"><DeleteOutlineIcon/></Button>
        <Button size="small" variant="contained"><EditIcon/></Button>
        </CardActions>
        </Card>
        </Grid>
            )) 
        }
          
        </Grid>
      
          
       </>
     );
}

export default DetalleCategoria;