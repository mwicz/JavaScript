let num = [5,3,9,1]
num.sort()


num[3]=6
num.push(10)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
/*
for(let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}*/

let pos = num.indexOf(5)
if(pos == -1){
    console.log('O valor não foi encontrado')
}else{
    console.log(`O valor está na posição ${pos}`)
}
