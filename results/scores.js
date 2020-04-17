export function scoreSupplies(supplies) {
    if (supplies === 0) {
        return 'doomed';
    } else if (supplies < 25) {
        return 'starving';
    } else if (supplies < 45) {
        return 'anotherWeek';
    } else {
        return 'communityUpgrade';
    }
}

export function scoreHealth(health) {
    if (health === 0) {
        return 'dead';
    } else if (health < 10) {
        return 'barelyAlive';
    } else if (health < 25) {
        return 'neverTheSame';
    } else {
        return 'goodAsNew';
    }
}