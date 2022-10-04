//    Map :  pratique a sintaxe de multiplicaçao de numeros ,uma vez usando o parametro -THIS - de um objeto criado por você  e depois sem ele

//    Filter:  filtre e retorne todos os numeros pares de um array

//    Reduce:  1- Some todos os numeros de um array.
//                      2- Crie uma função  que recebe uma lista  de preços e um numero recebendo um saldo disponivel.Calcule qual vai ser o saldo final apos suntrair
//                            todos os preços da lista enviada.


const uva ={                         //criando os objetos
    value : 2,
}
const maca = {
    value = 3,
}
function mapComThis(arr) {            
    return arr.map(function(item)){
        item * this.value;
    }
}