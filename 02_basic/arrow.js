const user ={
    username: 'Gobinda',
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
    }
}

// user.welcomeMessage()
// user.username= 'Ram'
// user.welcomeMessage()
// user.username= 'Sundar'
// user.welcomeMessage()

function gobin(){
    console.log(this)
}

// gobin()

// const gobin1 = function(){
//     console.log('Gobinda Barman')
// }
// gobin1()

// const gobin2= () => {
//     console.log("Radhe Radhe")
//     console.log(this)
// }

// gobin2()

// const add = (num1,num2) => num1+num2
// const add = (num1,num2) => (num1+num2)

// const add = (num1,num2) => ({username: 'Gobinda'})


// console.log(add(3,9))

//+++++++++++++++ IIFE (Immediately Invocked Function Expression) ++++++++++++++

// (function chai(){
//     console.log("Gobinda Barman")
// })();

// (() => {
//     console.log("Gobinda Barman Radhe")
// })()

