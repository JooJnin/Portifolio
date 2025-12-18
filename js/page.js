import header from "./modules/header.js";
import main from "./modules/main.js"
import footer from "./modules/footer.js";
import { makeCards } from "./modules/components/card.js";

const cards = [
    {
        id : "noflex",
        href : "./pages/noflex",
        img: "./assets/flexless.jpeg",
        p : "Página Flexless"    
    },
    {
        id : "flex",
        href : "./pages/flex",
        img: "./assets/flex.jpeg",
        p : "Página Flex"
    }
]

const page = [];

page.push(header());
page.push(main());
page.push(footer());

page.forEach(e => document.querySelector("body").appendChild(e));

const portifolio = document.getElementById("portifolio");
const divCard = document.createElement("div");
divCard.classList.add("cardConteiner")

cards.forEach((card) => {
    divCard.appendChild(makeCards(card));
});

portifolio.appendChild(divCard);