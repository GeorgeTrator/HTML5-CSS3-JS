// Essa solução foi feita para 'rodar'
// no Neps Academy ou Juiz Online similar
                      // Cabeçalho necessário

//neps dá o arquivo
const fs = require("fs"); 
//neps dá a entrada (stdin) e o formato de caracter
const input = fs.readFileSync(0, "utf8"); 


// Explicação breve:
//.trim() remove espaços em branco no começo e no fim 
//.split(/\s+/) divide a entrada por espaços entre elas "1 2 3" fica " '1' '2' '3' " e 
//.map(Number) transforma cada uma das strings individuais em números.
const dados = input.trim().split(/\s+/).map(Number); 

let x = dados[dados.length - 1]
dados.pop()

if(dados.includes(x)){
    console.log("SIM")
}else {
    console.log("NAO")
}
                    