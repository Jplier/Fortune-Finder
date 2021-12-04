import React from 'react';
import CrystalBall from './components/crystalBall.js';
import anime from 'animejs/lib/anime.es.js';
import { choices, storyText } from './components/storyText.js'
import GoblinLines from './components/goblinLines'
import PlayerChoices from './components/playerChoices.js'
import diceRoll from './components/animations/diceRoll.js'

// const animateText = (text) {
//   anime({

//   }
//   )
// }

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentDieNum: 20,
      storyNode: 0,
      storyLine: 1,
      userName: '',
      diceEnable: false,
      inputRequired: false
    }
    this.diceClickHandler = this.diceClickHandler.bind(this);
    this.choiceView = this.choiceView.bind(this);
  }

  diceClickHandler(e) {
    e.preventDefault();
   if (!this.state.diceEnable) {
      return null;
    }


    diceRoll()
    .then(() =>
      this.setState({
        currentDieNum: document.getElementById('die').innerHTML,
        storyNode: this.state.storyNode === 0 ? 1 : null,
        storyLine: 1
      })
    )
  }

  advance(e) {
    e.preventDefault();
    storyText[`node${this.state.storyNode}L${this.state.storyLine + 1}`] ?
    this.setState({
      storyLine: (this.state.storyLine) + 1
    }) :
    this.setState({
      diceEnable: true
    })
  }

  handleChoiceSelect() {

  }
  inputview() {
    return !this.state.inputRequired ? null :
    (<>
    <form>
      </form>
      </>)
  }

  choiceView() {
   return storyText[`node${this.state.storyNode}L${this.state.storyLine + 1}`] !== undefined ? null :
   this.state.storyNode === 0 ? null :
   (<PlayerChoices num={this.state.currentDieNum} firstChoice={choices[`choice${this.state.storyNode}-1`]} secondChoice={choices[`choice${this.state.storyNode}-2`]} handleChoiceSelect={this.handleChoiceSelect}/>)

  }

  render() {
    return (
    <div id="main">
      <GoblinLines onClick={this.advance.bind(this)} text={storyText[`node${this.state.storyNode}L${this.state.storyLine}`]}/>
      <CrystalBall dieclick={this.diceClickHandler} id="crystal-ball"/>
      <div>
       {this.choiceView()}
      </div>
      <div>{this.inputView()}</div>

    </div>
    )
  }
}


export default App