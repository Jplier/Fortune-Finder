import React from 'react';
import CrystalBall from './components/crystalBall.js';
import anime from 'animejs/lib/anime.es.js';
import { choices, storyText } from './components/storyText.js'
import GoblinLines from './components/goblinLines'
import PlayerChoices from './components/playerChoices.js'

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
      userName: ''
    }
    this.diceClickHandler = this.diceClickHandler.bind(this);
    this.choiceView = this.choiceView.bind(this);
  }

  diceClickHandler(e) {
    let dicenum;
    e.preventDefault();

     anime({
      targets: '#die',
      duration: 2000,
      keyframes: [
        {innerHTML: function() {
          return Math.floor(Math.random() * 20) + 1
        },
      duration: 100
    },
        {innerHTML: function() {
          return Math.floor(Math.random() * 20) + 1
        },
        duration: 100
      },
        {
          innerHTML: function() {
            let num =  Math.floor(Math.random() * 20) + 1
            dicenum = num;
            return num
          },
        easing: 'easeOutQuad',
      duration: 1000
    },
      ],
      round: 1,
      easing: 'linear',
      delay: 0,
    })
    .finished
    .then(() =>
      this.setState({
        currentDieNum: dicenum,
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
    null
  }

  choiceView() {
   return storyText[`node${this.state.storyNode}L${this.state.storyLine + 1}`] !== undefined ? null :
   this.state.storyNode === 0 ? null :
   (<PlayerChoices num={this.state.currentDieNum} firstChoice={choices[`choice${this.state.storyNode}-1`]} secondChoice={choices[`choice${this.state.storyNode}-2`]} />)

  }

  render() {
    return (
    <div id="main">
      <GoblinLines onClick={this.advance.bind(this)} text={storyText[`node${this.state.storyNode}L${this.state.storyLine}`]}/>
      <CrystalBall dieclick={this.diceClickHandler} id="crystal-ball"/>
      <div>
       {this.choiceView()}
      </div>

    </div>
    )
  }
}


export default App