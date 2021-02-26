import React from "react";
import Carousel from "semantic-ui-carousel-react";
import { Image } from "semantic-ui-react";
//import "semantic-ui-css/semantic.min.css";


const Inicio = () => {
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
    <div  /*style={{ width: 500}}*/ >
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
export default Inicio;





/*
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const items = [
  {
    src: require('../img/corazon.jpeg'),
    altText: 'imagen 1',
    caption: 'imagen de un corazon'
  },
  {
    src: require('../img/gota.png'),
    altText: 'imagen 2',
    caption: 'imagen de una gota'
  },
  {
    src: require('../img/download.jpeg'),
    altText: 'imagen 3',
    caption: 'Biblia'
  }
];

const Inicio = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item, index) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={index}
      >
        <img   src={item.src} alt={item.altText}  width="100%" height="500px" />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div>
      <h2>Inicio</h2>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  );
}

export default Inicio;
*/
