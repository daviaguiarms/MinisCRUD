import chalk from "chalk"

const clientes = []

const addCliente = (nome, idade) => {
    clientes.push({ nome: nome, idade: idade })
    console.log(chalk.green('Clientes adicionados com sucesso'));
    
}

const listClientes = () => {
    clientes.forEach((cli) => {
        console.log(chalk.blue(`Cliente: ${cli.nome} - Idade: ${cli.idade}`));

    })
}

const updateCliente = (nome, newIdade) => {
    let existe = false
    clientes.forEach((cliente) => {
        if (nome === cliente.nome) {
            existe = true
            cliente.idade = newIdade
            console.log(chalk.green(`Idade do ${cliente.nome} atualizada com sucesso`));

        }
    })

    if (!existe) {
        console.log(chalk.red('Esse cliente nao existe'));

    }
}

const removeCliente = (nome) => {
    let index = clientes.findIndex((i) => i.nome === nome)
    if (index !== -1) {
        clientes.splice(index, 1)
        console.log(chalk.green(`Cliente removido com sucesso`));

    } else {
        console.log(chalk.red('Cliente não encontrado'));

    }
}

addCliente('Davi', 20);
addCliente('Carlos', 24);
addCliente('Junior', 18);
console.log(clientes);
console.log(' ');
listClientes();
console.log(' ');
updateCliente('Carlos', 30)
console.log(clientes);
console.log(' ');
removeCliente('Junior')
console.log(clientes);

