
const doSomethingAsync = _ => {
    return new Promise((resolve, reject) => {
        (true) ? setTimeout(() => {
            resolve('Do something')
        }, 3000)
        : reject(new Error('test error'))
    })
}

const something = async _ => {
    const some = await doSomethingAsync()
    console.log(some)
}

console.log('before')
something()
console.log('finish')