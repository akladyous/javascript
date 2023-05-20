const pokemon = [
    {
        id: 1,
        name: "Bulbasaur",
        img: "./images/bulbasaur.png",
        likes: 4,
    },
    {
        id: 2,
        name: "Ivysaur",
        img: "./images/ivysaur.png",
        likes: 21,
    },
    {
        id: 3,
        name: "Venusaur",
        img: "./images/venasaur.png",
        likes: 7,
    },
    {
        id: 4,
        name: "Charmander",
        img: "./images/charmander.png",
        likes: 20,
    },
    {
        id: 5,
        name: "Charmeleon",
        img: "./images/charmeleon.png",
        likes: 11,
    },
];
let nums = [...Array(5).keys()]


pokemon.forEach(poke => console.log(poke))

// console.log(nums)