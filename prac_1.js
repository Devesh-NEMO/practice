// const sum1 = Symbol("id1");
// const sim2 = Symbol("id1");
// console.log(sum1 === sim2);
 
// let bigNumber= 17234681634982

// console.log(bigNumber);


// function greet(name = "kael"){
//      return `hello, ${name}`;
// }

// console.log(greet());

// const hello = function(name){
//     return "hello its Devesh"
// }
 
// const hello1 = hello
// console.log(hello1);


const arr = [10,20,30,40]
const a = [5,7,1,4,9,2,3,0,8]

function double(x){
    return 2 * x;
}
function triple(x){
    return x * 3;
}
function binary(x){
    return x.toString(2)
}
function isEven(x){
    return x % 2
}
const output = arr.map(double)
const output2 = arr.map(triple)
const output3 = arr.map(binary)
const output4 = arr.map((x) => x.toString(4) )
const output5 = a.filter(isEven)


console.log(output,output2,output3,output4,output5);

