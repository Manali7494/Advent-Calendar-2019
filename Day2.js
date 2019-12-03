let output = 0;
let numbers = [0, 0 ]
let data;


const part1 = (noun, verb) => {

  data = [1,noun,verb,3,1,1,2,3,1,3,4,3,1,5,0,3,2,10,1,19,1,19,6,23,2,13,23,27,1,27,13,31,1,9,31,35,1,35,9,39,1,39,5,43,2,6,43,47,1,47,6,51,2,51,9,55,2,55,13,59,1,59,6,63,1,10,63,67,2,67,9,71,2,6,71,75,1,75,5,79,2,79,10,83,1,5,83,87,2,9,87,91,1,5,91,95,2,13,95,99,1,99,10,103,1,103,2,107,1,107,6,0,99,2,14,0,0]

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
     output = data[0]; 
     numbers = [number1, number2]
    } else if (operation === 2) {
     data[position] = number1 * number2; 
     output = data[0]
     numbers = [number1, number2]
    }
  } 
 
 return data[0]
}

console.log(part1(0, 0))

const part2 = (value) => {
for (n = 0; n < 100; n++ ) {
  for(v = 0; v < 100; v++) {
    const output = part1(n, v)
    if (output === value) {
      return n * 100 + v
    }
  }  
}
}
console.log(part2(19690720))
