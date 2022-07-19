// Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti atspausdinti skliausteliuose” [ ] “.





let text = "";
let a = 0;
for (let step = 300; step > 0; step--)
{
    let i = Math.round(Math.random() * 300);

    if (i > 150)
    {
        {
            a++;
            text += (" " + i + " ");

        }
    }

    if (i > 275)
    {
        text += ("[" + i + "]");
    }



}
console.log(text);
console.log(a);

console.log("============================ 2 UZD ===============================================");
// Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti.

let text1 = " ";

for (let skaiciaibeliekanos = 77; skaiciaibeliekanos < 3000; skaiciaibeliekanos += 77) 
{
    text1 += ("" + skaiciaibeliekanos + ", ");
}
console.log(text1);

console.log("============================= 3 UZD===========================================");
// Nupieškite kvadratą iš “*”, kurio kraštines sudaro 100 “*”.
// * * * * * * * * * * *
// * * * * * * * * * * *
// * * * * * * * * * * *
// * * * * * * * * * * *
// * * * * * * * * * * *
// * * * * * * * * * * *
// * * * * * * * * * * *

var array1d = new Array(100);
for (var i = 0; i < array1d.length; i++) 
{
    array1d[i] = new Array(100);
}

var h = "*";

for (var i = 0; i < 100; i++) {
    //cia kuriam eilutes tuscia kintamaji
    for (var k = 0; k < 100; k++) 
    {
        array1d[i][k] = h;
        //ta kintamaji padidiniam viena zvaigzdute
    }
    //ji atspausdinam
    //ir padarome vel tusciu kintamoju =""
}
console.log(array1d);

// --------------------------------------------------

// Metam monetą. Monetos kritimo rezultatą imituojam Math.random() funkcija, kur 0 yra herbas, o 1 - skaičius. Monetos metimo rezultatus išvedame į ekraną atskiroje eilutėje: “S” jeigu iškrito skaičius ir “H” jeigu herbas. Suprogramuokite tris skirtingus scenarijus kai monetos metimą stabdome:
// Iškritus herbui;
// Tris kartus iškritus herbui;
// Tris kartus iš eilės iškritus herbui;


for (c = 0; c < 10; c++) {
    let cointoss = Math.round(Math.random());

    let herbas = "H";
    let skaicius = "S";
    if (cointoss == 1) {
        console.log(skaicius);
    }
    else {
        console.log(herbas);
    }
}
console.log("======================================iskritus herbui stabdom=================");

for (c = 0; c < 100; c++) {
    let cointoss = Math.round(Math.random());
    let herbas = "H";
    let skaicius = "S";
    if (cointoss == 1) {
        console.log(skaicius);
    }
    else {
        console.log(herbas);
        break;
    }
}
console.log("======================================3 kartus iskritus herbui=================");


let counter = 0;
for (c = 0; c < 10; c++) {
    let cointoss = Math.round(Math.random());
    let arraytoss = Array();
    let herbas = "H";
    let skaicius = "S";

    if (cointoss == 1) 
    {
        arraytoss = (skaicius);
    }

    else {
        arraytoss = (herbas);
        counter++;
        if (counter == 4) 
        {
            console.log("herbas iskrito 3 kartus");
            break;
        }

    }

    console.log(arraytoss);
}

console.log("=============================== 3kartus is eiles===================================")

let counter2 = 0;
for (c = 0; c < 50; c++) {
    let cointoss = Math.round(Math.random());
    let arraytoss = Array();
    let herbas = "H";
    let skaicius = "S";

    if (cointoss == 1) {
        arraytoss = (skaicius);
    }
    else {
        arraytoss = (herbas);
    }
    if (cointoss == 1) {
        counter2 = 0;                       //jeigu iskrenta skaicius apnulinam counter2
    }
    else {
        counter2++                         //kai iskrenta herbas counter2 padideja vienetu
        if (counter2 == 3)               //jeigu counteris pasiekia 3 tai iskrenta herbas 3 kartus ir baigiasi
        {
            console.log("herbas iskrito 3 kartus")
            break;
        }
    }


    console.log(arraytoss);



}



console.log("=======================8 udzt==========================")
// Sumodeliuokite vinies kalimą. Įkalimo gylį sumodeliuokite pasinaudodami Math.random() funkcija. Vinies ilgis 8.5cm (pilnai sulenda į lentą).
// “Įkalkite” 5 vinis mažais smūgiais. Vienas smūgis vinį įkala 5-20 mm. Suskaičiuokite kiek reikia smūgių.
// “Įkalkite” 5 vinis dideliais smūgiais. Vienas smūgis vinį įkala 20-30 mm, bet yra 50% tikimybė (pasinaudokite Math.random() funkcija tikimybei sumodeliuoti), kad smūgis nepataikys į vinį. Suskaičiuokite kiek reikia smūgių.


let nailed = 0; //maziems smugiams
let nailed2 = 0; // dideliems smugiams
let nailLength = 85;
let x = 0;
let y = 0;
for (let s = 0; s < 5; s++)
 {
    
    while (nailed < nailLength)
    {
        let onePunch = Math.round((Math.random() * 15) + 5);
        
        x++;

        nailed += onePunch;

        console.log( nailed + "mm " +  "ikalta per " + x + " smugiu");
    }
}
console.log("===========================2 dalis==================================")
for (let m = 0; m < 5; m++)
 {
    
    while (nailed2 < nailLength)
    {
        let oneBigPunch = (Math.round(Math.random())) * (Math.round((Math.random() * 10) + 20)); //50% tikimybe, kad pataikys

        y++;

        nailed2 += oneBigPunch;

        console.log( nailed2 + "mm " +  "ikalta per " + y + " smugiu");
    }
}
console.log("==============================saskes=======================================")
// Kazys ir Petras žaidžiai šaškėm. Petras surenka taškų kiekį nuo 10 iki 20, Kazys surenka taškų kiekį nuo 5 iki 25. Vienoje eilutėje išvesti žaidėjų vardus su taškų kiekiu ir “Partiją laimėjo: ​laimėtojo vardas​”. Taškų kiekį generuokite funkcija ​Math.random()​. Žaidimą laimi tas, kas greičiau surenka 222 taškus. Partijas kartoti tol, kol kažkuris žaidėjas pirmas surenka 222 arba daugiau taškų.


let kazioPoints = 0;
let petroPoints = 0;
let counter3=0;


 for ( z=0; z < 22; z++)
 {
    while (petroPoints < 222 || kazioPoints<222)
    {
        let kazioPointsPerGame = Math.round(Math.random() *10 + 10 );
        let petroPointsPerGame = Math.round(Math.random()*20 +5);
        counter3 ++;
        kazioPoints += kazioPointsPerGame;
        petroPoints += petroPointsPerGame;

        
    }

 }
        console.log(counter3);
        console.log(kazioPoints);
        console.log(petroPoints);

    if (kazioPoints > petroPoints)
    {
        console.log("laimejo Kazys per " + counter3 + " partiju")
    }
    else 
    {
        console.log("laimejo Petras per " + counter3 + " partiju")
    }