const canvas = document.getElementById("myCanvas");
const m = canvas.getContext("2d");

//Lumehelbed(ai)
function looLumehelbed(kogus) {
    lumehelbed = [];

    for (let i = 0; i < kogus; i++) {
        lumehelbed.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 2 + 1,
            speed: Math.random() * 0.5 + 0.3
        });
    }
}
function joonistaLumi() {
    m.fillStyle = "white";

    for (let h of lumehelbed) {
        m.beginPath();
        m.arc(h.x, h.y, h.r, 0, 2 * Math.PI);
        m.fill();
    }
}
function liigutaLumi() {
    for (let h of lumehelbed) {
        h.y += h.speed;

        if (h.y > canvas.height) {
            h.y = -5;
            h.x = Math.random() * canvas.width;
        }
    }
}
function animatsioonLoop() {
    if (!animatsioon) return;

    m.clearRect(0, 0, canvas.width, canvas.height);
    tekst();
    all();
    joonistaLumi();
    liigutaLumi();
    requestAnimationFrame(animatsioonLoop);
}

function alustaKaart() {
    animatsioon = true;
    m.clearRect(0, 0, canvas.width, canvas.height);
    tekst();
    kuusk();
    looLumehelbed(80);
    animatsioon = true;
    animatsioonLoop();
}

function kuusk(){
    kuusk1();
    kuusk2();
    kuusk3();
    kuusk4();
    base();
}

function all(){
    tekst();
    kuusk();
    lumi();
    kerad();
    star(200, 105, 5, 18, 8);
}

function tekst() {
    m.font = "36px serif";
    m.fillStyle = "white";
    m.textAlign = "center";
    m.fillText("Häid pühi!", canvas.width / 2, 70);
}

function puhasta() {
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.clearRect(0, 0, canvas.width, canvas.height);
drawn = [];
lumehelbed = [];
animatsioonLoop = 0;

}

//maasolev lumi
function lumi(){
    m.beginPath();
    m.moveTo(0, 400);
    m.lineTo(400, 400);
    m.lineTo(400, 600);
    m.lineTo(0, 600);
   
    m.closePath();
    m.fillStyle = "white";
    m.fill();
    m.strokeStyle = "grey";
    m.lineWidth = 1;
    m.stroke();

     m.beginPath();
    m.arc(340, 430, 60, 0, 2*Math.PI);
    m.fillStyle="white";
    m.fill();

    m.beginPath();
    m.arc(290, 440, 60, 0, 2*Math.PI);
    m.fillStyle="white";
    m.fill();
   
     m.beginPath();
    m.arc(210, 450, 60, 0, 2*Math.PI);
    m.fillStyle="white";
    m.fill();

     m.beginPath();
    m.arc(20, 440, 60, 0, 2*Math.PI);
    m.fillStyle="white";
    m.fill();

     m.beginPath();
    m.arc(90, 445, 60, 0, 2*Math.PI);
    m.fillStyle="white";
    m.fill();

    m.beginPath();
    m.arc(110, 450, 60, 0, 2*Math.PI);
    m.fillStyle="white";
    m.fill();
}
//kuusk
function kuusk1() {
    m.beginPath();
    m.moveTo(200, 110);
    m.lineTo(170, 175);
    m.lineTo(230, 175);
    m.closePath();
    m.fillStyle = "green";
    m.fill();
    m.strokeStyle = "black";
    m.lineWidth = 1;
    m.stroke();

    m.beginPath();
    m.moveTo(200, 111);
    m.lineTo(213, 140);
    m.lineTo(187, 140);
    m.closePath();
    m.fillStyle = "darkgreen";
    m.fill();
}
function kuusk2() {
    m.beginPath();
    m.moveTo(220, 175);
    m.lineTo(245, 225);
    m.lineTo(155, 225);
    m.lineTo(180, 175);
    m.closePath();
    m.fillStyle = "green";
    m.fill();
    m.stroke();

    m.beginPath();
    m.moveTo(219, 176);
    m.lineTo(227, 190);
    m.lineTo(168, 200);
    m.lineTo(181, 176);
    m.closePath();
    m.fillStyle = "darkgreen";
    m.fill();
}
function kuusk3() {
    m.beginPath();
    m.moveTo(235, 225);
    m.lineTo(265, 280);
    m.lineTo(135, 280);
    m.lineTo(165, 225);
    m.closePath();
    m.fillStyle = "green";
    m.fill();
    m.stroke();

    m.beginPath();
    m.moveTo(234, 226);
    m.lineTo(237, 230);
    m.lineTo(158, 240);
    m.lineTo(166, 226);
    m.closePath();
    m.fillStyle = "darkgreen";
    m.fill();
}
function kuusk4() {
    m.beginPath();
    m.moveTo(250, 280);
    m.lineTo(290, 350);
    m.lineTo(110, 350);
    m.lineTo(150, 280);
    m.closePath();
    m.fillStyle = "green";
    m.fill();
    m.stroke();

    m.beginPath();
    m.moveTo(249, 281);
    m.lineTo(260, 300);
    m.lineTo(134, 310);
    m.lineTo(151, 281);
    m.closePath();
    m.fillStyle = "darkgreen";
    m.fill();
}
function base() {
    m.beginPath();
    m.moveTo(190, 350);
    m.lineTo(185, 400);
    m.lineTo(215, 400);
    m.lineTo(210, 350);
    m.closePath();
    m.fillStyle = "brown";
    m.fill();
    m.strokeStyle = "black";
    m.lineWidth = 1;
    m.stroke();
}
//kaunistused
function kerad(){
    m.beginPath();
    m.arc(150, 280, 10, 0, 2*Math.PI);
    m.strokeStyle="darkred";
    m.fillStyle="red";
    m.stroke();
    m.fill();

    m.beginPath();
    m.arc(182, 286, 10, 0, 2*Math.PI);
    m.strokeStyle="orange";
    m.fillStyle="yellow";
    m.stroke();
    m.fill();

    m.beginPath();
    m.arc(213, 285, 10, 0, 2*Math.PI);
    m.strokeStyle="darkred";
    m.fillStyle="red";
    m.stroke();
    m.fill();

    m.beginPath();
    m.arc(240, 280, 10, 0, 2*Math.PI);
    m.strokeStyle="darkblue";
    m.fillStyle="blue";
    m.stroke();
    m.fill();

    m.beginPath();
    m.arc(170, 220, 10, 0, 2*Math.PI);
    m.strokeStyle="orange";
    m.fillStyle="yellow";
    m.stroke();
    m.fill();

    m.beginPath();
    m.arc(200, 228, 10, 0, 2*Math.PI);
    m.strokeStyle="darkblue";
    m.fillStyle="blue";
    m.stroke();
    m.fill();

    m.beginPath();
    m.arc(230, 220, 10, 0, 2*Math.PI);
    m.strokeStyle="darkred";
    m.fillStyle="red";
    m.stroke();
    m.fill();

    m.beginPath();
    m.arc(185, 170, 10, 0, 2*Math.PI);
    m.strokeStyle="darkred";
    m.fillStyle="red";
    m.stroke();
    m.fill();

    m.beginPath();
    m.arc(215, 170, 10, 0, 2*Math.PI);
    m.strokeStyle="orange";
    m.fillStyle="yellow";
    m.stroke();
    m.fill();
}
//täht
function star(cx, cy, spikes, outerRadius, innerRadius, fillColor = "gold") {
    let rot = Math.PI / 2 * 3;
    let step = Math.PI / spikes;

    m.beginPath();
    m.moveTo(cx, cy - outerRadius);

    for (let i = 0; i < spikes; i++) {
        m.lineTo(
            cx + Math.cos(rot) * outerRadius,
            cy + Math.sin(rot) * outerRadius
        );
        rot += step;

        m.lineTo(
            cx + Math.cos(rot) * innerRadius,
            cy + Math.sin(rot) * innerRadius
        );
        rot += step;
    }

    m.lineTo(cx, cy - outerRadius);
    m.closePath();

    m.fillStyle = fillColor;
    m.fill();
    m.strokeStyle = "#8a6a00";
    m.lineWidth = 2;
    m.stroke();
}
