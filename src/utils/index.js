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