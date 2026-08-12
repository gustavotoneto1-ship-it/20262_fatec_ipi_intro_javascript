//começando...
//objetos javascript
//objetos JSON (javascript object notation)
//uma concessionaria que tem cnpj e endereço. Endereço tem rua, bairro e número.
//a concessionaria tem uma coleção de veículos, Cada veículo tem marca, modelo e ano de fabricação
//uma calculadora realiza as operações de soma e subtração
/*const calculadora = {
    somar: function(a, b){
        return a + b
    },
    subtrair: (a, b) => a - b
}

console.log(calculadora.somar(1, 2))
console.log(calculadora.subtrair(2, 1))*/

/*let concessionaria = {
    cnpj: "12345678910",
    Endereco: {
        rua: "A",
        bairro: "B",
        numero: 20
    },
    veiculo: [{ marca: "Fiat", modelo: "Fiesta", anoFabricacao: 2014},
              { marca: "ford", modelo: "Ka", anoFabricacao: 2016}
    ]
}*/

//uma pessoa se chama Maria, tem 21 anos e mora na rua B, numero 20
/*let pessoa = {
    nome: "Maria",
    idade: 21,
    Endereco: {
        rua: "B",
        numero: 20
    }
}
console.log(pessoa.nome)
console.log(pessoa.idade)
console.log("Rua: " + pessoa.Endereco.rua)
console.log("Número: " + pessoa.Endereco.numero)*/

//uma pessoa chamada joão que tem 17 anos
/*let pessoa = {
    nome: "João", //par chave valor
    idade: 17 //par chave valor 
}

console.log(pessoa.nome)
console.log(pessoa['idade'])
console.log(pessoa.idade)*/

/*function eAgora(){
    let cont = 1
    function f1(cont){
        console.lof(cont++)
    }
    //cont++
    function f2(){
        console.log(cont)
    }
    return {f1, f2}
    //cont++
}
let res = eAgora()
res.f1()
res.f2()*/

//closure
/*function saudacoesFactory(saudacao, nome){
    return function(){
        return saudacao + ", " + nome
    }
}
const olaJoao = saudacoesFactory("Olá", "João")
const thauJoao = saudacoesFactory("Thau", "João")
console.log(olaJoao())
console.log(thauJoao())*/

/*function ola(){
    let nome = 'João'
    return function(){
        console.log("Olá, " + nome)
    }
}
let olaResult = ola()
olaResult()*/

/*function f(){
    let nome = 'João'
    function g(){
        console.log(nome)
    }
    g()
}
f()*/

/*let umaFuncao = function(){
    console.log("Fui armazenada em uma variável")
}
umaFuncao()

function f(funcao){ //passa outra funcao como parametro
    funcao()
}

function g(){
    function outraFuncao(){ //passa outra funcao como parametro
    funcao()
        console.log("fui criada por g")
    }
    return outraFuncao
}

f(function(){
    console.log("Estou sendo passada para f")
})

const gResult = g()
gResult()
g()()
f(g())*/

//funções
//funções regulares e arrow functions

//arrow functions
/*const hello = () => {console.log('Oi')}
hello()

const dobro = (n) => {return 2 * n}
console.log(dobro(5))

const ePar = (n) => {return n % 2 === 0}
console.log(ePar(4))

//funções regulares
/*const dobro = function (n){
    return 2 * n
}
console.log(dobro(2))

const triplo = function (n = 5){
    return 3 * n 
}
console.log(triplo())
console.log(triplo(10))

function soma(a, b){
    return a + b;
}
const res = soma(1, 2)
console.log(res)

/*function hello(){
    console.log('Oi')
}
hello()
function hello(nome){
    console.log('Oi ' + nome)
}
hello('Ana')*/

//vetores (bem parecidos com arraylist do java)
/*const nomes = ["Ana", "João", "Pedro", "Paulo"]
//filter
const apenasComA = nomes.filter((n) => { return n.startsWith("A")})
console.log(apenasComA)
//map
const iniciais = nomes.map((n) => { return n.charAt(0)})
console.log(iniciais)
//reduce
const valores = [1, 2, 3, 4]
const soma = valores.reduce((ac, v) => { return ac + v})
console.log(soma)
//every
const todosComecamComA = nomes.every((n) => { return n.startsWith("A")})
console.log(todosComecamComA)*/

/*v1 = []
v1[0] = 3.4
v1[10] = 2
v1[2] = "abc"
v1[102] = 1
console.log(v1.length)

v2 = [2, "abc", true]
console.log(v2)
for(let i = 0; i < v2.length; i++){
    console.log(v2[i])
}*/

//comparação
//== 
//===
/*console.log(1 == 1)
console.log(1 == '1')
console.log(1 === 1)
console.log(1 === '1')
console.log(true == 1)
console.log(1 == [1])
console.log(null == null)
console.log([] == false)
console.log(null == undefined)
console.log([] == [])*/

//const n1 = 2
//const n2 = '3'
//coerção implicita
//const n3 = n1 + n2
//console.log(n3)
//coerção explicita
//const n4 = n1 + Number(n2)
//console.log(n4)

//const, let, var (declaração de variáveis obs: não é tipada)
//hoist: içanento
//let idade = 18
//console.log("Oi, " + nome)
//if (idade >= 18){
    //let nome = "João"
    //console.log("Parabéns, " + nome + ". Você pode dirigir")
//}
//console.log("Até mais, " + nome)

//var linguagem = "Javascript"
//console.log("Aprendendo " + linguagem)
//var linguagem = "Java"
//console.log("Aprendendo " + linguagem)

//var nome = 'José'  
//console.log(nome)
//nome = "João"
//console.log(nome)

//let nome = "Ana"
//console.log(nome)
//nome = "Ana Maria"
//console.log(nome)

//const nome = 'José'
//console.log(nome)
//nome = 'João'

//a = 2 //não há tipo de variável, a aponta para um objeto de algum tipo
//console.log(typeof(a))
//a = "abc"
//console.log(typeof(a))
//a.falar()