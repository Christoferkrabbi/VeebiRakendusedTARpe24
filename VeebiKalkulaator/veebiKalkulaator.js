function arvuta(kogus, hind){
    return (kogus*hind).toFixed(2);
    //toFixed - ümardab 2 märgini peale koma
}
const Hind1=2.5;
const Hind2=5;
const Hind3=1.8;
const Hind4=2;
const Hind5=2;

function arvutaHind(){
    let vastus2=document.getElementById('vastus2');
    let tk=document.getElementById('tk');
    let v1=document.getElementById('kanamunad');
    let v2=document.getElementById('kana');
    let v3=document.getElementById('piim');
    let v4=document.getElementById('leib');
    let v5=document.getElementById('sai');

    if(v1.checked){
        vastus2.innerHTML="kokku: "+ arvuta(tk.value, Hind1)+" euro";
            vastus2.innerHTML="kodumaised kanamunad, otse Eesti taludest"

        pilt.src="images/eggs.webp"

    }
    if(v2.checked){
        vastus2.innerHTML="kokku: "+ arvuta(tk.value, Hind2)+" euro";
        vastus2.innerHTML="kanad otse Eestist, või mdea"
        pilt.src="images/chicken.webp"

    }
    if(v3.checked){
        vastus2.innerHTML="kokku: "+ arvuta(tk.value, Hind3)+" euro";
        vastus2.innerHTML="Eesti piim, või midagi"
        pilt.src="images/milk.webp"

    }
    if(v4.checked){
        vastus2.innerHTML="kokku: "+ arvuta(tk.value, Hind4)+" euro";
        vastus2.innerHTML="Eesti must leib"
        pilt.src="images/blackBread.jpg"

    }
    if(v5.checked){
        vastus2.innerHTML="kokku: "+ arvuta(tk.value, Hind5)+" euro";
        vastus2.innerHTML="Eestis toodetud sai";
        pilt.src="images/bread.webp"

    }
}