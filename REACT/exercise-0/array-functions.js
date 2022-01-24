const array = ["Minik", "Gırgır", "Mes"];
const array1 = [{ name: "Minik" }, { name: "Gırgır" }, { name: "Mes" }];
const array2 = [{ name: "Minik", age: 30 }, { name: "Minik", age: 28 }, { name: "Mes" , age: 25}];

//--------------------------------PUSH--------------------------------

// array.push("Lif")
// console.log(array);

//--------------------------------MAP--------------------------------

// array.map((item)=> {
// console.log(item);
// })

//--------------------------------FIND--------------------------------

// const findeIt = array1.find((item) => item.name === "Mes")
// console.log(findeIt);

//--------------------------------FILTER--------------------------------

// const filterIt = array2.filter((item) => item.name === "Minik")
// console.log(filterIt);

// const filtered = array2.filter(({ name, age }) => age == 30)
// console.log(filtered);
//parametre olarak name ve age keylerini verdik.

//--------------------------------SOME--------------------------------

// const some = array2.some(({age}) => age === 30)
// console.log(some);

//--------------------------------EVERY--------------------------------

// const every = array2.every(({age}) => age > 3)
// console.log(every);

//--------------------------------INCLUDES--------------------------------

// const isInclude = array.includes("Minik")
// console.log(isInclude);
