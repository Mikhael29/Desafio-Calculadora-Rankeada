function Calcular(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let categoria = "";

    if (vitorias < 10) {
        categoria = "Ferro";
    }
    else if (vitorias >= 11 && vitorias <= 20) {
        categoria = "Bronze";
    }
    else if (vitorias >= 21 && vitorias <= 50) {
        categoria = "Prata";
    }
    else if (vitorias >= 51 && vitorias <= 80) {
        categoria = "Ouro";
    }
    else if (vitorias >= 81 && vitorias <= 90) {
        categoria = "Diamante";
    }
    else if (vitorias >= 91 && vitorias <= 100) {
        categoria = "Lendário";
    }
    else {
        categoria = "Imortal";
    }

    return `O Herói tem um saldo de ${saldoVitorias} está no nível de ${categoria}`;
}

let resultado = Calcular(75, 20);
console.log(resultado); 
