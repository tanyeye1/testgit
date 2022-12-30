import { Button, Input, Modal } from 'antd';
import { observable, computed, set } from 'mobx';
import { inject, observer} from 'mobx-react'
import React, { useEffect, useState } from 'react'
import './index.scss'
import io from 'socket.io-client';

const url='ws://localhost:9093'

// const socket = io('ws://localhost:9000');
const socket = require('socket.io-client')(url);

export default function MobxTest() {
  const [value, setValue] = useState(null)
  const [message, setMessage] = useState([])
  const [username, setUsername] = useState('')
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    // console.log('socket', socket)
    // socket.on('connect', () => {
    //   console.log('connect')
    // })
    io(url).on('connect', () => {
      console.log('connect')
      socket.on('receiveMessage', data => {
        console.log('data', data, message, data)
        setMessage([...message, data])
      })
    })
    return () => {
      socket.on('disconnect', () => {
        console.log('disconnect')
      })
    }
  }, [message])
  const sendMessage = () => {
    console.log('???')
    socket.emit('sendMessage', {username: username, message: value})
    setValue('')
  }
  const onChange = (e) => {
    console.log('onchange', e.target.value)
    setValue(e.target.value)
  }
  const login = () => {
    socket.emit('login', {username})
  } 
  return (
    <div>
      <Modal
        visible={visible}
        title='请先登录'
        centered={true}
        // onCancel={() => setVisible(false)}
        // onOk={login}
      >
      <Input style={{width: 150}} placeholder='输入用户名' value={username} onChange={(e) => setUsername(e.target.value)}></Input>

      </Modal>
      <Button onClick={login}>登录</Button>
      <h1>用户: {username}</h1>
      <div className='box1'>
        {
          message.map(v => {
            console.log('v', v)
            return <div>用户{v.username}:{v.message}</div>
          })
        }
      </div>
      <Input style={{width: 150}} onChange={onChange} value={value}/>
      <Button onClick={sendMessage}>发送</Button>
    </div>
  )
}

// class MobxTest extends React.Component {
//   state = {
//     message: [],
//     value: ''
//   }
//   componentDidMount() {
//     socket.on('connect', () => {
//       console.log('connect')
//       socket.on('receiveMessage', data => {
//         console.log('data', data, this.state.message)
//         this.setState({
//           message: [...this.state.message, data]
//         })
//       })
//     })
//   }
//   onChange = (e) => {
//     this.setState({
//       value: e.target.value
//     })
//   }
//   sendMessage = () => {
//     socket.emit('sendMessage', this.state.value)
//     this.setState({
//       value: ''
//     })
//   }
//   render() {
//     const {message, value} = this.state
    
//     return (
//       <div>
//         <div className='box1'>
//         {
//           message.map(v => {
//             console.log('v', v)
//             return <h1>{v}</h1>
//           })
//         }
//         </div>
//       <Input style={{width: 150}} onChange={this.onChange} value={value}/>
//       <Button onClick={this.sendMessage}>发送</Button>
//       </div>
//     )
//   }
// }

// export default MobxTest