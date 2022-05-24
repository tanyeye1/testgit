import React, { Suspense } from 'react'
import styles from './App.css'
import routes from './router'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/Home'
import { Button } from 'antd';
import Login from './pages/Login'
import { useNavigate } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
const { Header, Content, Sider } = Layout;
const items1 = routes.map((key) => ({
  key: key.path,
  label: key.title,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  let key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});



export default function App()  {
  const navigate = useNavigate()
  const clickMenu = (item, key, keyPath, domEvent) => {
    navigate(item.key)
    console.log('clickMenu', item, key, keyPath, domEvent )
  }
  const routerRender = (routes) => {
    return routes.map((i, index) => {
      return i.children?.length ? <Route path={i.path} key={index} element={<i.component />}>
        {routerRender(i.children)}
      </Route>
      : <Route path={i.path} key={i.path} element={<i.component />}/>
    })
  }
  
  return (
    <div className={styles.App}>
      <Suspense fallback={<div></div>}>
      <Layout>
      <Header className='header'>
        <div className={styles.logo} />
        <Menu theme='dark' onClick={clickMenu} mode='horizontal' defaultSelectedKeys={['/home']} items={items1} />
      </Header>
      <Layout>
        <Sider width={200}  className='site-layout-background'>
          <Menu
            mode='inline'
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={items2}
          />
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className='site-layout-background'
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
        <Routes>
          <Route path={"/"} element={<Navigate  to='/home'/>} />
          {/* {
            routes.map((i, index) => {
              return <Route key={index} path={i.path} element={<i.component />} >
                {i.children ? routerRender(i.children) : null} 
              </Route>
            })
          } */}
          {
            routerRender(routes)
          }
          <Route path={"*"} element={<div>暂无此页面</div>} />
        </Routes>
      </Suspense>
    </div>
  )
  
}

