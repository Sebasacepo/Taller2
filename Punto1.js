/*1. Hacer un programa en JS para ayudar a un trabajador de
Postobón a saber cuál será su sueldo semanal, se sabe
que, si trabaja 40 horas o menos, se le pagará $20000
por hora, pero si trabaja más de 40 horas entonces las
horas extras se le pagarán a $25000 por hora. (Reciba el
número de horas del empleado)*/

console.log("Bienvenido a postobón")

const horaTraba=20000
const horaExtra=25000
let nroHora=45


if (nroHora<=40){
    console.log("no tiene horas extra trabajadas")
    PagaTotal=nroHora*horaTraba;
    console.log(`Su paga es de: ${PagaTotal}`);
}else if (nroHora>=41) {
    nroExtra= nroHora-40;
    valorHoraExtra=nroExtra*horaExtra
    nroHoraNoExtra=nroHora-nroExtra
    valorHorasLaborales=nroHoraNoExtra*horaTraba
    totalSalario=valorHoraExtra+valorHorasLaborales

    console.log(`Usted trabajó ${nroExtra} horas extra`); 
    console.log(`Valor de las horas extra: ${valorHoraExtra}`)
    console.log(`Horas laborales: ${nroHoraNoExtra}`)
    console.log(`Su salario es de: ${totalSalario} vaya a reclamar mijo`)
    

} 
