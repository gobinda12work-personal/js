// singleton
// object.create

// object literals

const sym1= Symbol('id')

const user ={
    name: "Gobinda",
    age:20,
    location: "Siliguri",
    email:"gobin@gmail.com",
    isLogedIn: false,
    lastLoginDays: ["Monday", "Wednusday"],
    [sym1]: "gobin123"
}
// console.log(user.name)
// console.log(user['name'])
// console.log(typeof sym1)

// user.location= "Matigara"
// console.log(user)
// Object.freeze(user)
// user.location= "Balason"
// console.log(user)

user.phoneNumber= function(){
    console.log(8944952458)
    console.log(`My name is ${this.name}`)
}


// console.log(user)

// console.log(user.phoneNumber)
// console.log(user.phoneNumber())

const obj1= {
    a:1,
    b:2
}
const obj2= {
    b:3,
    c:4
}

// const obj3= Object.assign({},obj1,obj2)

// const obj3= {...obj1,...obj2}
// console.log(obj3)

// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))

// console.log(user.hasOwnProperty('name'))
// console.log(user.hasOwnProperty('Name'))


//***************** Desturcturing of Object *****************

const course= {
    courseName: "JS in Hindi",
    price: 999,
    courseInstructor: "Hitesh"
}

// course.courseInstructor

// const {courseInstructor}= course
// const {courseInstructor: instructor}= course

// console.log(courseInstructor)
// console.log(instructor)