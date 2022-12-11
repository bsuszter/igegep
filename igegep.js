/* be kell állítani:
1. a kép címét (JS)
2. a szavak tömböt (JS)
3. a kép címét (html) 

*/

window.onload = function () {
    //tehén
    draggable1.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2013/12/28/19/28/cow-234835_960_720.jpg)"
    //ló
    draggable2.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2016/09/28/12/51/horse-1700438_960_720.jpg)"
    //lúd
    draggable3.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2015/10/12/21/07/goose-985178_960_720.jpg)"
    //medve
    draggable4.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2016/03/27/18/10/bear-1283347_960_720.jpg)"
    //szarka
    draggable5.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2015/04/26/15/40/birds-740605_960_720.jpg)"
    //fecske
    draggable6.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2019/11/06/14/35/white-breasted-wood-swallow-4606266_960_720.jpg)"
    //veréb
    draggable7.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2018/09/23/20/56/sparrow-3698507_960_720.jpg)"
    //tinó
    draggable8.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2015/08/20/15/03/cow-897533_960_720.jpg)"
    //tyúk
    draggable9.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2017/08/24/21/59/hen-lying-down-2678608_960_720.jpg)"
    
    
    document.getElementById("ujra").style.display = "none";
    document.getElementById("veletlen").style.visibility = "hidden"; 
    document.getElementById("ellenoriz").style.display = "visible";

    //beállítja a ...-ot tartalmazó div stílusát

    if (szavak[element_array[sorszam]][0] == "...") {
        document.getElementById("kozmondas1").style.color = "white"; 
        document.getElementById("kozmondas1").style.backgroundColor = "blue"; 
        document.getElementById("kozmondas2").style.width = "70px"; 

     }

     if (szavak[element_array[sorszam]][1] == "...") {
        document.getElementById("kozmondas2").style.color = "white"; 
        document.getElementById("kozmondas2").style.backgroundColor = "blue"; 
        document.getElementById("kozmondas2").style.width = "70px"; 

     }

     if (szavak[element_array[sorszam]][2] == "...") {
        document.getElementById("kozmondas3").style.color = "white"; 
        document.getElementById("kozmondas3").style.backgroundColor = "blue"; 
        document.getElementById("kozmondas2").style.width = "70px"; 

     }

     // óra
            var seconds = 00; 
            var tens = 00; 
            var appendTens = document.getElementById("tens")
            var appendSeconds = document.getElementById("seconds")
            var buttonStart = document.getElementById('inditas');
            var buttonStop = document.getElementById('ellenoriz');
            var buttonReset = document.getElementById('button-reset');
            var Interval ;
        
        
           // stopper indul, ha betölt az oldal
            clearInterval(Interval);
                Interval = setInterval(startTimer, 10);
        
                indit();
            
            
                buttonStop.onclick = function() {
                if (kerdesszam == szavaklong) {
                    clearInterval(Interval);
                }
                ellenoriz();
            } 
            
            
            function startTimer () {
            tens++; 
            
            if(tens <= 9){
                appendTens.innerHTML = "0" + tens;
            }
            
            if (tens > 9){
                appendTens.innerHTML = tens;
                
            } 
            
            if (tens > 99) {
                console.log("seconds");
                seconds++;
                appendSeconds.innerHTML = "0" + seconds;
                tens = 0;
                appendTens.innerHTML = "0" + 0;
            }
            
            if (seconds > 9){
                appendSeconds.innerHTML = seconds;
            }
            
            }
     
   
};

//minden feladványt 3 részre kell tagolni!
szavak = [
    ["Sötétben minden&nbsp;", "...", "&nbsp;fekete." ,"tehén"],
    ["Ne igyál előre a &nbsp;", "...", "&nbsp; bőrére..", "medve"],
    ["Egy &nbsp;","..." , " &nbsp; nem csinál nyarat.", "fecske"],
    ["Ha &nbsp","..." , "&nbsp nincs, jó a szamár is." , "ló"],
    ["Jobb ma egy &nbsp","..." , "&nbsp mint holnap egy túzok." , "veréb"],
    ["Tanulj &nbsp","..." , "&nbsp, ökör lesz belőled." , "tinó"],
    ["Sok &nbsp","..." , "&nbsp disznót győz." , "lúd"],
    ["Vak &nbsp","..." , "&nbsp is talál szemet." , "tyúk"],
    ["Sokat akar a &nbsp","..." , "&nbsp  , de nem bírja a farka." , "szarka"],
]

document.getElementById("ora").style.visibility = "hidden"; 
document.getElementById("alertbox").style.display = "none"; 

var jovalasz = 0;
var rosszvalasz = 0;
var kerdesszam = 0;

var szavaklong = szavak.length;

const element_array = [];
for (i = 0; i < szavaklong; i++) 
{
    element_array.push(i);
}

//első indításkor kialakítja a feladványok sorrendjét
var i = 0;
    var buffer = 0;
    // 100-szor keveri meg - két szám felcserélésével
    for (i = 0; i < 100; i++) 
    {
        //generates two random numbers, saves them as integers
        var first_location = Math.floor(Math.random() * szavaklong);
        var second_location = Math.floor(Math.random() * szavaklong);
        //saves the value in the randomly selected first location as buffer
        var buffer = element_array[first_location];
        //changes first location's value to second location's value
        element_array[first_location] = element_array[second_location];
        //changes second location's value to buffer value (original first location)
        element_array[second_location] = buffer;
        //presto, we now have 2 swapped numbers
    }

var sorszam = 0;
console.log(element_array);



function indit(){

    kerdesszam += 1;
    let viszonyszam = 100 / szavaklong;
    // progress bar programozása a kérdések számának jelöléséhez
    let $progressBar = $('.progress-bar');
    $progressBar.text(kerdesszam);
    // 30 kérdésre elosztva a 100%
    $progressBar.css('width', (viszonyszam * kerdesszam + '%'));
    //$progressBar.css('width', (kerdesszam * 100 / viszonyszam) + '%');

    kozmondas1.style.visibility = "visible";
    kozmondas2.style.visibility = "visible";
    kozmondas3.style.visibility = "visible";
    allatnev.style.visibility = "hidden";

    //új feladatnál visszaadja a választási lehetőségeket
    document.getElementById("drag").style.visibility = "visible"; 
    //kiveszi a korábbi képet a megoldás div hátteréből 
    valasz1.style.backgroundImage = ""
    // értékelés után zöld vagy piros színt visszaállítja az alapszínre
    valasz1.style.backgroundColor = "#BFC006";

    document.getElementById("inditas").style.display = "none";
    document.getElementById("ellenoriz").style.display = "block";

    if (sorszam < element_array.length) {
        //a rejtett véletlen divbe helyezzük a véletlen számot
        document.getElementById("veletlen").innerHTML = element_array[sorszam];
        // vizsgálja, hogy van-e első szótag
        if (szavak[element_array[sorszam]][0] != "") {
           document.getElementById("kozmondas1").innerHTML = szavak[element_array[sorszam]][0];; 
        } else {
             kozmondas1.style.visibility = "hidden";
        }

        // vizsgálja, hogy van-e 2. szótag
        if (szavak[element_array[sorszam]][1] != "") {
            document.getElementById("kozmondas2").innerHTML = szavak[element_array[sorszam]][1];;
        } else {
            kozmondas2.style.visibility = "hidden"; 
        }

        // vizsgálja, hogy van-e 3. szótag
        if (szavak[element_array[sorszam]][2] != "") {
            document.getElementById("kozmondas3").innerHTML = szavak[element_array[sorszam]][2];;
        } else {
            kozmondas3.style.visibility = "hidden"; 
        }

        sorszam += 1;
        } 
            else 
        {
            kozmondas1.style.visibility = "hidden";
            kozmondas2.style.visibility = "hidden";
            kozmondas3.style.visibility = "hidden";
            valasz1.style.visibility = "hidden";
            
        }
}



function valasztas(allat){
    var sorszam = document.getElementById("veletlen").innerHTML;
    let allatnev = allat.title;
    let valaszhoz = document.getElementById("valasz1");
    let allatnev_mező = document.getElementById("allatnev");

    //valaszhoz.innerHTML = allatnev;
    //allatnev_mező.style.visibility = "visible";
    allatnev_mező.innerHTML = allatnev;

    // abba a divbe írja a játékos válaszát, amelyikben a ... van

    if (szavak[element_array[sorszam]][0] == "...") {
        document.getElementById("kozmondas1").innerHTML = allatnev; 
        document.getElementById("kozmondas1").style.color = "white"; 
        document.getElementById("kozmondas1").style.backgroundColor = "blue"; 

     }

     if (szavak[element_array[sorszam]][1] == "...") {
        document.getElementById("kozmondas2").innerHTML = allatnev; 
        document.getElementById("kozmondas2").style.color = "white"; 
        document.getElementById("kozmondas2").style.backgroundColor = "blue"; 

     }

     if (szavak[element_array[sorszam]][2] == "...") {
        document.getElementById("kozmondas2").innerHTML = allatnev; 
        document.getElementById("kozmondas3").style.color = "white"; 
        document.getElementById("kozmondas3").style.backgroundColor = "blue"; 

     }


/*     allat.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2016/09/28/12/51/horse-1700438_960_720.jpg)"; */
/*     valaszhoz.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2016/09/28/12/51/horse-1700438_960_720.jpg)"; */
valaszhoz.style.backgroundImage = allat.style.backgroundImage;
};

function ellenoriz(){
    console.log("szám: " + kerdesszam);
    document.getElementById("inditas").style.display = "block";
    document.getElementById("ellenoriz").style.display = "none";
    document.getElementById("drag").style.visibility = "hidden"; 

    //innen nyyeri ki mit választott a játékos
    let allatnev_mező = document.getElementById("allatnev").innerHTML;
   
    // innen nyeri ki a helyes megoldást
    var sorszam = document.getElementById("veletlen").innerHTML;
    var vizsgal = szavak[sorszam][3];


    //var helyesszo = szavak[sorszam][vizsgal];

    if (allatnev_mező == vizsgal) {
        valasz1.style.backgroundColor = "#89ef75";
        jovalasz += 1;
    } else {
        valasz1.style.backgroundColor = "red";
        rosszvalasz += 1;
    }

    // elfogytak a feladványok
    if (kerdesszam == szavaklong) {
        document.getElementById("inditas").style.display = "none";
        document.getElementById("ujra").style.display = "block";
        
        //eredmény kiírása
        alertbox_mező = document.getElementById("alertbox");
        alertbox_mező.style.display = "block";

        eredmeny_mező = document.getElementById("eredmeny_kiiras");
        eredmeny_mező.innerHTML = "Eredményed: <br><br>" + "helyes válaszok: " + jovalasz + " <br>rossz válaszok: " + rosszvalasz + "<br><br> idő: " + seconds.innerHTML + ":" + tens.innerHTML + " mp.";
        //alertbox_mező.innerHTML = "This is an alert box.";
        //alert("Eredményed:\n\n" + "helyes válaszok: " + jovalasz + " \n rossz válaszok: " + rosszvalasz + "\n idő: " + seconds.innerHTML + ":" + tens.innerHTML + " mp.");    
    }
}

function ujra(){
    document.location.reload();
}
