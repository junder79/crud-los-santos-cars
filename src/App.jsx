import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Container from '@mui/material/Container';
import NavBar from  '../componentes/nav'
import Button from '@mui/material/Button';
import ListarCategorias from '../views/listarCategorias';
function App() {
  

  return (
    <div>
     <NavBar></NavBar>
     <ListarCategorias></ListarCategorias>
  </div>
  )
}

export default App
