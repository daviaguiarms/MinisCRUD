import chalk from "chalk";

let usuarios = [
    { id: 1, nome: "Ana", idade: 25 },
    { id: 2, nome: "Carlos", idade: 30 }
];

const addUser = (id, nome, idade) => {
    usuarios.push({ id: id, nome: nome, idade: idade });
    console.log(chalk.green(`${nome} adicionado com sucesso`));
}

const updateUser = (id, newNome, newIdade) => {
    let achado = false
    usuarios.forEach((e) => {
        if (id === e.id) {
            achado = true
            e.nome = newNome
            e.idade = newIdade
            console.log(chalk.green('Dados do usuario alterados com sucesso'));
            console.log(usuarios);
        }
    })
    if (!achado) {
        console.log(chalk.red('Usuario nao encontrado'));

    }
}

const removerUser = (id) => {
    let index = usuarios.findIndex((e) => e.id === id)
    if (index !== -1) {
        usuarios.splice(index, 1)
        console.log(chalk.green('Usuario removido com sucesso'));
        console.log(usuarios);

    } else {
        console.log(chalk.red('Usuario não encontrado'));

    }
}

const listAll = () => {
    usuarios.forEach((e) => {
        console.log(chalk.blue(`${e.id} - ${e.nome} - Idade: ${e.idade} anos `));

    });
}

addUser(3, 'Davi', 20);
addUser(4, 'Savio', 24);
addUser(5, 'Robs', 39);
addUser(6, 'Albert', 80);
console.log(usuarios);
console.log(' ');
updateUser(5, 'Leon', 52)
console.log(' ');
removerUser(6);
console.log(' ');
listAll();


