import React from 'react'

export default props => {

  return (
    <div>
      <span>{props.number % 2 == 0 ? "Par" : "Ímpar"}</span>
    </div>
  )

}