import {getHeader} from "./parameters.js";
import navi from "./components/nav.js";

export default function(){
    //get parameters and build footer info and navi
    
    const header = document.createElement("header");
    const params = getHeader();
    // const nav = document.createElement("nav");
    const nav = navi(params.navElements);
    
    const divLogo = document.createElement("div");
    divLogo.classList.add("logo");

    header.appendChild(divLogo);
    header.appendChild(nav);


return header;
}
