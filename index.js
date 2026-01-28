function jogo(vitorias, derrotas) {
    return vitorias - derrotas;
}

function definirNivel(vitorias) {
    if (vitorias <= 10) {
        return "Ferro";
    } else if (vitorias <= 20) {
        return "Bronze";
    } else if (vitorias <= 50) {
        return "Prata";
    } else if (vitorias <= 80) {
        return "Ouro";
    } else if (vitorias <= 90) {
        return "Diamante";
    } else if (vitorias <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}


let vitorias = 700;
let derrotas = 600;

let saldoVitorias = jogo(vitorias, derrotas);
let nivel = definirNivel(vitorias);

console.log(`O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivel}`);
