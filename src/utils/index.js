import html2canvas from 'html2canvas';
import React from 'react';
//节流
export const throttle = (fnc, delay) => {
  let done = 1;		//记录是否可执行
  return  (...args) => {
      if(!done) {
        return 
      }
      done = 0		//执行后置为不可执行
      setTimeout(()=>{
          fnc(...args)		//计时结束后再置为可执行
          done =1
      }, 1000)
  }
}
//防抖
export const debounce = (fn, delay) => {
  let timer
  return (...args) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn(...args)
    }, 500)
  }
}

//判断静态图片是否存在
export const handleImg = (src) => {
  var imagepath = src
  var xmlHttp ;
  if (window.XMLHttpRequest){
      xmlHttp = new XMLHttpRequest();
  } 
  xmlHttp.open("Get",imagepath,false);
  xmlHttp.send();
  if(xmlHttp.status==404){
      console.log('图片不存在')
      //默认图片
      return 'https://paycore-aliuat.yuantutech.com/paycore/payType/payType_default.png'
  }else{
    console.log('图片存在')
    return src
  }
}

//将指定的区域生产图片并下载
const getImg = () =>  {
  html2canvas(document.querySelector('.box'), {useCORS: true}).then(canvas => {
    var url = canvas.toDataURL('image/png')
    var a = document.createElement('a') // 创建一个a节点插入的document
    var event = new MouseEvent('click') // 模拟鼠标click点击事件
    a.download = '下载的html图片' // 设置a节点的download属性值
    a.href = url // 将图片的src赋值给a节点的href
    a.dispatchEvent(event) // 触发鼠标点击事件
  })
}

//图片url转base64
const convertImgToBase64 = (url) => {
  let canvas = document.createElement('canvas'),
  ctx = canvas.getContext('2d'),
  img = new Image();
  img.src = url;
  // img.crossOrigin = 'anonymous';//解决Canvas.toDataURL 图片跨域问题
  img.setAttribute('crossOrigin', 'anonymous');
  img.onload = () => {
    canvas.height = img.height;
    canvas.width = img.width;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    let ext = img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase(); // 获取到图片的格式
    let dataURL = canvas.toDataURL("image/" + ext); // 得到base64 编码的 dataURL
    sessionStorage.setItem(url, dataURL)
  }
}

//改变
export const makeItem = (arr) => {
  return arr.map(v => {
    // if(v.children) makeItem(v.children)
    return ({
      key: v.path,
      label: v.title,
      icon: v.icon && React.createElement(v.icon),
      children: v.children?.length > 0 && makeItem(v.children)
    })
  })
}