import { saveSurvivor, getSurvivor, loadSurvivor, isDead, findById, scoreLocation } from '../utils/utils.js';
import locations from '../data/locations.js';
import { createChoice } from './createChoice.js';

loadSurvivor();

const searchParams = new URLSearchParams(window.location.search);
const locationId = searchParams.get('id');
const location = findById(locations, locationId);

if (!location) {
    window.location.href = ('../map.html');
}

const title = document.getElementById('title');
const image = document.getElementById('image');
const description = document.getElementById('description');
const choiceForm = document.getElementById('choice-form');
const choices = document.getElementById('choices');
const result = document.getElementById('result');
const resultDescription = document.getElementById('result-description');

title.textContent = location.title;
image.src = '../data-pictures/' + location.image;
description.textContent = location.description;
const survivor = getSurvivor();

if (survivor.kit === 'tough-kit') {
    for (let index = 0; index < location.choices.toughKitChoices.length; index++) {
        const choice = location.choices.toughKitChoices[index];
        const choiceDOM = createChoice(choice);
        choices.appendChild(choiceDOM);
    }
} else if (survivor.kit === 'sneak-kit') {
    for (let index = 0; index < location.choices.sneakKitChoices.length; index++) {
        const choice = location.choices.sneakKitChoices[index];
        const choiceDOM = createChoice(choice);
        choices.appendChild(choiceDOM);
    }
} else {
    for (let index = 0; index < location.choices.itemKitChoices.length; index++) {
        const choice = location.choices.itemKitChoices[index];
        const choiceDOM = createChoice(choice);
        choices.appendChild(choiceDOM);
    }}

choiceForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(choiceForm);
    const choiceId = formData.get('choice');
    const survivor = getSurvivor();
    let choice = null;

    if (survivor.kit === 'tough-kit') {
        choice = findById(location.choices.toughKitChoices, choiceId);
    } else if (survivor.kit === 'sneak-kit') {
        choice = findById(location.choices.sneakKitChoices, choiceId);
    } else {
        choice = findById(location.choices.itemKitChoices, choiceId);
    }

    scoreLocation(choice, locationId, survivor);
    saveSurvivor(survivor);

    choiceForm.classList.add('hidden');
    result.classList.remove('hidden');
    resultDescription.textContent = choice.result;
});