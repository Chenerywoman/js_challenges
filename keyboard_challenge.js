// challenge at codewars: https://www.codewars.com/kata/5a5032f4fd56cb958e00007a/javascript

const tvRemote = word => {
    const keyBoard = [
         ['a', 'b', 'c', 'd', 'e', 1, 2, 3],
         ['f', 'g', 'h', 'i', 'j', 4, 5, 6],
         ['k', 'l', 'm', 'n', 'o', 7, 8, 9],
         ['p', 'q', 'r', 's', 't', '.', '@', 0],
         ['u', 'v', 'w', 'x', 'y', 'z', '_', '/']
     ]
 
     let presses = 0;
     presses += word.length;  // Ok keypress for each character
 
     const letters = [...word];
     const startingCharacter = 'a';
 
     const getPosition = (arrayOfArrays, character) => {
         const row = arrayOfArrays.findIndex(row => row.includes(character));
         const column = arrayOfArrays[row].findIndex(char => char === character);
         return [row, column]
     }
 
     let [startingCharacterRow, startingCharacterColumn] = getPosition(keyBoard, startingCharacter);
 
     letters.forEach(char => {
         let [targetRow,targetColumn] = getPosition(keyBoard, char);
         let horizontalMoves = Math.abs(targetRow - startingCharacterRow);
         let verticalMoves = Math.abs(targetColumn - startingCharacterColumn);
 
         startingCharacterRow = targetRow;
         startingCharacterColumn = targetColumn;
         presses += horizontalMoves + verticalMoves;
     });
 
     return presses;
 }