import {charactersHealth, SortedHealth} from '../basic';


const charactersList = [    
    [{name: 'мечник', health: 10}, 'critical'],
    [{name: 'маг', health: 100}, 'healthy'],
    [{name: 'лучник', health: 40}, 'wounded']
]

const handler = test.each(charactersList)

handler ('testin character', (character, expected) => {
    const result = charactersHealth(character);
    expect(result).toBe(expected)
});



const charactersHealthList = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
]

const output = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
]

test('level of health', () => {
    // const result = SortByHealth(charactersHealthList);  
    expect(SortedHealth(charactersHealthList)).toEqual(output);
  });