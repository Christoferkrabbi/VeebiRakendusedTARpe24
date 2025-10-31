//checkbox valikud
function valiAnsambel() {

    let metsatoll = document.getElementById("metsatoll");
    let curtnwall = document.getElementById("curtnwall");
    let metallica = document.getElementById("metallica");
    let a7x = document.getElementById("a7x");
    let bestia = document.getElementById("bestia");
    let vastus = document.getElementById("vastus");

    let valik = "";

    if (metsatoll.checked) { valik += metsatoll.value + ", "}
    if (curtnwall.checked) { valik += curtnwall.value + ", "}
    if (metallica.checked) { valik += metallica.value + ", "}
    if (a7x.checked) { valik += a7x.value  + ", "}
    if (bestia.checked) { valik += bestia.value}

    vastus.innerHTML = "Sinu valitud muusikud: " + valik;
    vastus.style.color = "green";
}

//textarea
function muusikaKoolis() {

    let muusikakoolis = document.getElementById("muusikakoolis");

    muusikaKoolisVastus.innerHTML = "Sinu arvamus: " + muusikakoolis.value;
    muusikaKoolisVastus.style.color = "green";
}

//range
function muusikatPaevas() {

    let hours = document.getElementById("muusikatPaevas");
    let muusikatPaevasVastus = document.getElementById("muusikatPaevasVastus");

    muusikatPaevasVastus.innerHTML = "Sa kuulad muusikat " + hours.value + " tundi päevas";
    muusikatPaevasVastus.style.color = "green";
}

function kuulabRaadiot() {

    let jah = document.getElementById("jah");
    let ei = document.getElementById("ei");
    let kuulabRaadiotVastus = document.getElementById("kuulabRaadiotVastus");

    if (jah.checked) { document.getElementById("raadiojaamadKüsimus").classList.remove("hidden");
         kuulabRaadiotVastus.innerHTML = "Raadio kuulamine: jah"}
    if (ei.checked) { document.getElementById("raadiojaamadKüsimus").classList.add("hidden");
        kuulabRaadiotVastus.innerHTML = "Raadio kuulamine: ei"}
    kuulabRaadiotVastus.style.color = "green";
}
function raadiojaamad() {

    let raadiojaamaValik = document.getElementById("raadiojaamaValikud");
    let valikud = document.getElementById("valikud");

    valikud.innerHTML = "Sinu nimetatud jaamad: " + raadiojaamaValik.value;
    valikud.style.color = "green";
}

function muusikaStiil() {

    let hiphop = document.getElementById("hiphop");
    let rokk = document.getElementById("rokk");
    let metal = document.getElementById("metal");
    let beatbox = document.getElementById("beatbox");
    let rapp = document.getElementById("rapp");
    let dzass = document.getElementById("dzass");
    let muusikaStiilVastus = document.getElementById("muusikaStiilVastus");

    if (hiphop.checked) { muusikaStiilVastus.innerHTML = "Sinu vastus: " + hiphop.value}
    if (rokk.checked) { muusikaStiilVastus.innerHTML = "Sinu vastus: " + rokk.value}
    if (metal.checked) { muusikaStiilVastus.innerHTML = "Sinu vastus: " + metal.value}
    if (beatbox.checked) { muusikaStiilVastus.innerHTML = "Sinu vastus: " + beatbox.value}
    if (rapp.checked) { muusikaStiilVastus.innerHTML = "Sinu vastus: " + rapp.value}
    if (dzass.checked) { muusikaStiilVastus.innerHTML = "Sinu vastus: " + dzass.value}
    muusikaStiilVastus.style.color = "green";
}

function saada() {

    let abba = document.getElementById("abba");
    let the = document.getElementById("the");
    let metsatoll = document.getElementById("metsatoll");
    let bedwetters = document.getElementById("bedwetters");
    let vastus = document.getElementById("vastus");

    let valik = "";

    if (abba.checked) { valik += abba.value + ", "}
    if (the.checked) { valik += the.value + ", "}
    if (metsatoll.checked) { valik += metsatoll.value + ", "}
    if (bedwetters.checked) { valik += bedwetters.value}

    let muusika = document.getElementById("muusika");

    let hours = document.getElementById("muusikaTunnid");

    let raadiojaamaValik = document.getElementById("raadiojaamaValikud");

    let jah = document.getElementById("jah");
    if (jah.checked) { let kuulabRaadiot = "ja" }
    else { let kuulabRaadiot = "ei" }

    let kokkuvoteDiv = document.getElementById("kokkuvote");

    let kokkuvote = "Sinu valitud muusikud: " + valik +  "\n"
        + "Sinu arvamus: " + muusika.value + "\n"
        + "Sa kuulad muusikat " + hours.value + " tundi päevas" + "\n"
        + "Kas sa kuulad raadiot: " + jah.value + "\n"
        +  "Sinu nimetatud jaamad: " + raadiojaamaValik.value;

    kokkuvoteDiv.innerHTML = kokkuvote;
}

function puhasta() {
    document.getElementById("abba").checked = false;
    document.getElementById("the").checked = false;
    document.getElementById("metsatoll").checked = false;
    document.getElementById("bedwetters").checked = false;

    document.getElementById("muusika").value = "";

    document.getElementById("muusikaTunnid").value = "";

    document.getElementById("jah").checked = false;
    document.getElementById("ei").checked = false;

    document.getElementById("raadiojaamaValikud").value = "";

    document.getElementById("hiphop").checked = false;
    document.getElementById("rokk").checked = false;
    document.getElementById("metal").checked = false;
    document.getElementById("beatbox").checked = false;
    document.getElementById("rapp").checked = false;
    document.getElementById("dzass").checked = false;

    document.getElementById("vastus").innerHTML = "";
    document.getElementById("muusikaKoolisVastus").innerHTML = "";
    document.getElementById("muusikaPaevasVastus").innerHTML = "";
    document.getElementById("kuulabRaadiotVastus").innerHTML = "";
    document.getElementById("valikud").innerHTML = "";
    document.getElementById("muusikaStiilVastus").innerHTML = "";
}