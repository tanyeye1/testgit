import React, { useState } from 'react'
import './index.scss'
import copy from 'copy-to-clipboard';
import { Button } from 'antd';
import { JSONTree } from 'react-json-tree';
import ReactJson from 'react-json-view'
import {
  CloseOutlined
} from '@ant-design/icons';
import Dialog from 'rc-dialog'
import '../../../../node_modules/rc-dialog/assets/index.css'

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
  return (
    <div className='container' onScroll={onScroll}>
      {/* <div className='Box'>box</div>
      <div className='Box'>box</div> */}
      {/* <dialog open>
        111
      </dialog> */}
      <CloseOutlined style={{}} />
      <Dialog
        visible={visible}
        title='111'
        // style={{
        //   width: 100,
        //   height: 100
        // }}
        onClose={() => {setVisible(false)}}
      >
        ???
      </Dialog>
      <JSONTree  data={JSON.parse(obj)} hideRoot={false}  theme='twilight'   valueRenderer={(valueAsString, value, ...keyPath) => {
        console.log('???', valueAsString, value, ...keyPath)
        return valueAsString + ','
      }}/>
      {
        <ReactJson src={JSON.parse(obj)}   enableClipboard={false} name={false} displayObjectSize={false} displayDataTypes={false}/>
        // JSON.stringify(obj)
        // obj
        // ReactJson()
      }
      {
        JSON.stringify(JSON.parse(obj), null, 2)
      }
      {/* <Button onClick={fuzhi}>复制</Button> */}
    </div>
  )
}
