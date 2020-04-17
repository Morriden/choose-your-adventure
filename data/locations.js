const groceryMarket = {
    id: 'market',
    title: 'Grocery Market',
    map: {
        top: '60%',
        left: '30%'
    },
    image: 'grocerystore.jpg',
    description: 'While searching the grocery market, you are met with a group of wandering undead entering the store.',
    choices: {
        toughKitChoices: [{
            id: 'toughKitBattle',
            description: 'Fight your way through them, you need these supplies!',
            result: 'You brandish your modified baseball bat and get to work on the shambling undead. The supplies are yours! Sadly there was a locked room you couldnt open. Youve lost 5 health and gained 15 supplies.',
            hp: -5,
            supplies: 15
        }, {
            id: 'toughKitSneak',
            description: 'You need to avoid these zombies!',
            result: 'While trying to sneak out of the building you drop one of your weapons and alert the Undead to your presence. You fight your way to a window and escape to safety. Youve lost 5 health and gained 5 supplies.',
            hp: -5,
            supplies: 5
        }, {
            id: 'toughKitItems',
            description: 'Use your wits and supplies to try to overcome the undead!',
            result: 'You start to throw things out a window toward a car. The item hits the car and an alarm starts to go off drawing the Undead away! Sadly you had to throw some supplies to make it happen. Youve gained 5 supplies.',
            hp: 0,
            supplies: 5
        }],

        sneakKitChoices: [{
            id: 'sneakKitBattle',
            description: 'Fight your way through them, you need these supplies!',
            result: 'You pull out your small blade and start taking out the Undead one by one, sadly one of the beasts falls into a shopping cart alerting the others! Time to run! Youve lost 10 health and gained 5 supplies.',
            hp: -10,
            supplies: 5
        }, {
            id: 'sneakKitSneak',
            description: 'You need to avoid these zombies!',
            result: 'You parkour up one of the shelves and find a spot to lay low in. After some time the Undead seem to be drawn to another location, leaving the supplies ripe for the taking. Youve lost 5 health from waiting and gained 15 supplies.',
            hp: -5,
            supplies: 15
        }, {
            id: 'sneakKitItems',
            description: 'Use your wits and supplies to try to overcome the undead!',
            result: 'You pull a smoke bomb out of your bag and throw it at the door. It buys you some time to grab some supplies before making a run for it! Youve lost 5 health and gained 10 supplies.',
            hp: -5,
            supplies: 10
        }],

        itemKitChoices: [{
            id: 'itemKitBattle',
            description: 'Fight your way through them, you need these supplies!',
            result: 'You rush the door with your hammer and start attacking the zombies. Sadly theres too many of them for you to handle! You wedge the door shut and run toward the back grabbing what you can. You lose 10 health and gain 10 supplies.',
            hp: -10,
            supplies: 10
        }, {
            id: 'itemKitSneak',
            description: 'You need to avoid these zombies!',
            result: 'The zombies start entering the building as you try to avoid them by taking a different aisle. You make your way toward the side entrance and are cut off by a zombie! You fight off the zombie and grab what you can before running out of the building. You lose 5 health and gain 5 supplies.',
            hp: -5,
            supplies: 5
        }, {
            id: 'itemKitItems',
            description: 'Use your wits and supplies to try to overcome the undead!',
            result: 'You quickly pull out your tools and slam the door shut barracading the door. This buys you plenty of time to grab the supplies before leaving through a back window. You lose no health and gain 15 supplies.',
            hp: 0,
            supplies: 10
        }]
    }
};

const abandonedFarmHouse = {
    id: 'farmhouse',
    title: 'Abandoned Farm House',
    map: {
        top: '30%',
        left: '70%'
    },
    image: 'farmhouse.jpg',
    description: 'You approach a abandoned farmhouse, as you enter the building you notice that it is full of supplies! Upon closer look it seems someone is arriving at the house after youve made it inside.',
    choices: {
        toughKitChoices: [{
            id: 'toughKitBattle',
            description: 'You notice someone is arriving back at the farm house. Survival of the fittest, you have to take these items for your community.',
            result: 'You start shoving your bags full of supplies. You run out of the farmhouse and slam into the old man. He begs you to not take everything but you dont look back. Youve lost 5 health and gained 20 supplies.',
            hp: -5,
            supplies: 20
        }, {
            id: 'toughKitSneak',
            description: 'You notice someone is arriving back at the farm house. You decide to hide in one of the back rooms while grabbing supplies.',
            result: 'The older man walks by the room you are hiding in, you take this time to sneak out of the room but he notices you. You get into a scuffle with the old man but knock him to the ground and run off. Youve lost 10 health and gained 10 supplies.',
            hp: -10,
            supplies: 10
        }, {
            id: 'toughKitItems',
            description: 'You decide to not be a scavenger and introduce yourself to the old man. You talk briefly and decide to make a trade.',
            result: 'Sadly you didnt bring anything really worth trading. You do offer up one of your weapons and he agrees to give you some supplies for it. Youve lost 5 health and gained 10 supplies.',
            hp: -5,
            supplies: 10
        }],

        sneakKitChoices: [{
            id: 'sneakKitBattle',
            description: 'Survival of the fittest. You draw your knife.',
            result: 'You take out the old man as he enters the home quickly and quietly. As you stand back up you realize what youve done and feel terrible. In your grief you dont grab all fo the supplies. Youve lost 10 health and gained 10 supplies.',
            hp: -10,
            supplies: 10
        }, {
            id: 'sneakKitSneak',
            description: 'You quickly slide into the shadows as the old man walks by.',
            result: 'You start to slide important items into your bag, the old man is oblivious to you and your skill. Youve gained 15 supplies.',
            hp: 0,
            supplies: 15
        }, {
            id: 'sneakKitItems',
            description: 'You decide to try to barter with the old man. He agrees to take a look at what you have',
            result: 'Sadly your kit doesnt really have anything he can use. He takes pity on your story though and gives you what he can spare. Youve gained 5 supplies.',
            hp: 0,
            supplies: 5
        }],

        itemKitChoices: [{
            id: 'itemKitBattle',
            description: 'As the old man enters the home you assault him with a board from your bag.',
            result: ' As he hits the ground you drop to your knees, what have you done...youve lost 5 health and gained 10 supplies.',
            hp: -5,
            supplies: 10
        }, {
            id: 'itemKitSneak',
            description: 'You decide to try to hide from the old man.',
            result: 'You enter a small room and look for a way to leave without him noticing you. You open a window and attempt to climb out, in your rush you drop some supplies. Youve gained 5 health, and lost 5 supplies.',
            hp: 5,
            supplies: -5
        }, {
            id: 'itemKitItems',
            description: 'You introduce yourself and offer to trade.',
            result: 'He seems ecstatic at what you have to offer, you spend the better part of an afternoon trading goods....and stories! Youve lost 5 health, and gained 20 supplies.',
            hp: -5,
            supplies: 20
        }]
    }
};



const locations = [
    groceryMarket,
    abandonedFarmHouse
];

export default locations;
// const choice = findById(quest.choices, choiceId); INSIDE OF IF STATEMENTS FOR DIFFERENT CLASSES/RACES