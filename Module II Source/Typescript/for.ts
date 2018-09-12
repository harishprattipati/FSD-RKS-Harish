var marks: number[] = [10,30,40];
// for in takes index of array
for (var idx in marks) {
console.log(`Marks for student ${parseInt(idx)+1} are ${marks[idx]}`);
}

var marks: number[] = [10,30,40];
// for of takes elements of array
for (var m of marks){
console.log(m);
}



















var marks: number[];
marks = [60, 70, 66];

console.log(marks.length)
console.log(marks[0]);

var subjects: string[] = ["Java", "TypeScript", "Angular"];

// Use iterator
for (var sub of subjects)
console.log(sub);


// Array Methods
subjects.push("jQuery");
console.log("Top Element : " + subjects.pop());


var tup1 = [10, "Abc", true];

console.log(tup1[0]);
console.log(tup1.length);

for (var v of tup1)
console.log(v);

// change an item in tuple
tup1[2] = false;

// destructuring tuple
var [i1, i2, i3] = tup1;
console.log("Second Item : " + i2);









