import React, { Component, Suspense, useCallback } from 'react'
import { Button, Form, Input, DatePicker } from 'antd'
import FormTable from '@/components/formTable'
import { connect } from 'react-redux'
import * as actions from '@/redux/actions/test'
import { saveAs } from 'file-saver'
import moment from 'moment'
import TimePick from '@/components/timePick'
import rain from 'rainy-window'
import {toThousands} from '@/utils'
import ReactToPrint, { PrintContextConsumer } from 'react-to-print';
const { RangePicker } = DatePicker;
class ReduxTest extends Component {
  state = {
    name: [],
    count: 0,
    count1: 0,
    index: 0
  }
  form = React.createRef()
  componentWillMount() {
    // console.log('props', this.props.increment('increment', 1))
  }
  componentDidMount() {
    console.log('props', this.props);
    console.log('componentDidMount', )
    rain('myImage', 'http://pic.zhangshichun.top/pic/20220606-02.jpg')
    this.setState((preState) => ({ index: preState.index + 1 }), () => {
      console.log(this.state.index);
    })
    this.setState(preState => ({ index: preState.index + 1 }), () => {
      console.log(this.state.index);
    })
  }

  btn = () => {
    console.log('???', this.state.count, this.state.count1)
  }
  // btn = useCallback(
  //   () => {
  //     console.log('???')
  //   }, [this.state.count]
  // ) 
  render() {
    return (
      <div>
        <ReactToPrint
          content={() => this.componentRef}
          trigger={() => <button>Print this out!</button>}
        >
          {/* <PrintContextConsumer>
            {({ handlePrint }) => (
              <button onClick={handlePrint}>Print this out!</button>
            )}
          </PrintContextConsumer> */}
        </ReactToPrint>
        {toThousands(100000)}
        <FormTable  />
        
        {
          this.props.test
        }
        ???
        <div>count: {this.state.count}</div>
        <div>count1: {this.state.count1}</div>
        <button onClick={this.btn}>触发</button>
        <button onClick={() => this.setState({count: this.state.count + 1})}>count</button>
        <button onClick={() => this.setState({count1: this.state.count1 + 1})}>count1</button>
        <div id='myImage' style={{width: 600, height: 500}}></div>
        ???
        <button onClick={() => {this.props.increment('increment', 1)}}>+1</button>
        <TimePick />
        {/* <ComponentToPrint ref={el => (this.componentRef = el)} /> */}
        <div style={{display: 'none'}}>
          <div style={{width: 400, height: 400, border: '1px solid'}} ref={el => (this.componentRef = el)}>???</div>
        </div>
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

class ComponentToPrint extends React.PureComponent {
  render() {
    return (
      <div>My cool content here!</div>
    );
  }
}