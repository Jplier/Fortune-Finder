

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
  node4L1: ['You begin waving your arms in a display of aggression, silently humming to yourself.'],
  node4L2: ['Unfortunately as you dance, your foot becomes lodged in a hidden molehill'],
  node4L3: ['"My House!", The mole cries, brandishing a kitchen knife.'],
  node4L4: ['"You\'ve done it now longshanks!", the mole approaches your ankel aggressively. What do you do?'],
  node5L1: ['In a display of brilliant performance you begin to spin wildly enveloped by the dance'],
  node5L2: ['You spin faster and faster until a tornado begins to form at your feet, spinning you high into the air!'],
  node5L3: ['You land softly on the bed of a cloud and assess your surroudings. In the distance you can see a rainbow bridge leading to a decrepit stone tower. Nearby there is a serene mistly cloud lake reflecting pale fall sun'],
  node6L1: ['You decide to make a trap, but recall that you did not much like school and after some frustrated tinkering decide it would be best to lie down in wait and pounce from hiding'],
  node6L2: ['In the bitter cold you wait with not a sound, you can feel it seeping into your skin. You think perhaps a short nap would give me more energy'],
  node6L3: ['The world grows dark around you... you do not awaken'],
  node6L4: ['Perhaps in your next life you will learn compassion for all of the earths creatures... or not (Try again?)'],
  node7L1: ['You deftly gather the twigs and roots around you, expertly hiding your new trap amongs the fallen leaves'],
  node7L2: ['After a short wait you hear the snapping of line! Something has been hooked. You look past and see your sibling Barbara!'],
  node7L3: ['"What in the world are you doing?" Barbara announces a line or fibrous root enclosing their ankle.'],
  node7L4: ['"You were supposed to be home for dinner 30 minutes ago," Barbara barks swiftly prying loose the noose with their sword']
}

const choices = {
  'choice1-1': ["Chase it down, it looks tasty!", 2, 3],
  'choice1-2': ["Better to be safe, I'll dance to scare it off", 4, 5],
  'choice2-1': ["Set up a trap. That'll show these woods who's boss!", 6, 7],
  'choice2-2': ["Give up, sit down and wait for rescue.", 8, 9],
  'choice3-1': ['Give me your horn and I will let you go, for with that horn i could hunt greater beasts more easily'],
  'choice3-2': ['Let the poor creature go, on this the day of her daughter\'s wedding'],
  'choice4-1': ['This mole is no match for your superior intellect, tell them you are the insurance fraud inspector'],
  'choice4-2': ['Perhaps the mole is simply hungry, look i your pockets for food'],
  'choice7-1': ['Oh right, i supposed I\'d better head home then, lead the way'],
  'choice7-2': ['Who the heck is barbara? Better beat feet and get away from this armed maniac']

}

export { choices, storyText };