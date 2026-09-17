function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}function respostaSelecionada(opcaoSelecionada){
    atual++;
    mostraPergunta();
}
mostraPergunta();let atual = 0;
let perguntaAtual;
let historiaFinal = "";function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal = afirmacoes;
    atual++;
    mostraPergunta();
}
mostraPergunta();botao.addEventListener("click", function () {
  respostaSelecionada(opcao);
});botao.addEventListener("click", () => respostaSelecionada(opcao));function respostaSelecionada(opcaoSelecionada) {
  atual++;
  mostraPergunta();
}function respostaSelecionada(opcaoSelecionada) {
  const afirmacoes = opcaoSelecionada.afirmacoes;
  atual++;
  mostraPergunta();
}let atual = 0;
let perguntaAtual;
let historiaFinal = "";function respostaSelecionada(opcaoSelecionada) {
  const afirmacoes = opcaoSelecionada.afirmacoes;
  historiaFinal += afirmacoes + " ";
  atual++;
  mostraPergunta();
}
