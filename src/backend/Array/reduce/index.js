// let products = [
//     {item: 'monitor', price: 220},
//     {item: 'keyboard', price: 119},
//     {item: 'mouse', price: 75},
//     {item: 'usb', price: 25},
//     {item: 'webcam', price: 90}
// ];
// let people = [
//     {name: 'paul', age: 22},
//     {name: 'sarah', age: 19},
//     {name: 'alex', age: 19},
//     {name: 'jhon', age: 31},
//     {name: 'deborah', age: 18},
//     {name: 'mary', age: 22},
//     {name: 'jeo', age: 31}
// ]

// let total = products.reduce((accumulator, item) => {
//     console.log(`accumulator: ${accumulator} item: ${item.price}`)
//     console.log(``)
//     return accumulator += item.price;
// }, 0);

// let grouped = people.reduce((groupedPeople, person) => {
//     let age = person['age'];
//     if(!groupedPeople[age]) groupedPeople[age] = [];
//     groupedPeople[age].push(person)
//     return groupedPeople
// }, {});

// console.log(grouped);

// let nums = [...Array(5).keys()];

// let sumAll = nums.reduce((accumulator, value) => {
//     console.log(accumulator, value)
//     return accumulator + value
// },0);
// console.log(nums)
// console.log(sumAll)