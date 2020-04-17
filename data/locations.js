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

const hospital = {
    id: 'hospital',
    title: 'The Hospital',
    map: {
        top: '40%',
        left: '45%'
    },
    image: 'hospital.jpg',
    description: 'You decide to take your chances at the general hospital. Strangely enough there seems to be a fresh fire going on one of the ambulances. You hear a scream come from inside the building. You see a medical personnel is being dragged down the hallway by a duo of raiders. They are demanding the person show them where the supplies are hidden.',
    choices: {
        toughKitChoices: [{
            id: 'toughKitBattle',
            description: 'You pull out your weapons and take a deep breath. This person needs help.',
            result: 'You turn the corner and catch the first raider off guard dropping them to the ground. You and the other raider get into a rough fight. They stab you in the side but you manage to kick them out of the window. The medical personnel thanks you and agrees to head back to the community with you after you get there supplies. You lose 15 health since the medical professional tries to assist you. You also gain 25 supplies.',
            hp: -10,
            supplies: 25
        }, {
            id: 'toughKitSneak',
            description: 'This is too dangerous for the supplies you brought. Youll have to try to sneak out of there.',
            result: 'You slowly sneak away to another floor of the hospital. You recall the raiders speaking about a stash. You start to search for it but come across one of the raiders. The raider yells and you draw your blade getting into a bloody fight. As youre standing over the raiders body breathing heavily you hear more of them running to your location. You quickly grab the raiders supplies and leave the hospital gripping your side. You lose 10 health and gain 10 supplies.',
            hp: -10,
            supplies: 10
        }, {
            id: 'toughKitItems',
            description: 'You decide to wait for the perfect oppurtunity to try to save this medical personnel.',
            result: 'The medical personnel takes the raiders to there stash. You see a large trunk full of food and medical supplies. The raiders toss the personnel to the side. This is your chance, you start shoving a wall that looks ready to collapse and it falls unto the raiders ending them. Sadly it looks like it crushed some of the supplies as well. Youve lost 0 health and gained 5 supplies.',
            hp: 0,
            supplies: 10
        }],

        sneakKitChoices: [{
            id: 'sneakKitBattle',
            description: 'You pull out your blade and take a deep breath. This person needs help.',
            result: 'You wait patiently as one of the raiders comes around the corner, you drop them with your surprise. The other raider screams and runs at you. After a blood fight stand up clutching your wounds. The medical personnel helps you to the best of there abilities and agree to head back with you with the supplies. Youve lost 15 health and gained 25 supplies.',
            hp: -15,
            supplies: 25
        }, {
            id: 'sneakKitSneak',
            description: 'You take a deep breath and creep back into the shadows. If you risk your life the community might not get anything!',
            result: 'You slowly sneak away to another floor of the hospital. You recall the raiders speaking about a stash. As you come across the stash you hear footsteps behind you. You quickly duck behind a ruined shelf and watch. A raider enters the room smiling, there smile doesnt last for long as you push them out of a window and snag the supplies for yourself. You have a moment of guilt about leaving the medical personnel lose 5 health but gain 25 supplies.',
            hp: -5,
            supplies: 25
        }, {
            id: 'sneakKitItems',
            description: 'You decide to wait for the perfect oppurtunity to try to save this medical personnel.',
            result: 'You follow the trio around the hospital until they finally reach the stash of supplies. The raiders toss the medical personnal behind them and start going through the supplies. You take this time to toss a smoke bomb and escape with the medical personnel. They thank you and offer to join your community as a medic. Youve gained 5 health and 5 supplies.',
            hp: 5,
            supplies: 5
        }],

        itemKitChoices: [{
            id: 'itemKitBattle',
            description: 'You pull out your hammer and take a deep breath. This person needs help.',
            result: 'You turn the corner and rush the two raiders, they are clearly stronger then you but with help from the medical personnel you overcome them. As you clutch your wounds the medical personnel agrees to get the supplies and go back to the community with you. Youve lost 20 health from grief and gained 25 supplies.',
            hp: -20,
            supplies: 25
        }, {
            id: 'itemKitSneak',
            description: 'You take a deep breath and creep back into the shadows. If you risk your life the community might not get anything!',
            result: 'You quickly leave the situation grabbing the small things you can on the way out. You sigh and feel guilt ridden as you abandoned this person to there fate. Youve lost 5 health from grief, and gained 5 supplies.',
            hp: -5,
            supplies: 5
        }, {
            id: 'itemKitItems',
            description: 'You decide to wait for the perfect oppurtunity to try to save this medical personnel.',
            result: 'You follow the trio around the hospital and realize theres only one place the supplies could be. You take the back stairs and beat them there. You quickly set up a trap with your tools and wait for the trio to arrive. Once the trio arrives your trap is sprung and it handles one of the raiders. You and the medical personnel handle the second raider as a group, and get the supplies to take back to the community. Youve lost 10 health and gained 25 supplies.',
            hp: -10,
            supplies: 25
        }]
    }
};



const locations = [
    groceryMarket,
    abandonedFarmHouse,
    hospital
];

export default locations;
// const choice = findById(quest.choices, choiceId); INSIDE OF IF STATEMENTS FOR DIFFERENT CLASSES/RACES