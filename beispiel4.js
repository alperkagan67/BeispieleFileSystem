// HAUSAUFGABE

const fs = require('fs');
const readlineSync = require('readline-sync'); // Importiere readlineSync für Benutzereingaben

function writeToFile() {
    try {
        // 1. Benutzer abfragen
        const fileName = readlineSync.question('Gib den Namen der Datei ein: ');

        // 2. Benutzer abfragen
        const message = readlineSync.question('Gib die Nachricht ein: ');

        // 3. Nachricht in die Datei schreiben
        fs.appendFileSync(fileName, message + '\n'); // Synchrone Methode verwenden
        console.log('Nachricht erfolgreich hinzugefügt.');
    } catch (err) {
        console.error('Es gab einen Fehler beim Schreiben in die Datei:', err);
    }
}

writeToFile(); // Startet die Funktion
