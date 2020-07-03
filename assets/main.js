"use strict";

const getImage = "/images/limon-exprimido.png";
const getImage2 = "/images/menta-vaso2.png";
const cta = document.querySelector(".cta");
const coctelLeft = document.querySelector(".coctel-left");
const container = document.querySelector("#container");

function getCta() {
    const subtitle = document.createElement("p");
    subtitle.classList.add("subtitle");
    subtitle.innerHTML = "Arrástralo";
    const arrow = document.createElement("img");
    arrow.classList.add("arrow");
    const arrowImage = "/images/flecha3.png";
    const arrowAlt = "flecha";
    arrow.src = arrowImage;
    arrow.alt = arrowAlt;
    const cta = document.querySelector(".cta");
    cta.appendChild(subtitle);
    cta.appendChild(arrow);
}

getCta();

function getCoctelLeft() {
    const pointer = document.createElement("img");
    pointer.classList.add("pointer");
    pointer.src = "/images/pointer.png";
    pointer.alt = "cursor";
    const ingredient = document.createElement("img");
    ingredient.classList.add("ingredient");
    ingredient.src = "/images/limas.png";
    ingredient.alt = "limas";
    ingredient.draggable = "true";
    const text = document.createElement("p");
    text.classList.add("text");
    text.innerHTML = "Lima con azúcar";
    coctelLeft.appendChild(pointer);
    coctelLeft.appendChild(ingredient);
    coctelLeft.appendChild(text);
}

getCoctelLeft();

container.addEventListener("dragover", ev => {
    ev.preventDefault();
    console.log("Drag Over");
})

container.addEventListener("drop", ev => {
    const coctelRight = document.querySelector(".coctel-right");
    const img = document.createElement("img");
    img.src = getImage;
    img.classList.add("limonEffect");
    img.classList.add("glass");
    coctelRight.appendChild(img);
    cta.classList.add("js-hidden");
    coctelLeft.classList.add("js-hidden");
    console.log("Drop");

    setTimeout(() => {
        cta.classList.remove("js-hidden");
        const ingredient = document.querySelector(".ingredient");
        ingredient.src = "/images/menta.png";
        ingredient.alt = "menta";
        coctelLeft.classList.remove("js-hidden");
        const text = document.querySelector(".text");
        text.innerHTML = "Hojas de menta";
    }, 2000);
})







