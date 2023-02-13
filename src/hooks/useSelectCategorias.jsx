import React, { useState } from 'react'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


const useSelectCategorias = () => {
    const [categoria, setCategorias] = useState('');
    const SelectCategoria = ({ field }) => (
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={categoria}
            label="categorias"
            onChange={(event) => setCategorias(event.target.value)}
            {...field}
        >
            <MenuItem value='cars'>cars</MenuItem>
            <MenuItem value='plane'>plane</MenuItem>
            <MenuItem value='special'>special</MenuItem>
            <MenuItem value='helicoptero'>helicoptero</MenuItem>
            <MenuItem value='motorcycle '>motorcycle </MenuItem>
        </Select>
    )
    return [SelectCategoria, categoria];
}

export default useSelectCategorias;
