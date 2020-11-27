function fu(n) {
    if (n == 1) {
        return 1
    }
    return n * fu(n - 1)
}

console.log(fu(4));