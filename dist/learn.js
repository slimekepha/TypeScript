function greet(name) {
    return `Hello, ${name}!`;
}
const message = greet("World");
console.log(message);
let marks = 6;
let nm = "john";
let mrks = 3.6;
console.log(mrks);
//using "any" in typecript
let v = true;
v = "bacon";
Math.round(v); // doesnt bring an error
// to be avoided if possible
//using uknown in type script
function processvalue(value) {
    if (typeof value === 'string') { // treats value as string
        console.log(value.toUpperCase());
    }
    else if (typeof value === "number") { // treats value as number
        console.log(Math.log(value));
    }
}
// unknown is used whn dealing with data from external sources e,g APIs
let para = document.getElementById('pr');
function getarea() {
    let length = 10;
    let width = 6;
    let area = length * width;
    return area;
}
let button = document.getElementById('runbtn');
let output = document.getElementById('pr');
if (button && output) {
    button.addEventListener("click", () => {
        output.textContent = getarea().toString();
    });
}
//lists in typescript
let nms = [];
nms.push("rose");
console.log(nms);
//tuples
let tuple;
tuple = [5, true, "nana"];
console.log(tuple);
// function to get odd and even numbers
function getoddandeven(number) {
    if (number % 2 === 0) {
        return "even";
    }
    else {
        return "odd";
    }
}
console.log(getoddandeven(4));
console.log(getoddandeven(7));
//function of a sphere
function sphereArea(radius) {
    return 4 * Math.PI * Math.pow(radius, 2);
}
console.log(sphereArea(7));
export {};
//# sourceMappingURL=learn.js.map