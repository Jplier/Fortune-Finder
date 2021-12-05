import React from 'react';

const PlayerChoices = function(props) {
  return (
  <>
    <button id='choice-1' value='1' onClick={props.handleChoiceSelect}>
      {props.firstChoice[0]}</button>
    <button id='choice-2' value='2' onClick={props.handleChoiceSelect}>
      {props.secondChoice[0]}</button>
  </>
  )
}

export default PlayerChoices