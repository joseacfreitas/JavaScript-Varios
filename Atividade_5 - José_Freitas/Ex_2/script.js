function Mostrar_pessoas(){

    let p1={Name:"Paulo", birthDays:1, birthMonth:1, birthYear:1976}
    let p2={Name:"Luisa", birthDays:5, birthMonth:7, birthYear:1996}
   
    //Funçao para criar objetos
    document.write(calcular(p1, p2));//Imprimir resultado no ecra.
}

function calcular(a,b){  // funçao para calcular pessoa mais velha.

    if(a.birthYear < b.birthYear)//comparaçao de ano de nascimento entre objeto a e b.
    {
        return a.Name;   
    } 

    else
    {
        if(a.birthYear == b.birthYear)//comparaçao se ano de nascimento entre objeto a e b sao iguais.
        {
            if(a.birthMonth < b.birthMonth)//comparaçao do Mes de nascimento entre objeto a e b.
            {
                return a.Name;   
            }
        }
        else
        {
            if(a.birthMonth == b.birthMonth)//comparaçao se Mes de nascimento entre objeto a e b sao iguais.
            {
                if(a.birthDays < b.birthDays)//comparaçao do dia de nascimento entre objeto a e b.
                {
                    return a.Name;
                }
            }    
            else
            {
                if(a.birthDays == b.birthDays)//comparaçao se dia de nascimento entre objeto a e b sao iguais.
                {
                    return a.Name + b.Name;
                }
            }
        } 
        return b.Name;
    }
                 
}

