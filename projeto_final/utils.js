// Exporta lista de frases
export const frases = [
    "A IA pode ajudar a personalizar o aprendizado.",
    "Algoritmos são como receitas: passo a passo para chegar ao resultado.",
    "A tecnologia é uma ferramenta, não um substituto do professor.",
    "O pensamento computacional vai além da programação.",
    "Aprender a programar é aprender a resolver problemas."
];

// Função para pegar item aleatório da lista
export function fraseAleatoria(lista) {
    const indice = Math.floor(Math.random() * lista.length);
    return lista[indice];
}