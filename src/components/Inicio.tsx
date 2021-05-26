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
import Vision from '../homeContent/Vision';
import Mision from '../homeContent/Mision';
import Value from '../homeContent/Value';
import Enseñanza from '../homeContent/Enseñanza';



const { Header, Sider, Content } = Layout;

const Inicio = (props) => {
    const [collapsed, setCollapsed] = useState(false);
   
   
  const toggle = () => {
    setCollapsed(!collapsed)
  };


    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1"> <FontAwesomeIcon icon={faEye}  />
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
            // style={{
            //   margin: '24px 16px',
            //   padding: 24,
            //   minHeight: 280,
            
            // }}
          >
              <Enseñanza />
              <Vision />
              <Mision />
              <Value />

             
            
          </Content>
        </Layout>
      </Layout>
    );
  
}

export default Inicio;




















    