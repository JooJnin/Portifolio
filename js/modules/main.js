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
            'p'  : "Developer FullStack pela Alpha EdTech"
        },
        {
            'id'      : "portifolio",
            'h1'      : "Meu Portifólio",
        },
        {
            'id'      : "about",
            'h2'      : "Sobre mim",
            'h3'      : "Essa é a minha evolução em CSS",
            'p'       : "Hi! Sou um entusiasta de tecnologia e estou ingressando na área de desenvolvimento web. Aos 22 anos, curso Análise e Desenvolvimento de Sistemas (ADS), onde busco solidificar meus conhecimentos em lógica, arquitetura e boas práticas de programação. Atualmente, foco meus estudos no ecossistema HTML, CSS, JS, Python, buscando criar soluções que unam funcionalidade e uma excelente experiência para o usuário. Sou movido pelo aprendizado contínuo e pela resolução de problemas complexos através do código."
        }
    ]

    sections.forEach(secInfo => {
        const section = makeSection(secInfo);
        main.appendChild(section);
    })

    return main;
}