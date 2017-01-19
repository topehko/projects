var app = angular.module("Controllers",[]);

//Controller: hae kirjat
app.controller("BookListController",function($scope,bookFactory){
	
	$scope.bookfactory = bookFactory.getBooklist();	
	$("#divEdit").hide();
	});


//Controller: lisää kirja
app.controller("AddBookController", function($scope, bookFactory) {
	
	$scope.addBooks = function () {
		$scope.newbook.checkedOut = "Hyllyssä";
		bookFactory.addBooks($scope.newbook);
		$scope.newbook = {};	
	}
});


//Controller: lainaa kirja
app.controller("LoanBookController",function($scope,bookFactory){
	
	//Muuta palauta/lainaa nappi oikeaksi kirjalistaa tulostaessa
	$scope.setValue = function(x) {
		if ($scope.bookfactory[x].checkedOut == "Hyllyssä") {
			
			$("button[name='loanButton']:eq(" + x + ")").text("LAINAA");
		}
		else {
			$("button[name='loanButton']:eq(" + x + ")").text("PALAUTA");
		}
    }
	
	//Muuta kirjan tila lainattaessa/palautettaessa
	//Muuta palauta/lainaa nappi oikeaksi
	$scope.loanItem = function (x) {	
		if ($scope.bookfactory[x].checkedOut == "Hyllyssä") {
			$scope.bookfactory[x].checkedOut = "Lainassa";	
			$("button[name='loanButton']:eq(" + x + ")").text("PALAUTA");
		}
		else {
			$scope.bookfactory[x].checkedOut = "Hyllyssä"
			$("button[name='loanButton']:eq(" + x + ")").text("LAINAA");
		}
    }	
});


//Controller: muokkaa kirjaa
app.controller("EditBookController",function($scope,bookFactory){
	
	//Aktivoi muokkaus
	$scope.editItem = function (x) {
		$("#divBrowsing").hide();
		$("#divEdit").show();
		index.value = x;
		bookname.value = $scope.bookfactory[x].bookname;
		author.value = $scope.bookfactory[x].author;
		isbn.value = $scope.bookfactory[x].isbn;
		published.value = $scope.bookfactory[x].published;
    }
	
	//Hyväksy muokkaus
	$scope.submitEdit = function (x) {
		$("#divEdit").hide();
		$("#divBrowsing").show();
		x = index.value;
		$scope.bookfactory[x].bookname = bookname.value;
		$scope.bookfactory[x].author = author.value;
		$scope.bookfactory[x].isbn = isbn.value;
		$scope.bookfactory[x].published = published.value;
    }	
});



//Contoller: poista kirja
app.controller("DeleteBookController",function($scope,bookFactory){
	
	$scope.removeItem = function (x) {
		$scope.bookfactory.splice(x, 1);
    }
});
