import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Container from '@mui/material/Container';

import NavBar from '../componentes/nav'
import ListarCategorias from '../views/listarCategorias';
import DetalleCategoria from '../views/detalleCategorias';
import NuevoVehiculo from '../views/nuevoVehiculo';
import UpdateVehiculo from '../views/updateVehiculo';
import { Route, Routes } from 'react-router-dom';

function App() {


  return (

    <>
      <NavBar />
      <Routes>
        <Route path='/inicio' element={<ListarCategorias exact></ListarCategorias>} />
        <Route path='/detalle-categoria/:nameCategory' element={<DetalleCategoria />} />
        <Route path='/new-vehicle' element={<NuevoVehiculo />} />
        <Route path='/update' element={<UpdateVehiculo />} />
      </Routes>
      
      </>

  )
}

export default App
