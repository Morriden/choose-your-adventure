const groceryMarket = {
    id: 'market',
    title: 'Grocery Market',
    map: {
        top: '50%',
        left: '50%'
    },
    image: 'grocerystore.jpg',
    description: 'While searching the grocery market, you are met with a group of wandering undead entering the store.',

    toughKitChoices: [{
        id: 'toughKitBattle',
        description: 'Fight your way through them, you need these supplies',
        result: 'You brandish your modified baseball bat and get to work on the shambling undead. The supplies are yours! Sadly there was a locked room you couldnt open.',
        hp: -5,
        supplies: 15
    }, {
        id: 'toughKitSneak',
        description: 'You decide to try a more stealthy approach.',
        result: 'While trying to sneak out of the building you drop one of your weapons and alert the Undead to your presence. You fight your way to a window and escape to safety.',
        hp: -5,
        supplies: 5
    }, {
        id: 'toughKitItems',
        description: 'You throw one of the items you found out the window',
        result: 'The item hits a car and an alarm starts to go off drawing the Undead away! Sadly you had to throw some supplies to make it happen.',
        hp: 0,
        supplies: 5
    }],

    sneakKitChoices: [{
        id: 'sneakKitBattle',
        description: 'Fight your way through them, you need these supplies.',
        result: 'You pull out your small blade and start taking out the Undead one by one, sadly one of the beasts falls into a shopping cart alerting the others! Time to run!',
        hp: -10,
        supplies: 5
    }, {
        id: 'sneakKitSneak',
        description: 'You decide to try a more stealthy approach',
        result: 'You parkour up one of the shelves and find a spot to lay low in. After some time the Undead seem to be drawn to another location, leaving the supplies ripe for the taking.',
        hp: -5,
        supplies: 15
    }, {
        id: 'sneakKitItems',
        description: 'You pull out one of your smoke bombs and throw it at the entrance to the store.',
        result: 'It buys you some time to grab some supplies before making a run for it!',
        hp: -5,
        supplies: 10
    }],

    itemKitChoices: [{
        id: 'itemKitBattle',
        description: 'You quickly pull out a board to barricade the door with!',
        result: 'It buys you some time to run out the back window grabbing what supplies you see along the way. Sadly you had to use supplies to escape',
        hp: 0,
        supplies: 0
    }, {
        id: 'itemKitSneak',
        description: 'You attempt to hide behind a shelf but your huge bag full of items knocks everything to the ground!',
        result: 'The undead come scrambling in and you have to fight them off with whatever you can find! Luckily with the Undead taken care of you can search the entire building.',
        hp: -15,
        supplies: 20
    }, {
        id: 'itemKitItems',
        description: 'You quickly pull out a board and nails to barricade the door with!',
        result: 'It buys you some time to run out the back window grabbing what supplies you see along the way. Sadly you had to use supplies to escape',
        hp: 0,
        supplies: 10
    }]
};

const locations = [
    groceryMarket
];

export default locations;
// const choice = findById(quest.choices, choiceId); INSIDE OF IF STATEMENTS FOR DIFFERENT CLASSES/RACES