
if (window.SimpleSlide) {
    new SimpleSlide ({
        slide: "quote", // NOME DO SLIDE PRINCIPAL
        //nav: true, // SE DEVE OU NÃO MOSTRAR A NAVEGAÇÃO
        //auto: true, // SE O SLIDE DEVE PASSAR AUTOMATICAMENTE
        time: 5000, // TEMPO DE TRANSIÇÃO DOS SLIDES
    });
    
    new SimpleSlide ({
        slide: "portifolio", // NOME DO SLIDE PRINCIPAL
        nav: true, // SE DEVE OU NÃO MOSTRAR A NAVEGAÇÃO
        //auto: true, // SE O SLIDE DEVE PASSAR AUTOMATICAMENTE
        time: 5000, // TEMPO DE TRANSIÇÃO DOS SLIDES
    });
}

if (window.SimpleAnime){
    new SimpleAnime();
}