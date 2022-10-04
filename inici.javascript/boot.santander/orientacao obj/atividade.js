//conta bancaria
//nesta atividade vamos testar o conceito de orientacao a objetos simulando a criacao de diversos tipos de contas bancarias
// e operacoes disponisveis em cada uma.
//1-  crie a classe contaBancaria, que possui os parametros : agencia,tipo e saldo.
//2-  dentro de contaBancaria,construa o getter e o setter de saldo.
//3-  dentro de contaBancaria,crie metodos sacar e depositar.
//4-  crie uma classe-filha chamada contaCorrente que herda todos esses parametros e ainda possua o parametro cartaoCredito.
//5-  ainda em contaCorrente construa o getter e o setter de cartaoCredito.
//6  -ainda em contaCorrente , faca com que o tipo `conta corrente` por padrao.
//7-  crie uma classe-filha chamada contaPoupanca que herda todos os parametros de contaBancaria 
//8-  crie uma classe-filha chamada contaUniversitaria que herda todos os parametros de contaBanacaria
//9-  faca que o metodos saq `saque`  de contaUniversitaria seja apenas capaz de sacar valores menores que 500 reais


class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;                                 // this sempre se refere ao objeto, no caso ContaBancaria
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;

    }

    set saldo(valor) {
        this._saldo = valor;
    }
    sacar(valor) {
        if (valor > this._saldo) {                                     //se o valor for maior do que a pessoa tem no saldo,
            return "operacao negada";                         // aparesera 'operacao negada'
        }
        this._saldo = this._saldo - valor;                 //  se nao , o valor sera descontato da conta
        return this._saldo;                                           // ai aparece pta pessoa ver como ficou o saldo depois do valor retirado

    }

    depositar(valor) {
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
}


class contaCorrente  extends ContaBancaria{
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero, );
        this.tipo = "corrente";
        this._cartaoCredito = cartaoCredito
    }
    get cartaoCredito() {
        return this._cartaoCredito;
    }
    set cartaoCredito(valor) {
        this._cartaoCredito = valor;

    }
}

class contaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = "poupanca";
    }

}
class contaUniversitaria extends ContaBancaria {
    constructor (agencia, numero) {
    super (agencia, numero);
    this.tipo = "universitaria" ;}

    sacar (valor) {                                            // sacar vai receber um valor
        if (valor > 500 ){                                  // e se esse valor  que for sacado seja maior que 500
            return "operacao negada!!"       // retorna "operacao negada"
        }
         
        this._saldo = this._saldo - valor;   // aqui a o valor vai ser retirado do saldo
        return this._saldo;                           // aqui o cliente pode ver o valor que ficou depois da retirada

    }

}
