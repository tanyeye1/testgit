import React, {useEffect, useMemo, useState} from 'react'
// import { motion, useAnimation } from "framer-motion"
import { motion } from "framer-motion-3d"
import Icon from "@/components/icon";
import current from "@/common/images/look.svg"
import { useSelector, useDispatch } from 'react-redux';
// import current from "@/common/images/payType48.png"
import * as XLSX from 'xlsx'
import { saveAs } from 'file-saver'
import { Button } from 'antd';
import * as ExcelJs from 'exceljs';

export default function Animal() {
  // const controls = useAnimation()
  const count = useSelector(state => state)
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  let test = null
  useEffect(() => {
    // console.log('动画', count, dispatch({type: 'increment', data: 10}))
    // dispatch('INCREMENT', 2)
    
    // console.log('count', count)
    // controls.start({
    //   x: '300px',
    //   backgroundColor: "#f00",
    //   transition: { duration: 3 },
    // })
    // test = document.getElementById('c').getContext('2d')
    var canvas = document.getElementById('c');
    if (canvas.getContext){
      var ctx = canvas.getContext('2d');
      console.log('canvas', ctx)
      ctx.beginPath();
      ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // 绘制
      ctx.moveTo(110, 75);
      ctx.arc(75, 75, 35, 0, Math.PI, false);   // 口 (顺时针)
      ctx.moveTo(65, 65);
      ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // 左眼
      ctx.moveTo(95, 65);
      ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // 右眼
      ctx.stroke();
    }
  }, [])
  const res = () => {
    return 10
  }
  const onTouchStart = (e) => {
    console.log('onTouchStart', e)
  } 
  const onTouchMove = (e) => {
    console.log('onTouchMove', e)
  } 
  const onTouchEnd = (e) => {
    console.log('onTouchEnd', e)
  } 
  const onMouseMove = (e) => {
    // if(show) {
      test = document.getElementById('c').getContext('2d')
      console.log('test', test)
      test.beginPath();
      // test.moveTo(20,20);
      // test.lineTo(20,100);
      // test.lineTo(70,100);
      test.moveTo(e.movementX, e.movementY)
      test.lineTo(e.movementX, e.movementY)
      test.stroke();
    // }
   
    console.log('onMouseMove', e)
  }
  const onMouseDown = (e) => {
    console.log('onMouseDown', e, test)
    setShow(true)
  }
  const onMouseUp = (e) => {
    console.log('onMouseUp', e)
    setShow(false)
  }
  return (
    <div>
      {
        count.test
      }
      <button onClick={() => {dispatch({type: 'increment', data: 10})}}>+10</button>
      {/* <motion.div
        style={{width: 100, height: 100, backgroundColor: 'pink'}}
        // animate={{ rotate: 360, }}
        // transition={{ duration: 2, ease: "easeOut" }}
        cx={500}
        animate={{ cx: [null, 100, 200] }}
        transition={{ duration: 3, times: [0, 0.2, 1] }}
      /> */}
      {/* <motion.div
        style={{width: 100, height: 100, backgroundColor: 'pink'}} 
        // animate={{ x: [0, 100, 0] }}
        animate={controls}
      />
      <motion.circle  
        style={{width: 100, height: 100, backgroundColor: 'pink'}} 
        cx={500} animate={{ cx: [null, 100] }}
      /> */}
      {/* <motion.pointLight animate={{ x: 2 }} /> */}
      <Icon name="current" />
      <img src={current}/>
      <canvas id='c' onMouseDown={onMouseDown}  onMouseMove={onMouseMove} onMouseUp={onMouseUp} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} style={{width: 400, height: 400, border: '1px solid'}}></canvas>
    </div>
  )
}
