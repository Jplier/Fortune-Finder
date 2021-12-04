import React from 'react'
import Die from './diceRoller.js'

function CrystalBall(props) {
  return (<Die dieclick={props.dieclick}/>)
}

export default CrystalBall