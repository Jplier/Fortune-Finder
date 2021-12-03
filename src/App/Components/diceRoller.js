import React from 'react';
const rollTheDice = () => {
  return Math.floor(Math.random() * 20) + 1
}

const Die = function(props) {
  return (<div id="die" onClick={(props.onClick)}>0</div>)
}


export default Die