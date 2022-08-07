import { Breadcrumb, Layout, Menu, Image } from 'antd';
import React from 'react';
import Movie from '../pages/Movie';
import './frame.css';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

function Frame() {
  const menuItems = [
    {
      label: 'Navigation One',
      key: 'mail',
      icon: <MailOutlined />
    },
    {
      label: 'Navigation Two',
      key: 'app',
      icon: <AppstoreOutlined />
    },
    {
      label: 'Navigation Three',
      key: 'SubMenu',
      icon: <SettingOutlined />
    }
  ];

  return (
    <Layout>
      <div className='header'>
        <div className="logo"><img className="logo-pic" src='logo.png' alt='logo' />ticket-easy-buy</div>
        <Menu className='menu' mode="horizontal" defaultSelectedKeys={['mail']} items={menuItems} />
      </div>

      <Content
        className="content"
        style={{
          padding: '0 50px'
        }}
      >
        <div
          className="site-layout-background"
          style={{
            padding: 24,
            minHeight: 380,
            marginTop: 500
          }}
        >
          <Movie />
          <Movie />
          <Movie />
          <Movie />
        </div>

      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        tickets-easy-buy
      </Footer>
    </Layout>
  );
}

export default Frame;

