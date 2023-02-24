import React, { useEffect, useState } from 'react'
import './index.scss'
import copy from 'copy-to-clipboard';
import { Button,Modal } from 'raind';
import { JSONTree } from 'react-json-tree';
import ReactJson from 'react-json-view'
import {
  CloseOutlined
} from '@ant-design/icons';
import Dialog from 'rc-dialog'
import '../../../../node_modules/rc-dialog/assets/index.css'
import { resolveFile, trans } from '@/utils';
import axios from 'axios';
import mockjs from 'mockjs';

export default function index() {
  const [visible, setVisible] = useState(true)
  const theme = {
    scheme: 'monokai',
    author: 'wimer hazenberg (http://www.monokai.nl)',
    base00: '#272822',
    base01: '#383830',
    base02: '#49483e',
    base03: '#75715e',
    base04: '#a59f85', 
    base05: '#f8f8f2',
    base06: '#f5f4f1',
    base07: '#f9f8f5',
    base08: '#f92672',
    base09: '#fd971f',
    base0A: '#f4bf75',
    base0B: '#a6e22e',
    base0C: '#a1efe4',
    base0D: '#66d9ef',
    base0E: '#ae81ff',
    base0F: '#cc6633',
  };
  const obj = "{\"cardNo\":\"9980071521\",\"cardType\":2,\"deviceInfo\":\"\",\"deviceMac\":\"\",\"extend\":\"\",\"extendMap\":{\"renamType\":\"\"},\"flowId\":\"35\",\"hospCode\":\"000707\",\"hospitalId\":707,\"idNo\":\"\",\"operId\":\"\",\"optType\":1,\"patientId\":\"\",\"patientName\":\"\",\"phone\":\"\",\"platformId\":\"\",\"renamChannel\":\"\",\"service\":\"yuantu.wap.query.patient.info\",\"sign\":\"5208dda06890d8e7603397a204404087\",\"signType\":\"reg\",\"sourceCode\":\"apiRunnerCode\",\"terminalNo\":\"DDJ001\",\"tradeTime\":\"\",\"userId\":\"\"}"
  console.log('111', JSON.stringify(JSON.parse(obj), null, 2))
  const onScroll = (e) => {
    console.log('e', e)
  }
  const fuzhi = () => {
    copy('1212')
  }
  console.log('111', trans(100))
  useEffect(() => {
    // axios({
    //   method: 'get',
    //   url: 'https://mock.mengxuegu.com/mock/63d7348c1b8291742151be3d/ajaxTest/addnew',

    // }).then((res) => {
    //   console.log('res', res.data)
    // })
    mockjs.mock('http://api.com', {
            "name|3": "ABC",    // 属性值重复3次
            "age|20-30": 1      // 20~30随机数，1用来确定类型
        });
        mockjs.setup({
          timeout: '200-600'
      })
        var xhr = new XMLHttpRequest();
        xhr.open("get", "http://api.com", true);
        xhr.send(null);

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log(xhr.responseText);
            }
        }
  }, [])
  return (
    <div className='container' onScroll={onScroll} >
      <Button type="primary" onClick={()=>{
        Modal.info({
          title:'tangousb',
          content:<> 
          <p>
            yalei
          </p>
           </>
        })
      }} >按钮</Button>
      <div style={{width: 100, height: 100}}></div>
      <iframe width={400} height={400} src='https://juejin.cn/frontend?sort=monthly_hottest' />
      {/* <div className='Box'>box</div>
      <div className='Box'>box</div> */}
      {/* <dialog open>
        111
      </dialog> */}
      {/* <input type='file' id="excel-file" onChange={resolveFile} /> */}
      <CloseOutlined style={{}} />
      {/* <Dialog
        visible={visible}
        title='111'
        // style={{
        //   width: 100,
        //   height: 100
        // }}
        onClose={() => {setVisible(false)}}
      >
        ???
      </Dialog> */}
      <JSONTree  data={JSON.parse(obj)} hideRoot={false}  theme='twilight'   valueRenderer={(valueAsString, value, ...keyPath) => {
        console.log('???', valueAsString, value, ...keyPath)
        return valueAsString + ','
      }}/>
      {
        // <ReactJson src={JSON.parse(obj)}   enableClipboard={false} name={false} displayObjectSize={false} displayDataTypes={false}/>
        // JSON.stringify(obj)
        // obj
        // ReactJson()
      }
      
      {/* <Button onClick={fuzhi}>复制</Button> */}
    </div>
  )
}
