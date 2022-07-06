import React, { useState } from 'react'
import {Form, Table, Input, Select, Button, DatePicker} from 'antd'
import styles from  './formTable.module.scss'
import moment from 'moment';
import ModalShow from './modal';
const {Option} = Select
const {RangePicker} = DatePicker

export default function FormTable() {
  const [form] = Form.useForm()
  const [data, setData] = useState([
    {
      id: '1'
    }
  ])
  const onFinish = (value) => {
    console.log('value', value)
    const {time} = value
    
    console.log('???', moment(time[0]).format('YYYY-MM-DD'))
  }
  const reset = () => {
    form.resetFields()
  }
  const disabledDate = (current) => {
    return current && current > moment().endOf('day')
  }
  const columns = [
    {
      title: '记录ID',
      dataIndex: 'id', 
      // render: (text) => {
      //   return 
      // }
    },
    {
      title: '会诊机构',
      dataIndex: 'name', 
      // render: (text) => {
      //   return 
      // }
    },
    {
      title: '状态',
      dataIndex: 'status', 
      // render: (text) => {
      //   return 
      // }
    },
    {
      title: '患者信息',
      dataIndex: 'patient', 
      // render: (text) => {
      //   return 
      // }
    },
    {
      title: '期望会诊时间',
      dataIndex: 'time', 
      // render: (text) => {
      //   return 
      // }
    },
    {
      title: '会诊类型',
      dataIndex: 'type', 
      // render: (text) => {
      //   return 
      // }
    },
    {
      title: '其他信息',
      dataIndex: 'infomation', 
      // render: (text) => {
      //   return 
      // }
    },
    {
      title: '操作',
      render: (text) => {
        return <div className={styles.operation} onClick={() => {}}>操作</div>
      }
    },
  ]
  
  const formDate = [
    {
      label: '时间',
      name: 'time',
      render: <RangePicker
                disabledDate={disabledDate}
              />
    },
    {
      label: '类型名称',
      name: 'name',
      render: <Input placeholder='请输入'/>
    },
    {
      label: '类型描述',
      name: 'type',
      render: <Input placeholder='请输入'/>
    },
    {
      label: '状态',
      name: 'status',
      render: <Select style={{width: 150}}>
        <Option value={null}>全部</Option>
        <Option value={1}>1</Option>
        <Option value={2}>2</Option>
        
      </Select>
    },
    {
      render: <Button onClick={reset}>重置</Button>
    },
    {
      render: <Button type='primary' htmlType='submit'>查询</Button>
    },
  ]
  
  return (
    <div>
      <Form
        form={form}
        layout='inline'
        onFinish={onFinish}
      >
        {
          formDate.map(v => {
            return <Form.Item key={v.name} name={v.name} label={v.label}>{v.render}</Form.Item>
          }) 
        }
      </Form>
      <Table
        rowKey={'id'}
        columns={columns}
        dataSource={data}
      />
      <ModalShow 
        title='操作'
        msg='hello world'
      />
    </div>
  )
}
