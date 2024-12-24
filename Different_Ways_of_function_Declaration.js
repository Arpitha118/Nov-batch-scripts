//Function Declaration
function add(a,b)
{
    console.log(a+b);
}
add(500,400);

//Function Expression
const sub = function(a,b)
{
    console.log(a-b);
}
sub(200,100);

//Arrow Function
const mul = (a,b)=> {
    console.log(a*b);
}
mul(10,20);

//other ways of using Arrow function
const div = (a,b)=> console.log(a/b);
div(10,5)


const msg = ()=> "Hello World";
let res = msg();
console.log(res);