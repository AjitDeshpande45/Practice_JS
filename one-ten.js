function one_Ten() {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000)
    }
}

one_Ten();

