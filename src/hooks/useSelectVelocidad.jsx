import React, {useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const useSelectVelocidad = () => {
    const [velocidad,setVelocidad] = useState('');

    const SelectVelocidad = () => (
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Velocidad:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={velocidad}
          label="Velocidad"
          onChange={(event) => setVelocidad(event.target.value) }  
        >
          <MenuItem value='Mala'>Mala</MenuItem>
          <MenuItem value='Buena'>Buena</MenuItem>
          <MenuItem value='Excelente'>Excelente</MenuItem>
        </Select>
      </FormControl>     
    )

    return [SelectVelocidad];

}

export default useSelectVelocidad;