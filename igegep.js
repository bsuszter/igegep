//minden feladványt 3 részre kell tagolni!
var szamlalo = 0;

szavak = [
    ["fut", "1", "2" ,"2", "2" ,"2"],
    ["keres", "2", "2" ,"2", "1" ,"1"],
    ["vág", "1", "1" ,"2", "1" ,"2"],
]

megoldas = [
    ["futja" , "futná" , "futotta volna" , "futottátok volna"],
]

szavak_szama = szavak.length;

$("#indit").click(indit);


function indit(){
    if (szavak_szama == szamlalo) {
        szamlalo = 0;
    }
    document.getElementById("ige").innerHTML = szavak[szamlalo][0];
    //ragozás
    if (szavak[szamlalo][1] == "1") {
        document.getElementById("igepic01").style.opacity = "1";
    }
    else{
        document.getElementById("igepic01").style.opacity = "0.1";
    }
    if (szavak[szamlalo][1] == "2") {
        document.getElementById("igepic02").style.opacity = "1";
    }
    else{
        document.getElementById("igepic02").style.opacity = "0.1";
    }
    //mód
    if (szavak[szamlalo][2] == "1") {
        document.getElementById("igepic03").style.opacity = "1";
    }
    else{
        document.getElementById("igepic03").style.opacity = "0.1";
    }
    if (szavak[szamlalo][2] == "2") {
        document.getElementById("igepic04").style.opacity = "1";
    }
    else{
        document.getElementById("igepic04").style.opacity = "0.1";
    }
    if (szavak[szamlalo][2] == "3") {
        document.getElementById("igepic05").style.opacity = "1";
    }    else{
        document.getElementById("igepic05").style.opacity = "0.1";
    }

    //idő
    if (szavak[szamlalo][3] == "1") {
        document.getElementById("igepic06").style.opacity = "1";
    }
    else{
        document.getElementById("igepic06").style.opacity = "0.1";
    }
    if (szavak[szamlalo][3] == "2") {
        document.getElementById("igepic07").style.opacity = "1";
    }
    else{
        document.getElementById("igepic07").style.opacity = "0.1";
    }
    if (szavak[szamlalo][3] == "3") {
        document.getElementById("igepic08").style.opacity = "1";
    }
    else{
        document.getElementById("igepic08").style.opacity = "0.1";
    }

    //szám
    if (szavak[szamlalo][4] == "1") {
        document.getElementById("igepic09").style.opacity = "1";
    }
    else{
        document.getElementById("igepic09").style.opacity = "0.1";
    }
    if (szavak[szamlalo][4] == "2") {
        document.getElementById("igepic10").style.opacity = "1";
    }
    else{
        document.getElementById("igepic10").style.opacity = "0.1";
    }

    //mód
    if (szavak[szamlalo][5] == "1") {
        document.getElementById("igepic11").style.opacity = "1";
    }
    else{
        document.getElementById("igepic11").style.opacity = "0.1";
    }
    if (szavak[szamlalo][5] == "2") {
        document.getElementById("igepic12").style.opacity = "1";
    }
    else{
        document.getElementById("igepic12").style.opacity = "0.1";
    }
    if (szavak[szamlalo][5] == "3") {
        document.getElementById("igepic13").style.opacity = "1";
    }
    else{
        document.getElementById("igepic13").style.opacity = "0.1";
    }
    if (szavak_szama > szamlalo) {
        szamlalo += 1;
    }
    console.log(szamlalo)
}


$("#ellenoriz").click(ellenoriz);


function ellenoriz(){
    var valasz1 = document.getElementById("ige01valasz").value;
    var valasz2 = document.getElementById("ige02valasz").value;
    var valasz3 = document.getElementById("ige03valasz").value;
    var valasz4 = document.getElementById("ige04valasz").value;
    console.log(valasz)
   // megoldas[szamlalo][0] == 
}