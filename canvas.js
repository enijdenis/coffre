const boite1 = document.getElementById("boite1");
const boite2 = document.getElementById("boite2");
const boite3 = document.getElementById("boite3");
const boite4 = document.getElementById("boite4");
const boite5 = document.getElementById("boite5");

function step0() {
    boite1.style.backgroundColor = "grey";
    boite2.style.backgroundColor = "grey";
    boite3.style.backgroundColor = "grey";
    boite4.style.backgroundColor = "grey";
    boite5.style.backgroundColor = "grey";
}

function step1() {
    step0();
    boite1.style.backgroundColor = "red";
}

function step2() {
    step0();
    boite2.style.backgroundColor = "orange";
}

function step3() {
    step0();
    boite3.style.backgroundColor = "yellow";
}

function step4() {
    step0();
    boite4.style.backgroundColor = "green";
}

function step5() {
    step0();
    boite5.style.backgroundColor = "blue";
}

