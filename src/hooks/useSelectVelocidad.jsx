import React, {useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const useSelectVelocidad = () => {
    const [velocidad,setVelocidad] = useState('');

    const SelectVelocidad = ({field}) => (
       
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={velocidad}
          label="Velocidad"
          onChange={(event) => setVelocidad(event.target.value) }  
          {...field} 
        >
          <MenuItem value='Mala'>Mala</MenuItem>
          <MenuItem value='Buena'>Buena</MenuItem>
          <MenuItem value='Excelente'>Excelente</MenuItem>
        </Select>
    
    )

    return [SelectVelocidad,velocidad];

}

export default useSelectVelocidad;