//Types of Functions

//Functions without input and without return
function add()
{
    var a = 10;
    var b = 20;
    console.log('Addition Result is: ', a+b);
}
add();

//Functions with input and without return
function sub(x,y) 
{
    console.log('Subtraction Result is: ', x-y);
}
sub(200,100);

//Functions without input and with return
function mul()
{
    var p = 30;
    var q = 10;
    return p*q;
}
var result = mul();
console.log('Multiplication Result is: ', result);

//Functions with input and with return
function div(a,b) 
{
    return a/b;
}
console.log('Division Result is: ', div(500,10));