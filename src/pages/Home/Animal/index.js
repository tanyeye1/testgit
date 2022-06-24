import React, {useEffect} from 'react'
// import { motion, useAnimation } from "framer-motion"
import { motion } from "framer-motion-3d"
import Icon from "@/components/icon";
import current from "@/common/images/look.svg"
import { useSelector, useDispatch } from 'react-redux';
// import current from "@/common/images/payType48.png"

export default function Animal() {
  // const controls = useAnimation()
  const count = useSelector(state => state)
  const dispatch = useDispatch()
useEffect(() => {
  // console.log('动画', count, dispatch({type: 'increment', data: 10}))
  // dispatch('INCREMENT', 2)
  
  // console.log('count', count)
  // controls.start({
  //   x: '300px',
  //   backgroundColor: "#f00",
  //   transition: { duration: 3 },
  // })
}, [])
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
    </div>
  )
}
