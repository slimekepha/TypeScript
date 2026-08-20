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
let para=document.getElementById('pr') as HTMLDivElement;
function getarea():number{
    let length:number=10;
    let width:number=6;
    let area:number=length*width;
    return area;
}

let button=document.getElementById('runbtn');
let output=document.getElementById('pr');

if(button && output){
    button.addEventListener("click", ()=>{
        output.textContent=getarea().toString();
    });
}

//lists in typescript

let nms:string[]=[];
nms.push("rose");
console.log(nms);

//tuples
let tuple:[number,boolean,string];

tuple=[5,true,"nana"];
console.log(tuple);

// function to get odd and even numbers

function getoddandeven(number:number){
    if(number %2 ===0){
        return "even";
    }else{
        return "odd";
    }
}

console.log(getoddandeven(4));
console.log(getoddandeven(7));

//function of a sphere

function sphereArea(radius:number){
    return 4*Math.PI*radius**2;
}
console.log(sphereArea(7));