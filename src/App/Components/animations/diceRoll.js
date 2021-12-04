import React from 'react'
import anime from 'animejs/lib/anime.es.js';

const diceRoll = function() {
return anime({
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
}

export default diceRoll