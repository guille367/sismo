var app = angular.module('app', ['dndLists']);

app.directive('islaSimple', function(){
	return{
		strict: 'E',
		templateNamespace: 'svg',	
        replace: true,
		templateUrl: 'views/isla-simple.html'
	}
});

app.directive('islaDoble', function(){
	return{
		strict: 'E',
		templateNamespace: 'svg',	
        replace: true,
		templateUrl: 'views/isla-doble.html'
	}
});

app.directive('lugar', function(){
	return{
		strict: 'E',
		templateNamespace: 'svg',	
        replace: true,
		templateUrl: 'views/lugar.html'
	}
});