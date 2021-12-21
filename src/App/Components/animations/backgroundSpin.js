import anime from 'animejs/lib/anime.es.js';

const spin = () => {
  anime({
    targets: '#background',
    rotate: 360,
    loop: true,
    duration: 10000,
    easing: 'linear',
    direction: 'normal'
  })
}

export default spin;