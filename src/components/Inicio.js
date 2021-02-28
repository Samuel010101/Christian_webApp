import React from "react";
import gota from '../img/gota.png';
import corazon from '../img/corazon.jpeg';
import download from '../img/download.jpeg';
import imagen1 from '../img/imagen_1.jpeg';
import imagen2 from '../img/imagen_2.jpeg';
//import Carousel from "semantic-ui-carousel-react";
//import { Image } from "semantic-ui-react";
//import "semantic-ui-css/semantic.min.css";


const Inicio = () => {

  return (
    <div>
      <ul>
        <li><img  src={gota} alt="gota" ></img> </li>
        <li><img src={corazon} alt="corazon"></img> </li>
        <li><img src={download} alt="Biblia" ></img> </li>
        <li><img src={imagen1} alt="Actividad de jovenes" ></img> </li>
        <li><img src={imagen2} alt="Tiempo de afilamiento" ></img> </li>
      </ul>
    </div>
  )

  /*
  let elements = [
    {
      render: () => {
        return (
          <Image className="slider" src={require("../img/gota.png" )} alt="Imagen 1" />
        );
      }
    },
    {
      render: () => {
        return (
        <Image className="slider" src="https://images.squarespace-cdn.com/content/v1/5601a9b4e4b068aeb0c6987f/1560242335592-MYDHS51TAGL2LFGR96T5/ke17ZwdGBToddI8pDm48kDVYnQx84rzrm2qQOUd7Sy17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UY8mqlSYPG-nmIUWpJc006SuQyuTTLGA4klG9-z6Yewc3-7Z7Bn97rMKff5yJsS8Lw/Espiritu-santo-fuente-de-amor1.jpg?format=2500w" />
        );
      }
    },
    {
      render: () => {
        return (
          <Image className="slider" src="https://farm5.staticflickr.com/4602/39059201754_43650e3491_z.jpg" />
        );
      }
    }
  ];
  return (
    <div   >
      <Carousel
        elements={elements}
        duration={10000}
        animation="slide right"
        showNextPrev={false}
        showIndicators={true}
      />
    </div>
  );
*/


};
export default Inicio;






