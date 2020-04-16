import { getSurvivor, loadSurvivor, isDead } from '../utils/utils.js';
import locations from '../data/locations.js';
import { createLocationLink } from '../mission/createlocationlink.js';
import { createCompletedLocation } from '../createcompletedlocation.js';

const survivor = getSurvivor();

const nav = document.getElementById('locations');

for (let i = 0; i < locations.length; i++) {
    const location = locations[i];
    let locationDisplay = null;

    if (survivor.completed[location.id]) {
        locationDisplay = createCompletedLocation(location);
    } else {
        locationDisplay = createLocationLink(location)
    }
    nav.appendChild(locationDisplay);
}