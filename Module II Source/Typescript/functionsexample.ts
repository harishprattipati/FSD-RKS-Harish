// Optional parameter - n2 declared with ? after parameter name
function mul(n1 : number, n2? : number, n3: number = 10)) : number
{
if (n2) // if parameter is passed
return n1 * n2;
else
return n1 * 10;

}
console.log( mul(10,20));

console.log( mul(10));

function add1 ( n1: number, n2:number) : number{
return n1 + n2;
}
console.log(add1(10, 20));

let add = function(n1: number, n2:number): number{
return n1 + n2;
}
console.log(add(10, 20));

// Rest parameters
function print( message : string , ... names : string[])
{

for(let n of names)
console.log( message + " " + n);

}
print("Hello", "Ben", "Joe");

print("Hi", "Scott","Anders","Tom");


// declare functions to be overloaded
function f1(x: number): void;

function f1(s: string): void;

function f1(x: number, s: string): void;


function f1(n: any, s? : any): void
{
console.log(`value is ${n}. Type is ${typeof (n)}`);
if (s)
console.log(`Second parameter is ${s}`);

}

f1("Abc");
f1(10);
f1(100, "PQR");


 



