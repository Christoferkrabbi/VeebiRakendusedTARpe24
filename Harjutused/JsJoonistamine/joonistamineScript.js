// sirge joon
function sirgeJoon() {
    // määrame tahvli
    const tahvel=document.getElementById('tahvel');
    if(tahvel.getContext){
        let t=tahvel.getContext('2d'); // anname tahvlinimi on t
        // joon
        t.beginPath();
        t.strokeStyle="red";
        t.lineWidth = 3;
        t.moveTo(50,100) // algus
        t.lineTo(150,200) // lõpp
        t.stroke();
    }
}

function kolmnurkJoon() {
    // määrame tahvli
    const tahvel=document.getElementById('tahvel');
    if(tahvel.getContext){
        let t=tahvel.getContext('2d'); // anname tahvlinimi on t
        // joon
        t.beginPath();
        t.strokeStyle="blue";
        t.lineWidth = 1;
        t.moveTo(50,100) // algus
        t.lineTo(150,200) // lõpp
        t.lineTo(150,75)
        t.lineTo(50,100)
        t.stroke();
    }
}

function ringJoon(){
    const tahvel=document.getElementById('tahvel');
    let radius=document.getElementById('raadius');
    if(tahvel.getContext){
        let t=tahvel.getContext('2d');
        t.beginPath();
        t.strokeStyle="green";
        t.linewidth = 2;
        t.arc(80,80,radius.value,0,2*Math.PI,true);
        t.stroke();
    }
}

function rectJoon(){
    const tahvel=document.getElementById('tahvel');
    let width=document.getElementById('width');
    let height=document.getElementById('height');
    if(tahvel.getContext){
        let t=tahvel.getContext('2d');
        t.fillStyle="purple";
        t.fillRect(50,30,width.value,height.value)
    }
}

function randomImg(){
    const tahvel=document.getElementById('tahvel');
    if(tahvel.getContext){
        let t=tahvel.getContext('2d');
        const fail=new Image();
        fail.src="https://picsum.photos/300/250";
        t.drawImage(fail,0,0,300,250);
    }
}


function puhasta(){
    const tahvel=document.getElementById('tahvel');
    if(tahvel.getContext){
        let t=tahvel.getContext('2d');
        t.clearRect(0,0,300,250);
    }
}