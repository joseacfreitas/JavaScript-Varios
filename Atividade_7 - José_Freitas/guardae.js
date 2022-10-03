window.onload = function() {

    let mudar = document.querySelector("#interruptor1");
    let mudar1 = document.querySelector("#interruptor2");
    let mudar2 = document.querySelector("#interruptor3");
    let mudar3 = document.querySelector("#interruptor4");
    let mudar4 = document.querySelector("#interruptor5");

    let div = document.querySelector("#int1");
    let div1 = document.querySelector("#int2");
    let div2 = document.querySelector("#int3");
    let div3 = document.querySelector("#int4");
    let div4 = document.querySelector("#int5");
   

    div.onclick = function() { 
        mudar.setAttribute('src', fechado);    
    }    

    div1.onclick = function() {  
        mudar1.setAttribute('src', aberto);
    }

    div2.onclick = function() {  
        mudar2.setAttribute('src', fechado);
    }

    div3.onclick = function() {  
        mudar3.setAttribute('src', fechado);
    }

    div4.onclick = function() {  
        mudar4.setAttribute('src', aberto);
    }

    div5.onclick = function() { 
        mudar.setAttribute('src', aberto);    
    }    

    div6.onclick = function() {  
        mudar1.setAttribute('src', fechado);
    }

    div7.onclick = function() {  
        mudar2.setAttribute('src', aberto);
    }

    div8.onclick = function() {  
        mudar3.setAttribute('src', aberto);
    }

    div9.onclick = function() {  
        mudar4.setAttribute('src', fechado);
    }
}

