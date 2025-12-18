import header from "./modules/header.js";
import main from "./modules/main.js"
import footer from "./modules/footer.js";

const page = [];

page.push(header());
page.push(main());
page.push(footer());


page.forEach(e => document.querySelector("body").appendChild(e));

