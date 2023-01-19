import { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function ListarCategorias() {
    return ( 
<Grid container spacing={2}>
        <Grid item xs={4} >
        

          <Card>
          <CardMedia
        sx={{ height: 140 }}
        image="https://media.istockphoto.com/id/1306933807/photo/blue-number-one-glowing-amid-black-number-ones-on-black-background.jpg?b=1&s=170667a&w=0&k=20&c=VxVwDRWNWHdZbRT2ox_MhVkGjj124WqwrQAHNwSdxIk="
        title="green iguana"
      />
            <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Autos
        </Typography>

            </CardContent>
          </Card>
       
        </Grid>
        <Grid item xs={4}>
        <Card>
          <CardMedia
        sx={{ height: 140 }}
        image="https://media.istockphoto.com/id/1306933807/photo/blue-number-one-glowing-amid-black-number-ones-on-black-background.jpg?b=1&s=170667a&w=0&k=20&c=VxVwDRWNWHdZbRT2ox_MhVkGjj124WqwrQAHNwSdxIk="
        title="green iguana"
      />
            <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Aviones
        </Typography>

            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
        <Card>
          <CardMedia
        sx={{ height: 140 }}
        image="https://media.istockphoto.com/id/1306933807/photo/blue-number-one-glowing-amid-black-number-ones-on-black-background.jpg?b=1&s=170667a&w=0&k=20&c=VxVwDRWNWHdZbRT2ox_MhVkGjj124WqwrQAHNwSdxIk="
        title="green iguana"
      />
            <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Helicoptero
        </Typography>

            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
        <Card>
          <CardMedia
        sx={{ height: 140 }}
        image="https://media.istockphoto.com/id/1306933807/photo/blue-number-one-glowing-amid-black-number-ones-on-black-background.jpg?b=1&s=170667a&w=0&k=20&c=VxVwDRWNWHdZbRT2ox_MhVkGjj124WqwrQAHNwSdxIk="
        title="green iguana"
      />
            <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
       Extraños
        </Typography>

            </CardContent>
          </Card>
        </Grid>
      </Grid>
       
      

     );
}

export default ListarCategorias;