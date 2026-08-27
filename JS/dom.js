// "use strict";

console.log("Hello DOM JS")


const obj = document.getElementById("title")
console.log(obj)

obj.innerText = "Hello DOM JS"

obj.style.backgroundColor = "red"
obj.style.height = "150px"
// const obj1= document.getElementsByClassName("ani-container")

// console.log(obj1)


const newEle = document.createElement("h2")
newEle.setAttribute("id", "newTitle")
newEle.innerText = "Hello DOM JS"
newEle.style.backgroundColor = "blue"
obj.appendChild(newEle)
console.log(newEle)

const newEle1 = document.getElementById("newTitle")


function xyz() {
    var num1 = 10
    console.log("Function Called")
    console.log(num1, 'Num1 Value')
}

xyz()

if (true) {

    // var num1 = 10
    // console.log(num1, 'Num1 Value')
}

// console.log(num1, 'Num1 Value')


// DOM EVENTS



// const button = document.querySelector("button")

// button.onclick=function(){
//     console.log("Button Clicked1111")
// }

// button.onclick=function(){
//     console.log("Button Clicked222222")
// }


const button = document.getElementById("clickBtn")
button.addEventListener("click", handleClickBtn)


function handleClickBtn() {
    console.log("Button Clicked")
    alert("Button Clicked")
}



const inputField = document.getElementById("inputField")

console.log(inputField.value)

inputField.addEventListener("change", handleInputChange)
function handleInputChange() {
    console.log('New wali change', inputField.value)
}

// console.log(animalName, 'Animal name')

// console.log(animalName, 'Animal name')

let animalName = "Dog"

// console.log(animalName, 'Animal name')


// Hoisting

console.log(var1, 'Var1 Value')

var var1 = 'data';

console.log(var1, 'Var1 Value')

// function hoisting






function var1Func() {
    console.log("Var1 Function Called")
    var stdName = "Umair"
    function innerFunc() {
        console.log(stdName, 'Ye inner FUnction Call hua ha')
    }

    innerFunc()
}


var1Func()


// Truthy and Falsy values

let mobileName = "Oppo";

if (!mobileName) {
    console.log(mobileName, 'This is Mobile Name')
}


// condition ? expressionIfTrue : expressionIfFalse

5 < 10 ? console.log("True statement 5 is greater")
    : console.log("10 greater than 5 false case executed")


//Template literals
const gstd = "Hamza"

const xyy = `${gstd} is a very 
good student`

console.log(xyy)

const stdArray = ["Umair", "Zainab", "Nirmal", "ALi"]

const zstdd = stdArray[1]
console.log(zstdd + '===', stdArray)


const [uStd, zstd, nstd, ...wholeStd] = stdArray

console.log(uStd + "===" + zstd + "====" + nstd, wholeStd)

// object destructure
const employeObj = {
    name: "Ameer Hamza",
    address: "Lahore",
    email: "ameerHamza@gmail.com"
}

const { name, address, ...bachi } = employeObj

console.log(name, address, bachi)


// type conversion

const basket1 = "20"
const basket2 = 10

const resultOfBaskets = Number(basket1) - basket2

console.log(resultOfBaskets, 'Result of baskets')


// spread and rest operator

const studArray = ["Umair", "Zainab", "Nirmal"]
const excelentStudents = ["ALi", "Fahad"]

const goodStudents = [...studArray, ...excelentStudents]

console.log(goodStudents, 'Good studends')


function restFunc(pram1, param2, ...params) {

    console.log(pram1, param2, ...params)
}

restFunc(10, 20, 30, 40, 50, 60)


const keyName = "Status"

const userOld = {
    name: "Ameer Hamza",
    [keyName]: "Active",
    obj: {
        adress: {
            greet() {
                console.log("Hello Greet")
                return
            }
        }
    }
}

// userOld["Xyz"] = "Active"

console.log(userOld)
console.log(userOld?.obj?.address?.greet())


// const prettyStudent = leftOperand ?? rightOperand

const prettyStudent = userOld?.obj?.adress?.greet() ?? "Nirmal"


console.log(prettyStudent + 'is a pretty Girl')

// confirm("Hello I am browser Alert")


setTimeout(() => {
    // alert("From setTimeOut")
}, 5000);


const intervalId = setInterval(() => {
    console.log("Hello Set Interval")
}, 2000)

clearInterval(intervalId)
console.log("After set time out console")


// local storage
// key value paris name=value

sessionStorage.setItem('name', 'Zainab Mirza')

console.log(sessionStorage.getItem('name'), '=========')

// local storage
localStorage.setItem('name', 'Nirmal Baig')

console.log(localStorage.getItem('name'), '========00000')

localStorage.removeItem('name')

console.log(localStorage.getItem('namee'), '========00000')

// console.log(xyzzzzz)

// if (true) {
//     try {

//     }
//     catch {

//     }
//     finally{

//     }
// }   


// code example 1
console.log('first')
console.log('second')

setTimeout(() => {
    console.log('This is MID')
}, 20000);

console.log('third')
console.log('fourth')

// Code example 2
console.log("Loading page...");
function heavyCalculation() {
    for (let i = 0; i < 5000000000; i++) {
    }
    console.log("Calculation finished!");
}
// heavyCalculation();

// This line will be completely BLOCKED for 5 seconds
console.log("Page is interactive!");





let promiseChecker = new Promise((resolve, reject) => {
    // reject("Promise not handled correctly...")
    resolve("Hello Umair Promise is resolved")
})

promiseChecker.then((res) => console.log(res, '============='))
    .catch((error) => console.log(error))
// .finally(() => alert("====="))


// async await

async function prinitStd() {
    const result = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const convertedToJson = await result.json()
    console.log(convertedToJson)

    // .then(response => response.json())
    // .then(json => console.log(json))

    // await fetch('https://jsonplaceholder.typicode.com/todos/2')
    //     .then(response => response.json())
    //     .then(json => console.log(json))

    return "Instrcutor Ameer Hamza"
}

console.log(prinitStd())




// OOP

class StudentClass {
    // properties
    name = undefined;
    age = undefined;
    // methods funciton wala work
    constructor(name, DOBYear) {
        // this.name = "Ameer Hamza"
        // console.log(name, 'Instcutor name and the age is', DOBYear)
        this.age = DOBYear;
        this.name = name
    }

    // gae calculator method
    ageCalculator() {
        const todayDate = new Date()
        const currentYear = todayDate.getFullYear();
        console.log(currentYear)
        const result = currentYear - this.age
        console.log(`Hey! ${this.name} you are ${result} years old`)
    }
}

const stdClass = new StudentClass("Umair", "2001")
stdClass.ageCalculator()
console.log(stdClass.name, 'Class instance')


// Pillars of OOP

// Inheritance
class Animal {
    // Encapsulation
    #balance = 300000
    eat() {
        console.log("Animal eating")
        console.log(this.#balance)
    }
}

class Dog extends Animal {
    bark() {
        console.log("BHAO BHAO BHAO")
    }
}

const dogClass = new Dog()

dogClass.bark()
dogClass.eat()

console.log(dogClass.balance, 'balance')


const animalClass = new Animal()
animalClass.eat()
