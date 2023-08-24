//Objetos

const arrayNovo = [1, 3, 5, 0];

const meuObjeto = {
    nome: 'Carlos',
    idade: 12,
    genero: 'M',
    estadoCivil: 2,
    temFilhos: true,
    telefones: ['13999998888', '11954991199'],
    endereco: {
        rua: 'Rua Brasil',
        numero: '12',
        bairro: 'Centro',
        cidade: 'Rio Grande',
        estado: 'SC'
    },
    falar: () => console.log('Falando...'),
    arrayNovo,
    andar() {
        console.log('Andando...')
    }
};

meuObjeto.dataNasc = '01/02/2006';
meuObjeto.temFilhos = false;

// Lendo objetos
//console.log(meuObjeto); // Objeto completo
console.log(meuObjeto.nome);
meuObjeto.falar();
//console.log(meuObjeto.endereco);
console.log(meuObjeto.endereco.estado);

// Array de objetos
// Funções modificadoras de array(forEach, forIn, forOf, map, filter, reduce, etc...);

const arrayDeObjetos = [];

arrayDeObjetos.push({
    nome: 'Luana',
    sobrenome: 'Bras',
    idade: 23
});

arrayDeObjetos.push({
    nome: 'Caique',
    sobrenome: 'Noronha',
    idade: 29
});

console.log(arrayDeObjetos);

const arrayNumeros = [5, 15, 25, 35, 45, 105];

// for (let valor of arrayNumeros) {
//     console.log(valor);
// }

arrayNumeros.forEach((numero, indice) => console.log(indice + '. ' +numero));

// Array gerado terá sempre o mesmo tamanho do original
const arrayDobro = arrayNumeros.map(numero => numero*2);

console.log(arrayNumeros);
console.log(arrayDobro);

// Array gerado terá sempre o mesmo tamanho ou será menor do que o original
const maioresQueVinte = arrayNumeros.filter(numero => numero > 20);

console.log(maioresQueVinte);

// Apenas um valor gerado 
const totalArray = arrayNumeros.reduce(
    (total, numero) => total += numero,
    0
);

console.log(totalArray);

const arrayLetras = ['B', 'R', 'A', 'S', 'I', 'L'];

// const texto = arrayLetras.reduce(
//     (palavra, letra) => palavra += letra,
//     ''
// );

console.log(arrayLetras.join(''));
console.log(arrayLetras.includes('Z'));
console.log(arrayLetras.findIndex(value => value === 'Z'));
console.log(arrayLetras.join('').replace('S', 'Z'));

const posicao = arrayLetras.findIndex(value => value === 'S');
arrayLetras[posicao] = 'Z';

console.log(arrayLetras);

// Juntar arrays

//concat
const arrayCompleto = [false, true, [22, 33]].concat(arrayNumeros, arrayLetras);

console.log(arrayCompleto);

//spread operator (...)
const arrayCompleto2 = [3, 11, true, ...arrayNumeros, ...arrayLetras];

console.log(arrayCompleto2);

console.log(arrayLetras.reverse());
    