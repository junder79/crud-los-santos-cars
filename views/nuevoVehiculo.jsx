import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useSelectResistencia from '../src/hooks/useSelectResistencia';
import useSelectVelocidad from '../src/hooks/useSelectVelocidad';
import useSelectCategorias from "../src/hooks/useSelectCategorias";
import useMessage from "../src/hooks/useMessage";
import axios from "axios";
import InputLabel from '@mui/material/InputLabel';
import Card from '@mui/material/Card';
import FormControl from '@mui/material/FormControl';
import { useForm, Controller } from "react-hook-form";



function NuevoVehiculo() {

  const [SelectResistencia, resistencia] = useSelectResistencia();
  const [SelectVelocidad, velocidad] = useSelectVelocidad();
  const [SelectCategoria, categoria] = useSelectCategorias();
  const [botonDisabled, setBotonDisabled] = useState(false);
  const [MenssagePeticion] = useMessage();
  const { register, handleSubmit, watch, control, formState: { errors } } = useForm();
  const [imagen, setImagen] = useState('');

  const onSubmit = async (data) => {
    setBotonDisabled(true);
    data.imagen = imagen;
    const response = await axios.post('https://los-santos-cars-api.onrender.com/api/vehiculos/registro', data);
    const respuesta = response.data.status;
    setBotonDisabled(false);
    respuesta == 200  ? MenssagePeticion('Vehiculo Ingresado Correctamente' ,'success') : MenssagePeticion('Error al ingresar Vehiculo' ,'error');
  };
  
  const convertImage = (e) => {
    try {
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);

      reader.onload = () => {
        setImagen(reader.result);
      };
    } catch (error) {
      MenssagePeticion('Error al convertir la imagen a Base64' ,'error');
    }

  }


  return (
    <>
      <Box sx={{ boxShadow: 3 }}>
        <Card style={{ marginTop: 20 }}>
          <Typography variant="h4" style={{ marginTop: 10, marginLeft: 10,fontWeight:'bold' }} gutterBottom>
            Nuevo Vehiculo
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>

            <Grid container spacing={2} style={{ marginBottom: 20 }}>
              <Grid item xs={12} md={4}  >
                <TextField fullWidth name='nombre' label="Nombre" variant="outlined" {...register("nombre", { required: true })} />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField fullWidth name='marca' label="Marca" variant="outlined"   {...register("marca", { required: true })} />
              </Grid>
              <Grid item xs={12} md={4} >
                <TextField fullWidth name='descripcion' label="Descripci??n" variant="outlined"  {...register("descripcion", { required: true })} />
              </Grid>
            </Grid>
            <Grid container spacing={2} style={{ marginBottom: 20 }}>
              <Grid item xs={12} md={4}>
                <TextField fullWidth name='tipoVehiculo' label="Tipo Vehiculo" variant="outlined"  {...register("tipoVehiculo", { required: true })} />
              </Grid>
              <Grid item xs={12} md={4}>
                <FormControl fullWidth>
                  <InputLabel id="level-label">Resistencia</InputLabel>
                  <Controller
                    name="resistencia"
                    id="resistencia"
                    defaultValue=''
                    control={control}
                    render={({ field }) => (
                      <SelectResistencia field={field} />
                    )}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4} style={{ marginBottom: 20 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Velocidad:</InputLabel>
                  <Controller
                    name="velocidad"
                    id="velocidad"
                    defaultValue=''
                    control={control}
                    render={({ field }) => (
                      <SelectVelocidad field={field} />
                    )}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={2} style={{marginBottom:20}}>
              <Grid item xs={12} md={4}>
                <input accept="image/*" type="file" {...register("imagen")} onChange={(e) => convertImage(e)} ></input>
              </Grid>
              <Grid item xs={12} md={4}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Categoria:</InputLabel>
                  <Controller
                    name="categoria"
                    id="categoria"
                    defaultValue=''
                    control={control}
                    render={({ field }) => (
                      <SelectCategoria field={field} />
                    )}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Button type='submit' style={{marginBottom:10,fontWeight:'bold'}} disabled={botonDisabled} variant="contained">Guardar</Button>

          </form>
        </Card>
      </Box>
    </>
  )
}
export default NuevoVehiculo;