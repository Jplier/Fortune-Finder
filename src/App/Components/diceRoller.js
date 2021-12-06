import React from 'react';
import die from './Images/d20.svg';

const Die = function(props) {
  return (

  <div onClick={(props.dieclick)} id='die-container'>
    <img id='die-svg' src={die} width='150' height='150'/>
    <div id='die'>0</div>
  </div>


  )

}


export default Die