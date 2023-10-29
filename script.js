const gameObj = [
    {
        logo: "Pepsi",
        a: "./images/pepsi correct.png",
        b: "./images/pepsi wrong.png",
        answer: "a"
    },
    {
        logo: "Coca Cola",
        a: "./images/coca cola correct.jpg",
        b: "./images/coca cola wrong.jpg",
        answer: "a"
    },
    {
        logo: "Apple",
        a: "./images/apple correct.jpg",
        b: "./images/wrong-apple.jpg",
        answer: "a"
    },
    {
        logo: "Food Panda",
        a: "./images/food panda correct.jpg",
        b: "./images/food panda wrong.jpg",
        answer: "a"
    },
    {
        logo: "Snap Chat",
        a: "./images/snap chat correct.png",
        b: "./images/snap chat wrong.png",
        answer: "a"
    }
]
const logo = document.getElementById("name")
const img1 = document.getElementById("logo1")
const img2 = document.getElementById("logo2")
const button1 = document.getElementById("a")
const button2 = document.getElementById("b")
var currInd = 0

function start() {
    logo.innerHTML = gameObj[currInd].logo
    img1.src = gameObj[currInd].a
    img2.src = gameObj[currInd].b
}
function check(btn) {
    console.log("obj -->", gameObj[currInd].correct, "btn -->", btn.value);
    btn.value == gameObj[currInd].answer ? correct() : wrong()
    document.getElementById("result").style.display = "flex"
    document.getElementById("result").style.transform = "translate(-50%,1000)"
    function correct() {
        document.getElementById("ans").innerHTML = "Correct Answer"
        document.getElementById("status").setAttribute("class","fa fa-check")
        document.getElementById("status").style.backgroundColor = "green"
    }
    function wrong() {
        document.getElementById("ans").innerHTML = `Wrong! Correct Answer is ${gameObj[currInd].answer}`
        document.getElementById("status").setAttribute("class","fa fa-xmark")
        document.getElementById("status").style.backgroundColor = "red"
    }
}
start()