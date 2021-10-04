const turnOn = document.getElementById("turnOn");
const turnOff = document.getElementById("turnOff");
const lamp = document.getElementById("lamp");

function isLampBroken() {
    return lamp.src.indexOf("quebrada") > -1
}

function lampOn() {
    if (!isLampBroken()) {
        lamp.src = "./img/ligada.jpg";
    }
}

function lampOff() {
    if (!isLampBroken()) {
        lamp.src = "./img/desligada.jpg";
    }
}

function broke() {
    lamp.src = "./img/quebrada.jpg"
}

turnOn.addEventListener("click", function () {
    if (lamp.src.split("/")[4] === "ligada.jpg") {
        lampOff();
    } else if (lamp.src.split("/")[4] === "desligada.jpg") {
        lampOn();
    }

});
// turnOn.addEventListener("click", lampOff);
lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseleave", lampOff);
lamp.addEventListener("dblclick", broke);

