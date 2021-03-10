

let peso = 100;
let altura = 1.52;

multiplicacion = altura*altura
IMC = peso/multiplicacion.toFixed(1);

if (IMC<=18.5) {
    console.log(`Su peso es: ${IMC} lo cual es insuficiente`);
}else if (IMC >= 18.6 && IMC < 24.9){
    console.log(`Su peso es: ${IMC} tiene Sobrepeso grado I`);
}else if (IMC >= 25 && IMC <= 26.9){
    console.log(`Su peso es: ${IMC} tiene sobrepeso grado II (preobesidad)`);
}else if (IMC >= 27 && IMC <= 29.9){
    console.log(`Su peso es: ${IMC} tiene obesidad tipo I`);
}else if (IMC >= 30 && IMC <= 34.9){
    console.log(`Su peso es: ${IMC} tiene obesidad tipo II`);
}else if (IMC >= 35 && IMC <= 39.9){
    console.log(`Su peso es: ${IMC} tiene Obesidad tipo III (morbida)`);
}else if (IMC >= 40 && IMC <= 49.9){
    console.log(`Su peso es: ${IMC} tiene obesidad tipo IV (Extrema)`);
}else if (IMC >= 50){
    console.log(`Su peso es: ${IMC} tiene mega obesidad`);
}