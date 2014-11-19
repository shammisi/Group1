var changA =0;
var myApp = angular.module('fapp',[]);

myApp.controller('ctrl1',function($scope){
	
	$scope.doLts=[{"task":"Clean the Room","state":true},
	              {"task":"Car Wash","state":false},
	              {"task":"Shopping","state":true},
	              {"task":"Study","state":true},
	              {"task":"Write a letter","state":false},
	              {"task":"Fix the table","state":true}
	              ];
	
$scope.saveData = function(x){
$scope.doLts.push( {'task':x,'state':false});

};


$scope.work = function(rt){
	 if (rt == 1){changA = 1;}
	 if (rt == 2){changA = 2;}
	 if (rt == 3){changA = 3;}
	};
});



myApp.filter('Vfilter',function(){
	var my_func = function(input){
	
		if(changA == 1 ){input}
		if(changA == 2 ){input}
		if(changA == 3 ){input}
		alert(input[].state);
		return input;
		};
		
	return my_func;
});