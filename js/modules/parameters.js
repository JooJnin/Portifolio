const params = {
    header: {
        navElements: {
            "Sobre"     : "#about",
            "Home"      : "#",
            "Serviços"  : "#portifolio",
            "Contato"   : "mailto:franciscosantos@gmail.com"
        }
    },
    footer : {
        text : "© Todos os direitos reservados a mim, 2025",
        navElements: {
            "Sobre"     : "#about",
            "Home"      : "#",
            "Serviços"  : "#portifolio",
            "Contato"   : "mailto:franciscosantos@gmail.com"
        }       
    }
}


export function getHeader(){
    return params.header;
}

export function getFooter(){
    return params.footer;
}
