export default function(elements){
    const nav = document.createElement("nav");
    const navElements = Object.keys(elements);

    navElements.forEach( key => {
        const a = document.createElement("a");
        a.textContent = key;
        a.setAttribute("href",elements[key])
        nav.appendChild(a);
    } )
    return nav;
}