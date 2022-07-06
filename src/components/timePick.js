import React, { useState } from 'react'
import { DatePicker } from 'antd'
import moment from 'moment'
const { RangePicker } = DatePicker;
export default function TimePick() {
  const [bol, setBol] = useState(false)
  const [value, setValue] = useState([moment().subtract(7, 'days'), moment().subtract(1, 'days')])
  const onChange = (value) => {
    console.log('onChange', value);
    
  }
  const disabledDate = (current) => {
    // console.log('disabledDate', current);
    if(!value) return false
    if(bol) return current && current > moment().endOf('day')
    const tooLate = value[0] && current.diff(value[0], 'months') > 2;
    const tooEarly = value[1] && value[1].diff(current, 'months') > 2;
    return !!tooEarly || !!tooLate || current > moment().endOf('day');
  }
  const onOpenChange = (open) => {
    console.log('onOpenChange', open);
    setBol(open)
  }
  const onCalendarChange = (val, dateString, info) => {
    console.log('???', val)
    let disabledEnd =  moment(val[0]).add(3, 'months')
    if(Date.parse(disabledEnd) > Date.parse(moment().endOf('day'))) {
      disabledEnd = moment().subtract(1, 'day').endOf('day')
    }
    let date = info.range === 'start' ? [val[0], disabledEnd] : val
    setBol(false)
    setValue(date)
  }
  return (
    <div>
      
      <RangePicker
        // defaultValue={defaultValue}
        allowClear={false}
        value={value}
        // onChange={onChange}
        disabledDate={disabledDate}
        onOpenChange={onOpenChange}
        onCalendarChange={onCalendarChange}
      />
    </div>
    
  )
}
