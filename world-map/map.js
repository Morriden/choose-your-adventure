import { getSurvivor, loadSurvivor, isDead } from '../utils/utils.js';
import locations from '../data/locations.js';

const survivor = getSurvivor();

const nav = document.getElementById('locations')