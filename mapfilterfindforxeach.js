// const arr1=[20,30,10,50,40];
// const arr1=['kik','puk','tuk','kuk','kik'];

const product=[
    {id:6545,name:'laptop',price:500},
    {id:4445,name:'mobile',price:300},
    {id:54546,name:'tablet',price:25},
    {id:54544,name:'watch',price:20}
];

// map
const products=product.map(product=>product.name);
// console.log(products);
const sujon1=product.map(product=>{
     return product.id
})
// console.log(sujon1);
// forEach

product.forEach(product => console.log(product.id) );
// console.log(products);

// Filter
const chep=product.filter(product=>product.price>100)
// console.log(chep);

const remaning=product.filter(product=>product.price!=20);
console.log(remaning);


const watch=product.find(product=>product.price===20);
console.log(watch);

// includes ar kaj hocca element khuja ans true false show kora.
const pets=['bat','dog','cat'];
console.log(pets.includes('kuk'));

const num=[4,5,6,4,2];
console.log(num.includes(6));

// reduce
const array1 = [1, 2, 3, 30];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10