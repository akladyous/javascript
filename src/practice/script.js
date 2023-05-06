// import {userData} from "./todos_data.js"
// const users = usersData();

// let a1 = ["one", "two", "three", "four", "five", "one"];
// let a2 = ["six", "seven", "eight", "nine", "ten"];

// let o1 = { one: 1, two: 2, three: 3, four: 4, five: 5 };
// let o2 = { six: 6, seven: 7, eight: 8, nine: 9, ten: 10 };


// console.log(users)
// users.forEach(item => console.log(item))

// let countName = a1.reduce((accumulator, item)=>{
//     if(item in accumulator){
//         accumulator[item] ++
//     } else {
//         accumulator[item] = 1
//     }
//     return accumulator
// },{})
// console.log(countName)

// const removeDuplicates = a1.reduce((initialState, currentValue) =>{
//     if(initialState.indexOf(currentValue) === -1){
//         initialState.push(currentValue);
//     };
//     return initialState
// },[])
// console.log(removeDuplicates);
const req = {
    user: {
        first_name: "will",
        last_name: "smith",
        email: "will@123.com",
        gender: "male",
        ssn_number: "1234",
        single: true,
    },
};
let query = "UPDATE user SET "
let data = Object.entries(req.user)
// let result1 = data.reduce((previous, current, index) => {
//     return previous.concat(`${current[0]}=($${index}) `)
// }, query);

Object.keys(req.user).forEach((key, index) => {
    // console.log();
    query += `${key}=($${index + 1}) `
    // console.log(query);
});
query += " where id=();"

// "UPDATE users SET first_name=($2) WHERE id=($1)"

console.log(query)