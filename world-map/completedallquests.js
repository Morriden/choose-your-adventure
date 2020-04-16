export function completedAllQuests(locations, survivor) {
    for (let i = 0; i < locations.length; i++) {
        const location = locations[i];

        if (!survivor.completed[location.id]) {
            return false;
        }
    }
    return true;
}