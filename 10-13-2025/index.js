// const printSum = (sum) => {
//     console.log(sum)
// }

// const handleCallback = (a, b) => {
//     printSum(a + b)
// }

// handleCallback(2, 3)

// //calback function is a funtion that is used to reduce the code and make a single line execution..
// // Structure of callback function

// const handleCallbackFunction = ((a, b) => a + b);
// console.log(handleCallbackFunction(3, 5))

// const handleCallbackPassFunction = (a, b, add) => {
//     add(a + b)
// }
// handleCallbackPassFunction(6, 7, (sum) => console.log(sum))


// Now we are under stainding the things of the settimeout function 
//structue of settimeout function it settimeout(()=>{},time delay in ms)

//one more function is available in this 
// name is setInterval(() => {

// }, interval);
// console.log("hello from js")
// setTimeout(()=>{
//     console.log("hello from time out 1")
// },0)
// console.log("hello from second")
// setTimeout(()=>{
//     console.log("hello from time out 2")
// },0)
// for(let i=0; i<20; i++)
//     console.log("hello from end")

// this topic learn form the event context and event queue

// function calc(a, b, operator) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (operator === "*")
//                 resolve(a * b)
//             if (operator === "+")
//                 resolve(a + b)
//             if (operator === "-")
//                 resolve(a - b)
//             if (operator === "/")
//                 resolve(a / b)
//         }, 0)
//     })
// }

// calc(10, 22, "*")
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

// const getUser = async () => {
//     try {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(data => console.log(data))
//             .catch(e=>console.log(e))
//     } catch (e) {
//         console.log(e)
//     }
// }
// getUser()

const getUser = async () => {
    try {
        const resposne = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await resposne.json()
        return data
    } catch (e) {
        console.log(e)
    }
}
const data =await getUser()
console.log(data)