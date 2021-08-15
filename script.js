
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

//console.log(mArr1);
//console.log(mArr2);

// Arry Function: map()

let newArr = mArr1.map((item, pos) =>{
    console.log(item);
    console.log(`Item at pos : ${pos} is ${item*2}`);
});
console.log(mArr1);
console.log(newArr);

const mArr3=[
    {
        name:'John Lark',
        experience : 10,
        type:'commercial'
    },
    {
        name:'John Deo',
        experience: 5,
        type:'commercial'
    },
    {
        name:'John Smith',
        experience: 20,
        type:'commercial'
    }
];

let newArr2= mArr3.map((item,pos)=>{
    console.log(item);
})


    // Arry Function: reduce()

const numArr = [1,2,3,4,5,6,7];

const result = mArr3.reduce((acc, item)=>{
    return acc+ item.experience;
},0);
console.log(result);


    // Arry Function: filter()

    const newResult= numArr.filter(item =>{
        return item % 2==0;
    });
    console.log('Result is =>',newResult);

    const newResult2= mArr3.filter(item=>{
        return item.experience>10;
    });
    console.log('Result Arr =>',newResult2);