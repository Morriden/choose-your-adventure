import { loadSurvivor, getSurvivor } from '../utils/utils.js';
import { scoreSupplies, scoreHealth } from '../results/scores.js';
import { aliveSuppliesMessages, deadSuppliesMessages, healthMessages } from '../results/messages.js';


loadSurvivor();
const survivor = getSurvivor();

const endingDisplay = document.getElementById('ending');

const healthResult = scoreHealth(survivor.health);
const suppliesResult = scoreSupplies(survivor.supplies);
const healthMessage = healthMessages[healthResult];

let suppliesMessages = null;
if (healthResult === 'dead') {
    suppliesMessages = deadSuppliesMessages;
} else {
    suppliesMessages = aliveSuppliesMessages;
}

const suppliesMessage = suppliesMessages[suppliesResult];

let story = 'You return from your scavenging trip ';
story += survivor.name + ', ';
story += healthMessage + ' ' + suppliesMessage + '.';

endingDisplay.textContent = story;