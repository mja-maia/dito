import React from 'react'

import './index.css'

export default props => (
  <div 
  style={{
    backgroundColor: props.bgColor,
    color: props.textColor,
    width: props.width
  }} 
  className="textChipWrapper"
  >
    {props.text}
  </div>
)