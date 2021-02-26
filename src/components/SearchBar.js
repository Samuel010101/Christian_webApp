import React, { useState } from 'react';
import './style.css';

const SearchBar = ({ onFormSubmit, children }) => {
   const [term, setTerm] = useState('');

   const onSubmit = event => {
       event.preventDefault();

       onFormSubmit(term);
   };
    
    return (
        <div>
            <form onSubmit={onSubmit} className="ui form" >
                <div className="field" >
                    <label className="label">{children}</label>
                    <input 
                    placeholder="Buscar por el tema. Ej: Amor "
                    type="text" 
                    value={term}
                    onChange={(event) => setTerm(event.target.value)}
                    />
                </div>

            </form>

        </div>
    );
};

export default SearchBar;