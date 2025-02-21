const str = "hello world";
console.log(str, typeof str);
const number = 1;
console.log(number, typeof number);
const bool = true;
console.log(bool, typeof bool);
const nullllll = null;
console.log(nullllll, typeof nullllll);
const undefinedddd = undefined;
console.log(undefinedddd, typeof undefinedddd);


const arr1 = [1, 2, 3];

const arr2 = arr1;
arr2.push(4);
console.log("arr1", arr1);
console.log("arr2", arr2);

console.log(arr1 === arr2);

console.log(JSON.stringify([])===JSON.stringify([]));


console.log(arr, typeof arr);

const person = {
    name: "John",
    age: 30,
};

function changePerson(p) {
    p.name = "Jane";
}

changePerson(person);
console.log(person);




function changeNum(num) {
    num = 2;
}

const num = 1;
changeNum(num);
console.log(num);


console.log(person, typeof person);

function sum(a, b) {
    return a + b;
}
console.log(sum, typeof sum);

