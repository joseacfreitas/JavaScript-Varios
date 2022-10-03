
let n1=prompt("Deseja calcular a tabuada de que número?") //Pedir ao usuario que insira um numero e guardar na variavel n1.

    function tabuada(){ //Funçao tabuada.

        let b=10; //Variavel para usar no ciclo For, determinar por quantos numeros multiplicar.

        document.write("Tabuada do "+ n1 + "<br><br>"); //Apresentar no ecra que tabuada esta a ser apresentada.

        for(let i=1; i<=b; i++){ //Ciclo For. 

            document.write(n1+" x "+i+" = "+n1*i+"<br>"); //Imprime a var n1(numero inserido) x a var i com o valor 1 e apresenta a multiplicaçao das duas variaveis, a cada passagem do ciclo acrescenta 1 à var i, até chegar ao valor da var b, neste caso até ao numero 10.
        }
    }
        