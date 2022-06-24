import React, {lazy} from 'react'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const Home = lazy(() => import('../pages/Home'))
const Login = lazy(() => import('../pages/Login'))
const Form = lazy(() => import('../pages/Home/Form'))
const Animal = lazy(() => import('../pages/Home/Animal'))

const routes = [
  {
    title: 'Home',
    path: '/home',
    component: Home,
    children: [
      {
        icon: UserOutlined,
        title: '表单',
        path: '/home/form',
        component: Form,
        // children: [{
        //   title: 'test111',
        //   path: '/home/test/test111',
        //   component: Home,
        // },
        // {
        //   title: 'test112',
        //   path: '/home/test/test112',
        //   // component: Home,
        // }]
      },
      {
        icon: UserOutlined,
        title: '动画',
        path: '/home/animal',
        component: Animal,
        
      }
    ]
  },
  // {
  //   title: 'Test',
  //   path: '/home/test',
  //   component: Test,
  // },
  {
    title: 'Login',
    path: '/login',
    children: [
      {
        icon: UserOutlined,
        title: 'Testlogin',
        path: '/login/test',
        component: Login,

        // component: Test,
        // children: [{
        //   title: 'test111',
        //   path: '/home/test/test111',
        //   component: Home,
        // }]
      }
    ]
  }
]
export default routes