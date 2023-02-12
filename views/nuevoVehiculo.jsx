import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import useSelectResistencia from '../src/hooks/useSelectResistencia';
import useSelectVelocidad from '../src/hooks/useSelectVelocidad';
function NuevoVehiculo() {

  const [SelectResistencia] = useSelectResistencia();
  const [SelectVelocidad] = useSelectVelocidad();
  return (
    <>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <Grid container spacing={2}>
          <Grid item xs={4} md={4}  >
            <TextField fullWidth id="outlined-basic" label="Nombre" variant="outlined" />
          </Grid>
          <Grid item xs={4} md={4}>
            <TextField fullWidth id="outlined-basic" label="Marca" variant="outlined" />
          </Grid>
          <Grid item xs={4} md={4} >
            <TextField fullWidth id="outlined-basic" label="Descripción" variant="outlined" />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={4} md={4}>
            <TextField fullWidth id="outlined-basic" label="Tipo Vehiculo" variant="outlined" />
          </Grid>
          <Grid item xs={4} md={4}>
           <SelectResistencia></SelectResistencia>
          </Grid>
          <Grid item xs={4} md={4}>
           <SelectVelocidad></SelectVelocidad>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={4} md={4}>
          <input type="file" onChange={() => console.log("changed")} ></input>
          </Grid>
          <Grid item xs={4} md={4}>
            <TextField fullWidth id="outlined-basic" label="Categoria" variant="outlined" />
          </Grid>
        </Grid>
        <Button type='submit' variant="outlined">Enviar</Button>
      </Box>



    </>
  )
}
export default NuevoVehiculo;