import React from 'react';
import Estudios from './Estudios';
import Predicas from './Predicas';
import IglesiaDeDios from './IglesiaDeDios';
import TemasBiblicos from './TemasBiblicos';
import Inicio from './Inicio';
import Route from './Route';
import Header from './Header';
import Logo from './Logo';

interface Item {
  title: string;
  description: string;
  content: string[];
}

let items: Item[] = [
  {
    title: 'El amor de Dios',
    description:
      'La palabra de Dios nos relata que parte de la esencia de Dios es que el es amor',
    content: ['1 Coritios 13: 4-5', '1 Corintios 16: 14', '1 Juan 4: 7-9'],
  },
  {
    title: 'Salvacion por medio de Jesuscristo',
    description:
      'La palabra de Dios nos enseña que no hay otro nombre, ni otra via por la cual podamos ser salvos sino es por medio de Jesuscristo el unigenito de Dios',
    content: ['Efesios 1: 7', 'Hebreos 9: 5', '1 Juan 2: 2'],
  },
  {
    title: 'La fe',
    description:
      'La palabra de Dios nos enseña que sin fe es imposible agradar a Dios y que por medio de la fe somos santificados para con El',
    content: ['Hebreos 11: 6', 'Romanos 1: 17', 'Efesios 2: 8'],
  },
  {
    title: 'El perdon',
    description:
      'El perdonar es parte y efecto de la salvación que hemos recibido por medio de jesucristo y asi como hemos sido perdonado Dios nos demanda que perdonemos a los que nos ofenden',
    content: ['Proverbios 17: 9', 'Efesios 4: 32', 'Colosenses 3: 13'],
  },
];

const App = () => {
  return (
    <div>
      <Logo />
      <Header />
      <Route path="/">
        <Inicio />
      </Route>
      <Route path="/estudiosBiblicos">
        <Estudios />
      </Route>
      <Route path="/predicas">
        <Predicas />
      </Route>
      <Route path="/temasBiblicos">
        <div className="acordion">
          <TemasBiblicos items={items} />
        </div>
      </Route>
      <Route path="/iglesiaDeDios">
        <div className="sliderFather">
          <IglesiaDeDios />
        </div>
      </Route>
    </div>
  );
};

export default App;
