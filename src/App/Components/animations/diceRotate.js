import anime from 'animejs/lib/anime.es.js';

const diceRotate = () => {
  anime({
    targets: '#die-svg',
    rotate: 360,
    loop: true,
    duration: 10000,
    easing: 'linear',
    direction: 'normal'
  })
}

export default diceRotate;