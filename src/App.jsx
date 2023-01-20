import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Container from '@mui/material/Container';
import NavBar from  '../componentes/nav'
import Button from '@mui/material/Button';
import ListarCategorias from '../views/listarCategorias';
import DetalleCategoria from '../views/detalleCategorias';
import { Route, Routes } from 'react-router-dom';

function App() {
  

  return (
    <div>
    <NavBar/>
    <Routes>
    <Route path='/home' element =  {<ListarCategorias></ListarCategorias>} />   
     <Route path='/detalle-categoria/:id' element =  {<DetalleCategoria/>} /> 
    </Routes>
     </div>
  )
}

export default App
