// Kommentar på en rad

/*
Kommentarer
på flera 
rader
*/

// Vi kan anropa funktioner i den här filen innan vi faktiskt definierat dem...
// ...JavaScript läser in alla funktioner först så att den sen kan användas!

// Skriv ut till console (tänkt System.out.println())
console.log("Hello world!");

// Variabler i JavaScript är "löst typade"
// Vi behöver alltså inte explicit säga vilken typ 
// en variabel ska vara. Detta bestäms av variabelns värde

var myString = "A string!"; // Är en variabel av typen String
var myNumber = 1234; // Variabel med typen double
// Alla tal i JavaScript är en double 

// En variabel i JavaScript kan ändra typ;
myString = 12345678; // Är nu av typen double 

var myBoolean = true;

// Det finns två "nivåer" vår kod kan placeras på...
// I eller utanför funktioner
// Det som är utanför en funktion är "globalt"

// alert("Hello global world!"); // Körs när sidan läses in!

var myName = "Oscar"; // Global variabel (ligger utanför alla funktioner)
myCity = "Stockholm"; // Global variabel (ligger utanför alla funktioner)

// En funktion i JavaScript (tänk metoder)
function sayHelloWorld() {
    
    alert("Hello " + myName + " from " + myCity); // Körs när funktionen sayHelloWorld() anropas
    
    // Variabler som skapats i en funktion
    var mySchool = "JENSEN"; // En lokal variabel, finns bara i funktionen
    myCountry = "Sweden";    // Global eftersom vi inte började med var
}

// Rekommendation: Använd alltid var - då existerar variabeln bara där den definierats


// if-satser - samma som i Java men utan .equals() för jämförelser...
if(myName == "Oscar") {
    console.log("Namnet är lärarens namn!");
}

if(myNumber == 1234) {
    console.log("Variabeln myNumber är 1234");
}

if(myNumber == "   1234      ") {
    console.log("Variabeln myNumber är \"1234\" ");
}

// Vi kan göra en striktare jämförelse där vi också kollar att datatyperna 
// är samma. 
if (myNumber === 1234) {
    console.log("Variabeln myNumber är 1234 och av datatypen double (ett tal)");
}

if (myNumber === "1234") {
    console.log("Variabeln myNumber är \"1234\" och av datatypen String");
}

// Vi kan göra radbrytningar med \n (new line)
console.log("Hej \n då \n på en ny rad!");

// Anropa en funktion vi skrivit själva
// sayHelloWorld();

// En funktion med två parametrar (notera att vi ej behöver skriva datatyp) 
function combineNames(firstName, lastName) {
    if(lastName == undefined) {
        var fullName = firstName;
    } else {
        var fullName = firstName + " " + lastName;
    }
    return fullName;
}

function getInitials(firstName, lastName) {
    
    // Inbyggda funktioner kan "kedjas samman"
    var firstNameInitial = firstName.charAt(0).toUpperCase();
    var lastNameInitial = lastName.toUpperCase().charAt(0);
    var initials = firstNameInitial + ". " + lastNameInitial;
    
    // I en rad...
    //return firstName.charAt(0) + ". " + lastName.charAt(0);
    
    globalFirstName = firstName;
    
    return initials;
}

var myInitials = getInitials("Oscar", "B");


// Variabler får ej börja med siffror
// var 1hello = "something"; 

function demonstrateForLoop() {
    // For-loop - skriv ut 1 till och med 10
    for(var i = 1; i <= 10; i++) {
        console.log(i);
    }
}


// En funktion som ska köras när man klickar på en knapp

// Nollställ knapptryck utanför funktionen 
// Annars nollställs räknaren varje gång funktionen körs
var clicks = 0;

function clickedButton() {
    console.log("Klickade på knappen!");
    
    // Räkna upp 
    clicks++;
    
    // För att hämta en HTML-tagg i vår HTML-fil...
    var myParagraph = document.getElementById("countingString");
    
    // ...och ändra på innehållet mellan start- och slut-tagg:
    myParagraph.innerHTML = clicks;

    // Verifiera i console
    console.log(clicks);
    
    
}










