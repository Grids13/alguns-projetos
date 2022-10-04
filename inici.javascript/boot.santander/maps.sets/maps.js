//crie uma funcao que retorna o nome dos membros de um map que tem o papel de "admin" no sistema
// 1 - crie uma funcao getAdmin que recebe um map;
//2 - Crie um map e popule-o com nomes de usuarios e seus papeis no sistema ( Ex: "Luis" => "Admin");
//  3 -  Dentro de getAdmin,utilize o loop for...of para retornar uma lista com nomes dos usuarios que sao administradores;


function getAdim(map)  {
    let Adm = [];                                      //declaramos a variavel adm
    for ([key, value]  of  map)  {             //usando esse nomes podemos manipular a chave e o valor junto
                                       
    if ( value === "Adm")   {                  // se o valor(lembrando que o valor 'e o que vem depois do nome aqui no caso)
        Adm.push (key);                       // key 'e o que equivale o nome da pessoa //vc chama o nome da pessoa caso o valor seja === adm
    }
}
return Adm;
}

const usuarios = new Map()
usuarios.set( "luis","Adm");                        //set no map serve para adicionar  valores
usuarios.set("Yngrid", "Adm");
usuarios.set("Fabricio","User ");
   console.log(getAdim(usuarios));