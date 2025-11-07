//checkbox valikud
function valiAnsambel() {

     const checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
    const vastus = document.getElementById("vastus");

    let valikud = [];

    checkboxes.forEach(checkbox => {
        valikud.push(checkbox.value);
        localStorage.setItem(checkbox.value, true); //ainult true valikud
    });

    vastus.innerHTML = "Sinu valitud muusikud: " + (valikud.length > 0 ? valikud.join(", ") : "mitte ühtegi");
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

    let hours = document.getElementById("muusikatpaevas");
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
    else if (ei.checked) { document.getElementById("raadiojaamadKüsimus").classList.add("hidden");
        kuulabRaadiotVastus.innerHTML = "Raadio kuulamine: ei"}
    kuulabRaadiotVastus.style.color = "green";
}
function raadiojaamad() {

    let raadiojaamaValik = document.getElementById("raadiojaamadValikud");
    let valikud = document.getElementById("valikud");

    valikud.innerHTML = "Sinu nimetatud jaamad: " + raadiojaamaValik.value;
    valikud.style.color = "green";
}

function muusikaStiil() {

    let hiphop = document.getElementById("hiphop");
    let rock = document.getElementById("rock");
    let metal = document.getElementById("metal");
    let rap = document.getElementById("rap");
    let jazz = document.getElementById("jazz");
    let muusikaStiilVastus = document.getElementById("muusikaStiilVastus");

    if (hiphop.checked) { muusikaStiilVastus.innerHTML = "Sinu vastus: " + hiphop.value}
    if (rokk.checked) { muusikaStiilVastus.innerHTML = "Sinu vastus: " + rock.value}
    if (metal.checked) { muusikaStiilVastus.innerHTML = "Sinu vastus: " + metal.value}
    if (rap.checked) { muusikaStiilVastus.innerHTML = "Sinu vastus: " + rap.value}
    if (jazz.checked) { muusikaStiilVastus.innerHTML = "Sinu vastus: " + jazz.value}
    muusikaStiilVastus.style.color = "green";
}

    function saada() {

    const kokkuvoteDiv = document.getElementById("kokkuvote");

    // Checkbox valikud
    const valitudAnsamblid = [...document.querySelectorAll('input[type=checkbox][name="ansambel"]:checked')]
        .map(checkbox => checkbox.value)
        .join(", ") || "mitte ühtegi";

    // Tekstiala
    const arvamus = document.getElementById("muusikakoolis").value || "—";

    // Range
    const tunnid = document.getElementById("muusikatpaevas").value || 0;

    // Raadio jah/ei
   const kuulab = document.querySelector('input[name="raadio"]:checked');
const kuulabText = kuulab ? kuulab.value : "ei";


    // Raadiojaamad ainult siis kui jah
   const jaamad = kuulabText === "jah"
    ? (document.getElementById("raadiojaamaValikud").value || "—")
    : "ei kuula";



    // Muusika stiil
    const stiil = document.querySelector('input[name="muusikaStiilid"]:checked');
    const stiilText = stiil ? stiil.value : "—";

    kokkuvoteDiv.innerHTML =
        "Sinu valitud muusikud: " + valitudAnsamblid + "<br>" +
        "Sinu arvamus muusikakoolist: " + arvamus + "<br>" +
        "Sa kuulad muusikat " + tunnid + " tundi päevas<br>" +
        "Kas sa kuulad raadiot: " + kuulabText + "<br>" +
        "Sinu nimetatud jaamad: " + jaamad + "<br>" +
        "Sinu muusikastiil: " + stiilText;

    kokkuvoteDiv.style.color = "blue";
}

   function puhasta() {

    // checkboxid ja radio
    document.querySelectorAll('input[type=checkbox], input[type=radio]').forEach(input => {
        input.checked = false;
    });
    //textiväljad
    document.querySelectorAll('input[type=text], textarea').forEach(input => {
        input.value = "";
    });

    // range
    const range = document.getElementById("muusikatpaevas");
    if (range) range.value = 0;

    // raadiojaama küsims
    document.getElementById("raadiojaamadKüsimus").classList.add("hidden");

    //vastused
    document.querySelectorAll('#vastus, #muusikaKoolisVastus, #muusikatPaevasVastus, #kuulabRaadiotVastus, #valikud, #muusikaStiilVastus, #kokkuvote')
        .forEach(el => el.innerHTML = "");
}
