import anime from 'animejs/lib/anime.es.js';


const handSpin = () => {
console.log('inside handspin')
  let path = anime.path('#path path');
  anime({
    targets: "#left-hand",
    translateX: path('x'),
    translateY: path('y'),
    easing: 'linear',
    loop: true,
    duration: 3000
  })
  anime({
    targets: "#right-hand",
    translateX: path('x'),
    translateY: path('y'),
    easing: 'linear',
    loop: true,
    direction: 'reverse',
    duration: 3000

  })
}

export default handSpin;