import React from 'react'

const GoblinLines = function(props) {
  if(props.text === undefined) {
    return null;
  }
  if (typeof props.text[0] === 'function') {
  return (<div onClick={props.onCLick} id='goblin-lines'>{props.text[0](props.username)}</div>)
  }
  return (<div onClick={props.onClick} id='goblin-lines'>{props.text[0]}</div>)
}

export default GoblinLines