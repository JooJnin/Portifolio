//import parameters from "../parameters.js";

export function makeCards(obj){
    const a = document.createElement("a");
    const card = document.createElement("div");
    const p = document.createElement("p");
    const img = document.createElement("img");

    card.id = obj.id;
    card.classList.add("card");
    a.setAttribute("href", obj.href);
    a.setAttribute("target","_blank")
    p.textContent = obj.p;
    img.setAttribute("src",obj.img);
    
    
    card.appendChild(img);
    card.appendChild(p);
    a.appendChild(card);

    return a;
}