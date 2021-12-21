import anime from 'animejs/lib/anime.es.js';


 const goblinTalk = function() {
   anime({
    targets: '#mouth',
    loop: 20,
    duration: 100,
    translateY: 20,
    direction: 'alternate',
    easing: 'easeInOutQuad'
  })
}

export default goblinTalk;