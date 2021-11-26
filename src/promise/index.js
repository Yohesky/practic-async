const somethingWillHapped = _ => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey')
        }else{
            reject('Oops')
        }
    })
}

// somethingWillHapped().then(res => console.log(res)).catch(err => console.log(err))

const somethingWillHapped2 = _ => {
    return new Promise((resolve, reject) => {
        if(false){       

            setTimeout(() => {
                resolve('true')
            }, 2000);

        }else{
            const error = new Error('Whoops')
            reject(error)
        }
    })
}

// somethingWillHapped2().then(res => console.log(res)).catch(err => console.log(err))

Promise.allSettled([somethingWillHapped2(), somethingWillHapped()])
.then(res => {
    console.log('response array', res)
})
.catch(err => {
    console.log('err', err)
})