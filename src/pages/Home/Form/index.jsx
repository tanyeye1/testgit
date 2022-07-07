import React, { Component, Suspense } from 'react'
import { Button, Form, Input, DatePicker } from 'antd'
import FormTable from '@/components/formTable'
import { connect } from 'react-redux'
import * as actions from '@/redux/actions/test'
import { saveAs } from 'file-saver'
import moment from 'moment'
import TimePick from '@/components/timePick'
const { RangePicker } = DatePicker;
class ReduxTest extends Component {
  state = {
    name: [],
  }
  form = React.createRef()
  componentWillMount() {
    // console.log('props', this.props.increment('increment', 1))
    console.log('componentWillMount', this.form.current)
  }
  componentDidMount() {
    console.log('props', this.props);
    console.log('componentDidMount', this.form.current)
  }
  render() {
    return (
      <div>
        <FormTable />
        
        {
          this.props.test
        }
        ???
        ???
        <button onClick={() => {this.props.increment('increment', 1)}}>+1</button>
        <TimePick/>
      </div>
    )
  }
}

// export default ReduxTest
export default  connect(
	state => state, 
  {...actions}
  // {increment}
)(ReduxTest)
