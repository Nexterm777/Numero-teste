alert("Bem-Vindo a porra do meu desafio de merda");
let numeroMaximo = 1000;  
let numeroSecreto = parseInt(Math.random()*numeroMaximo+1);
let chute;
let tentativa = 1  
while(chute!=numeroSecreto){
        chute=prompt(`escolha o numero de 1 a ${numeroMaximo}`);
        if (chute==numeroSecreto){
          break;
        }else{
                if (chute<numeroSecreto){
                    alert(`seu burro,o numero é maior que ${chute}`);
            }else{
                    alert(`seu jugue,o numero e menor que ${chute}`); 
             }  
            tentativa++ ;}
         }  let palavraTentativa = tentativa > 1 ? "tentativas" : "tentativa"
         alert(`parabéns por acertar,agora você descobriu a quantidade de rolas que você aguenta sem se engasgar,${numeroSecreto} é muita rola pra pouca boca,em quantia de ${tentativa} ${palavraTentativa}`);
