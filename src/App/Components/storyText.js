

const storyText = {
  node0L1: ["OH... Welcome traveler to gobbos fortune-telling game..."],
  node0L2: ["Tell me... What is your name?", 'input-required'],
  node0L3: [(name) => `Well ${name} my game will test your wit, will and morals. To begin, simply click the mystical die!`],
  node1L1: ["Our story begins in a grassy field."],
  node1L2: ["You feel the wet dew of early morning tickling between your naked feet."],
  node1L3: ["In the distance is a deep fog encapsulating a woodland. Through the morning light you can barely make out the visage of a wild animal. What do you do?", 'dice-enable'],
  node2L1: ['With all haste you push your feet against the dirt and give chase!'],
  node2L2: ['The creature proves fleet and vanishes into the deeper darkness of the forest'],
  node2L3: ['You begin to remember something you learned in school. If you\'re lost in the woods with no food you should...'],
  node3L1: ['With all haste you push your feet against the dirt and give chase!'],
  node3L2: ['With some luck you corner the beast! Tis\` the white fawn, pure as untrodden snow. "Please," it begs, "Let me go and surely i will return this kindness. My daughter awaits me at her wedding!"...'],
}

const choices = {
  'choice1-1': ["Chase it down, it looks tasty!", 2, 3],
  'choice1-2': ["Better to be safe, I'll dance to scare it off", 4, 5],
  'choice2-1': ["Set up a trap. That'll show these woods who's boss!", 6, 7],
  'choice2-2': ["Give up, sit down and wait for rescue.", 8, 19],
  'choice3-1': ['Give me your horn and I will let you go, for with that horn i could hunt greater beasts more easily'],
  'choice3-2': ['Let the poor creature go, on this the day of her daughter\'s wedding']
}

export { choices, storyText };