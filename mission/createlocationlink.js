export function createLocationLink(location) {
    const link = document.createElement('a');
    link.classList.add('location');

    link.href = '../mission/mission.html?id=' + location.id;

    link.style.top = location.map.top;
    link.style.left = location.map.left;
    link.textContent = location.title;

    return link;
}