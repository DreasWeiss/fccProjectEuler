function largestPrimeFactor(number) {
    let n = 2;
    while (n < number) {
        if (number % n === 0) {
            number /= n
        } else {
            n++
        }
    }
    return n;
}

console.log(largestPrimeFactor(13195));
console.log(largestPrimeFactor(2)); // should return a number.
console.log(largestPrimeFactor(2)); // should return 2.
console.log(largestPrimeFactor(3)); // should return 3.
console.log(largestPrimeFactor(5)); // should return 5.
console.log(largestPrimeFactor(7)); // should return 7.
console.log(largestPrimeFactor(8)); // should return 2.
console.log(largestPrimeFactor(13195)); // should return 29.
console.log(largestPrimeFactor(600851475143)); // should return 6857.