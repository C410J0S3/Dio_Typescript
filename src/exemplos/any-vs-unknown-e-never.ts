let valor: unknown; 
valor = 5;
valor = 'Max';
let nome: string;

if (typeof valor === 'string') {
    nome = valor; 
}

let valorAny: any; 
valorAny = true;
valorAny = 10
nome = valorAny; 

function geradorDeErro(mensagem: string, codigoDeErro: number): never { // never quer dizer que o script pode ser interrompido ou nunca chegar a um fim
    throw {message: mensagem, errorCode: codigoDeErro }; // Nesse caso ele foi interrompido
}

geradorDeErro('Um erro ocorreu!', 500); 