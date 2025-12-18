import { makeSection } from "./section.js"
// import { makeAside } from "./aside.js"

export default function(){
    const main = document.createElement("main");
    // const section = document.createElement("section");
    //const aside = document.createElement("aside");

    const sections = [
        {
            'id' : "introducao",
            'h2' : "Hello World!",
            'h1' : "Sou o Francisco Santos",
            'p'  : "Aspirante FullStack pela Alpha EdTech"
        },
        {
            'id'      : "portifolio",
            'h1'      : "Meu Portifólio",
        },
        {
            'id'      : "about",
            'h2'      : "Sobre mim",
            'h3'      : "Essa é a minha evolução em CSS",
            'p'       : "Hi! Sou um entusiasta de tecnologia. E estou ingressando na area de desenvolvimento web"
        }
    ]

    sections.forEach(secInfo => {
        const section = makeSection(secInfo);
        main.appendChild(section);
    })

    return main;
}