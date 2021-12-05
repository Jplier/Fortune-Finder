import React from 'react';
import CrystalBall from './components/crystalBall.js';
import anime from 'animejs/lib/anime.es.js';
import { choices, storyText } from './components/storyText.js';
import GoblinLines from './components/goblinLines';
import PlayerChoices from './components/playerChoices.js';
import { diceRoll } from './components/animations/diceRoll.js';
import axios from 'axios';
import token from './config.js';
import ResetButton from './components/resetButton.js';
import goblin from './Components/Images/Goblinwizard.svg';
import table from './Components/Images/Table.svg';
import mouth from './Components/Images/goblinMouth.svg';
import textAnimation from './Components/animations/textAnime.js';
import goblinTalk from './Components/animations/goblinTalk.js';
import InputBox from './Components/inputBox.js';
import diceRotate from './Components/animations/diceRotate.js'
import rightHand from './Components/Images/righthand.svg';
import leftHand from './Components/Images/leftHand.svg';
import handSpin from './Components/animations/handSpin.js'

const defaults = {
  currentDieNum: 20,
      storyNode: 0,
      storyLine: 1,
      userName: '',
      diceEnable: false,
      inputRequired: false
    }




class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = defaults;
    this.diceClickHandler = this.diceClickHandler.bind(this);
    this.choiceView = this.choiceView.bind(this);
    this.userSubmit = this.userSubmit.bind(this);
    this.inputView = this.inputView.bind(this);
    this.choiceView = this.choiceView.bind(this);
    this.handleChoiceSelect = this.handleChoiceSelect.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidUpdate() {
    var textWrapper = document.querySelector('#goblin-lines');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    goblinTalk();
    textAnimation();

  }

  componentDidMount() {
    diceRotate();
    handSpin();
  }

  userSubmit(param) {
   event.preventDefault();
   axios.post('/username', {
     data: {
       username: param
     }
   })
   .then((results) => {
     this.setState({
       inputRequired: false,
       storyLine: (this.state.storyLine) + 1,
       diceEnable: true
     })

   })
   .catch((err) => {alert(err)});
  }

  diceClickHandler(e) {
    e.preventDefault();
   if (!this.state.diceEnable) {
      return null;
    }
    diceRoll()
    .then(() =>
      this.setState({
        currentDieNum: Number(document.getElementById('die').innerHTML),
        storyNode: this.state.storyNode === 0 ? 1 : null,
        storyLine: 1,
        diceEnable: false
      })
    )
    .catch((err) => {
      console.log(err);
    })
  }

  advance(e) {
    if (this.state.inputRequired) {
      return null;
    }

    if (storyText[`node${this.state.storyNode}L${this.state.storyLine + 1}`]) {
      this.setState({
        storyLine: this.state.storyLine + 1,
        diceEnable: storyText[`node${this.state.storyNode}L${this.state.storyLine + 1}`][1] === 'dice-enable' ? true : false,
        inputRequired: storyText[`node${this.state.storyNode}L${this.state.storyLine + 1}`][1] === 'input-required' ? true : false,
      })
    }
  }

  typeChange() {
    this.setState({
      userName: event.target.value
    })
  }

  handleChoiceSelect(e) {
    diceRoll()
    .then((result) => {
    if (e.target.value === '1') {
      if (Number(this.state.currentDieNum) <= 10) {
        this.setState({
          storyNode: choices[`choice${this.state.storyNode}-1`][1],
          storyLine: 1
        })
      }
      if (this.state.currentDieNum >= '10') {
        this.setState({
          storyNode: choices[`choice${this.state.storyNode}-1`][2],
          storyLine: 1
        })
      }
    }
    if (e.target.value === '2') {
      if (this.state.currentDieNum <= 10) {
        this.setState({
          storyNode: choices[`choice${this.state.storyNode}-2`][1],
          storyLine: 1
        })
      } else {
        this.setState({
          storyNode: choices[`choice${this.state.storyNode}-2`][2],
          storyLine: 1
        })
      }
    }
  })

  }

  inputView() {
    return !this.state.inputRequired ? null :
    (
      <InputBox userSubmit={this.userSubmit} />
    )
  }

  choiceView() {
   return storyText[`node${this.state.storyNode}L${this.state.storyLine + 1}`] !== undefined ? null :
   this.state.storyNode === 0 ? null :
   (<PlayerChoices num={this.state.currentDieNum} firstChoice={choices[`choice${this.state.storyNode}-1`]} secondChoice={choices[`choice${this.state.storyNode}-2`]} handleChoiceSelect={this.handleChoiceSelect}/>)

  }

  reset() {
    this.setState(defaults)
  }

  render() {
    if (this.state.storyNode === undefined || this.state.storyLine === undefined) {
      return null;
    }
    return (
    <div id="main">
      <ResetButton reset={this.reset}/>
      <img id='goblin' src={goblin} height='500' width='auto' />
      <img id='right-hand' src={rightHand} height='170' width='auto' />
      <img id='left-hand' src={leftHand} height='170' width='auto' />
      <svg id='path' width='100' length='auto'>
        <path stroke='none' fill='none' d='M242,48 q-94,15 -95,104 q12,87 104,99 q78,-13 94,-100 q-10,-88 -97,-102'> </path>
      </svg>
      <img id='mouth' src={mouth} />
      <img id='table' src={table} />
      <GoblinLines username={this.state.userName} onClick={this.advance.bind(this)} text={storyText[`node${this.state.storyNode}L${this.state.storyLine}`]}/>
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