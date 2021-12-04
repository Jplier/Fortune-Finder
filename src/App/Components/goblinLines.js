import React from 'react'

const GoblinLines = function(props) {
  return (<div onClick={props.onClick} id='goblin-lines'>{props.text}</div>)
}

export default GoblinLines