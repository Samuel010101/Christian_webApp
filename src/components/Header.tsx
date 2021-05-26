import React from 'react';
import Link from './Link';
import './style.css';

const Header = () => {
    return (
        <div className='ui secondary pointing menu'>
             <div>
               <Link href="/" className="item">
                    Inicio 
               </Link>
               <Link href="/estudiosBiblicos" className="item">
                    Estudios Biblicos 
               </Link>
               <Link href="/predicas" className="item">
                    Predicas 
               </Link>
               <Link href="/temasBiblicos" className="item">
                    Temas Biblicos 
               </Link>
               <Link href="/iglesiaDeDios" className="item">
                    Iglesia De Dios
               </Link>
             </div>
        </div>
    );
};

export default Header;