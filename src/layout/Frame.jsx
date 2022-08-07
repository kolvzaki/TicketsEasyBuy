import { Layout, Menu } from 'antd';
import React from 'react';
import Movie from '../pages/Movie';
import './frame.css';
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';

const { Content, Footer } = Layout;

function Frame() {
  const menuItems = [
    {
      label: 'Home',
      key: 'home',
      icon: <MailOutlined />
    },
    {
      label: 'About',
      key: 'about',
      icon: <AppstoreOutlined />
    }
  ];

  return (
    <Layout>
      <header className='header'>
        <div className='logo'><img className='logo-pic' src='logo.png' alt='logo' />Ticket Easy Buy</div>
        <Menu mode="horizontal" defaultSelectedKeys={['home']} items={menuItems} />
      </header>

      <Content className='content' style={{ padding: '0 50px' }}>
        <div className="site-layout-background" style={{ padding: 20, minHeight: 400, marginTop: 500 }}>
          <Movie />
          <Movie />
          <Movie />
          <Movie />
        </div>
      </Content>

      <Footer style={{ textAlign: 'center', }}>
        tickets-easy-buy
      </Footer>
    </Layout>
  );
}

export default Frame;

