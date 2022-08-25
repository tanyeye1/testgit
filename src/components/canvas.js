import React, { useEffect, useState } from 'react'

export default function Canvas() {
  const [start, setStart] = useState(false)
  // let ctx = null
  const [ctx, setCtx] = useState()
  useEffect(() => {
    // ctx = document.getElementById('canvas').getContext('2d')
    console.log('ctx', ctx)
    setCtx(document.getElementById('canvas').getContext('2d'))
  }, [])
  const onMouseMove = (e) => {
    if(start) {
      console.log(e, e.changedTouches[0], e.changedTouches.pageY)
      // ctx.beginPath();
      ctx.lineTo(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
      // ctx.lineTo(e.nativeEvent.offsetX - 200 , e.nativeEvent.offsetY - 170);
      ctx.stroke();
    }
    
  }
  const onClick = () => {

  }
  const onMouseDown = (e) => {
    

    ctx.beginPath();
    // ctx.moveTo(e.nativeEvent.offsetX , e.nativeEvent.offsetY)
    ctx.moveTo(e.pageX, e.pageY)
    setStart(true)
  }
  const onMouseUp = (e) => {
    console.log('onMouseUp', e, ctx)
    // ctx.lineTo(10, 10)
    // ctx.stroke()
    ctx.closePath()
    setStart(false)
  }
  return (
    <div>
      <canvas id='canvas'
        style={{
          width: '100%',
          height: '100%',
          border: '1px solid'
        }}
        onTouchMove={onMouseMove}
        onClick={onClick}
        onTouchStart={onMouseDown}
        onTouchEnd={onMouseUp}
      ></canvas>
    </div>
  )
}
