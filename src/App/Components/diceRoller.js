import React from 'react';
import die from './Images/d20.svg';

const Die = function(props) {
  return (
  <div id='die-container' >
  <div onClick={(props.dieclick)} id='die'>0</div>
  <img id='die-svg' src={die} width='150' height='150'/>
  </div>
  )

}


export default Die