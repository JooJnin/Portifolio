export default function(){
    const main = document.createElement("main");
    const section = document.createElement("section");
    const aside = document.createElement("aside");

    

    main.appendChild(section);
    main.appendChild(aside);

    return main;
}