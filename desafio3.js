let frontorback = window.prompt('Olá, você gostaria de ir para a área de Front-And ou Back-And?')

if (frontorback == "Front-And") {
    let reactorvue = window.prompt('Na área de Front-And, você prefere React ou Vue?');
    window.alert('Ambas as tecnologias são interessantes!');
    
} else if (frontorback == "Back-And") { 
    let corjava = window.prompt('Na área de Back-And, você prefere C# ou Java?');
    window.alert('Ambas as tecnologias são interessantes!');
    
}


//******************* */

let especialorfull = window.prompt('Voce deseja se especializar na área ou ser um programador Fullstack?')

if (especialorfull == "especializar"){
    window.alert('Muito bem! continue se especializando que tudo dará certo, você vai conseguir!!');
} else if ( especialorfull == "Fullstack" ){
    window.alert('Seu futuro será promissor, continue sua jornada!');
}

//***********************


n = 0

while (n < 5 ) {
     let tecnologia = window.prompt('Em qual tecnologia voce gostaria de se especializar?');
     tecnologia = tecnologia + ','
     n += 1
}

window.alert(tecnologia);

