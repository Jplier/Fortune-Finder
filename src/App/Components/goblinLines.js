import React from 'react'

const GoblinLines = function(props) {
  return (<div onClick={props.onClick} id='goblin-lines'>{props.text[0]}</div>)
}

export default GoblinLines