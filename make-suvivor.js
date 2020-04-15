export function makeSurvivor(formData) {
    const survivor = {
        name: formData.get('name'),
        kit: formData.get('kit'),
        health: 40,
        supplies: 0,
        completed: {}
    };

    return survivor;
}

