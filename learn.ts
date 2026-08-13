function greet(name: string): string {
    return `Hello, ${name}!`;
}
const message: string = greet("World");
console.log(message);


let marks: number=6;
let nm: string="john";
let mrks: number=3.6;
console.log(mrks);


//using "any" in typecript

let v:any=true;
v="bacon";
Math.round(v); // doesnt bring an error
// to be avoided if possible

//using uknown in type script

function processvalue(value:unknown){
    if(typeof value === 'string'){ // treats value as string
        console.log(value.toUpperCase());
    }else if(typeof value === "number"){ // treats value as number
        console.log(Math.log(value));
    }
}
// unknown is used whn dealing with data from external sources e,g APIs