import React, { useCallback, useEffect, useMemo, useState } from 'react'

import { Button, Layout } from 'antd';
import { Chart } from '@antv/g2';
import './index.css'
import html2canvas from 'html2canvas';
import QRCode from 'qrcode.react';
import CryptoJS from 'crypto-js'
import { connect } from 'react-redux'
import back from './back.png'
import Number from '@/components/numberJump';



const { Header, Footer, Sider, Content } = Layout;

export default function Login() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const btn = useCallback(() => {
    console.log('???', count1, count2)
  }, [count1])
  const add = useMemo(() => {
    console.log('111', count1)
    return count1
  } , [count1])
  // const add = () => {
  //   console.log('111', count1)
  //   return count1
  // }
  const a = useMemo(() => <Child count={count1} />, [count1])
  const b = useMemo(() => <Child2 count={count2} />, [count2])
  return <>
  <div>count: {count1} {count2}</div>
  <>???{add}{a}</>
  <Button onClick={() => setCount1(count1+1)}>count1</Button>
  <Button onClick={() => setCount2(count2+1)}>count2</Button>
  <Button onClick={btn}>触发</Button>
  {/* <Child count={count1} />
  <Child2 count={count2}/> */}
  {a}
  {b}
   <Number />
  </>
} 

const Child = ({count}) => {
  // const onChange = (count) => {
  //   console.log('???')
  //   return count
  // }
  // const a = useMemo(() => onChange(count), [count]) 
  // useEffect(() => {
  //   console.log('???')
  // }, [count])
  console.log('???A', count)
  return <div>A: {count}</div>
}

const Child2 = ({count}) => {
  console.log('???B', count)
  return <div>B: {count}</div>
}