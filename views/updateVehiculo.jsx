import React from 'react'
import { Routes, Route, useParams ,useLocation} from 'react-router-dom';

const UpdateVehiculo = () => {

  const location = useLocation();
  const parametros = location.state;
    console.log("Update vehiocule",parametros.categoria) ;
  return (
    <h3>{parametros.nombre}</h3>
  )
}

export default UpdateVehiculo