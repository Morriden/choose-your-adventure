//stringify and parsing

export function saveSurvivor(survivor) {
    const temp = JSON.stringify(survivor);
    localStorage.setItem('survivor', temp);
}


export function getSurvivor() {
    const temp = localStorage.getItem('survivor');
    if (!temp) return null;
    const survivor = JSON.parse('temp');
    return survivor;
}

export function loadSurvivor() {
    const name = document.getElementById('name');
    const health = document.getElementById('health');
    const supplies = document.getElementById('supplies');

    const survivor = getSurvivor();

    if (!survivor) {
        window.location.href = ('../intro-pages/intro-page.html');
    }

    name.textContent = survivor.name;
    supplies.textContent = survivor.supplies;

    if (isDead(survivor)) {
        health.textContent = 'X';
    } else {
        health.textContent = survivor.health;
    }
}

export function isDead(survivor) {
    return survivor.health <= 0;
}