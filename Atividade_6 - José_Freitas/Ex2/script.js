function corN(){

    let cor = document.getElementById('in').value;
    let cor1 = cor.length;

    if(cor1 >= 10)

        document.getElementById('in').style.backgroundColor = 'green';

    else

        document.getElementById('in').style.backgroundColor = 'red';
}

function corT(){

    let cor = document.getElementById('it').value;
    let cor1 = cor.length;

    if(cor1 == 9)

        document.getElementById('it').style.backgroundColor = 'green';

    else

        document.getElementById('it').style.backgroundColor = 'red';
}

function corP(){

    let cor = document.getElementById('ip').value;
    let cor1 = cor.length;

    if(cor1 >= 8)

        document.getElementById('ip').style.backgroundColor = 'green';

    else

        document.getElementById('ip').style.backgroundColor = 'red';
}

function corPre(){

    if(document.getElementById('ip').value === document.getElementById('ip1').value)

        document.getElementById('ip1').style.backgroundColor = 'green';

    else

        document.getElementById('ip1').style.backgroundColor = 'red';
}


function trocaN(){

    document.getElementsByTagName("label").innerHTML=alert("Escreva o seu nome!");

}

function trocaT(){

    document.getElementsByTagName("label").innerHTML=alert("Escreva o seu Telefone!"); 
}

function trocaS(){

    document.getElementsByTagName("label").innerHTML=alert("Escreva o sua senha!"); 
}

function trocaRs(){

    document.getElementsByTagName("label").innerHTML=alert("Escreva de novo a sua senha!"); 
}

       
        