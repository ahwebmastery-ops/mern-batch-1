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

    console.log(num1, 'Num1 Value')
