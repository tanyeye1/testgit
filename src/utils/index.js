import html2canvas from 'html2canvas';
import React from 'react';
import * as ExcelJs from 'exceljs';
import { saveAs } from 'file-saver'
import ExportJsonExcel from 'js-export-excel'
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
          done = 1
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
//导出简答表格用
export const exportExcel = () => {
  let arr = [{name: 'tyy', necessityType: '是'}]
  let option = {};  //option代表的就是excel文件
  option.fileName = `例子`;  //excel文件名称
  option.datas = [
    {
      sheetData: arr,  //excel文件中的数据源
      sheetName: '商户配置信息表',  //excel文件中sheet页名称
      sheetFilter: ['name', 'necessityType'],  //excel文件中需显示的列数据
      sheetHeader:['商户配置信息', '是否必填'],  //excel文件中每列的表头名称
      columnWidths: [10, 10],
    }
  ]
  let toExcel = new ExportJsonExcel(option);  //生成excel文件
  toExcel.saveExcel();  //下载excel文件
}
//导出复杂的表格 
export const toexcel = () => {
  const workbook = new ExcelJs.Workbook();
  // 添加sheet
  const worksheet = workbook.addWorksheet('商户配置信息表');
  // 设置 sheet 的默认行高
  worksheet.properties.defaultRowHeight = 20;
  // 设置列
  worksheet.columns = [{
    header: '商户配置信息',
    key: 'name',
    width: 25
  },
  {
    header: '是否必填',
    key: 'age',
    width: 20
  }
  ];
  // 添加行
  worksheet.addRows([
    {
        "code": "fundCustodian",
        "name": "资金托管方",
        "tip": "请输入资金托管方(fundCustodian)",
        "necessityType": 2
    },
    {
        "code": "fundCustodianName",
        "name": "资金托管方名称",
        "tip": "请输入资金托管方名称(fundCustodianName)",
        "necessityType": 2
    },
    {
        "code": "remarks",
        "name": "备注",
        "tip": "请输入备注(remarks)",
        "necessityType": 2
    },
    {
        "code": "mchId",
        "name": "商户号",
        "thirdCode": "mchId",
        "thirdName": "商户号",
        "defaultValue": "",
        "tip": "请输入商户号(mchId)",
        "necessityType": 1
    },
    {
        "code": "appId",
        "name": "应用编号",
        "thirdCode": "appId",
        "thirdName": "应用编号",
        "defaultValue": "",
        "tip": "请输入应用编号(appId)",
        "necessityType": 2
    },
    {
        "code": "signType",
        "name": "签名方式",
        "thirdCode": "signType",
        "thirdName": "签名方式",
        "defaultValue": "RSA2",
        "tip": "请输入签名方式(signType)",
        "necessityType": 2
    },
    {
        "code": "certPassword",
        "name": "证书密码",
        "tip": "请输入证书密码(certPassword)！",
        "necessityType": 2
    },
    {
        "code": "privateRsa",
        "name": "商户私钥",
        "tip": "请输入商户私钥(privateRsa)",
        "necessityType": 2
    },
    {
        "code": "providerPublicRsa",
        "name": "平台公钥",
        "tip": "请输入平台公钥(providerPublicRsa)",
        "necessityType": 2
    },
    {
        "code": "gateway",
        "name": "三方支付机构网关地址",
        "tip": "请输入三方支付机构网关地址(gateway)",
        "necessityType": 2
    }
]);
  let headerRow = worksheet.getRow(1);
  headerRow.eachCell((cell, colNum) => {
    cell.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: {argb: 'd8d8d8'},
    }
    
  })
  worksheet.pageSetup.margins = {
    left: 0.7, right: 0.7,
    top: 0.75, bottom: 0.75,
    header: 0.3, footer: 0.3
  };
  // 导出excel
  workbook.xlsx.writeBuffer().then((data => {
    const blob = new Blob([data], {type: ''});
    saveAs(blob, 'simple-demo.xlsx');
  }))
}

// 金额格式化
export const toThousands = (num, int) => {
  num = (num || 0).toString();
  let negative = false;
  // console.log(num.substring(0, 1))
  if (num.substring(0, 1) == "-") {
    num = num.substring(1, num.length);
    // console.log(num)
    negative = true;
  }
  let number = 0,
    floatNum = "",
    intNum = "";
  // 判断是否有小数位，有则截取小数点后的数字
  if (num.indexOf(".") > 0) {
    number = num.indexOf("."); // 获取小数点出现的位置
    floatNum = num.substr(number); // 截取arr.substr(form, length)
    intNum = num.substring(0, number); // 截取arr.substring(start, end)
  } else {
    // floatNum = ".00";
    if (int) floatNum = "";
    intNum = num;
  }
  let result = [],
    counter = 0;
  intNum = intNum.split("");
  // 利用3的倍数，向数组插入','
  for (let i = intNum.length - 1; i >= 0; i--) {
    counter++;
    result.unshift(intNum[i]);
    if (!(counter % 3) && i != 0) {
      result.unshift(",");
    }
  }
  if (negative) return "-" + result.join("") + floatNum || "";
  return result.join("") + floatNum || "";
};

//数字转汉语
var chnNumChar = ["零","一","二","三","四","五","六","七","八","九"];
var chnUnitSection = ["","万","亿","万亿","亿亿"];
var chnUnitChar = ["","十","百","千"];

function sectionToChinese (num) {
  let count = 0 , str , chnstr = '', zero = false
  while(num > 0) {
    let v = num % 10
    if(v === 0) {
      if(zero) {
        zero = false
        chnstr = chnNumChar[v] + chnstr
      }
    } else {
      zero = true
      str = chnNumChar[v]
      str += chnUnitChar[count]
      chnstr = str + chnstr
    }
    
    count++
    num = Math.floor(num/10)
  } 
  return chnstr
}
export function trans (num) {
  let strIns, chnStr = '', unitPos = 0, needZero = false
  num = Math.floor(num)
  if(num === 0) {
    return chnNumChar[num]
  }
  while(num > 0) {
    let section = num % 10000
    if(needZero) {
      chnStr = chnNumChar[0] + chnStr
    }
    strIns = sectionToChinese(section)
    strIns += (section !== 0) ? chnUnitSection[unitPos] : chnUnitSection[0];
    chnStr = strIns + chnStr 
    needZero = (section < 1000) && (section > 0)
    num = Math.floor(num / 10000)
    unitPos ++
  }
  return chnStr
}