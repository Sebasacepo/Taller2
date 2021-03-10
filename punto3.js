console.log(`Bienvenido a spring step`)


let nrozap= 5;
let vlrZap=100000
const dto=0.10;
const dto2=0.20;
const dto3=0.30;

if (nrozap==3){
valor=nrozap*vlrZap
descuento=valor-(valor*dto)
console.log ("Valor a pagar menos el descuento es: "+ descuento )
}else if (nrozap==4 || nrozap==5){
    valor=nrozap*vlrZap
    descuento=valor-(valor*dto2)
    console.log ("Valor menos el descuento a pagar es: "+ descuento )
}else if (nrozap>5){
    valor=nrozap*vlrZap
    descuento=valor-(valor*dto3)
    console.log ("Valor menos descuento a pagar es: "+ descuento )
}
