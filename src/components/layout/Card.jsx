import React from 'react'

import './Card.css'

export default (props) => {

  const backgroundColor = props.backgroundColor || 'black'
  const color = props.color || 'white'

  const style = {
    'backgroundColor': backgroundColor, 
    'borderColor': backgroundColor,
    'color': color
  }

  return (
    <div className='Card' style={style}>
      <div className='Title'>
        {props.title}
      </div>
      <div className='Content'>
        {props.children}
      </div>
    </div>
  )
}