// Atividade: verifique de 2 maneiras diferentes se uma string é um palíndromo.
 
 //solução 1
function verificaPalindromo (string) {
    if (!string)             //se for diferente de string
    return "não existe" ;                //finaliza função
    if (string)
     return "sim, é um palindromo!";
   
    return string.split("").reverse().join("" ) === string;     //.split :divide uma string em uma lista ordenada de sub-strings.Essa lista é feita procurando padrões .
                                                    //se colocar nada dentro do parentese,ele divide todas as letras. //o .reverse: vai colocar as letras ao contrário.
}                                                  //o .join: vai juntar todas as palavras que foram separadas em arrays. Coloca em ("") pra ele retornar tudo juntinha.
                                                   // === string: checando se essa string revertida é igual a que vc recebeu.

             
    //solucao 2
     function verificaPalindromo2 (string) {
        if  (!string) return "nao existe";

        for (let i =0; i < string.length /  2;  i++)  {
            if(string [i] !==string[ string.length -1- i])  {
            return false;
            } 
         }      
            return true;  }                                                             // a string é basicamente a junção de vários caracteres.Então usamos o for para fazer um loop que percorre esses caracteres.
                                                                                                  // i=0  (índice), ele vai começar no índice 0.    
     console.log(verificaPalindromo2("123")) ;         //i< string.lenght/2; i++  ---> isse comando diz basicamente para ele percorrer ate a metade do c'odigo a partir do indice 0
                                                                                                // 0 , 0+1=1 ,(agora 1=i), 1+1=2 ... etc.

                                                                                                // fazemos a comparacao com o primeiro indice e o ultimo
                                                                                                // if string [i]!==(string.length -1- i) ---> se a letra do indice for diferente da ultima 
                                                                                               // return false ---->retorne falso
                                                                                              //(OBS: * o indice comeca no 0, porem a length comeca no indice 1) por isso tem que colocar (string.legth-1)      
                                                                                             //            *ex:  abba
                                                                                            //                      0123  ----> a length dela é 4,porém não existe indice 4 nessa palavra.Então fazemos 
                                                                                            //     (string.legth-1) =  nesse caso      (4-1=3)  ,assim obtemos o indice correto da nossa palavra
                                                                                 
                                                                        //(OBS 2:* ) string [i]!==(string.length -1- i)----> o por que (-i)?
                                                                        // para que assim vc possa comparar o indice equivalente a outra letra do final.
                                                                        // ex: abba
                                                                        //        0123 -----> comeco da funcao sempre no indice 0 fica:
                                                                        //                se string[0]!== (4-1-0=3) ou seja[ 0= a] for diferente de [3=a] ....
                                                                      //                   se string[1]!==(4-1-1=2) ou seja[1= b] for diferente de [ 2=b]...  e assim vai
                                                                    


                                                                          