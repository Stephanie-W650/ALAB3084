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



let newArr3 = arr1.splice(0, 1)
console.log(newArr3)
let newArr4 = newArr3.flat()
console.log(newArr4)  //[ '42', 'Bruce', 'Knight', '41' ]


let newArr5 = arr1.splice(0, 1)
console.log(newArr5)
let newArr6 = newArr5.flat()
console.log(newArr6)  //[ '57', 'Bob', 'Fry Cook', '19' ]

let newArr7 = arr1.splice(0, 1)
console.log(newArr7)
let newArr8 = newArr7.flat()
console.log(newArr8)  //[ '63', 'Blaine', 'Quiz Master', '58' ]


let newArr9 = arr1.splice(0, 1)
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
let data =
  [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }
  ]

//Remove the last element from the sorted array.
  let data1= data.pop()
  console.log(data)

//Insert the following object at index 1

data2 = data.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" })
console.log(data)

//Add the following object to the end of the array:
data.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })
console.log(data)

//Finally, use the values of each object within the array and the array’s length property to calculate the average age of the group. This calculation should be accomplished using a loop.

let dataLength = data.length
console.log(dataLength)
let ages=[];
for (i = 0; i < dataLength; i++) {
     ages[i] = data[i].age 
    
}
console.log(ages) // [ '41', '25', '19', '58', '111' ]


//https://www.geeksforgeeks.org/how-to-convert-array-of-strings-to-array-of-numbers-in-javascript/#using-reduce-method-of-javascript
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
//we already learned Array, so I think we can use reduce
let newArray = ages.reduce( (acc, x ) => acc.concat(+x), [])
console.log(newArray) //[ 41, 25, 19, 58, 111 ]
//https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers

let sum = 0;
for (t = 0; t < ages.length; t++) {
  sum += newArray[t]
  console.log(sum)  //254
}


//Part 5: Full Circle

