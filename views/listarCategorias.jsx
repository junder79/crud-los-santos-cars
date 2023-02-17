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




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function ListarCategorias() {

  useEffect(() => {
    getCategories();
  }, []);

  const [categorias, setCategorias] = useState([]);
  const [statusCarga, setStatusCarga] = useState(false);
  const getCategories = async () => {

    try {
      setStatusCarga(true);
      const response = await axios.get('https://los-santos-cars-api.onrender.com/categoria');
      setCategorias(response.data);
      setStatusCarga(false);
    } catch (error) {
      console.log("error ", error);
    }
  }



  return (
    <Grid style={{ marginTop: 10 }} container spacing={2}>
      {
        statusCarga ? <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box> : categorias.map((category) => (
          <Grid item xs={4} >


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