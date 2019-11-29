/* 
Asincronia y callbacks

function algoAsin(callback) {
    setTimeout ( () => {
        let x = 23
        callback(x)
    }, 2000)
}

algoAsin((x) => console.log(x)) */

function algoAsinc() {
    return new Promise( (resolve, reject) => {
        let n = Math.random()
        setTimeout( () => {
            if (n > 0.5) {
                // ok
                resolve(n)
            } else {
                // error
                reject(new Error(n))
            }
        }, 2000)
    })
}

// ES6

/* algoAsinc()
.then( response => console.log('Todo bien ' + response) )
.catch( error =>  console.error('Error ' + error.message) ) */

// ES2017 async / await


(async () => {
    try {
        let response  = await algoAsinc()  
        console.log('Todo bien ' + response)
    } catch (error) {
        console.error('Error ' + error.message)
    }
})()

