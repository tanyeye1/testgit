import React, { Suspense, useEffect, useState } from 'react'
import styles from './App.css'
import routes from './router'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/Home'
import { Button } from 'antd';
import Test from './pages/Home/Form'
import Login from './pages/Login'
import { useNavigate } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import {makeItem} from './utils'
const { Header, Content, Sider } = Layout;
const items1 = routes.map((key) => ({
  key: key.path,
  label: key.title,
}));
const rootSubmenuKeys = routes.map(v => {
  return v.children.length > 0 && v.children.map(v => v.path) 
}).flat(Infinity)
export default function App()  {
  const navigate = useNavigate()
  const [sideItem, setSideItem] = useState(makeItem(routes[0].children))
  const [openKeys, setOpenKeys] = useState(['/home/test'])
  const [selectedKeys, setSelectedKeys] = useState(null)
  useEffect(() => {
    console.log('???', makeItem(routes[0].children), arrFloat(routes), routes.map(v => {
      return v.children.length > 0 && v.children.map(v => v.path) 
    }))
    navigate(arrFloat(routes)[0])
  }, [])
  useEffect(() => {
    console.log('sideItem', sideItem)
    sideItem.length > 0 && navigate(arrFloat(sideItem)[0])
    
  }, [sideItem])
  const clickMenu = (item, key, keyPath, domEvent) => {
    navigate(item.key)
    console.log('clickMenu', item, key, keyPath, domEvent, routes.filter(v => v.path === item.key) )
    let i = routes.filter(v => v.path === item.key)
    if(i[0].children?.length > 0) {
      console.log('???', i, makeItem(i[0].children))
      setSideItem(makeItem(i[0].children))
      setSelectedKeys()
    } else {
      setSideItem([])
    }
  }
  const find = (arr) => {
    return arr.map(v => {
      return v.children?.length > 0 ? find(v.children) : (v.key || v.path)
    })
  }
  const arrFloat  = (arr) => {
    return find(arr).flat(Infinity)
  }
  const routerRender = (routes) => {
    return routes.map((i, index) => {
      if( i.children?.length > 0) {}
      return i.children?.length > 0 ? 
      (<>
          <Route path={i.path} key={i.path} element={i.component && <i.component />}/>
          {
            routerRender(i.children)
          }
      </>
      ) 
      : 
      <Route path={i.path} key={i.path} element={i.component && <i.component />}/>
    })
  }
  const clickSideMenu = (i) => {
    console.log('sideMenu', i)
    navigate(i.key)
    setSelectedKeys(i.key)
  }
  // const onOpenChange = (openKeys) => {
  //   console.log('openKeys', openKeys)
  //   setOpenKeys(openKeys)
  // }
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);

    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  const select = (i) => {
    console.log('select', i)
  }
  return (
    // <>
    // ???
    // </>
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
            // defaultSelectedKeys={[selectedKeys || arrFloat(sideItem)[0]]}
            // defaultOpenKeys={[sideItem[0]?.key]}
            selectedKeys={[selectedKeys || arrFloat(sideItem)[0]]}
            openKeys={openKeys}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={sideItem}
            onClick={clickSideMenu}
            onOpenChange={onOpenChange}
            onSelect={select}
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
          </Breadcrumb>
          <Content
            className='site-layout-background'
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
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
              {/* <Route path={'/home'} element={<Home/>}>

              </Route>
              <Route path={'/home/test'} element={<Test/>}>

              </Route> */}
              <Route path={"*"} element={<div>暂无此页面</div>} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Layout>
        
      </Suspense>
    </div>
  )
  
}

