// calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

let SP = 67836.43, 
RJ = 36678.66, 
MG = 29229.88, 
ES = 27165.48, 
outros = 19849.53
let total = SP + RJ + MG + ES + outros


let percentSp = SP*100/total
percentSp = percentSp.toFixed(2)
console.log(percentSp + "%")

let percentRJ = RJ*100/total
percentRJ = percentRJ.toFixed(2)
console.log(percentRJ + "%")

let percentMG = MG*100/total
percentMG = percentMG.toFixed(2)
console.log(percentMG + "%")

let percentES = ES*100/total
percentES = percentES.toFixed(2)
console.log(percentES + "%")

let percentOt = outros*100/total
percentOt = percentOt.toFixed(2)
console.log(percentOt + "%")