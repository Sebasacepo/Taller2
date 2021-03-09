/*1. Hacer un programa en JS para ayudar a un trabajador de
Postobón a saber cuál será su sueldo semanal, se sabe
que, si trabaja 40 horas o menos, se le pagará $20000
por hora, pero si trabaja más de 40 horas entonces las
horas extras se le pagarán a $25000 por hora. (Reciba el
número de horas del empleado)*/

console.log("Bienvenido a postobón")

let horaTraba=20000
let horaExtra=25000
let nroHora=20
let nroHoraExtra=20

if (nroHora<=40){
    console.log("no tiene horas extra trabajadas")
    PagaTotal=nroHora*horaTraba;
    console.log(`Su paga es de: ${PagaTotal}`);
}else if (nroHora>=41) {
    HoraExtra= nroHora-40;
    console.log(`Usted trabajó ${HoraExtra} horas extra`); 
    
} 
