import React from 'react'
import Die from './diceRoller.js'

function CrystalBall(props) {
  return (<Die onClick={props.onClick}/>)
}

export default CrystalBall