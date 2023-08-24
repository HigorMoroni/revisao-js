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