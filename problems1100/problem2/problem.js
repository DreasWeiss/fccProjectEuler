function fiboEvenSum(n) {
    let fibo = [0, 1];
    for (let i = 2; i < n; i++) {
        fibo[i] = fibo[i - 2] + fibo[i - 1]
    }
    return fibo.filter(i => i % 2 === 0 && i <= n).reduce((acc, i) => acc + i, 0);
}


console.log(fiboEvenSum(10)); // should return 10.
console.log(fiboEvenSum(34)); // should return 44.
console.log(fiboEvenSum(60)); // should return 44.
console.log(fiboEvenSum(1000)); // should return 798.
console.log(fiboEvenSum(100000)); // should return 60696.
console.log(fiboEvenSum(4000000)); // should return 4613732.