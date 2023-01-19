import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Container from '@mui/material/Container';
import NavBar from  '../componentes/nav'
import Button from '@mui/material/Button';
import ListarCategorias from '../views/listarCategorias';
import { Route } from 'react-router-dom';

function App() {
  

  return (
    <div>
    
     <Route path='/' element =  {<ListarCategorias></ListarCategorias>} />   
     <Route path='/detalle/:idTipo' element =  {<ListarCategorias></ListarCategorias>} /> 
     </div>
  )
}

export default App
