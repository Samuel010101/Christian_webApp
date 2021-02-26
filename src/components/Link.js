import React from 'react';

const Link = ({ className, href, children}) => {
    const onClick = (event) => {
        if (event.metaKey || event.ctrlKey){
            return;
        }
        event.preventDefault();
        window.history.pushState({}, '', href);

        // Este pequeño bloque junto con algunas lineas de codigo en el componente Route
        // nos permite hacer detecting navegation
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    return (
        <a onClick={onClick} className={className} href={href} >
            {children}
        </a>
    )
};

export default Link;