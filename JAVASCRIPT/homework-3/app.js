//Content
const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },

  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

//Page Structure DOMs
let btnDom = document.querySelector(".btn-container")
let sectionDOM = document.querySelector(".section-center");


//Buttons
let buttons = ["button1", "button2", "button3", "button4"];
let buttonsInner = ["All", "Korea", "Japan", "China"];

buttons.forEach(element => {
  element = document.createElement("button");
  btnDom.append(element);
  element.classList.add("btn", "btn-outline-dark");
  element.setAttribute("type", "button");

  buttonsInner.forEach((value, index) => {
    element.innerHTML = buttonsInner[index];
  });


  for (let i = 0; i < buttons.length; i++) {
    if (i !== 0) {
      element.classList.add("btn-item");
    }
  };

});

//Menu Content Structure
for (let i = 0; i < menu.length; i++) {

  //Create Elements
  let divFirst = createDiv();
  let divSecond = createDiv();
  let divThirth = createDiv();
  let divFourth = createDiv();
  let divFourth_1 = createDiv();
  let divFourth_2 = createDiv();
  let h4_1 = createH4();
  let h4_2 = createH4();
  let imgs = createImg();
  let p = createP();

  //Create Attributes
  divFirst.setAttribute("id", `${i}`);
  imgs.setAttribute("src", `${i}`);

  // To insert content at the beginning of the selected elements
  sectionDOM.prepend(divFirst)
  divFirst.append(divSecond)
  divSecond.prepend(divThirth)
  divThirth.prepend(imgs);
  divSecond.append(divFourth)
  divFourth.prepend(divFourth_1)
  divFourth_1.append(h4_1);
  divFourth_1.append(h4_2);
  divFourth.append(divFourth_2);
  divFourth_2.append(p);

  //classLists
  sectionDOM.classList.add("menu");
  divFirst.classList.add("card", "mb-3", "col-sm-5", "mb-5");
  divSecond.classList.add("row", "g-0");
  divThirth.classList.add("col-md-4");
  imgs.classList.add("img-fluid", "img", "photo");
  divFourth.classList.add("col-md-8");
  divFourth_1.classList.add("menu-title");
  h4_1.classList.add("title");
  h4_2.classList.add("price");
  p.classList.add("desc", "menu-text");

  if (i % 2 == 0) {
    divFirst.classList.add("offset-1");
  }
}

//Create Elements
function createDiv(item) {
  return (item = document.createElement("div"));
}
function createH4(item) {
  return (item = document.createElement("h4"));
}
function createP(item) {
  return (item = document.createElement("p"));
}
function createImg(item) {
  return (item = document.createElement("img"));
}
function createBtn(item) {
  return (item = document.createElement("button"));
}

//DOM
let cardDOM = document.querySelectorAll(".card");
let titleDOM = document.querySelectorAll(".title");
let priceDOM = document.querySelectorAll(".price");
let imgDOM = document.querySelectorAll(".img");
let descDOM = document.querySelectorAll(".desc");

//Merge Content with the Page
menu.forEach((value, index) => {
  titleDOM[index].innerHTML = menu[index].title;
  priceDOM[index].innerHTML = menu[index].price;
  descDOM[index].innerHTML = menu[index].desc;
  imgDOM[index].setAttribute("src", menu[index].img);
});






