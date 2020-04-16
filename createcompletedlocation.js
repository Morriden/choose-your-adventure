export function createCompletedLocation(location) {
    const span = document.createElement('span');
    span.classList.add(location);
    span.classList.add('completed');

    span.style.top = location.map.top;
    span.style.left = location.map.left;

    span.textContent = location.title;
    return span;
}