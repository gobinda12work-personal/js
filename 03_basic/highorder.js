// for of loop is used in basically array , string , map
// for of loop can't be used in object
// for in loop is used to itterate the object
// for in loop is used in basically object, array, 
// for in loop can't be used in map

// uses of for of loop 

const arr= ["Gobinda", "Roman","Sahid", "Sonam"]

for (const item of arr) {
    // console.log(`The item of the array is, ${item}`)
    // console.log(arr.indexOf(item))
}

// const str = "Suraj Dada"

// for (const item of str) {
//     if(item === ' ') continue
//     console.log(item)
// }

const map = new Map()

map.set('In','India')
map.set('En','England')
map.set('Ch','China')
map.set('In','India')

// console.log(map)

// for (const [key,] of map) {
//     console.log(key)    // If you wanna only print the keys then use this syntax 
// }
// for (const [key,value] of map) {
//     console.log(key, ':-' ,value)
// }
// for (const [,value] of map) {
//     console.log(value)     // If you wanna only print the values then use this syntax
// }

const obj= {
    js: "javascript",
    py: "python",
    cpp: "c++",
    rb: "rubby"
}

// for (const key in obj) {
//     console.log(key)     // We use this syntax to print the keys only
// }

// for (const key in obj) {
//     console.log(obj[key])  // We can use this syntax to take the values of keys
//     console.log(obj.key)   // We cannot use this syntax to take the values of the keys
// }

const language = ["java", "py", "rb", "cpp"]

// for (const key in language) {
    // console.log(key)  // This syntax is used to access the keys of the array
//     console.log(language[key])   // This syntax is used to access the values of the array
// }


//++++++++++++++++ forEach method ++++++++++++++

const coding= ["java", "py", "rb", "js", "cpp"]

// coding.forEach(function (item){
//     console.log(item)
// })

// another way to do this 

// coding.forEach((item) => {
//     console.log(item)
// })

// function lang(item){
//     console.log(item)
// }

// coding.forEach(lang)   // We just have to pass the function as a parameter don't have to execute that

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr)
// })

// const mobiles= [
//     {
//         mobileName: "Redme",
//         type: "5G",
//         price: 20000
//     },
//     {
//         mobileName: "vivo",
//         type: "5G",
//         price: 25000
//     },
//     {
//         mobileName: "iphone",
//         type: "5G",
//         price: 60000
//     }
// ]

// mobiles.forEach( (item) => {
//     console.log(item.mobileName)
// })
