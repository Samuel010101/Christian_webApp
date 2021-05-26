import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';



const Predicas = () => {
    const [predicas, setPredicas] = useState([]);

    const onTermSubmit = async term => {
        const response = await axios.get(`http://localhost:3500/search/${term}`)
        console.log(response.data)

        setPredicas(response.data.Predicas)

    }


    return (
        <div>
            <SearchBar onFormSubmit={onTermSubmit}>Buscar Predicas</SearchBar>
            <div > 
                {predicas.map((predica, index) => (   
                    <div style={{marginLeft: "300px"}} >
                    <div key={index} className="ui sizer vertical segment"><br/>
                        <div><h3> Predicador: {predica.predicador}</h3></div>
                        <div className="ui medium header"> Tema: {predica.tema}</div>
                        <div> Enlace: <a  href={predica.url} rel='noreferrer' target='_blank'> {predica.url}</a></div>
                    </div>
                    </div>
                    
                ))}
            </div>

        </div>

    )
};

export default Predicas;