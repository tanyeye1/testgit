import React, { useEffect, useMemo, useState } from 'react'
import { Button } from 'antd'
import './index.scss'
import useXState from '../../../hooks/useXState'

export default function Test() {
  const [data, setData] = useState(0)
  const [count, setCount] = useState(0)
  const [test, setTest] = useXState(0)
  const [arr, setArr] = useState([1, 2])
  const add = () => {
    setData(data + 1)
  }
  const change = () => {
    setCount(count + 1)
  }
  const todo = () => {
    console.log('???')
    setTest(test + 1, () => {
      console.log('test', test);
    })
  }
  return (
    <>
      <div className='tes'>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>???</div>
        <div>?</div>
      </div>
      {
        arr.map(v => v)
      }
      <div>{test}</div>
      <Button onClick={() => {
        setArr([...arr, 0])
      }}>改变数组</Button>
      <Button onClick={todo}>test</Button>
      <Button onClick={add}>+1</Button>
      <Button onClick={change}>count</Button>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <Child data={data}/>
      <Child2/>
    </>
  )
}

const Child = React.memo(({data}) => {
  console.log('子组件');
  return <>子组件{data}</>
})
const Child2 = () => {
  console.log('子组件2');
  return <>子组件</>
}