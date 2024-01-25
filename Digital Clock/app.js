let hour = document.getElementById("hrs");
let minute = document.getElementById("min");
let second = document.getElementById("sec");

const updateTime = (date) => {
    let currentHours = date.getHours();
    let currentMins = date.getMinutes();
    let currentSec = date.getSeconds();

    hour.innerHTML = (currentHours < 10) ? "0" + currentHours : currentHours;
    minute.innerHTML = (currentMins < 10) ? "0" + currentMins : currentMins;
    second.innerHTML = (currentSec < 10) ? "0" + currentSec : currentSec;
}

setInterval(() => {
    updateTime(new Date());
}, 1000);