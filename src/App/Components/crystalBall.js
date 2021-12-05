import React from 'react'
import Die from './diceRoller.js'
import crystalBall from './images/crystalBall.svg'

function CrystalBall(props) {
  return (<>
    <img src={crystalBall} id='crystal-ball'/>
    <Die dieclick={props.dieclick}/>
  </>
  )

}

export default CrystalBall