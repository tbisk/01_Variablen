/***** Variablen 01 *******/

// Zeilen-Kommentar

/** 
 * Block-Kommentar
 * 
 */
 
// Ausgabe
/* console.log("Hallo Welt!");
console.log(firstName); // Fehler! -> nicht deklarierte Variable */

// Deklaration + Wertzuweisung

// let firstName; // Deklaration (Definition)
// firstName = "Max"; // Wertzuweisung
// console.log(firstName); // Ausgabe

// let familyName ="Mütze"; // Deklaration + Initialisierung
// console.log(familyName); // Ausgabe
// console.log(firstName + " " + familyName); // Ausgabe 

// 03 Deklaration + Wertzuweisung II

// let firstName, familyName;
// firstName = prompt("Bitte Vornamen eingeben: ");
// familyName = prompt("Bitte Nachnamen eingeben:");
// console.log(firstName); // Ausgabe
// console.log(familyName); // Ausgabe
// console.log("Hallo " + firstName + " " + familyName + "!"); // Ausgabe

// JS ist eine untypisierte Sprache! | untyped

let test; // Deklaration (Definition)
test = "Hi!"; // string
test = 2; // "Hi!"" wird überschrieben
test = 6.4545561453;
test = true;

console.log("Datentyp: " + typeof test); // Datentyp wird ermittelt
console.log("Inhalt: " + test);
