let array = [2, 3, 4];

// function multiply (array){
//     let multiply = 1;

//     array.forEach(element => {multiply *= element;});
//     console.log(multiply);
// }

// multiply(array);

function multiply(array, sayi) {
    return array * sayi
}

let result = array.reduce(multiply, 1);
console.log(result);

