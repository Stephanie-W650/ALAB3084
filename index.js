//Part 2: Expanding Functionality
let csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
let rows = csv.split("\n")
console.log(rows)

console.log(rows.length)

const row1 = rows[0]
console.log(row1)
let cellOfRow1 = row1.split(',')
console.log(cellOfRow1)

let columns = cellOfRow1.length
console.log(columns)


let arr = [];


//way1

for (let i = 0; i < rows.length; i++) {
  arr[i] = rows[i].split(',');
// let column1 = arr[0]
// let column2 = arr[1]
// let column3 = arr[2]
// let column4 = arr[3]
// let column5 = arr[4]

}

console.log(arr)




////https://www.freecodecamp.org/news/javascript-2d-arrays/
// creating two-dimensional array - way 2
// for (let i = 0; i < rows.length; i++) {
//   arr[i] = rows[i].split(',');
//   //for (let j = 0; j < columns; j++) {

//   //}
// }

// console.log(arr);



// Part 3: Transforming Data
// https://www.geeksforgeeks.org/how-to-create-an-object-from-two-arrays-in-javascript/
 

let arr1 = [...arr]
console.log(arr1)
console.log("this is arr1")

let newArr1 = arr1.splice(0, 1)
console.log(newArr1) 
let newArr2 = newArr1.flat()
console.log(newArr2)  // [ 'ID', 'Name', 'Occupation', 'Age' ]



let newArr3 = arr1.splice(0,1)
console.log(newArr3)
let newArr4 = newArr3.flat()
console.log(newArr4)  //[ '42', 'Bruce', 'Knight', '41' ]


let newArr5 = arr1.splice(0,1)
console.log(newArr5)
let newArr6 = newArr5.flat()
console.log(newArr6)  //[ '57', 'Bob', 'Fry Cook', '19' ]

let newArr7 = arr1.splice(0,1)
console.log(newArr7)
let newArr8 = newArr7.flat()
console.log(newArr8)  //[ '63', 'Blaine', 'Quiz Master', '58' ]


let newArr9 = arr1.splice(0,1)
console.log(newArr9)
let newArr10 = newArr9.flat()
console.log(newArr10)  //[ '98', 'Bill', 'Doctor’s Assistant', '26' ]


const newArr11 = {};
newArr2.forEach((key, index) => {
  newArr11[key.toLowerCase()] = newArr4[index];
});
console.log(newArr11) //{ id: '42', name: 'Bruce', occupation: 'Knight', age: '41' }

const newArr12 = {}
newArr2.forEach((key, index) => {
  newArr12[key.toLowerCase()] = newArr6[index];
});
console.log(newArr12)  //{ id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19' }

const newArr13 = {}
newArr2.forEach((key, index) => {
  newArr13[key.toLowerCase()] = newArr8[index];
});
console.log(newArr13) //{ id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58' }

const newArr14 = {}
newArr2.forEach((key, index) => {
  newArr14[key.toLowerCase()] = newArr10[index];
});
console.log(newArr14)

let arrayF = []
arrayF.push(newArr11, newArr12, newArr13, newArr14)
console.log(arrayF)

//part 4 --Sorting and Manipulating Data