var lowerLimit = 1;
var upperLimit = 100;
var currentRound = 1;
var record = localStorage.record;

function starting() {
	
	numberForm.style.display = "none";
	correctNumber = Math.floor((Math.random() * 100) + 1);
	otsikko.textContent = correctNumber;
	
	//Haetaan localStoragesta aiempi ennätys
	if (localStorage.name == undefined) {
		championName.textContent = "---";
		allTimeRecord.textContent = "---";
	} 
	else {
		championName.textContent = localStorage.name;
		allTimeRecord.textContent = localStorage.record;
		}
	}	

//Lisätään pelaaja ja aloitetaan pelaaminen	
function playerAdding() {
	playerName.textContent = newPlayer.value;
	roundCalculator.textContent = currentRound;
	nameForm.style.display = "none";
	numberForm.style.display = "block";
}

//Tarkistetaan annetun numeron sopivuus (alaraja/yläraja)
function checkLimits(lowerLimit,upperLimit,numberGuess){
	if (numberGuess < correctNumber){
		noteArea.textContent = "NUMERO OLI LIIAN PIENI";	
		lowerLimit = parseInt(numberGuess) + 1;
		numberLimits.textContent = "ANNA LUKU VÄLILTÄ: " + lowerLimit + " - " + upperLimit;
	}
	else {
		noteArea.textContent = "NUMERO OLI LIIAN SUURI";	
		upperLimit = parseInt(numberGuess) - 1;
		numberLimits.textContent = "ANNA LUKU VÄLILTÄ: " + lowerLimit + " - " + upperLimit;
	}	
}

//Tarkistetaan onko numero oikea
function numberCheck() {			
	var numberGuess = newNumber.value;
	if (numberGuess == correctNumber) {
		numberValid.style.display = "none";
		resetButton.style.display = "none";
		numberLimits.style.display = "none";
		newNumber.style.display = "none";
		isNewRecord();					
	}
	else {
		if (numberGuess >= lowerLimit && numberGuess <= upperLimit) {
			checkLimits(lowerLimit,upperLimit,numberGuess);
			currentRound++;
			roundCalculator.textContent = currentRound;
		}								
		else {
			noteArea.textContent = "EI KELPAA, SYÖTÄ KUNNOLLINEN NUMERO (" + lowerLimit + " - " + upperLimit + ")";
		}	
	}
	newNumber.value = "";
}	

//Tarkistetaan onko tulos uusi ennätys
function isNewRecord() {
	if (currentRound >= record) {
		noteArea.textContent = "OIKEIN! MUTTA EI ENNÄTYSTÄ"	
	}
	else {	
		localStorage.setItem("name",newPlayer.value);				
		localStorage.setItem("record",currentRound);
		noteArea.textContent = "OIKEIN! UUSI ENNÄTYS"	
	}
}	
	
//Tyhjennetään localstorage	
function resetScores() {
	localStorage.clear();
	newGame()
}

//Aloitetaan uusi peli	
function newGame() {
	newPlayer.value = "";
	newNumber.value = "";
	location.reload();	
}