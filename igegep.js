//minden feladványt 3 részre kell tagolni!
var szamlalo = 0;

szavak = [
    ["fut", "1", "2" ,"2", "2" ,"2"],
    ["keres", "2", "2" ,"2", "1" ,"1"],
    ["vág", "1", "1" ,"2", "1" ,"2"],
]

megoldas = [
    [],
    ["futja" , "futná" , "futotta volna" , "futottátok volna"],
    ["keres", "keresne", "keresett volna" , "kerestem volna"],
    ["vágja", "vágja", "vágta" , "vágtad"],
]

szavak_szama = szavak.length;

document.getElementById("ige01valasz").disabled = true;
document.getElementById("ige02valasz").disabled = true;
document.getElementById("ige03valasz").disabled = true;
document.getElementById("ige04valasz").disabled = true;
document.getElementById("ellenoriz").disabled = true;



$("#indit").click(indit);


function indit(){
    if (szavak_szama == szamlalo) {
        szamlalo = 0;
    }

    document.getElementById("ige01valasz").disabled = false;
    document.getElementById("ige02valasz").disabled = false;
    document.getElementById("ige03valasz").disabled = false;
    document.getElementById("ige04valasz").disabled = false;
    document.getElementById("ellenoriz").disabled = false;
    document.getElementById("indit").disabled = true;

    document.getElementById("ige01valasz").style.backgroundColor = "white";
    document.getElementById("ige02valasz").style.backgroundColor = "white";
    document.getElementById("ige03valasz").style.backgroundColor = "white";
    document.getElementById("ige04valasz").style.backgroundColor = "white";

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
    console.log("számláló" + szamlalo)
    document.getElementById("indit").disabled = false;

    var valasz1 = document.getElementById("ige01valasz").value;
    var valasz2 = document.getElementById("ige02valasz").value;
    var valasz3 = document.getElementById("ige03valasz").value;
    var valasz4 = document.getElementById("ige04valasz").value;


   if (megoldas[szamlalo][0] == valasz1) {
    console.log("jó")
    document.getElementById("ige01valasz").style.backgroundColor = "#89ef75";
   }
   else {
    console.log("rossz")
    document.getElementById("ige01valasz").style.backgroundColor = "red";
   }

   if (megoldas[szamlalo][1] == valasz2) {
    console.log("jó")
    document.getElementById("ige02valasz").style.backgroundColor = "#89ef75";
   }
   else {
    console.log("rossz")
    document.getElementById("ige02valasz").style.backgroundColor = "red";
   }

   if (megoldas[szamlalo][2] == valasz3) {
    console.log("jó")
    document.getElementById("ige03valasz").style.backgroundColor = "#89ef75";
   }
   else {
    console.log("rossz")
    document.getElementById("ige03valasz").style.backgroundColor = "red";
   }

   if (megoldas[szamlalo][3] == valasz4) {
    console.log("jó")
    document.getElementById("ige04valasz").style.backgroundColor = "#89ef75";
   }
   else {
    console.log("rossz")
    document.getElementById("ige04valasz").style.backgroundColor = "red";
   }
}