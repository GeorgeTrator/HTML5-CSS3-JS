let continuar = true;
while (continuar) {
    // let é parecido com "var"
    // na verdade, let é a forma moderna de declarar variáveis em js
    // e indica o escopo* da variável
    let estadoAtual = "alerta"; 
    let comando = prompt(
        "Digite um comando para o robô:\n" +
        "LIGAR | MOVER | BLOQUEAR | DESLIGAR"
    );

    switch (comando) {
        case "LIGAR":
            estadoAtual = "alerta";
            alert("Robô pronto. Estado: " + estadoAtual);
            break;

        case "MOVER":
            if (estadoAtual === "alerta") {
                estadoAtual = "andando";
                alert("Robô em movimento. Estado: " + estadoAtual);
            } else {
                alert("Não posso mover. Robô não está em alerta!");
            }
            break;

        case "BLOQUEAR":
            estadoAtual = "emergencia";
            alert("Alerta máximo! Estado: " + estadoAtual);
            break;

        case "DESLIGAR":
            estadoAtual = "parado";
            alert("Desligando... Estado: " + estadoAtual);
            break;

        default:
            alert("Comando não reconhecido pelo autômato.");
    }

    // Pergunta se quer repetir o programa
    let resposta = prompt("Deseja executar novamente? (SIM / NAO)");

    if (resposta !== "SIM") {
        continuar = false;
        alert("Programa encerrado.");
    }
}