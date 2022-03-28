function loop(n) {
    if (n >= 5) {
        return n
    }

    console,log(`loop: ${n}`)
    
    loop(n + 1)

}

loop(0)