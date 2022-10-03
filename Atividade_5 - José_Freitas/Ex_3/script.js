
function data(){ // funçao data.

    now = new Date

    Dia_sem = new Array ("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado");

    Mes = new Array ("Janeiro", "Jevereiro", "Março", "Abril", "Maio", "Junho", "Agosto", "Outubro", "Novembro", "Dezembro");    

    document.write ("<h1>"+Dia_sem[now.getDay()] + ", " + now.getDate () + " de " + Mes[now.getMonth() ]   +  " de "  +     now.getFullYear () + ". </h1>")
    
    let ds=now.getDay();// variavel que vai receber dia da semana.

    if(ds==6)//codiçao, se dia da semana for igual a 6(Sabado).

        alert("Bom Sabado!!");//apresentar alerta.

    else if(ds==0)//codiçao, se dia da semana for igual a 0(Domingo). 
    
        alert("Santo Domingo!!");//apresentar alerta.

}