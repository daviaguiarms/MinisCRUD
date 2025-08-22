let funcionarios = [
    { id: 1, nome: "Carlos", cargo: "Dev Júnior" },
    { id: 2, nome: "Ana", cargo: "Designer" }
];

const addFunc = (id, nome, cargo) => {
    funcionarios.push({ id: id, nome: nome, cargo: cargo })
    console.log(`Funcionario ${nome} inserido com sucesso`);
    console.log(funcionarios);

}

const removeFuncionarios = (id) => {
    let index = funcionarios.findIndex((e) => id === e.id)
    if (index !== -1) {
        funcionarios.splice(index, 1)
        console.log(`Funcionario removido com sucesso`);
        console.log(funcionarios);

    }

}

const updateCargo = (id, cargo) => {
    let existe = false
    funcionarios.forEach((item) => {
        if (id === item.id) {
            existe = true
            item.cargo = cargo
            console.log(`Cargo do ${item.nome} alterado com sucesso`);
            console.log(funcionarios);

        }
    })

    if (!existe) {
        console.log('Funcionario nao encontrado');

    }
}

const listarTodos = () => {
    funcionarios.forEach((func) => {
        console.log(`${func.id} - ${func.nome} - Cargo: ${func.cargo}`);

    })
}


addFunc(3, 'Davi', 'Dev Sênior');
addFunc(4, 'Jorge', 'Gerente de vendas');
addFunc(5, 'Paulo', 'Dev pleno');
console.log(' ');
removeFuncionarios(5);
console.log(' ');
updateCargo(4, 'Dev front-end');
console.log(' ');
listarTodos();


