import React from 'react';

const PlayerChoices = function(props) {
  console.log(props.firstChoice)
  return (
  <>
    <button id='choice-1' onClick={() => {
      props.num < 11 ? props.handleChoiceSelect(props.firstChoice[1]) :
      props.handleChoiceSelect(props.firstChoice[2])
    }
      }>{props.firstChoice[0]}</button>
    <button id='choice-2' onClick={() => {
      props.num < 11 ? props.handleChoiceSelect(props.firstChoice[1]) :
      props.handleChoiceSelect(props.firstChoice[2])
    }
      }>{props.secondChoice[0]}</button>
  </>
  )
}

export default PlayerChoices