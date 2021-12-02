const wordSearch = (letters, word) => {
  if (letters.length === 0) {
      return false;
  }
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (l of horizontalJoin) {
      if (l.includes(word)) {
          return true;
      };
  };
  let verticalJoin = transpose(letters);
  verticalJoin = verticalJoin.map(ls => ls.join(''));
  for (l of verticalJoin) {
      if (l.includes(word)) {
          return true;
      };
  };
  return false;
};


const transpose = (matrix) => {
  let rows = [] // Build our columns
  for (let i = 0; i < matrix[0].length; i++) {
      let columns = []; // Build our rows
      for (let j = 0; j < matrix.length; j++) {
          columns.push(matrix[j][i]); // push matrix[j][i] into the rows
      }
      rows.push(columns); // push the rows into the columns
  }
  return rows
};

// const transpose = (matrix) => {
//     let newMatrix = [];
//     for (let row = 0; row < letters.length; row++) {
//         for (let column = 0; column < letters[row].length; column++) {
//             if (row === 0) {
//                 newMatrix.push([letters[row][column]]);
//             } else {
//                 newMatrix[column].push(letters[row][column]);
//             }
//         }
//     }
//     return newMatrix;
// }

// map[0].join('')
// horizontalJoin = horizontalJoin.map(ls => ls.join(''));


/*
1. Check horizontal (original code)
2. Create new empty array
3. Save transpose of original into empty array (newArray)
4. Map  newArray into string array, verticalCheck
5.Check horizontal ( original code but with vertical)
6. return false
*/

/*
let newMatrix = [];
for (let row = 0; row < matrix.length; row++) {
  for (let column = 0; column < matrix[row].length; column++) {
    if (row === 0) {
      newMatrix.push([matrix[row][column]]);
    } else {
      newMatrix[column].push(matrix[row][column]);
    }
  }
}
return newMatrix;
};
const printMatrix = (matrix) => {
for (const row of matrix) {
  for (const el of row) {
    process.stdout.write(el + " ");
  }
  process.stdout.write('\n');
}
};
*/


module.exports = wordSearch;


// const newWord = [];
//     for (l of newletter) {
//         const horizontalJoin = l.join('');
//         console.log(horizontalJoin);
//         for (const w of word) {
//             if (horizontalJoin.indexOf(w) > - 1 && newWord.indexOf(w) < 0) {
//                 newWord.push(w);
//                 break;
//             };
//         }
//     };
//     console.log(newWord.join(''));
//     return newWord.join('') === word;