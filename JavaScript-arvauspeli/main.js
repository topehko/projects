var min = 1;
var max = 100;
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
		if (numberGuess >= min && numberGuess <= max) {
			if (numberGuess < correctNumber){
				noteArea.textContent = "NUMERO OLI LIIAN PIENI";	
				min = parseInt(numberGuess) + 1;
				minMax.textContent = "ANNA LUKU VÄLILTÄ: " + min + " - " + max;
			}
			else {
				noteArea.textContent = "NUMERO OLI LIIAN SUURI";	
				max = parseInt(numberGuess) - 1;
				minMax.textContent = "ANNA LUKU VÄLILTÄ: " + min + " - " + max;
			}
			
			currentRound++;
			roundCalculator.textContent = currentRound;
		}								
		else {
			noteArea.textContent = "EI KELPAA, SYÖTÄ KUNNOLLINEN NUMERO (" + min + " - " + max + ")";
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