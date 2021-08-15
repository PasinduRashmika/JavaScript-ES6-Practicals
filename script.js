
    // Normal Function
function greetings(name){
    return `Welcome ${name}` 
};
console.log(greetings('Pasindu'));

    // Array Function
const mGreetings= (name)=>{
    return `Hello ${name}`
}
console.log(mGreetings('Rashmika'));

    // Spread Operator

let mArr1 = [1,2,3,4,5];
let mArr2=[...mArr1];
mArr1.push(6);

console.log(mArr1);
console.log(mArr2);