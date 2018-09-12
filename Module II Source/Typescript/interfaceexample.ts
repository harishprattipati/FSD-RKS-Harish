interface Person {
name : string;
age : number;
//toString: () => string;
toString():string;

    //functionName: (value: string) => void;
    //functionName(value: string): void;

}
// Inheritance in Interface
interface Student extends Person {
course : string;
}

function print(v : Person) {
console.log(v.toString());
}

let p1 : Person = {

name : "Richards",
age : 40,
toString : function() {
return this.name + ":" + this.age;
}
};

print(p1);