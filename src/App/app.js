import React from 'react';
import CrystalBall from './components/crystalBall.js';
import anime from 'animejs/lib/anime.es.js';
import { choices, storyText } from './components/storyText.js'
import GoblinLines from './components/goblinLines'
import PlayerChoices from './components/playerChoices.js'
import { diceRoll } from './components/animations/diceRoll.js'

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
    this.userSubmit = this.userSubmit.bind(this);
    this.inputView = this.inputView.bind(this);
    this.choiceView = this.choiceView.bind(this);
  }

  userSubmit() {
   event.preventDefault();
   console.log(event.target)
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
    if (this.state.inputRequired) {
      return null;
    }

    if (storyText[`node${this.state.storyNode}L${this.state.storyLine + 1}`] &&
    storyText[`node${this.state.storyNode}L${this.state.storyLine + 1}`][1]
    ) {
      this.setState({
        storyLine: (this.state.storyLine) + 1,
        inputRequired: true
      })
    } else {
      this.setState({
        diceEnable: true
      })
    }
  }

  typeChange() {
    this.setState({
      userName: event.target.value
    })
  }

  handleChoiceSelect() {

  }

  inputView() {
    return !this.state.inputRequired ? null :
    (<>
    <form id='username' onSubmit={this.userSubmit}>
      <input type='text' value={this.state.userName} onChange={this.typeChange.bind(this)}></input>
      <input type='submit' ></input>
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
      <div>{this.inputView()}</div>
      <CrystalBall dieclick={this.diceClickHandler} id="crystal-ball"/>
      <div>
       {this.choiceView()}
      </div>


    </div>
    )
  }
}


export default App