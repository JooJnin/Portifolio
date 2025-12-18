import {getFooter} from "./parameters.js";
import navi from "./components/nav.js"


export default function(){
    //get parameters and build footer info and navi
    const footer =  document.createElement("footer");
    const footerParams = getFooter();
    const footerText = document.createElement("p");
    const logo = document.createElement("div");
    const nav = navi(footerParams.navElements);
    
    logo.classList.add("logo");
    
    footerText.textContent = footerParams.text
    
    
    
    footer.appendChild(logo);
    footer.appendChild(footerText);
    footer.appendChild(nav)

    return footer;
}