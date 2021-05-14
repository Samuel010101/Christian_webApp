import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faBible, faHandHoldingMedical, faBookReader } from '@fortawesome/free-solid-svg-icons';
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
    setCollapsed(!collapsed)
  };

  
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1"> <FontAwesomeIcon icon={faEye}/>
              Visión
            </Menu.Item>
            <Menu.Item key="2"> <FontAwesomeIcon  icon={faHandHoldingMedical} />
              Misión
            </Menu.Item>
            <Menu.Item key="3"> <FontAwesomeIcon icon={faBible} />
              Valores
            </Menu.Item>
            <Menu.Item key="4"> <FontAwesomeIcon icon={faBookReader} />
              Enseñanza
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle
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
            <h2>Un mensaje a la conciencia</h2>
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




















    