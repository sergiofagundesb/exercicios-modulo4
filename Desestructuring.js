//Destructuring - Desestruturação

//Tendo a função abaixo, usando destructuring, reescreva-a de modo que fique em apenas 2 linhas de código
//=======================================================[RESULTADO]=========================================================================
function handleMouseMove(event) {
    const {clientX, clientY} = event;
    console.log(clientX, clientY);
}

//A partir do objeto abaixo, instancie apenas uma variável que receba ​first utilizando destructuring
//=======================================================[RESULTADO]=========================================================================
const obj = { first: 'Jane', last: 'Doe' };
var {first,last} = obj;
console.log(first);

//A partir do objeto abaixo, instancie uma variavel que receba ​name​ e outra para colors
company = {
    name: 'ACME Corp',
    address: 'Nowhere st',
    products: {
      shirts: {
        colors: ['red', 'green', 'blue'],
      },
      socks: {
        colors: ['cyan', 'magenta', 'yellow'],
      },
    },
  };
var {name: nomeProduto} = company;
console.log(nomeProduto);
const {products: {shirts :{colors}}} = company
console.log(colors);

//Rest & Spread
//==============================================================[Resultado]====================================
//Utilizando um operador clone o objeto c​lothes
const clothes = {
    pants: { colors: ['black', 'blue'] },
    shirts: { colors: ['white', 'red'] },
    socks: { colors: ['beige', 'gray'] },
  };
  let objClone = { ...clothes };