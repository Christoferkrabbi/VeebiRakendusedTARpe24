const canvas = document.getElementById("myCanvas");
const m = canvas.getContext("2d");

let lumehelbed = [];
let animatsioon = false;

function alustaKaarti() {
    animatsioon = true;
    m.clearRect(0, 0, canvas.width, canvas.height);
    tekst();
;
}


function tekst() {
    m.font = "36px serif";
    m.fillStyle = "white";
    m.textAlign = "center";
    m.fillText("Häid jõule!", canvas.width / 2, 70);
}

function kuusk1() {
    m.fillStyle = "green";
    m.beginPath();
    m.moveTo(150, 110);
    m.lineTo(120, 175);
    m.lineTo(180, 175);
    m.closePath();
    m.fill();

}

function lumi1() {
    m.fillStyle = "white";
    m.beginPath();
    m.moveTo(150, 110);
    m.lineTo(140, 133);
    m.lineTo(162, 137);
    m.closePath();
    m.fill();

}
function lumi2() {
    m.fillStyle = "white";
    m.beginPath();
    m.moveTo(129, 175);
    m.lineTo(123, 190);
    m.lineTo(178, 190);
    m.lineTo(170, 175);
    m.closePath();
    m.fill();
}

function kuusk2() {
    m.fillStyle = "green";
    m.beginPath();
    m.moveTo(150, 130);
    m.lineTo(105, 225);
    m.lineTo(195, 225);
    m.closePath();
    m.fill();
}
function kuusk3() {
    m.fillStyle = "green";
    m.beginPath();
    m.moveTo(150, 160);
    m.lineTo(83, 280);
    m.lineTo(217, 280);
    m.closePath();
    m.fill();
}

function kuusk4() {
    m.fillStyle = "green";
    m.beginPath();
    m.moveTo(150, 180);
    m.lineTo(60, 350);
    m.lineTo(240, 350);
    m.closePath();
    m.fill();
}
function base() {
        m.fillStyle = "brown";
        m.beginPath();
        m.moveTo(140, 350);
        m.lineTo(135, 400);
        m.lineTo(165, 400);
        m.lineTo(160, 350);
        m.closePath();
        m.fill();
}



