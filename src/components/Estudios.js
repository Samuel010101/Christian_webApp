import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';



const Estudios = () => {
    const [estudios, setEstudios] = useState([]);
    

    const onTermSubmit = async term => {
        const response = await axios.get(`http://localhost:3500/estudio/${term}`)
        console.log(response.data)

        setEstudios(response.data.Estudios)

    }

    return (
        <div>
            <SearchBar onFormSubmit={onTermSubmit}>Buscar Estudios Biblicos</SearchBar>
            <div>
                {estudios.map((estudio, index) => (
                    
                    <div key={index} className="ui sizer vertical segment"><br />
                        <div><h2>{estudio.tema}</h2></div>
                        <div className="ui medium header">{estudio.autor}</div>
                        <div className="ui segment">
                            <p className="parrafo">
                                {estudio.contenido}
                            </p>
                        </div>
                    </div>
                ))
                }

            </div>

        </div>
    );
};

export default Estudios;