import React, { useState } from 'react'
import { Modal } from 'antd'

const  ModalShow = (msg, title) =>  {
  const [visible, setVisible] = useState(false)
  const handleCancel = () => {
    setVisible(false)
  }
  const handleOk = () => {
    setVisible(false)
  }

  return (
    <div>
      <Modal title={title} 
        visible={visible} 
        onCancel={handleCancel}
        onOk={handleOk}
      >
        {
          msg
        }
      </Modal>
    </div>
  )
}

export default ModalShow