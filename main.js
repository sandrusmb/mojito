"use strict";

const picturesLeft = [
    "/images/limas-left.png",
    "/images/menta-left.png",
    "/images/bacardi-left.png",
    "/images/hielo-left.png",
    "/images/soda-left.png"
];

const ingredientsName = [
    "Lima con azúcar",
    "Hojas de menta",
    "Barcardi",
    "Hielo picado",
    "Soda",
]

const picturesRight = [
    "/images/limas-right.png",
    "/images/menta-right.png",
    "/images/bacardi-right.png",
    "/images/hielo-right.png"
];

const gameLeft = document.querySelector(".game-left");
let gameRight = document.querySelector(".game-right");
const game = document.querySelector(".game");
const info = document.querySelector(".info");
const footer = document.querySelector(".footer");

function createLeftImg() {
    if (picturesLeft.length > 0) {
        const leftImg = document.createElement("img");
        leftImg.classList.add("img-left");
        leftImg.draggable = "true";
        leftImg.src = `${picturesLeft[0]}`;
        leftImg.alt = `${ingredientsName[0]}`
        const textLeft = document.createElement("p");
        textLeft.innerHTML = `${ingredientsName[0]}`
        textLeft.classList.add("text-left");
        gameLeft.appendChild(leftImg);
        gameLeft.appendChild(textLeft);
        picturesLeft.splice(0, 1);
        ingredientsName.splice(0, 1);
    }
    else {
        gameLeft.classList.add("close");
        info.classList.add("close");
        info.classList.remove("info");
        info.classList.remove("covert");
        const title = document.querySelector(".title");
        title.innerHTML = "¡ENHORABUENA!";
        createButton();
    }
}

function createRightImg() {
    if (picturesRight.length > 0) {
        const rightImg = document.createElement("img");
        rightImg.classList.add("img-right");
        rightImg.classList.add("effect");
        rightImg.src = `${picturesRight[0]}`;
        gameRight.appendChild(rightImg);
        picturesRight.splice(0, 1);
    }
    else {
        deleteLeftImg();
        deleteRightImg();
        const rightFinal = document.createElement("img");
        rightFinal.classList.add("final");
        rightFinal.classList.add("effect");
        rightFinal.src = "images/vaso-final2.png";
        gameRight.appendChild(rightFinal);
        gameRight.classList.remove("game-right");
        rightFinal.classList.add("move");
        setTimeout(() => {
            createLights()
        }, 2000);
    }
}

function createGlass() {
    const glass = document.createElement("img");
    glass.classList.add("img-right");
    glass.src = "images/vaso-center.png";
    gameRight.appendChild(glass);
}

function createButton() {
    const btn = document.createElement("a");
    btn.classList.add("footer-btn");
    btn.href = "https://www.bacardi.com/es/es/";
    btn.target = "_blank";
    btn.innerText = "Ven a por tu mojito Bacardi";
    footer.appendChild(btn);
}

function createLights() {
    const divLight = document.createElement("div");
    divLight.classList.add("light-container");
    const lightOne = document.createElement("img");
    lightOne.src = "images/destello1.png";
    lightOne.classList.add("light1-right");
    divLight.appendChild(lightOne);
    setTimeout(() => {
        const lightTwo = document.createElement("img");
        lightTwo.src = "images/destello2.png";
        lightTwo.classList.add("light2-right");
        divLight.appendChild(lightTwo);
    }, 1000);
    gameRight.appendChild(divLight);
}

function deleteLeftImg() {
    gameLeft.innerHTML = "";
}

function deleteRightImg() {
    gameRight.innerHTML = "";
}

function handlerStart(ev) {
    console.log("start");
}

function handlerDrag(ev) {
    info.classList.add("covert");
}

function handlerOver(ev) {
    ev.preventDefault();
}

function handlerDrop(ev) {
    deleteLeftImg();
    createLeftImg();
    deleteRightImg();
    createGlass();
    createRightImg();
    info.classList.remove("covert");
}

gameLeft.addEventListener("dragstart", handlerStart);
gameLeft.addEventListener("drag", handlerDrag);
gameRight.addEventListener("dragover", handlerOver);
gameRight.addEventListener("drop", handlerDrop);

createLeftImg();