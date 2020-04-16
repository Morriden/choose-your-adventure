export function createLocationLink(location) {
    const link = document.createElement('a');
    link.classList.add('locations');

    link.href = '../locations/?id=' + location.id;

    link.style.top = location.map.top;
    link.style.left = location.map.left;
    link.textContent = location.title;

    return link;
}