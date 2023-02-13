import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import useSelectResistencia from '../src/hooks/useSelectResistencia';
import useSelectVelocidad from '../src/hooks/useSelectVelocidad';
import useSelectCategorias from "../src/hooks/useSelectCategorias";
import axios from "axios";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useForm, Controller } from "react-hook-form";



function NuevoVehiculo() {

  const [SelectResistencia, resistencia] = useSelectResistencia();
  const [SelectVelocidad, velocidad] = useSelectVelocidad();
  const [SelectCategoria,categoria]=useSelectCategorias();
  const { register, handleSubmit, watch, control, formState: { errors } } = useForm();
  const [imagen,setImagen] =useState('');

  const onSubmit =  async (data) => {
    data.imagen = imagen;
    const response = await axios.post('https://los-santos-cars-api.onrender.com/api/vehiculos/registro',data);
    const respuesta = response.data;
    
  };
  const convertImage = (e) => {
    try {
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);

      reader.onload = () => {
        setImagen(reader.result);
      };
    } catch (error) {
      console.log('error : ', error);
    }

  }


  return (
    <>
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>

        <Grid container spacing={2}>
          <Grid item xs={4} md={4}  >
            <TextField fullWidth name='nombre' label="Nombre" variant="outlined" {...register("nombre",{ required: true })  } />
          </Grid>
          <Grid item xs={4} md={4}>
            <TextField fullWidth name='marca' label="Marca" variant="outlined"   {...register("marca",{ required: true })} />
          </Grid>
          <Grid item xs={4} md={4} >
            <TextField fullWidth name='descripcion' label="Descripción" variant="outlined"  {...register("descripcion",{ required: true })} />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={4} md={4}>
            <TextField fullWidth name='tipoVehiculo' label="Tipo Vehiculo" variant="outlined"  {...register("tipoVehiculo",{ required: true })} />
          </Grid>
          <Grid item xs={4} md={4}>
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
          <Grid item xs={4} md={4}>
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
        <Grid container spacing={2}>
          <Grid item xs={4} md={4}>
            <input accept="image/*" type="file" {...register("imagen",{ required: true })} onChange={(e) => convertImage(e)} ></input>
          </Grid>
          <Grid item xs={4} md={4}>
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
        <input type="submit" />

      </form>
      </Box>
    </>
  )
}
export default NuevoVehiculo;