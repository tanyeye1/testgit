import React, { Component } from 'react'
import { Form, Input } from 'antd'
import FormTable from '@/components/formTable'
import { connect } from 'react-redux'
import * as actions from '@/redux/actions/test'

class ReduxTest extends Component {
  state = {
    name: []
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
        <button onClick={() => {this.props.increment('increment', 1)}}>+1</button>
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