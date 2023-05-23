export function charactersHealth(character) {
    if (character.health < 15)
        { return 'critical' };
    if (character.health > 50)
        { return 'healthy' };
    return 'wounded'
}

export function SortedHealth(charlist) {
    charlist.sort((a, b) => a.health > b.health ? -1 : 1)
    return charlist
}