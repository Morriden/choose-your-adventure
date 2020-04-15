import { saveSurvivor, getSurvivor, loadSurvivor, isDead, findById } from './utils/utils.js';
import locations from './data/locations.js';

loadSurvivor();

const searchParams = new URLSearchParams(window.location.search);
const locationId = searchParams.get('id');
const location = findById(locations, locationId);

if (!location) {
    window.location.href = ('../map.html');
}
