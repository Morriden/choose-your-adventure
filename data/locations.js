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
            description: 'You notice someone is arriving at the farm house. Survival of the fittest, you have to take these items for your community.',
            result: 'You run out the front door to face whoever has arrived. You slam into an old man who hits the ground hard and is knocked out cold. You pause for a moment and then think of the community and quickly fill your bags. Youve lost 5 health from guilt and gained 20 supplies.',
            hp: -5,
            supplies: 20
        }, {
            id: 'toughKitSneak',
            description: 'Youre unsure whos coming to the farmhouse, is it a group? Raiders perhaps. You decide to play it safe and sneak out of the house.',
            result: 'You slide into a room and wait for an opening to run out the front door. You notice in the room some supplies so you quickly shove them into your bag. You hear whoever it is walk by and run out of the room and house not looking back. You lose 0 health and gain 5 supplies.',
            hp: 0,
            supplies: 5
        }, {
            id: 'toughKitItems',
            description: 'You decide to be honest and walk out the front door, perhaps whoever it is will be understanding.',
            result: 'As you walk outside you see an oldman who is shocked and ridden with fear. You explain you are here to trade, he agrees. Sadly you didnt bring anything to trade with you. You do offer up one of your weapons and he agrees to give you some supplies for it. Youve lost 0 health and gained 10 supplies.',
            hp: -0,
            supplies: 10
        }],

        sneakKitChoices: [{
            id: 'sneakKitBattle',
            description: 'You notice someone is arriving at the farm house. Survival of the fittest, you have to take these items for your community.',
            result: 'As the front door opens you quickly and quietly take out your target. As you stand back up you realize what youve done and feel terrible, he was a old man. In your grief you dont grab all fo the supplies. Youve lost 10 health and gained 10 supplies.',
            hp: -10,
            supplies: 15
        }, {
            id: 'sneakKitSneak',
            description: 'Youre unsure whos coming to the farmhouse, is it a group of people? Raiders perhaps. You decide to play it safe and sneak out of the house.',
            result: 'You quickly slide to the back of the kitchen and start filling your bag full of supplies. Your skill and speed allow you to avoid whoever it is that came inside. You lose 0 health and gain 10 supplies.',
            hp: 0,
            supplies: 10
        }, {
            id: 'sneakKitItems',
            description: 'You decide to be honest and walk out the front door, perhaps whoever it is will be understanding.',
            result: 'As you walk outside you see an oldman who is shocked and ridden with fear. You explain you are here to trade, he agrees. Sadly your kit doesnt really have anything he can use. He takes pity on your story though and gives you what he can spare. Youve gained 5 supplies.',
            hp: 0,
            supplies: 5
        }],

        itemKitChoices: [{
            id: 'itemKitBattle',
            description: 'You notice someone is arriving at the farm house. Survival of the fittest, you have to take these items for your community.',
            result: 'As the figure walks in you slam your hammer into the target. You drop to your knees as you realize youve just taken someones life. He was just a old man....what have youve done. You grab the supplies you can while stricken with grief. Youve lost 10 health from grief and gained 10 supplies.',
            hp: -5,
            supplies: 10
        }, {
            id: 'itemKitSneak',
            description: 'Youre unsure whos coming to the farmhouse, is it a group? Raiders perhaps. You decide to play it safe and sneak out of the house.',
            result: 'You run into a back room and shut the door. You open a window and attempt to climb out, in your rush you drop some supplies. Youve gained 5 health, and lost 5 supplies.',
            hp: 5,
            supplies: -5
        }, {
            id: 'itemKitItems',
            description: 'You decide to be honest and walk out the front door, perhaps whoever it is will be understanding.',
            result: 'As you walk outside you see an oldman who is shocked and ridden with fear. You explain you are here to trade, he agrees. He seems ecstatic at what you have to offer, you spend the better part of an afternoon trading goods....and stories! Youve lost 5 health from assisting him, and gained 20 supplies.',
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