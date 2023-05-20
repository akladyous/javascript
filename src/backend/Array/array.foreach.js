const ar1 = ['one', 'two', 'three', 'four', 'five', 'six'];
const ar2 = ['seven', 'eight', 'nine', 'ten']
// ar1.forEach(item => item.toUpperCase());

ar1.forEach((item, index, array) =>{
    console.log(`${item} : ${index}`)
})

const ar3 = ar1.concat(ar2)
console.log(ar3)

