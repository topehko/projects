app.factory("bookFactory",function($http){
	
	var factory = {};
	var booklist = [];

	//Lataa kirjaston pohjatiedoiksi .JSON tiedosto kirjoista
	$http.get("./scripts/controllers/booklist.json")
		.then(function(response) {
			for (i = 0; i < response.data.kirjat.length; i++) { 
				booklist.push(response.data.kirjat[i]);
		}
	});

	//Lisää uusi kirja arrayhin (booklist)
	factory.addBooks = function(books) {
		booklist.push(books);	
	}
	
	//Nouda kirjat arraysta
	factory.getBooklist = function() {
		return booklist;
	}
				
	return factory;
});