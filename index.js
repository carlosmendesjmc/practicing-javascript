console.log("Javascript Funcionando");

let firstName = 'Carlos';
console.log(firstName);

let lastName = 'Mendes';
console.log(lastName);

const price = 30;
//price = 20
console.log(price);

// Variavei tipo Primitivo
/*String, Numero, Boolean, undefined, null*/

let itemName = 'Pen'
let itemPrice = 3
let itemAvailable = true
let itemColor = 'red'
//itemName = null   -- Usado para zera o Valor desta variavel
//itemName = 'table' -- renomeando o valor da variavel zerada ou null / pode renomear aqui 
//itemPrice = 'dois'

//console.log(itemColor)
//console.log(typeof itemName)  //typeof - mostra no console o tipo da variavel se é string ou number
//console.log(typeof itemPrice)





// Variaveis tipo Referencia
// -- Objects, Array, Functions

//have three itens

//Object - Criando um Objeto - recebe na variavel 'pen' suas propriedades 
let pen = {
  itemName: 'pen',
  itemPrice: 3,
  itemAvailable: true,
  itemColor:'Blue'
}

pen.itemColor = 'red'  // alterando o valor de itemColor para 'red'  -- uma maneira de alterar o valor da propriedade de um object
console.log(pen)  // Mostra todos os valores do object
console.log(pen.itemPrice) //Mostra apenas o preço no console

//Lista -- Criando uma lista usando um array, cada valor é armazenado dentro de index - que começa no '0'
let friends = ['Jose', 'Carlos', 'Otavio', 'Maria', 'Joao']
friends[1] = 'Mendes'  // Alterando o valor do (item ou index) da lista chamando pelo index e renomeando o valor para 'Mendes'
console.log(friends)  // Mostra todos no console
console.log(friends[3])  //Mostra apenas o index 3 no console 'Maria' 



//Functions - Criando Funções
                    //Parametro 
function saleStatus(status, Total){
  console.log('Transaction ' + status + '! Total amount: $' + Total)
}
          //Argumento
saleStatus('Approved', 30)


function percentage10(price){
 return price - (price * 10 /100)
}
//uma maneira de passar o Valor e imprimir no console
let total = percentage10(20)
console.log(total)

// Segunda Maneir de passar o valor e imprimir

console.log(percentage10(20))


//Mundo dos operadores aritmeticos

let num1 = 3
let num2 = 2

// Uma Maneira de usar os valores e imprimir so  uma Variavel 'Total'
let totalNum1Num2 = num1 + num2
console.log(totalNum1Num2)

console.log(num1 + num2) 
console.log(num1 * num2)
console.log(num1 / num2)
console.log(num1 % num2)
console.log(num1 ** num2)

//Operador de incremento
//  ++

console.log(++totalNum1Num2)  // 5 + 1 = 6

//Operador de decremento / Obs o valor aqui da 5 porque acrecentei 1 antes
//  --
console.log(--totalNum1Num2)  // 6 -1 = 5


console.log(totalNum1Num2--) // '5 e 1 a -' aqui ainda imprimi 5 mais quando chamado na proxima requisição vale 4 porque o -- depois tira 1 
console.log(totalNum1Num2) //'5-1' = 4


console.log(num1) //'3'
num1++
console.log(num1) //'4'

num1 += 20

console.log(num1) //'24' pega valor de num1 ( 4 += 20 = 24 )

num1 -= 20
console.log(num1) //'4' pega valor de num1 ( 24 -= 20 = 4 )

// utilizando dessa forma eu consigo enxugar os codigo e otimizar tempo


// Como comparar um valor com o outro

console.log(num1 < 0)
console.log(num1 > 0)
console.log(num1 >= 0)
console.log(num1 <= 0)
console.log(num1 == 4)  // true porque 4 = 4
console.log(num1 != 4)
console.log(num1 == num2 ) // 'false'

let num3 = "4"

console.log(num1 === num3) //'false' strict Utilizando === ele verifica o valor e o typo, aqui tem uma String e um number
console.log(num1 == num3) // lose == verifica apenas o valor 


//Comparação se o limite da velocidade for maior que 110 = 'Above' if menor que 110 'Below'
let driver = 90
let speed = driver > 110 ? 'Above' : 'Below'
console.log(speed)


//Operdores Logicos
//and == &&      exemplo abaixo as duas condições precisa ser verdadeiras true
//or == ||       exemplo abaixo se uma das condições for verdadeiras true
// not == !      exemplo abaixo é o oposto de uma condição se pode votar nao pode viajar e se no pode votar então pode viajar

let temIdadeMinima = false
let temTituloDeEleitor = true

let podeVotar = temIdadeMinima || temTituloDeEleitor
console.log('Pode votar: ' + podeVotar)

let podeViajar = !podeVotar
console.log('Pode viajar: ' + podeViajar)

// Suponha que vou compar um carro e quero escolher a cor White, mais temos
// a outras cores la, se eu não definir mesmo assim quero que ele pegue o que tiver no estoque.

let corCliente = undefined
let corEstoque = 'black'
let corVendida = corCliente || corEstoque

console.log(corVendida)

//precedencia dos operadores

let num4 = 3 + 4 * 2
console.log(num4)

//if e else

let driverSpeed = 40
if (driverSpeed > 110) {
  console.log('Driving too fast')}
else if (driverSpeed >= 40 && driverSpeed <= 110) {
  console.log('Speed ok')}
else {
  console.log('Drinving too slow')}


  //switch e case

  let airport = 'JFK'
  switch (airport){
    case 'MCO':
      console.log('Orlando') 
      break
    case 'JFK':
      console.log('John F. Kennedy')
      break
    case 'SEA':
      console.log('Seattle')
      break
    default:
      console.log('Not found')
  }


  //For Loop  - Aqui nos temos uma variavel i que começa com 0 uma condição
for (i = 0; i <= 10; i++){
  console.log('Numero', i)
}


//While Lopo -- mesmo resultado acima mais usamos uma variavel externa
i = 1
while (i <= 10){
  console.log('Numero', i)
  i++
}

//Do While loop -- difereça é que ele verifica pra depois execultar
i = 0
do{
  console.log('Numero', i)
  i++
}while(i <=10)

  // For in loop  -- usado pra verificar dentro de um objeto

  const myCar = {
    model: 'BMW',
    year: '2023',
    km: 68000
  }
 // apartir desta variavel i verifique em myCar 
  for(let i in myCar)
    console.log(i, myCar[i])

  //for of loop -- usando em um array

  const friends1 = ['Jose', 'Ana', 'Carlos', 'Otavio']
  for(let i of friends1) // utilizando o 'of' na impressão no console nao aparece o index e sim apenas os valores de cada index
    console.log(i)

    //Adicionado o brack no  while loop em um ponto de parada especifico

    i = 1
while (i <= 10){
  if (i === 8) break
  console.log('Numero', i)
  i++
}

//Criando um um objeto, neste exemplo abaixo temos dois objetos criados 
//bookCriandoObjeto e bookCriandoObjeto1
const bookCriandoObjeto = {
  booktitle: 'Atomic Habits',
  bookAuthor: 'James Clear',
  bookPages: '306',
  bookchapters: {
    chap1: 'Fundamentals',
    chap2: '1st Law'
  },
  printBook: function() {
    console.log('Printing...')
  }
}
bookCriandoObjeto.printBook()

const bookCriandoObjeto1 = {
  booktitle: 'Think and grow rich',
  bookAuthor: 'Napolean',
  bookPages: '306',
  bookchapters: {
    chap1: 'Fundamentals',
    chap2: '1st Law'
  },
  printBook: function() {
    console.log('Printing...')
  }
}
bookCriandoObjeto1.printBook()