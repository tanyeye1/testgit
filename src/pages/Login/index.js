import React, { useEffect, useState } from 'react'

import { Layout } from 'antd';
import { Chart } from '@antv/g2';
import './index.css'
import html2canvas from 'html2canvas';
import QRCode from 'qrcode.react';
import CryptoJS from 'crypto-js'
import { connect } from 'react-redux'
import back from './back.png'



const { Header, Footer, Sider, Content } = Layout;

export default function Login() {
  const [num, setNum] = useState(0)
  // useEffect(() => {
  //   const data = [
  //     { year: '1951 年', sales: 38 },
  //     { year: '1952 年', sales: 52 },
  //     { year: '1956 年', sales: 61 },
  //     { year: '1957 年', sales: 145 },
  //     { year: '1958 年', sales: 48 },
  //     { year: '1959 年', sales: 38 },
  //     { year: '1960 年', sales: 38 },
  //     { year: '1962 年', sales: 38 },
  //   ];
  //   const chart = new Chart({
  //     container: 'container',
  //     autoFit: true,
  //     height: 500,
  //   });
    
  //   chart.data(data);
  //   chart.scale('sales', {
  //     nice: true,
  //   });
    
  //   chart.tooltip({
  //     showMarkers: false
  //   });
  //   chart.interaction('active-region');
    
  //   chart.line().position('year*sales');
    
  //   chart.render();
  // })
  useEffect(() => {
    // takeScreenshot()
    // getImg()
   
  })
  function takeScreenshot() {
    html2canvas(document.getElementById('box'), {useCORS:true, allowTaint: true,}).then(canvas => {
        convertCanvasToImg(canvas)
    });
}
 
//转换图片格式
function convertCanvasToImg(canvas) {
    // canvas base64 转 blob
    var myBlob = dataURLtoBlob(canvas.toDataURL('img/png', 0.92))
    console.log('111', myBlob)
    // blob转URL对象
    let myUrl = URL.createObjectURL(myBlob)
    console.log('2222', myUrl)
    // 创建a标签，下载图片
    // downImg(myUrl)
}
 
//base64 转 blob
function dataURLtoBlob(dataurl) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
}
 
//下载图片 filename是图片名称
function downImg(url) {
    // 创建a标签 并设置其相关属性，最后触发其点击事件
    let a = document.createElement("a")
    let clickEvent = document.createEvent("MouseEvents");
    a.setAttribute("href", url)
    a.setAttribute("download", "filename")
    a.setAttribute("target", '_blank')
    clickEvent.initEvent('click', true, true)
    a.dispatchEvent(clickEvent);
}
    const getImg = () =>  {
      window.pageYOffset = 0;
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      setTimeout(() => {
        html2canvas(document.querySelector('.box'), { allowTaint: true,}).then(canvas => {
          var url = canvas.toDataURL('image/png')
          var a = document.createElement('a') // 创建一个a节点插入的document
          var event = new MouseEvent('click') // 模拟鼠标click点击事件
          a.download = '下载的html图片' // 设置a节点的download属性值
          a.href = url // 将图片的src赋值给a节点的href
          a.dispatchEvent(event) // 触发鼠标点击事件
        })
      }, 500)
      
    }
    function handleDownLoadQRCode(){
      //先获取要下载的二维码
        let Qr=document.getElementById('qrCode');
        //把canvas的数据改成base64的格式
        let canvasUrl = Qr.toDataURL('image/png')
        let myBlob = dataURLtoBlob(canvasUrl);
        console.log('111', myBlob)
        let myUrl = URL.createObjectURL(myBlob) //创建blob下载地址
        // downloadFile(myUrl, '自定义下载')
    }
    
      //图片下载
    function  downloadFile(url, name){
      //创建a标签用于下载
        let a = document.createElement('a');
        a.setAttribute('href', url);
        a.setAttribute('download', name);
        a.setAttribute('target', '_blank');
        let clickEvent = document.createEvent('MouseEvents');
        clickEvent.initEvent('click', true, true); //模拟点击
        a.dispatchEvent(clickEvent);
    }
    
    //base64转文件
    function dataURLtoBlob(dataurl){
        let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
    }

  return <>
   <div id='container'></div>
   <div className='box' id='box'> 
   ???
   <img src={localStorage.getItem('https://paycore-aliuat.yuantutech.com/paycore/payType/payType1.png')}></img>
     {/* <img src={back}/>
     <QRCode value='xxx'/>
     <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAEqElEQVRYR82Zf2hVZRjHv88595x75+5WydrY1GLsF+gmLiEwiiRJXRGmzAXBzHkjpCzB9Vc//DXoj8g/CgmqXWdmo9wwxCg1skGCICjh5mCba0E0mY1o26V77rn3nifeMzbv3T0/7j1uuhfG4Ox5nvM5z/O8z/O87wgel3a8tgJJfQszryWgDKAymL/NNQrwKAOjRHQVsnomsLNv2MurKBclPrG6WItH9xCwlRm1uegSoY+B7wJK3lHacf12trpZAfKplUF9KtHKjLcZHMzWuJUcgSJE+Egt8B2hpv6Imy1XwFhH1TYjiU8BlLgZy/HvY5KM1/0tQ6ed9GwBmZn0YzX7GXyAGa4fkiOcKU4EJtAhddfAYSJia49bPOVT6/K0yfEvAWz38mIPOl2BwqJXqOlydK5uhmeE57Rw9bf3EG6GqSsQGnxpriczAGPh6gMG80EPXrhrFYnooD80eCjVUBqg2BBsoNsp5+SVzfDV7wEFHsoJiNkA3/4Nes8+IDJqqWvmpITG1I0zCyhKiTYZv+m0Wym4DGrTzyCScoJLFU4On0W8p9VJfyxQqFTOlKBZwGxCK5Wtg9og9s6dleg/iWRfh/lAfe4kKFiK+JUPYfxxHlDyoT7fCVLvlE5jvA/6mW2OH5gaahNQdIiYrg27FWGp7AmoDcfTjLMeQax7IxAdh7xqJ3xrdiP2zdNAMgbfY3vhq38jTT4bQFHM/WqgQnQcEzB6rKYNhvGeW9ysAIVOYqALiUvvAr4lkGsakbxxAlhSAv/2CyBfXs6A00USbXmhof0moBau6s2mt1p6UPsHHLkF/afdwH9jszBy3auQK7dAWlrjCVD07kBoqI7EVMKJmNgcrssKMNH/FRKX26x1lSACO655AjSd6PNXiqK8j5mP2NKpBfDVhUAPlANKEFT4aLooJwEjYT7jid8BNkCBpYD4ER1SVtPlExp4Yhg8MYJEbxjQp2xfTUStFG2v+hrAy3ZSysbPIa9Y7+pdLwLJP3sQv/Cak2onae1VvzBgS+BvuQHj1hXEz7V4YbDVUTZ3QCp9HLGOVfYeBHpIa68eYHC1nVQgNIjkyI+IX9w7v4DPfAy5vAFa2PbVINCgAJxyqn/3GTAiNskkMxcsiAclBVRUB8ovzjDvq22BVFzv7EGiqQULMQWXQ9n0BaQHKxxTI4sQO28SryFWnv0M0or1SPaGYYxft/DgLkjFa1xyED2uZcYroL/5Gvjfm9DPNll6UMlikwDodC3UXgHVrd+DCpZD/6EZPN6bAZkNoFmo3VqdV0DpkQ1QNhwFSbL3HBStzm1Y8Apo9tKi1ZArXrDcxSL/KL/UNgdnhwVhKBquOgzG+1afejeATq5zDXHquOU0sN4PwIyBVXyp3cg/DXgO8YtvzXOr+wRy+WbLEGeM/OaoZHNoUhvPg/IehvHXJSE1T5AEadmT4Ojf0Ls3zbVpfWgyvWhx7KSStVCe+gCSmAfncRkTI4j/+g547OqsVcdj54xUNqe7eeRMM+V6cDdDvdivPqbzcRFfHs34fFFfv6UmxqK9wEyFXNRXwGmg4hI9EXuT2Hgxm4N+qu6CXqJblZV79W+I/wFHenaZVQlPsgAAAABJRU5ErkJggg=='/> */}
    </div>
  </>
} 
