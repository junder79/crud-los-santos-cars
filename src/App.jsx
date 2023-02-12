import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Container from '@mui/material/Container';
import NavBar from '../componentes/nav'
import Button from '@mui/material/Button';
import ListarCategorias from '../views/listarCategorias';
import DetalleCategoria from '../views/detalleCategorias';
import NuevoVehiculo from '../views/nuevoVehiculo';
import { Route, Routes } from 'react-router-dom';

function App() {


  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/inicio' element={<ListarCategorias></ListarCategorias>} />
        <Route path='/detalle-categoria/:id' element={<DetalleCategoria />} />
        <Route path='/new-vehicle' element={<NuevoVehiculo />} />
      </Routes>
    </div>
  )
}

export default App
