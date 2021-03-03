import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
 
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

const Inicio = () => {
    const [collapsed, setCollapsed] = useState(false);
    

  const toggle = () => {
    setCollapsed({
      collapsed: collapsed
    });
  };

  
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              Visión
            </Menu.Item>
            <Menu.Item key="2">
              Misión
            </Menu.Item>
            <Menu.Item key="3">
              Valores
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: collapsed.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            Content
            <p>
              La iglesia de Dios ha sido ordenada de forma imperativa a llevar a cabo la gran comision
              del evangenlio de cristo
            </p>
          </Content>
        </Layout>
      </Layout>
    );
  
}

export default Inicio;




















/* 
import React from "react";
import Carousel from "semantic-ui-carousel-react";
import { Image } from "semantic-ui-react";
//import "semantic-ui-css/semantic.min.css";

import corazon from '../img/corazon.jpeg';
import biblia from '../img/download.jpeg';
import gota from '../img/gota.png';
import imagen1 from '../img/imagen_1.jpeg';
import imagen2 from '../img/imagen_2.jpeg';


const Inicio = () => {
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
export default Inicio;





 */