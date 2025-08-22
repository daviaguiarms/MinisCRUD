const products = [
    { produto: 'Oleo', preco: 15, qtd: 2 },
    { produto: 'Gas', preco: 180, qtd: 1 },
    { produto: 'Arroz', preco: 20, qtd: 4 },
    { produto: 'Feijao', preco: 30, qtd: 3 },
    { produto: 'Milho', preco: 10, qtd: 5 },
    { produto: 'Macarrao', preco: 8, qtd: 6 }
];

const carrinho = []

const addProduto = (produto, qtd) => {
    let achado = false
    products.forEach((item) => {
        if (produto === item.produto) {
            achado = true
            let valor = qtd * item.preco
            carrinho.push({ nome: produto, quantidade: qtd, total: valor });
            console.log(`${produto} adicionado ao carrinho com sucesso`);

        }

    })

    if (!achado) {
        console.log('Produto nao encontrado');

    }
}

const removerItem = (produto) => {
    let index = carrinho.findIndex((i) => i.nome === produto)
    if (index !== -1) {
        carrinho.splice(index, 1)
        console.log(`${produto} removido com sucesso`);

    } else {
        console.log('Produto nao encontrado');

    }
}

const totalCarrinho = () => {
    let total = carrinho.reduce((acum, som) => acum + som.total, 0);
    console.log(`O valor total do carrinho é de R$${total.toFixed(2)}`);

}

const limparCarrinho = () => {
    let tamanho = carrinho.length
    carrinho.splice(0, tamanho)
    console.log('Compra finalizada');

}

addProduto('Arroz', 2);
addProduto('Macarrao', 3);
addProduto('Oleo', 4);
addProduto('Milho', 10);
console.log(carrinho);
console.log(' ');
removerItem('Oleo');
console.log(carrinho);
console.log(' ');
totalCarrinho();
console.log(' ');
limparCarrinho();
console.log(carrinho);







