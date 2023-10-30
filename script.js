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
    },
    {
        logo: "Starbucks",
        a: "./images/starbucks logo correct.png",
        b: "./images/starbucks logo wrong.png",
        answer: "a"
    },
    {
        logo: "Nutella",
        a: "./images/nutella logo correct.png",
        b: "./images/nutella logo wrong.png",
        answer: "a"
    },
    {
        logo: "Google",
        a: "./images/google logo correct.png",
        b: "./images/google logo wrong.png",
        answer: "a"
    },
    {
        logo: "Fila",
        a: "./images/fila logo correct.jpg",
        b: "./images/fila logo wrong.jpg.png",
        answer: "a"
    },
    {
        logo: "Dominos",
        a: "./images/dominos logo correct.png",
        b: "./images/dominos logo wring.png",
        answer: "a"
    },
    {
        logo: "Whatsapp",
        a: "./images/whatsapp logo correct.png",
        b: "./images/whatsapp logo wrong.png",
        answer: "a"
    },
    {
        logo: "Android",
        a: "./images/android logo correct.png",
        b: "./images/android logo wrong.png",
        answer: "a"
    },
    {
        logo: "FedEx",
        a: "./images/fedex logo correct.png",
        b: "./images/fedex logo wrong.png",
        answer: "a"
    },
];

var currInd;
const logo = document.getElementById("name");
const img1 = document.getElementById("logo1");
const img2 = document.getElementById("logo2");
var rN = Math.floor(Math.random() * gameObj.length);
function start() {
    currInd = rN;
    shuffle();
    console.log(rN, "index", gameObj.length, "length");
    logo.innerHTML = gameObj[currInd].logo;
    document.getElementById("result").style.visibility = "hidden";
    document.getElementById("result").style.opacity = "0";
}

function shuffle() {
    let shuffler = Math.floor(Math.random() * 2) + 0;
    if (shuffler == 0) {
        gameObj[currInd].answer = "a";
        img1.src = gameObj[currInd].a;
        img2.src = gameObj[currInd].b;
    } else {
        gameObj[currInd].answer = "b";
        img1.src = gameObj[currInd].b;
        img2.src = gameObj[currInd].a;
    }
}

function check(btn) {
    console.log("btn -->", btn.value);
    btn.value == gameObj[currInd].answer ? correct() : wrong();
    document.getElementById("result").style.visibility = "visible";
    document.getElementById("result").style.opacity = "1";
    
    function correct() {
        document.getElementById("ans").innerHTML = "Correct Answer";
        document.getElementById("status").setAttribute("class", "fa fa-check");
        document.getElementById("status").style.backgroundColor = "green";
        setTimeout(() => {
            if (rN < gameObj.length - 1) {
                rN++;
                start();
            } else {
                rN = 0;
                start();
            }
        }, 1000);
    }
    
    function wrong() {
        document.getElementById("ans").innerHTML = `Wrong! Correct Answer is ${gameObj[currInd].answer}`;
        document.getElementById("status").setAttribute("class", "fa fa-xmark");
        document.getElementById("status").style.backgroundColor = "red";
        setTimeout(() => {
            if (rN < gameObj.length - 1) {
                rN++;
                start();
            } else {
                rN = 0;
                start();
            }
        }, 1000);
    }
}

start();