import React from "react";
import Carousel from "semantic-ui-carousel-react";
import { Image } from "semantic-ui-react";
//import "semantic-ui-css/semantic.min.css";

import corazon from '../img/corazon.jpeg';
import biblia from '../img/download.jpeg';
import gota from '../img/gota.png';
import imagen1 from '../img/imagen_1.jpeg';
import imagen2 from '../img/imagen_2.jpeg';


const IglesiaDeDios = () => {
  let elements = [
    {
      render: () => {
        return (
          <Image className="slider" src={corazon} alt="Imagen 1" />
        );
      }
    },
    {
      render: () => {
        return (
        <Image className="slider" src={biblia} alt="Biblia" />
        );
      }
    },
    {
      render: () => {
        return (
          <Image className="slider" src={gota} alt="Gota" />
        );
      }
    },
    {
      render: () => {
        return (
          <Image className="slider" src={imagen1} alt="Culto de jovenes" />
        );
      }
    },
    {
      render: () => {
        return (
          <Image className="slider" src={imagen2} alt="Tiempo de afilamiento" />
        );
      }
    }
  ];
  return (
    <div>
      <Carousel
        elements={elements}
        duration={10000}
        animation="slide right"
        showNextPrev={false}
        showIndicators={true}
      />
    </div>
  );
};
export default IglesiaDeDios;