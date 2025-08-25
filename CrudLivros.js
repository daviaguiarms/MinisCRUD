import chalk from "chalk";

let livros = [
    { id: 1, titulo: "O Hobbit", autor: "J.R.R. Tolkien" },
    { id: 2, titulo: "1984", autor: "George Orwell" }
];

const addBook = (id, titulo, autor) => {
    livros.push({ id: id, titulo: titulo, autor: autor });
    console.log(chalk.green(`Livro ${titulo} adicionado com sucesso`));

}

const removeBook = (id) => {
    let index = livros.findIndex((e) => e.id === id);
    if (index !== -1) {
        livros.splice(index, 1);
        console.log(chalk.green('Livro removido com sucesso'));
    } else {
        console.log(chalk.red('Livro não encontrado'));
    }
}

const updateBook = (id, newTitle, newAutor) => {
    let existe = false
    livros.forEach((e) => {
        if (e.id === id) {
            existe = true
            e.titulo = newTitle;
            e.autor = newAutor;
            console.log(chalk.green('Livro atualizado com sucesso'));
        }
    })

    if (!existe) {
        console.log(chalk.red('Livro não encontrado'));
    }
}

const listBooks = () => {
    livros.forEach((e) => {
        console.log(chalk.blue(`${e.id} - ${e.titulo} - Autor: ${e.autor}`));
    })
}

addBook(3, 'Harry Potter', 'J.K Rolling');
addBook(4, 'The magic', 'Carlos Filho');
addBook(5, 'IT', 'Stephen King');
addBook(6, 'Ice Toy', 'Tabata Muniz');
console.log(livros);
console.log(' ');
removeBook(6);
console.log(livros);
console.log(' ');
updateBook(5, 'O carvalho', 'Agatha Cristie');
console.log(livros);
console.log(' ');
listBooks();
