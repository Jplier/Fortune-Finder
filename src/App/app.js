import React from 'react';
import CrystalBall from './components/crystalBall.js';
import anime from 'animejs/lib/anime.es.js';


// const animateText = (text) {
//   anime({

//   }
//   )
// }

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentDieNum: 0,
      storyNode: 0,
      userName: ''
    }
    this.diceClickHandler = this.diceClickHandler.bind(this);
  }

  diceClickHandler(e) {
    let dicenum;
    dieRoll()

    this.setState({
      currentDieNum: dicenum
    })
  }

  render() {
    return (
    <div>
    <CrystalBall onClick={this.diceClickHandler} id="crystal-ball"/>
    </div>
    )
  }
}


export default App