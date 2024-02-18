const opcoes = {
    "1": "Hortifruti",
    "2": "Laticínios",
    "3": "Carnes",
    "4": "Peixes",
    "5": "Aves",
    "6": "Fechar pedido"
};

const quantidade = {
    "Hortifruti" : 0,
    "Laticínios" : 0,
    "Carnes" : 0,
    "Peixes" : 0,
    "Aves" : 0
};

function pedido(){
while(true) {
    let escolha = prompt("Qual produto deseja comprar? (1)Hortifruti (2)Laticínios (3)Carnes (4)Peixes (5)Aves (6)Fechar pedido")

    if(escolha === "6"){
        break;
    }
    
    let quantosItem = Number(prompt("Quantos itens você deseja?"))
    if (quantosItem <= 0){
        continue;
    }

    let produto = opcoes[escolha]
    quantidade[produto] += quantosItem;
}
}

function maisQuantidade(){
let maiorProduto = ""
let  maiorQuantidade = -1

    for(let produto in quantidade){
        if(quantidade[produto] > maiorQuantidade){
            maiorProduto = produto;
            maiorQuantidade = quantidade[produto];
        }
        console.log(`O produto de maior quantidade é ${maiorProduto} com ${maiorQuantidade} itens.`)
    }
}

pedido()

maisQuantidade()
