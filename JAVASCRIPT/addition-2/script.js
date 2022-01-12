let array = [3, 6, 9, 14, 16];

function myFunction(array) {

    let isThere = array.some(function (number) {
        return number > 5;
    });

    (isThere) ? console.log("yes, there is Element greater then 5.") : console.log("no, there isn't Element greater then 5.");

}

myFunction(array);