const clientes = []

const addCliente = (nome, idade) => {
    clientes.push({ nome: nome, idade: idade })
}

const listClientes = () => {
    clientes.forEach((cli) => {
        console.log(`Cliente: ${cli.nome} - Idade: ${cli.idade}`);

    })
}

const updateCliente = (nome, newIdade) => {
    let existe = false
    clientes.forEach((cliente) => {
        if (nome === cliente.nome) {
            existe = true
            cliente.idade = newIdade
            console.log(`Idade do ${cliente.nome} atualizada com sucesso`);

        }
    })

    if (!existe) {
        console.log('Esse cliente nao existe');

    }
}

const removeCliente = (nome) => {
    let index = clientes.findIndex((i) => i.nome === nome)
    if (index !== -1) {
        clientes.splice(index, 1)
        console.log(`Cliente removido com sucesso`);

    } else {
        console.log('Cliente não encontrado');

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

