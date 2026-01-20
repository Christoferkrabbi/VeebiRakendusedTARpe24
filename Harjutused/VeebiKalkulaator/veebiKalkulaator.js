function Radio() {
    const pildid = [
        '../VeebiKalkulaator/images/eggs.webp',
        '../VeebiKalkulaator/images/milk.webp',
        '../VeebiKalkulaator/images/blackbread.jpg',
        '../VeebiKalkulaator/images/bread.webp'
    ];
    let kanamunad = document.getElementById("kanamunad");
    let piim = document.getElementById("piim");
    let leib = document.getElementById("leib");
    let sai = document.getElementById("sai");
    let valitudToode = document.getElementById("valitudToode");

    if (kanamunad.checked) {
        valitudToode.src = pildid[0];
    }
    if (piim.checked) {
        valitudToode.src = pildid[1];
    }
    if (leib.checked) {
        valitudToode.src = pildid[2];
    }
    if (sai.checked) {
        valitudToode.src = pildid[3];

    }
}
function arvuta(kogus, hind){
    return(kogus*hind).toFixed(2);
    //toFixed - ümardab 2 märgini peale koma
}

const Hind1=2.5;
const Hind2=1.8;
const Hind3=2;
const Hind4=2;

function arvutaPiltHind(){
    let hindKokku=document.getElementById("hindKokku");
    let number=document.getElementById("number");
    let kanamunad=document.getElementById('kanamunad');
    let piim=document.getElementById('piim');
    let leib=document.getElementById('leib');
    let sai=document.getElementById('sai');
    //let button=document.getElementById("button");

    if(kanamunad.checked){
        hindKokku.innerHTML=arvuta(number.value,Hind1)+" eurot";
    }
    if(piim.checked){
        hindKokku.innerHTML=arvuta(number.value,Hind2)+" eurot";
    }
    if(leib.checked){
        hindKokku.innerHTML=arvuta(number.value,Hind3)+" eurot";
    }
    if(sai.checked){
        hindKokku.innerHTML=arvuta(number.value,Hind4)+" eurot";
    }

    hindKokku.style.backgroundColor="green";

}
