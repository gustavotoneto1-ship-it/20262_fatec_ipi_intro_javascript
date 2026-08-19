//começando...

//1 + 2 + 3 + ... + (n-2) + (n - 1) + n
//promise
//se n for negativo, devolver uma promisse rejected, associada ao texto "apenas positivo"
const calculoRapidinho = (n) => {
    return n >= 0 ? Promise.resolve((n / 2) * (n + 1)) : Promise.reject("Apenas positivos")
}
//tratar ambos os casos usando then catch
calculoRapidinho(100)
.then(res => console.log(`Resultado: ${res}`))
.catch(erro => console.log(`Erro: ${erro}`))

// const calculoRapidinho = (n) => {
//     return Promise.resolve((n / 2) * (n + 1))
// }
// calculoRapidinho(100).then((res) => {
//     console.log(res)
// })
// console.log("terminando script principal...")

// function calculoDemorado(n){
//     return new Promise(function(resolve, reject){
//         let res = 0
//         for(let i = 1; i <= n; i++){
//             res += i
//         }
//         resolve(res)
//     })
// }
// //construção than/catch
// //calculoDemorado(100).then((resultado) => {console.log(resultado)})
// const auxiliar = calculoDemorado(100)
// auxiliar.then(function(res){
//     console.log(res)
// })

//CPU-Bound: calculos, continhas 
//IO-Bound: entrada e saída
//inferno de callbacks
/*const fs = require('fs') //file system
console.log("A")
const abrirArquivo = function (nomeArquivo){
    //definir uma função callback
    const exibirConteudo = function(erro, conteudo){
        if(erro){
            console.log(`Deu erro: ${erro}`)
        }
        else{
            console.log(conteudo.toString())
            const dobro = +conteudo.toString() * 2
            const finalizar = function(erro){
                if(erro){
                    console.log("Erro ao salvar o dobro")
                }
                else{
                    console.log("Salvou o dobro ok")
                }
                console.log("F")
            }
            fs.writeFile("dobro.txt", dobro.toString(), finalizar)
            console.log("E")
        }
        console.log("D")
    }
    //chamar a função de leitura do arquivo do módulo fs, entregando a callback como parametro
    fs.readFile(nomeArquivo, exibirConteudo)
    console.log("C")
}
abrirArquivo("arquivo.txt")
console.log("B")*/

/*console.log("Script principal comecou...")
setTimeout(() => {
    console.log("Dentro do timeout...")
}, 0)
const data = new Date().getTime() + 10000
while(new Date().getTime() <= data);
console.log("script principal terminou...")*/


/*function demorada(){
    const atualMais2Segundos = new Date().getTime() + 2000
    while(new Date().getTime() <= atualMais2Segundos);
    const d = 8 + 4
    return d
}
const a = 2 + 3
const b = 5 + 9
setTimeout(() => {
    const d = demorada()
    //interpolação (juntar)
    console.log(`d: ${d}`)
}, 500)
const e = 2 + a + b
console.log(`e: ${e}`)*/

/*const a = 2 + 7
const b = 5
console.log(a + b)*/

/*console.log("Eu primeiro...")
console.log("Agora eu")
console.log("Sempre vou ser a ultima...:(")*/

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