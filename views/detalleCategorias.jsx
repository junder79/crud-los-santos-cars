import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function DetalleCategoria() {

    useEffect(() => {
        getAllCategoria();
      }, []);

    const [dataCars, setData] = useState([]);  

    const getAllCategoria = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            
            setData(response.data);
        } catch (error) {
            console.log("Error " + error);
        }
       
    }

    const {id} = useParams();
    return ( 
       <>
        <p>detalle{id}</p>
        {
            dataCars.map((elements)=>(
                <p key={elements.id}>{elements.title}</p>
            )) 
        }
        {/* <Card sx={{ minWidth: 275 }}>
        <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" >
            Word of the Day
        </Typography>
        
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
        </Typography>
        <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
        </Typography>
        </CardContent>
        <CardActions>
        <Button size="small">Learn More</Button>
        </CardActions>
        </Card> */}
       </>
     );
}

export default DetalleCategoria;