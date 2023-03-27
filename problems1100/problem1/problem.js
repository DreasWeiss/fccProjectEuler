function multiplesOf3and5(number) {
    let a = 0;
    for (let i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            a += i
        }
    }
    return a;
}

console.log(multiplesOf3and5(1000));
console.log(multiplesOf3and5(10));// should return a number.
console.log(multiplesOf3and5(49));// should return 543.
console.log(multiplesOf3and5(1000)); // should return 233168.
console.log(multiplesOf3and5(8456)); // should return 16687353.
console.log(multiplesOf3and5(19564)); // should return 89301183.