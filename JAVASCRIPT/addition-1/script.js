let array = [2, 5, 8, 11, 15, 17];
let newArray = [];

let biggerTen = array.filter(function (biggerTen) {
    return biggerTen > 10;
});

biggerTen.map(function (element, index) {
    element *= 5;
    newArray.splice(index, 0, element);
});

console.log(newArray);
