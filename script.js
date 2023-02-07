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









