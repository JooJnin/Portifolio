export function makeSection(sectionObj){
    
    const section = document.createElement("section");
    const sectionKeys = Object.keys(sectionObj);

    sectionKeys.forEach(key => {
        if (key === "id"){
            section.id = sectionObj[key];
        }else{
            const ele = document.createElement(key);
            ele.textContent = sectionObj[key];
            section.appendChild(ele);
        }
    })

    return section;
}