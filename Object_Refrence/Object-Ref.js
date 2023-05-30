const obj1 = {
    name: "Bruce_Wayn"
}

const obj2 = obj1     // Refrencing THe Object.
obj2.name = "Clark Kent";

console.log(obj2)

let obj3 = obj1;

obj3 = {
    name: "Hamza"
}

console.log(obj3)
console.log(obj1)

