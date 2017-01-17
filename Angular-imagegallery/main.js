var app = angular.module("ImgApp",[]);

app.controller("ImgController", function($scope) {
		
	$scope.imgs = [];
		
	//Lisätään kuva /images/ hakemistosta (1-20)
	$scope.addimg = function() {
		$scope.newimg.src = "./images/" + $scope.newimg.name + ".jpg";
		$scope.imgs.push($scope.newimg);
		$scope.newimg = "";
	}	

	//Lisätään kuva kokonaisen WWW-osoitteen avulla
	$scope.addlink = function() {
		$scope.newlink.src = $scope.newlink.address;
		$scope.imgs.push($scope.newlink);
		$scope.newlink = "";
	}
		
		

});