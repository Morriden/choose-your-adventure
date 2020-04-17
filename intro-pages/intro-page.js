import { makeSurvivor } from '../make-suvivor.js';
import { saveSurvivor } from '../utils/utils.js';


// grab the form from the home page
const survivorSignUp = document.getElementById('survivor-sign-up');

//when we click the submit button

survivorSignUp.addEventListener('submit', (event) => {
    event.preventDefault();

    //make a new form data object
    const formData = new FormData(survivorSignUp);
    //use the form data object to make a user
    const survivor = makeSurvivor(formData);
    //save it to local storage
    saveSurvivor(survivor);

    window.location.href = ('../world-map/map.html');

});


