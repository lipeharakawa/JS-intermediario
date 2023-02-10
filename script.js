/*
//Manipulando datas
var data = new Date();

//Pegar apenas um elemento específico da data
console.log(data);
console.log(data.getHours());
console.log(data.getMinutes());
console.log(data.getSeconds());
console.log(data.getMilliseconds());
console.log(data.getDate());
console.log(data.getMonth());
console.log(data.getDay());
console.log(data.getFullYear());

//Criando nova data
var dataNova = new Date("february 06, 2023");
console.log(dataNova);

//Convertendo data em milissegundos
console.log(Date.parse(dataNova));

//Covertendo milissegundos em data
console.log(new Date (1675652400000))

//Covertendo data inglês para data nacional
var dataNacional = data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
console.log(dataNacional);

//Converte número da semana em dia da semana 
var diasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
console.log(diasSemana[dataNova.getDay()]);

//Converte número do mês em mês do ano
var mesesAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho",
"Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
console.log(mesesAno[data.getMonth()]);

//Temporizadores
//setInterval
//Executa uma determinada ação infinitamente
function acao(){
    document.write("Executando... <br>");
    }
    var timer = setInterval(acao, 1000);
//Para a ação
clearInterval(timer);

//Função anônima
var timer = setInterval(() => {
    document.write("Executando... <br>");
},1000)

clearInterval(timer);

//setTimeout
//Executa uma determinada ação por tempo determinado 
function acao(){
    document.write("Executando... <br>");
}
setTimeout(acao, 3000);

setTimeout(() => {
    document.write("Executando... <br>");
},3000)

//var - Permite alterar os dados ou acessar em qualquer bloco, permite ser criada vazia
var nome = "Felipe";

if(nome === "Felipe"){
    var curso = "JavaScript";
    console.log(curso);
}

console.log(curso);

var curso = "PHP";

console.log(curso);

//let - Permite somente alterar os dados ou acessar dentro do próprio bloco criado, permite ser criada vazia
var nome = "Felipe";

if(nome === "Felipe"){
    let curso = "JavaScript";
    console.log(curso);
    curso = "PHP";
    console.log(curso);
}

//const - Permite somente acessar os dados dentro do próprio bloco criado e não permite ser alterado em nenhum local, não permite ser criada vazia
var nome = "Felipe"

if(nome === "Felipe"){
    const curso = "JavaScript";
    console.log(curso);
//Vai dar erro
    //curso = "PHP";
    //console.log(curso);
}

//Objectos
let pessoa = {
    nome: "Matheus",
    idade: 26,
    altura: 1.85,
    cargo: "Programador FullStack"
};

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.altura);
console.log(pessoa.cargo);

//Lista com Objectos
let usuario = [
    {nome: "Matheus", cargo: "Programador", status: "Ativo"}, 
    {nome: "Maria", cargo: "Backend", status: "Ativo"},
    {nome: "Jose", cargo: "RH", status: "Ativo"}
];

console.log(usuario);
console.log(usuario[1]);
console.log(usuario[1].cargo);

//Template strings - concatenar strings
let nome = "Felipe";
let sobrenome = "Harakawa";
let idade = 25;

let mensagem1 = "Meu nome é " + nome + " " + sobrenome + " e eu tenho " + idade + " anos de idade"

let mensagem2 = `Meu nome é ${nome} ${sobrenome} e eu tenho ${idade} anos de idade`

console.log(mensagem1);
console.log(mensagem2);

//Desconstruindo objetos
let pessoa = {
    nome:"Matheus",
    sobrenome: "Fraga",
    empresa: "Sujeito Programador",
    cargo:"Programador FullStack"
};

console.log(pessoa.nome);
console.log(pessoa.cargo);

let nome = "Felipe";

const { nome:nomePessoa, cargo } = pessoa;

console.log(nomePessoa);
console.log(cargo);

//Desconstruindo array
let nomes = ["Matheus", "Lucas", "Henrique"];

console.log(nomes);
console.log(nomes[2]);

let {0:primeiraPessoa, 2:henrique} = nomes;

console.log(primeiraPessoa);
console.log(henrique);

let [primeiroNome, segundoNome] = nomes;

console.log(primeiroNome);
console.log(segundoNome);

//Spread Operator
let primeiros = [1 , 2, 3];

let numeros = [...primeiros, 4, 5, 10];

console.log(numeros);

let pessoa = {
    nome:  "Matheus",
    idade: 45,
    cargo: "RH"
};

let novaPessoa = {
    ...pessoa,
    status: "Ativo",
    cidade: "Campo Grande / MS",
    telefone: "(18)9029-14924"
};

console.log(novaPessoa);

function novoUsuario(info) {
    let dados = {
        ...info,
        status: "Ativo",
        inicio: "20/03/2023",
        codigo: "123123"
    };

    console.log(dados);
}

novoUsuario({ nome: "Jose", sobrenome: "Silva", cargo: "DEV" });

//Operador Rest
function convidados(...nomes){
    console.log("Seja Bem Vindo todos convidados")
    console.log(nomes);
}

convidados("Matheus", "Lucas", "Maria");

function sorteador(...numeros){
    console.log(numeros);

    const numeroGerado = Math.floor(Math.random() * numeros.length);

    console.log("Número gerado foi: " + numeros[numeroGerado]);
}

sorteador(1, 4, 5, 15, 25, 90, 55, 34)

//Operações em um array
//Map

let lista = ["Matheus", "Jose", "Maria"];

lista.map((item, index) => {
    console.log(`Passando: ${item} - Está na posição ${index} `);
});

//Operador Reduce = busca reduzir um array
let numeros = [5, 3, 2 ];

let total = numeros.reduce((acumulador, numero, indice, original) => {
    console.log(`${acumulador} - Total até o momento`);
    console.log(`${numero} - Valor autal`);
    console.log(`${indice} - indice atual`);
    console.log(`${original} - array original`);

    return acumulador += numero;
});

console.log("Total do Reduce: " + total);

//Operador Find

let listagem = [5, 3, "José", 2, "Matheus"]

let busca = listagem.find((item) => {
    if(item === "José"){
        return console.log("Item encontrado com sucesso");
    }
});
*/

//Operador Filter

let palavras = ["Matheus", "Ana", "José", "Ricardo Silva", "Sujeito Programador"];

let resultado = palavras.filter((item) => {
    return item.length <= 4;
})
 console.log(resultado);



























