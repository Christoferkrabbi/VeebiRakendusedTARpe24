function nimelugemine(){
    //let - määrab muutujad
    let nimi=document.getElementsById("nimi");
    let vastus=document.getElementById("vastus");
    //genereerime innHTML teksti dokumendis
    vastus.innerHTML="Tere, "+nimi.value;
}

function puhasta(){
    //let - määrab muutujad
    let nimi=document.getElementsById("nimi");
    let vastus=document.getElementById("vastus");
    let vastus2=document.getElementById("vastus2");
    let vastus3=document.getElementById("vastus3");
    //genereerime innHTML teksti dokumendis
    vastus.innerHTML="Vastusekoht";
    nimi.value= "";
    vastus2.style.backgroundColor="white";
}

// tausta värvi valik
function varvValik(){
    let vastus=document.getElementById("vastus2");
    let varv=document.getElementById("varv");

    vastus2.style.backgroundColor=varv.value;
}

function radioValik(){
    let naerata=document.getElementById("naerata");
    let kurvasta=document.getElementById("kurvasta");
    let pilt=document.getElementById("pilt");

    if (naerata.checked){
        pilt.src="images/naer.png";
        vastus3.innerText="Siis on hästi:)";
        vastus3.style.color="green";
    }
    else if(kurvasta.checked){
        pilt.src="images/kurb.png";
        vastus3.innerText="Naerata siis!";
        vastus3.style.color="red";
    }
    else{
        pilt.src="";
        vastus3.innerText="Tee oma valik!";
        vastus3.style.color="black";
    }

}
function tujuSlider(){
    let tuju=document.getElementById("tuju");
    let vastus4=document.getElementById("vastus4");


    if(tuju.value<30){
        vastus4.innerHTML="tuju slider näitab - "+ tuju.value+" punkti.<br> Ja sa oled kurb:(!";
    }
    else if (tuju.value<60){
        vastus4.innerHTML="tuju slider näitab - "+ tuju.value+" punkti.<br> Ja sa oled neutraalne:/!";
    }
    else{
        vastus4.innerHTML="tuju slider näitab - "+ tuju.value+" punkti.<br> Ja sa oled rõõmus:)!";

    }
}
function kooliValik(){
    let vastus5=document.getElementById("vastus5");
    let kool=document.getElementById("kool");

    //selectedIndex, 1 rida on null rida javascriptis
    if(kool.selectedIndex!==0){
        vastus5.innerHTML="Sinu unsituste kool on "+ kool.value;
    }
    else{
    vastus5.innerHTML="Tee oma valik";
    }

}