import chalk from 'chalk'

let tarefas = [
    { id: 1, descricao: "Estudar JS", concluida: false },
    { id: 2, descricao: "Fazer exercícios", concluida: true }
];

const addTarefa = (id, description, concluida) => {
    tarefas.push({ id: id, descricao: description, concluida: concluida });
    console.log(chalk.green(`Tarefa ${description} adicionada com sucesso`));

}

const removerTarefa = (id) => {
    let index = tarefas.findIndex((e) => e.id === id);
    if (index !== -1) {
        tarefas.splice(index, 1)
        console.log(chalk.green('Tarefa removida com sucesso'));
        console.log(tarefas);

    } else {
        console.log(chalk.red('Tarefa não encontrada'));

    }
}

const updateTarefa = (id, descricao) => {
    let achado = false
    tarefas.forEach((e) => {
        if (id === e.id) {
            achado = true
            e.descricao = descricao
            console.log(chalk.green('Tarefa atualizada com sucesso'));
            console.log(tarefas);

        }
    })

    if (!achado) {
        console.log(chalk.red('Tarefa não encontrada'));

    }
}

const listTarefas = () => {
    tarefas.forEach((e) => {
        console.log(`${e.id}: ${e.descricao}`);

    })
}

const concluirTarefa = (id) => {
    let index = tarefas.findIndex((e) => e.id === id);
    if (index !== -1) {
        tarefas[index].concluida = true
        console.log(chalk.green('Tarefa concluida com sucesso'));
        console.log(tarefas);


    } else {
        console.log(chalk.red('Tarefa nao encontrada'));

    }
}


addTarefa(3, 'Fazer projeto', false);
addTarefa(4, 'Fazer CRUD', true);
addTarefa(5, 'Fazer Lista de Arquivos', false);
addTarefa(6, 'Fazer projeto Alura', false);
console.log(tarefas);
console.log(' ');
removerTarefa(6);
console.log(' ');
updateTarefa(1, 'Estudar Node');
console.log(' ');
console.log(chalk.blue('Lista de tarefas: '));
listTarefas();
console.log(' ');
concluirTarefa(1);







