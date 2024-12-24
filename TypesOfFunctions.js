//Function Declaration: Hoisted
function greet1(name)
{
    return `Hello,${name}`;
}
console.log(greet1('Rosy'));


//Function Expression: Not Hoisted
let greet2 = function(name)
{
    return `Hello,${name}`;
}
console.log(greet2('Lily'));


//Function Arrows: callback
let greet3 = (name)=>{
    return `Hello,${name}`;
}
console.log(greet3('Jack'));