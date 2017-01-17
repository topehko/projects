$(document).ready(function() {


	var shoppinglist = [];
	$("#buttonArea2").hide();
		
	deleteFromList();
	editProductRow();
	submitUpdate();
	cancelUpdate();

	//Lisää taulukon pohja ostoslitan tulostamista varten
	function newScreen() {
		$("#shoppingListTable").replaceWith('<table id="shoppingListTable" border="1"><tr><th>RIVI</th><th>TUOTE</th><th>HINTA</th><th>MÄÄRÄ</th><th>TUOTERIVI €</th><th>KAIKKI YHTEENSÄ</th><th>POISTA</th><th>MUOKKAA</th></tr><tr id="productRow"></table>');	
	}
	
	//Tyhjennä lista näytöltä
	function clearScreen() {
		$("#shoppingListTable").replaceWith('<table id="shoppingListTable" border="1">');
	}
	
	
	//Tyhjennä uuden tuotteen syöttökentät
	function clearNewProductArea(){
		$("input").val("");
	}
	
	//Tyhjennä array ja aikaisempi lista
	$("#resetList").click(function() {
		shoppinglist = [];
		clearNewProductArea();
		clearScreen();
	});

	//Hinta ja määrä kentän validoinnit
	function validator(x,y){
		test = true;
		if (x <= 0){test = false};
		if (y <= 0){test = false};
		if (parseFloat(x) === x == false){test = false};
		if (parseInt(y) === y == false){test = false};
		return test;		
		};	

	//Tulosta uusi lista näytölle
	function printList() {
		newScreen();
		var totalSum = 0;
		$.each(shoppinglist, function (index, value) {
			totalSum = totalSum + value.price * value.amount;
			$(productRow).after('</tr>');
			$(productRow).after('<td><button type="button" id="editButton" value='+ index + '>EDIT</button></td>');
			$(productRow).after('<td><button type="button" id="deleteButton" value='+ index + '>DELETE</button></td>');
			$(productRow).after('<td>' + totalSum + ' €</td>');
			$(productRow).after('<td>' + (value.amount * value.price) + ' €</td>');
			$(productRow).after('<td>' + value.amount + ' kpl</td>');
			$(productRow).after('<td>' + value.price + ' €</td>');
			$(productRow).after('<td>' + value.product + '</td>');
			$(productRow).after('<td>' + (index + 1) + '</td>');
			$(productRow).after('<tr>');
		});
	}

	
	///*********************
	///TUOTERIVIN KÄSITTELYT
	///*********************
	
	
	//Lisää tuoterivi arrayhin
	$("#addToList").click(function() {
		if (validator(parseFloat(price.value),parseFloat(amount.value)) == true) {
			$("#noteArea").hide();
			var newProduct = {
				product: product.value,
				price: price.value,
				amount: amount.value	
				};	
			shoppinglist.push(newProduct);
			clearNewProductArea();
			printList();
		}
		else {
			$("#noteArea").show();
			$("#noteArea").text("Hinta ja/tai määrä ei ole kelvollinen arvo.");
		}
		});

	//Poista tuoterivi index(x)
	function deleteFromList() {
		$("#listArea").on("click", "#deleteButton", function() {
			i = $(this).val();
			shoppinglist.splice(i,1); 
			printList();
		});
	}
	
	
	//Muokkaa tuoterivi index(x)
	function editProductRow() {
		$("#listArea").on("click", "#editButton", function() {
			$("#buttonArea1").hide();
			$("#buttonArea2").show();
			i = $(this).val();
			secret.value = i;
			product.value = shoppinglist[i].product;
			price.value = shoppinglist[i].price;
			amount.value = shoppinglist[i].amount;
		});
	}
	
	
	//Hyväksytään tuoterivin päivitys
	function submitUpdate() {
		$("#buttonArea2").on("click", "#submitUpdate", function() {	
			if (validator(parseFloat(price.value),parseFloat(amount.value)) == true){
				var i = secret.value;
				$("#noteArea").hide();
				shoppinglist[i].product = product.value;
				shoppinglist[i].price = price.value;
				shoppinglist[i].amount = amount.value;
				clearNewProductArea();
				printList()
				$("#buttonArea1").show();
				$("#buttonArea2").hide();
			}
			else {
				$("#noteArea").show();
				$("#noteArea").text("Hinta ja/tai määrä ei ole kelvollinen arvo.");
			}
	
		});	
	}
	
	//Tuoterivin päivitys hylätään
	function cancelUpdate() {
		$("#buttonArea2").on("click", "#cancelUpdate", function() {
		clearNewProductArea();	
		$("#buttonArea1").show();
		$("#buttonArea2").hide();
		});	
	}	
	
	

});

