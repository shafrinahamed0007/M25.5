const number = 23;
// string, number, boolean
if(typeof number === "number"){
    console.log("value is a number")
}else{
    console.log("value is not a number")
}


const numbers = [3,12,78,90];
const student = {name: "Rongila Rafsan", job: "Khawadawa kore"};
if(Array.isArray(numbers)){
    console.log("Numbers is Array")
}else{
    console.log("Numbers is Object")
}
console.log(typeof student);