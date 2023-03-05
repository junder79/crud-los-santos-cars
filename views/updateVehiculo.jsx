import React from 'react'
import { Routes, Route, useParams ,useLocation} from 'react-router-dom';

const UpdateVehiculo = () => {

    const location = useLocation();
    console.log(useLocation()) 
  return (
    <div>UpdateVehiculo </div>
  )
}

export default UpdateVehiculo