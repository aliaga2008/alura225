import { frases, fraseAleatoria } from "./utils.js";

const botao = document.getElementById("gerarFrase");
const fraseElemento = document.getElementById("frase");

botao.addEventListener("click", () => {
    let frase = fraseAleatoria(frases);

    // Exemplo de uso do replace
    frase = frase.replace("IA", "Inteligência Artificial");

    // Exemplo de uso do for...of para verificar palavras proibidas
    const proibidas = ["errado", "ruim"];
    for (const palavra of proibidas) {
        if (frase.includes(palavra)) {
            frase = "⚠️ Essa frase contém uma palavra restrita.";
            break;
        }
    }

    fraseElemento.textContent = frase;
});