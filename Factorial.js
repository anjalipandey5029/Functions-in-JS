function Factorial(num){
    let count = 2;
    let a = 0;
    let b = 1;
    process.stdout.write(a + " " + b);
    while (count <num) {
        let c = a+b;
       process.stdout.write(" " + c);
       a=b;
       b=c;
     count++;
    }
}
Factorial(10)