import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.scss'
import { Layout, Menu, Breadcrumb, Checkbox, Form, Input } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import routes from '../../router'
import * as XLSX from 'xlsx'
import { Weather } from '@uiw/react-amap-weather';
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
  const [form] = Form.useForm()
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
  useEffect(() => {
    return 
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
  return (
    <div>
      {/* <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAEqElEQVRYR82Zf2hVZRjHv88595x75+5WydrY1GLsF+gmLiEwiiRJXRGmzAXBzHkjpCzB9Vc//DXoj8g/CgmqXWdmo9wwxCg1skGCICjh5mCba0E0mY1o26V77rn3nifeMzbv3T0/7j1uuhfG4Ox5nvM5z/O8z/O87wgel3a8tgJJfQszryWgDKAymL/NNQrwKAOjRHQVsnomsLNv2MurKBclPrG6WItH9xCwlRm1uegSoY+B7wJK3lHacf12trpZAfKplUF9KtHKjLcZHMzWuJUcgSJE+Egt8B2hpv6Imy1XwFhH1TYjiU8BlLgZy/HvY5KM1/0tQ6ed9GwBmZn0YzX7GXyAGa4fkiOcKU4EJtAhddfAYSJia49bPOVT6/K0yfEvAWz38mIPOl2BwqJXqOlydK5uhmeE57Rw9bf3EG6GqSsQGnxpriczAGPh6gMG80EPXrhrFYnooD80eCjVUBqg2BBsoNsp5+SVzfDV7wEFHsoJiNkA3/4Nes8+IDJqqWvmpITG1I0zCyhKiTYZv+m0Wym4DGrTzyCScoJLFU4On0W8p9VJfyxQqFTOlKBZwGxCK5Wtg9og9s6dleg/iWRfh/lAfe4kKFiK+JUPYfxxHlDyoT7fCVLvlE5jvA/6mW2OH5gaahNQdIiYrg27FWGp7AmoDcfTjLMeQax7IxAdh7xqJ3xrdiP2zdNAMgbfY3vhq38jTT4bQFHM/WqgQnQcEzB6rKYNhvGeW9ysAIVOYqALiUvvAr4lkGsakbxxAlhSAv/2CyBfXs6A00USbXmhof0moBau6s2mt1p6UPsHHLkF/afdwH9jszBy3auQK7dAWlrjCVD07kBoqI7EVMKJmNgcrssKMNH/FRKX26x1lSACO655AjSd6PNXiqK8j5mP2NKpBfDVhUAPlANKEFT4aLooJwEjYT7jid8BNkCBpYD4ER1SVtPlExp4Yhg8MYJEbxjQp2xfTUStFG2v+hrAy3ZSysbPIa9Y7+pdLwLJP3sQv/Cak2onae1VvzBgS+BvuQHj1hXEz7V4YbDVUTZ3QCp9HLGOVfYeBHpIa68eYHC1nVQgNIjkyI+IX9w7v4DPfAy5vAFa2PbVINCgAJxyqn/3GTAiNskkMxcsiAclBVRUB8ovzjDvq22BVFzv7EGiqQULMQWXQ9n0BaQHKxxTI4sQO28SryFWnv0M0or1SPaGYYxft/DgLkjFa1xyED2uZcYroL/5Gvjfm9DPNll6UMlikwDodC3UXgHVrd+DCpZD/6EZPN6bAZkNoFmo3VqdV0DpkQ1QNhwFSbL3HBStzm1Y8Apo9tKi1ZArXrDcxSL/KL/UNgdnhwVhKBquOgzG+1afejeATq5zDXHquOU0sN4PwIyBVXyp3cg/DXgO8YtvzXOr+wRy+WbLEGeM/OaoZHNoUhvPg/IehvHXJSE1T5AEadmT4Ojf0Ls3zbVpfWgyvWhx7KSStVCe+gCSmAfncRkTI4j/+g547OqsVcdj54xUNqe7eeRMM+V6cDdDvdivPqbzcRFfHs34fFFfv6UmxqK9wEyFXNRXwGmg4hI9EXuT2Hgxm4N+qu6CXqJblZV79W+I/wFHenaZVQlPsgAAAABJRU5ErkJggg=='/> */}
      {/* <button onClick={exportExcel}>导出</button> */}
      
      {/* <img src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAEqElEQVRYR82Zf2hVZRjHv88595x75+5WydrY1GLsF+gmLiEwiiRJXRGmzAXBzHkjpCzB9Vc//DXoj8g/CgmqXWdmo9wwxCg1skGCICjh5mCba0E0mY1o26V77rn3nifeMzbv3T0/7j1uuhfG4Ox5nvM5z/O8z/O87wgel3a8tgJJfQszryWgDKAymL/NNQrwKAOjRHQVsnomsLNv2MurKBclPrG6WItH9xCwlRm1uegSoY+B7wJK3lHacf12trpZAfKplUF9KtHKjLcZHMzWuJUcgSJE+Egt8B2hpv6Imy1XwFhH1TYjiU8BlLgZy/HvY5KM1/0tQ6ed9GwBmZn0YzX7GXyAGa4fkiOcKU4EJtAhddfAYSJia49bPOVT6/K0yfEvAWz38mIPOl2BwqJXqOlydK5uhmeE57Rw9bf3EG6GqSsQGnxpriczAGPh6gMG80EPXrhrFYnooD80eCjVUBqg2BBsoNsp5+SVzfDV7wEFHsoJiNkA3/4Nes8+IDJqqWvmpITG1I0zCyhKiTYZv+m0Wym4DGrTzyCScoJLFU4On0W8p9VJfyxQqFTOlKBZwGxCK5Wtg9og9s6dleg/iWRfh/lAfe4kKFiK+JUPYfxxHlDyoT7fCVLvlE5jvA/6mW2OH5gaahNQdIiYrg27FWGp7AmoDcfTjLMeQax7IxAdh7xqJ3xrdiP2zdNAMgbfY3vhq38jTT4bQFHM/WqgQnQcEzB6rKYNhvGeW9ysAIVOYqALiUvvAr4lkGsakbxxAlhSAv/2CyBfXs6A00USbXmhof0moBau6s2mt1p6UPsHHLkF/afdwH9jszBy3auQK7dAWlrjCVD07kBoqI7EVMKJmNgcrssKMNH/FRKX26x1lSACO655AjSd6PNXiqK8j5mP2NKpBfDVhUAPlANKEFT4aLooJwEjYT7jid8BNkCBpYD4ER1SVtPlExp4Yhg8MYJEbxjQp2xfTUStFG2v+hrAy3ZSysbPIa9Y7+pdLwLJP3sQv/Cak2onae1VvzBgS+BvuQHj1hXEz7V4YbDVUTZ3QCp9HLGOVfYeBHpIa68eYHC1nVQgNIjkyI+IX9w7v4DPfAy5vAFa2PbVINCgAJxyqn/3GTAiNskkMxcsiAclBVRUB8ovzjDvq22BVFzv7EGiqQULMQWXQ9n0BaQHKxxTI4sQO28SryFWnv0M0or1SPaGYYxft/DgLkjFa1xyED2uZcYroL/5Gvjfm9DPNll6UMlikwDodC3UXgHVrd+DCpZD/6EZPN6bAZkNoFmo3VqdV0DpkQ1QNhwFSbL3HBStzm1Y8Apo9tKi1ZArXrDcxSL/KL/UNgdnhwVhKBquOgzG+1afejeATq5zDXHquOU0sN4PwIyBVXyp3cg/DXgO8YtvzXOr+wRy+WbLEGeM/OaoZHNoUhvPg/IehvHXJSE1T5AEadmT4Ojf0Ls3zbVpfWgyvWhx7KSStVCe+gCSmAfncRkTI4j/+g547OqsVcdj54xUNqe7eeRMM+V6cDdDvdivPqbzcRFfHs34fFFfv6UmxqK9wEyFXNRXwGmg4hI9EXuT2Hgxm4N+qu6CXqJblZV79W+I/wFHenaZVQlPsgAAAABJRU5ErkJggg=='}/> */}
      {/* <img src={convertImgToBase64('https://paycore-aliuat.yuantutech.com/paycore/payType/payType1.png')} /> */}
      home
    </div>
  )
}
