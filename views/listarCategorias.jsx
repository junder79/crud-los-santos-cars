import { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from "react-router-dom";
import axios from 'axios';
import Skeleton from '@mui/material/Skeleton';
import LinearProgress from '@mui/material/LinearProgress';
import {
  useQuery
} from '@tanstack/react-query'



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function ListarCategorias() {
  const {isLoading, isError, data }  = useQuery(['categories'],
  async () => await axios.get('https://los-santos-cars-api.onrender.com/categoria'),{
    staleTime: 15 * 1000,
    keepPreviousData:true
  }
  );

  if (isError) {
    return <span>Error: {error.message}</span>
  }


  return (
    <Grid style={{ marginTop: 10 }} container spacing={2}>
      {
        isLoading ? <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box> : data.data.map((category) => (
          <Grid item xs={4} key={category._id} >


            <Card>
              <CardMedia
                sx={{ height: 140 }}
                image={category.imagen}
                title={category.nombre}
              />
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  {category.nombre}  <Link to={'/detalle-categoria/' + category.nombre}><ArrowForwardIcon sx={{ fontSize: 30, color: 'black' }} /></Link>
                </Typography>

              </CardContent>
            </Card>

          </Grid>
        ))
      }

    </Grid>



  );
}

export default ListarCategorias;