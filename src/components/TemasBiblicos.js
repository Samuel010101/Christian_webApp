import React, { useState } from 'react';


const TemasBiblicos = ({items}) =>  {
    const [activeIndex, setActiveIndex] = useState(null);

    // Helper functions in function component
    const onTitleClick = (index) => {
        setActiveIndex(index);
    };

    const renderedItems = items.map((item, index) => {
        // Expandiendo el acordion 
        const active = index === activeIndex ? 'active' : '';

        // Uso React.Fragment porque si pongo todo el contenido en un div me crea un doble borde en la caja
        return (
            <div className="accordion" key={item.title}>
                <div
                    className={`title ${active}`}
                    onClick={() => onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <di className={`description ${active}`}>
                    <p>{item.description}</p>
                </di>
                <div className={`content ${active}`} >
                    <div>{item.content}</div>
                </div>
            </div>

        );
    });

    return (<div className="ui styled accordion">
        {renderedItems}

    </div>
    )
};

export default TemasBiblicos;