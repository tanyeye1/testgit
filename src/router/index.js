import React, {lazy} from 'react'
const Home = lazy(() => import('../pages/Home'))
const Login = lazy(() => import('../pages/Login'))
const Test = lazy(() => import('../pages/Home/Test'))


const routes = [
  {
    title: 'Home',
    path: '/home',
    component: Home,
    children: [
      {
        title: 'Test',
        path: '/home/test',
        component: Test,
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
    component: Login
  }
]
export default routes