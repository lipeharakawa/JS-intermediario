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
*/

























