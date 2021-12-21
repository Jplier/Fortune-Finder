import anime from 'animejs/lib/anime.es.js';


const textAnimation = function() {
  anime.timeline({loop: false})
  .add({
    targets: '#goblin-lines .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 30*i
  })
}

export default textAnimation