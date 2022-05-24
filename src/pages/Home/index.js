import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.scss'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import routes from '../../router'
import * as XLSX from 'xlsx'
import ExportJsonExcel from 'js-export-excel'
const { Header, Content, Sider } = Layout;
const items1 = routes.map((key) => ({
  key: key.path,
  label: key.title,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  let key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});
export default () => {
  const navigate = useNavigate()
  const [data, setData] = useState([
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
])
  // 'https://paycore-aliuat.yuantutech.com/paycore/payType/payType1.png'
  // 'https://paycore-aliuat.yuantutech.com/paycore/payType/payType_default.png'
  useEffect(() => {
    handleImg('https://paycore-aliuat.yuantutech.com/paycore/payType/payType1.png')
    console.log('data', data)
    // handle('https://paycore-aliuat.yuantutech.com/paycore/payType/payType4.png')
  })
  const exportExcel = () => {
    console.log('lll', data)
    let option = {};  //option代表的就是excel文件
    option.fileName = '支付渠道_支付类型_供应商';  //excel文件名称
    option.datas = [
      {
        sheetData: data,  //excel文件中的数据源
        sheetName: '商户配置信息表',  //excel文件中sheet页名称
        sheetFilter: ['name', 'necessityType'],  //excel文件中需显示的列数据
        sheetHeader:['商户配置信息', '是否必填'], // TODO是否必填 //excel文件中每列的表头名称
        columnWidths: [10, 10],
      }
    ]
    let toExcel = new ExportJsonExcel(option);  //生成excel文件
    toExcel.saveExcel();  //下载excel文件
  }
  const handleImg = (src) => {
    var imagepath = src
    let img = new Image();
     img.setAttribute('crossOrigin', 'anonymous');
     //网络图片地址
    //  img.src = 'http://paycore-aliyun.yuantutech.com/paycore/payType/payType1.png';
    img.src = src
     img.onload = () => {
         var canvas = document.createElement("canvas");
     canvas.width = 60;
     canvas.height = 60;
     var ctx = canvas.getContext("2d");
     ctx.drawImage(img, 0, 0, img.width, img.height);
     var ext = img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase();
     var dataURL = canvas.toDataURL("image/" + ext);
      // console.log(dataURL);
      img.src = dataURL
      // console.log('img', img)
     }
    //  console.log('img', img)
    // var xmlHttp ;
    // if (window.XMLHttpRequest){
    //     xmlHttp = new XMLHttpRequest();
    // } 
    // xmlHttp.open("Get",imagepath,false);
    // xmlHttp.send();
    // if(xmlHttp.status==404){
    //     console.log('图片不存在')
    //     //默认图片
    //     return 'https://payboss-aliuat.yuantutech.com/paycore/payType/payType999.png'
    // }else{
    //   console.log('图片存在')
    //   return src
    // }
    console.log(imagepath)
  }
  return (
    <div>
      回退版本
      {/* <button onClick={exportExcel}>导出</button> */}
      {/* <img src={'data:image/gif;base64,http://paycore-qduat.yuantutech.com/paycore/payType/payType0.png'}/> */}
      回退版本2???
      <div>1</div>
      <div>2</div>
    </div>
  )
}
