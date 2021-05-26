import React from 'react';
import 'antd/dist/antd.css';
import './style.css';
import { Collapse } from 'antd';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

interface Temas {
  content: string;
  verse1: string;
  verse2: string;
  verse3: string;
}

const amor: Temas = {
  content:
    'La palabra de Dios nos enseña que, parte de la esencia de Dios es que el es amor',
  verse1: '1 Corintios 13: 4-5',
  verse2: '1 Corintios 16: 14',
  verse3: '1 Juan 7-9',
};

const salvacion: Temas = {
  content:
    'La palabra de Dios nos enseña que, no hay otro nombre, ni otra vía por la cual podemos ser salvos sino es por medio de Jesucristo el unigenito de Dios',
  verse1: 'Efesios 1: 7',
  verse2: 'Hebreos 9: 5',
  verse3: '1 Juan 2: 2',
};

const fe: Temas = {
  content:
    'La palabra de Dios nos enseña que, sin fe es imposible agradar a Dios y que por medio de la fe somos santificado para con El',
  verse1: 'Hebreos 11: 6',
  verse2: 'Romanos 1: 17',
  verse3: 'Efesios 2: 8',
};

const perdon: Temas = {
  content:
    'El perdonar es parte y efecto de la salvación que hemos recibido por medio de Jesucristo y asi como hemos sido perdonado, Dios nos demanda que perdonemos a los que nos ofenden',
  verse1: 'Proverbios 17: 9',
  verse2: 'Efesios 4: 32',
  verse3: 'Colosenses 3: 13',
};

const TemasBiblicos = ({ items }) => {
  return (
    <div className="content">
      <Collapse defaultActiveKey={['1']} onChange={callback}>
        <Panel header="El amor de Dios" key="1">
          <p>{amor.content}</p>
          <p>{amor.verse1}</p>
          <p>{amor.verse2}</p>
          <p>{amor.verse3}</p>
        </Panel>
        <Panel header="Salvación por medio de Jesuscristo" key="2">
          <p>{salvacion.content}</p>
          <p>{salvacion.verse1}</p>
          <p>{salvacion.verse2}</p>
          <p>{salvacion.verse3}</p>
        </Panel>
        <Panel header="La fe" key="3">
          <p>{fe.content}</p>
          <p>{fe.verse1}</p>
          <p>{fe.verse2}</p>
          <p>{fe.verse3}</p>
        </Panel>
        <Panel header="El perdón" key="4">
          <p>{perdon.content}</p>
          <p>{perdon.verse1}</p>
          <p>{perdon.verse2}</p>
          <p>{perdon.verse3}</p>
        </Panel>
      </Collapse>
    </div>
  );
};

export default TemasBiblicos;
