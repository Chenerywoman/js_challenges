// challenge at codewars: https://www.codewars.com/kata/5a5032f4fd56cb958e00007a/javascript

const TVRemote = (word) => {

const keyBoard = [
    ['a', 'b', 'c', 'd', 'e', 1, 2, 3],
    ['f', 'g', 'h', 'i', 'j', 4, 5, 6],
    ['k', 'l', 'm', 'n', 'o', 4, 5, 6],
]

let presses = 0;

presses += word.length;  // Ok for each character

const letters = [...word];

const getPosition(character) => {
    let rowPosition 
}

const startingCharacter = 'a';

const startingCharacterRow = keyBoard.findIndex(row => row.includes(startingCharacter));

const startingCharacterColumn = keyBoard[startingCharacterRow].findIndex(item => item === startingCharacter);

const targetRow = keyboard.findIndex(row => row.includes(word));
const targetColumn = keyBoard[targetRow].findIndex(item => item === word);

const horizontalMoves = targetColumn - startingCharacterColumn;
const verticalRows = targetRow - startingCharacterRow;

presses = presses + horizontalMoves + verticalMoves;

return presses;
}