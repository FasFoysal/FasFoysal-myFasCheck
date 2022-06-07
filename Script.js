"use strict";
// prompt what the time
let time = ("Whats the time not :");
let timeTest = time || "Blank";

if (timeTest == "Blank") {
    alert("Input the time")
} else {
    if (time >= 5 && time <= 12) {
        console.log("Good morning the time is now " + time);
    } else if (time >= 13 && time <= 17) {
        console.log("Good lunch the time is now " + time);
    } else if (time >= 17 && time <= 20) {
        console.log("Good evening the time is now " + time);
    } else if ((time => 20 && time <= 24) || (time >= 1 && time <= 4)) {
        console.log("Good night the time is now " + time);
    }
}

// while loop hello world
let whileLoop = 1;
let printWhileLoop = "";
while (whileLoop) {

    //printWhileLoop += "Hello world " + whileLoop;
    console.log("Hello world " + whileLoop);
    if (whileLoop == 10) {
        break
    }
    whileLoop++;
}
// for loop hello world

for (let forLoop = 1; forLoop <= 10; forLoop++) {
    console.log("--- Hello world " + forLoop);
}

// welcome test

function myFunction() {
    let pName = prompt("What is your name ")
    let pNamLoop = pName || "Blank";
    if (pNamLoop == "Blank") {
        return printLoopFunction(pName, pNamLoop);
    } else {
        return printFun(pName);
    }
}

function printLoopFunction(pName, pNamLoop) {
    while (true) {
        alert("Plz input your name");
        pName = prompt("What is your name ");
        pNamLoop = pName || "Blank";
        if (pNamLoop == "Blank") {
            continue;
        } else {
            return printFun(pName);
            break;
        }
    }
}

function printFun(pName) {
    let pNamC = "";
    for (let printName = 1; printName <= 25; printName++) {
        pNamC += "<hr> Hello " + pName + "-" + printName;
        const printId = document.getElementById("hello");
        printId.innerHTML = pNamC;
        printId.style.backgroundColor = "red";
        printId.style.color = "yellow";

        const welHidden = document.getElementById("welHide");
        welHidden.style.display = "block";
    }
}

function welHiden() {

    const divHide = document.getElementsByClassName("welcome");
    divHide[0].style.display = "none";
    alert("Thanks");
    const welHidden = document.getElementById("welHide");
    if (welHidden.style.display === "none") {
        welHidden.style.display = "block";
    } else {
        welHidden.style.display = "none";
    }
}