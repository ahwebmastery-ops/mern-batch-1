console.log('Hello Javascript')


// DataTypes

// scope container = value (datatype)

// scope 3 type (global, block, function level)
// var, let, const

var firstVar = 9039;
let letVar = `Hello Ameer 1234 "{:}`
let bool = true
let newVar = undefined;
let varNul = null;
{
    var firstVar = 'Umair'
    let letVar = 'Umair'
    console.log(letVar)
    const conVar = 23
    // conVar = 34
}
// console.log(conVar)

// console.log(letVar)


// non-primitive

const obj = {
    // key:value
    name: 'Ameer Hamza',
    cnic: 283736636363
}
obj.name = 'Umair'

console.log(obj.cnic)

// Array 
const arr = [10, , "Ameer", true, null, {}]

// Operators are symbols

// Type (Arithmetic, logical, comparison, assignment)
// Arithmatic [ -,+, \ ,*, ++ , -- ]


// let var1 = 10;
// let var2 = 20;
// var2++
// let var3 = var1 + var2
// console.log(var3)

// logical [ || , && , !] two boolean values ka comparison

//comparsion

let var1 = 20;
let var2 = 20;
let var3 = 10
// var3 = var3 + 20;
var3 *= 20;
console.log(var1 === var2)
console.log(var3)



// variables

// userName = value

// var, let , const 
// block, global, function


{
    let userName1 = "Nirmal"
    userName1 = "Ameer Hamza"
    var userName = "Zainab"

    // const
    const userName2 = "Nirmal-Zainab"
    // userName2="Ameer"
    console.log(userName1, 'Ye let wwala variable ha')
}

console.log(userName, 'Ye user name ha')


// Data types

// 2 - types primitve non-primitive
// primitve = 

var stringD = "Ameer Hamza 234" //string
var numberD = 2876534568765.9908 //number
var boolD = false  //boolean
var undeD = undefined  // undefined
var nullD = null //null
var id = Symbol("id")

//non-primitve

// Object, array


let obj1 = {
    // key:value
    name: "Nirmal",
    age: 21,
    address: '12d house'
}
console.log(obj1.name)


// array
let arr1 = [12, 'Ameer', undefined,]

console.log(arr1)


// Arithmetic Operators
let basketPrice = 20;
const clothPrice = 100;
const quantity = 10;
basketPrice = basketPrice + 2
const total = basketPrice + clothPrice;
console.log(total, 'Here is total price')
console.log(basketPrice * quantity)
console.log(2 ** 4)


// Assignment Operator;

let assignPaper = 10;

// assignPaper = assignPaper + 10
assignPaper += 10
assignPaper -= 5

console.log(assignPaper, 'Assign Paper')

// Comparison Operator

// comparsion between two value

let zaiMarks = '80';
let nirMarks = 80;

let resultOfMarks = zaiMarks === nirMarks;

console.log(resultOfMarks, "Marks of ===")


// Logical Boolean

const isZainabLoggedIn = true;
const isNirmalLoggedIn = true;
const isUmairLoggedIn = false;


// && leftOperant and rightOperant value true it will return true
// || leftOperant and rightOperant value false it will return false

console.log('Check LoggedIn', isZainabLoggedIn || isUmairLoggedIn)




// conditionl statements / control flow statements

// if , if-else , if-else-if , switch


// if (condition) {
//     // body
// }

let tName = 'Ameer'

// if (tName == 'Ameer') {
//     // alert("Hello I am conditional...!")
// }

let isUserLoggedIn = false

if (isUserLoggedIn) {
    // true case
    // alert('Please continue shopping')
} else {
    // false case 
    // alert('Please login yourself')
}

// if -else if 

const isLoggedInUser = false
const haveShippingDetails = true

if (isLoggedInUser) {
    console.log("Checking Shipping details")
}

else if (haveShippingDetails) {
    console.log('Have shipping details already')
}
else {
    console.log("Please register yourself")
}


// Switch

// switch(expression){
//     //  
// }


let today = undefined
// prompt("Please enter your favourite DAY...")

switch (today) {
    case "Monday":
        console.log(`Happy ${today}`)
        break;

    case "Tuesday":
        // console.log("Happy Tuesday...")
        console.log(`Happy ${today}`)
        break;

    case "Wednesday":
        // console.log("Happy Wednesday...")
        console.log(`Happy ${today}`)
        break;

    case "Thrusday":
        // console.log("Happy Thruday")
        console.log(`Happy ${today}`)
        break;

    case "Friday":
        console.log("Happy Friday")
        break;

    default:
        console.log("Please enter valid day name")
}


let tofee1 = 10
let tofee2 = 20

switch (tofee1) {

    case tofee1 < tofee2:
        console.log("Yessssssssssss")
        break;
    default:
        console.log("Toffe 2 is greater");

}



// Five types of LOOPS
// While , do-while, for-loop , for-if, for-of

let start = 0
let end = 10

// while (end > start) {
//     // block of statements
//     console.log(`Hello ${start}`)
//     start++
// }


// do {
//     console.log("Do-while Loop", start)
//     start++
// } while (start < end);


const arryNums = [2, 4, 6, 7, 3, 8, 9, 10]
let eventCounts = 0
let oddCounts = 0

// For Loop
for (let i = 0; i < arryNums.length; i++) {
    // Block of code
    if (arryNums[i] % 2 == 0) {
        eventCounts++
    }
    else {
        oddCounts++
    }
}

console.log("Even Counts are:", eventCounts)
console.log("ODD Counts are:", oddCounts)


// for-in and for-of loop

// for-in loop - used to iterate over the properties of an object

const employee = {
    id: 1,
    name: 'Ameer Hamza',
    department: 'IT',
    salary: 50000,
    age: 25,
    adress: {
        city: 'Lahore',
        town: 'Paragon',
        postalCode: 54000
    }
}

for (let xyz in employee) {
    console.log(xyz, ":", employee[xyz])
}

// for-of loop - used to iterate over the values of an iterable object (like an array)


const khaadiPrices = [1000, 4000, 5000, 6000, 7000, 8000]
const discountApply = 30;
const discountedPrices = []

for (let xyz of khaadiPrices) {
    // 1000 *30 / 100
    // 1000 - 300 = 700
    let discountedAmount = xyz * discountApply / 100
    const discountedPrice = xyz - discountedAmount
    console.log(discountedPrice, "Discounted Price")
    discountedPrices.push(discountedPrice)
}


xyz()

// functions
console.log('Before function declaration')

function xyz() {
    // function body
    console.log("Hello I am function")
}

console.log('After function declaration')

xyz()


// Pass arguments in function
function printGoodStudentName(std1 = "Ameer Hamza", std2 = "Ayesha", std3 = "Maham") {
    console.log(`Good Student Name is: ${std1}`)
    console.log(`Good Student Name is: ${std2}`)
    // return "Umair is not good student"
    console.log(`Good Student Name is: ${std3}`)
    // return "Han g 3no values mil gai han"
}

printGoodStudentName("Nirmal Qayyum ", "Zainab Mazhar", "Muhammad Umair")
console.log("===========================================")
// console.log(printGoodStudentName("Nirmal Qayyum Baig", "Zainab Mazhar", "Muhammad Umair"))
printGoodStudentName("Ali")
