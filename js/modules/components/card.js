//import parameters from "../parameters.js";

export function makeCards(obj){
    const a = document.createElement("a");
    const card = document.createElement("div");
    const p = document.createElement("p");

    card.id = obj.id;
    card.classList.add("card");
    a.setAttribute("href", obj.href);
    p.textContent = obj.p;

    card.appendChild(p);
    a.appendChild(card);

    return a;
}