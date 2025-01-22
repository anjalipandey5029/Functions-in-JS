function Add(a,b){
    return a+b;
}

function Multiply(a, b, c){
    let sum = Add(a, b);
    let res = sum *c;
    return res;
} 

console.log(Multiply(3,4,2));