const month = document.querySelector(".month")
const day = document.querySelector(".day")
const date = document.querySelector(".date")
const year = document.querySelector(".year")



const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const currentday = currentDate.getDate();
const currentYear = currentDate.getFullYear(); 
console.log(currentday);
month.innerHTML = currentDate.toLocaleDateString("en", {month: "long"})
day.innerHTML = currentDate.toLocaleDateString("en", {weekday: "long"})
date.innerHTML = currentday
year.innerHTML = currentYear;

    

