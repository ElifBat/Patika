
let userName = document.querySelector(`#myName`)
let getUserName = prompt("Lütfen adınızı giriniz: ")

userName.innerHTML = getUserName ? getUserName : "Bilgileriniz hatalı!"



let myClock = document.querySelector(`#myClock`)

function showTime(){

    let today = new Date();
    const days = ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let dayName = days[today.getDay()];
    
     myClock.innerHTML = `${today.getHours()} : ${today.getMinutes()} : ${today.getSeconds()}  ${dayName} `
}


setInterval(showTime)