export interface Questao {
    questao: string;
    resposta: {opcao: string, correta: boolean} [];
    respondido: boolean;
}

