import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Route, Switch } from 'react-router-dom'
import './animated.less'

const Animated = props => {
  const { children } = props
  console.log('props', props)
  return (
      <CSSTransition
        // key={location.key}
        in={true}
        classNames={'fade'} 
        timeout={3000}
        unmountOnExit
      >
        {children}
      </CSSTransition>
  )
}

export default Animated