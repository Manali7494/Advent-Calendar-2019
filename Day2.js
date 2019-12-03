/* Part 1 */

/* Part 1*/

const data = [2,4,4,5,99,0];


for (i = 0; i < data.length; i+= 4) {
 
  if (data[i] == 99) {
   break; 
  }
  
  const operation = data[i];
  
  const number1 = data[data[i + 1]]
  
  const number2 = data[data[i+ 2]];
  
  const position = data[i + 3];
  
  if (operation == 1) {
   data[position] = number1 + number2; 
  } else if (operation === 2) {
   data[position] = number1 * number2; 
  }
}

console.log(data);
