//atividade 2
//Troque todos os elementos pares e diferentes de zero de um array ,pelo numero 0.Se o array for vazio,retorne -1.
//Exemplo:
//imput --->[1,3,4,6,39,33,23,90]
//output--->[1,3,0,0,39,33,23,0]

function substituiPares ( array){     //array aqui serve somente para nomear a variavel
    if (!array.length) return -1;
    if (!array) return -1;

    for ( let i = 0;  i < array.length;   i++)   {         
             if ( array[i] ===0 )   {                                                            //se o indice desse arry for =0
                  console.log("voce ja e zero!!");                                  //aparece voce ja e zero        
     }        
  else if  (array[i] % 2===0)  {                                                           //se o indice do array for divisivel por 2 e o seu resto e igual a 0
             console.log("substituindo ${array[i]} por  0.... ");      // 
             array[i]= 0;      


     }                                           
    
    } 
      return array;
}
 let arr =[1, 3, 4, 6, 39, 33, 23, 90];
console.log( substituiPares(arr));
        
