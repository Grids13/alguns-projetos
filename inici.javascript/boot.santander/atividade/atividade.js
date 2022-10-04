
function comparanumeros (num1,num2) {
   const primeirafrase =criaprimeirafrase(num1,num2);
   const segundafrase=criasegundafrase(num1,num2);}
    
      return `${primeirafrase}`, `${segundafrase}`


     function criaprimeirafrase (num1,num2){
       let saoiguais="";
       if (num1!==num2) {saoiguais='não'}
        
       return `os números  ${num1} e ${num2}, ${saoiguais} são iguais.` }

       function criasegundafrase(num1,num2){
        const soma =num1+num2;
           let resultado10='menor';
           let resultado20 ='menor';

           const compara10= soma>10;
           const compara20=soma>20;
       
           if(compara10){
            resultado10='maior'   }
             
          if(compara20){ 
            resultado20='maior'
          }
           return `sua soma é ${soma},que é ${resultado10} que 10, e ${resultado20} que é 20.`

           


       }


     





 

