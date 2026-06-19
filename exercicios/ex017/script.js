let vel = parseFloat(prompt("Velocidade atual: "))

if(vel <= 40){
    alert("Velocidade baixa")
    console.log("Velocidade baixa")
} else if(vel > 40 && vel <= 80){
    alert("Velocidade ideal")
    console.log("Velocidade ideal")
} else {
    alert("Velocidade excessiva!")
    console.log("Velocidade excessiva")
}
