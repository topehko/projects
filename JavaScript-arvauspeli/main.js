var lowerLimit = 1;
var upperLimit = 100;
var currentRound = 1;
var record = localStorage.record;

function starting() {
	
	numberForm.style.display = "none";
	
	correctNumber = Math.floor((Math.random() * 100) + 1);
	
	otsikko.textContent = correctNumber;
	
	if (localStorage.name == undefined) {
		championName.textContent = "---";
		allTimeRecord.textContent = "---";
	} 
	else {
		championName.textContent = localStorage.name;
		allTimeRecord.textContent = localStorage.record;
		}
	}	
	
function playerAdding() {
	playerName.textContent = newPlayer.value;
	roundCalculator.textContent = currentRound;

	nameForm.style.display = "none";
	numberForm.style.display = "block";
}

function numberCheck() {
			
	var numberGuess = newNumber.value;
	
	if (numberGuess == correctNumber) {
		numberValid.style.display = "none";
		resetButton.style.display = "none";
		minMax.style.display = "none";
		newNumber.style.display = "none";
			if (currentRound >= record) {
				noteArea.textContent = "OIKEIN! MUTTA EI ENNÄTYSTÄ"	
			}
			else {	
				localStorage.setItem("name",newPlayer.value);				
				localStorage.setItem("record",currentRound);
				noteArea.textContent = "OIKEIN! UUSI ENNÄTYS"	
			}		
	}
	else {
		if (numberGuess >= lowerLimit && numberGuess <= upperLimit) {
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
			
			currentRound++;
			roundCalculator.textContent = currentRound;
		}								
		else {
			noteArea.textContent = "EI KELPAA, SYÖTÄ KUNNOLLINEN NUMERO (" + lowerLimit + " - " + upperLimit + ")";
		}	
	}
	newNumber.value = "";
}
	
function resetScores() {
	localStorage.clear();
	newGame()
}
	
function newGame() {
	newPlayer.value = "";
	newNumber.value = "";
	location.reload();	
}