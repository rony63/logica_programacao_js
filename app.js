alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = parseInt(prompt('Escolha um número máximo para o jogo'));
let numeroSecreto = parseInt(Math.random() * numeroMaximo);

console.log(numeroSecreto);
let chute;
let tentativas = 1;
// Enquanto o chute não for igual ao n.s.
while(chute != numeroSecreto){
    chute = parseInt(prompt(`Escolha um número entre 1 e ${numeroMaximo}`));
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if(numeroSecreto > chute) {
            alert(`O número secreto é maior que ${chute}`);
        }else {
            alert(`O número secreto é menor que ${chute}`);
        }
        tentativas++;
    }
}

if(tentativas > 1){
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas!`);
}else {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa!`);
}
