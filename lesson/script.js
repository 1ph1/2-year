// class User{
//     x_;
//     constructor(x) {
//         this.x=x
//     }

//     get x() {
//         console.log("from getter")
//         return this.x_ - 5
//     }

//     set x(x) {
//         console.log("setter")
//         this.x_ = x + 5
//     }
// }

// let user = new User(5)
// console.log(user.x_)


const container = document.querySelector(".container")
const button = document.querySelector(".btn")
const input = document.querySelector(".qwe")

button.addEventListener(`click`, function(event) {
    event.preventDefault()
    let x = input.value
    container.insertAdjacentHTML("beforeend", `<div>${x}</div>`)
})

