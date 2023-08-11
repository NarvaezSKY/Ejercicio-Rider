function miNota(nota1,nota2,nota3){

    let arrayNotas=[]
    arrayNotas.push(parseFloat(nota1))
    arrayNotas.push(parseFloat(nota2))
    arrayNotas.push(parseFloat(nota3))

    funcion2(arrayNotas, funcion3)
    
}

function funcion2(arrayNotas, funcion3){

    let suma=0
    arrayNotas.forEach(element => {
        suma=suma+element/3
    });

    console.log(suma)
    console.log(funcion3(arrayNotas))

}

function funcion3(arrayNotas){
    
    let porcentaje1=arrayNotas[0]*0.33
    let porcentaje2=arrayNotas[1]*0.33
    let porcentaje3=arrayNotas[2]*0.33
    let arrayPorcentajes=[]

    arrayPorcentajes.push(porcentaje1)
    arrayPorcentajes.push(porcentaje2)
    arrayPorcentajes.push(porcentaje3)
    return arrayPorcentajes
 
}


















































// let notas=0
// //const definitiva=(arrayNotas)=> (arrayNotas.forEach(element => (console.log(notas=notas+element/arrayNotas.lenght))))
// const definitiva=(arrayNotas)=> (arrayNotas.forEach(element => (console.log(notas=notas+element/arrayNotas.lenght))))

// // const definitiva=()=>5


// // ()=>{}


// function definitiva(arrayNotas){

// let notas=0
// for(let i=0; i<arrayNotas.length; i++){
//   notas +=   arrayNotas[i]

// }

// let nota=0
// arrayNotas.forEach(element => {
//     nota=nota+element
// });




// // console.log(nota / arrayNotas.length)
// // return notas;

// }




