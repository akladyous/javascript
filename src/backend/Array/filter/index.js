

let words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present'];
let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']
let range = [...Array(10).keys()]

let even = range.filter(value => value %2 ==0)
console.log(even)

// console.log(words.filter(x=> x.length > 5));

// words.filter((word, index, arr)=>{
//     console.log(index, word)
//     // arr[index] = 'extra'
//     // console.log(arr)
// })

// const filterItems = (arr, query) =>{
//     return arr.filter(item => item.toLowerCase().indexOf(query.toLowerCase()) !== -1);
// }
// console.log(filterItems(words, 'ex'))

const deleteItems = (arr, len) =>{
    return arr.filter((item, idx, arr) =>{
        if(item.length < len){
            arr.splice(arr.indexOf(item),1)
        }
    })
}
console.log(deleteItems(words, 6))

