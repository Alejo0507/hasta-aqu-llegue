export const calcularImc=(peso,altura)=>{
    let alturam=altura/100
    let imc=(peso/(alturam*alturam))
    return imc
}