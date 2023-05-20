import PersonBuilder from "./personBuilder.js";


let paolo = new PersonBuilder('paolo')
paolo
    .emailVerified(true)
    .makeAdmin()
    .status(false)
    .build()


console.log(paolo)