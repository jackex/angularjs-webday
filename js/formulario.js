(function(){

angular.module('webDay',[])

.controller('dataCtrl',["$scope",function($scope){

	$scope.review = {};

		$scope.addReview = function(product){
			product.reviews.push($scope.review);
			$scope.review = {};
		};

	$scope.products  = [{
		name: 'AngularJS',
		price: 2.95,
		description: 'Framework super heroico desarrollado por Google basado en Javascript',
		specification: 'Libreria del lado del cliente para aplicaciones web dinamicas',
		imagenes: [
		{
			full: 'img/angularjs.jpg'
		}
		],
		reviews: [{
		stars: 5,
		body: "Es mi framework favorito :D",
		author: 'andrew@domain.com'
		},
		{
		stars: 2,
		body: "no me gusta para nada :S",
		author: 'tim@hater.com'
		}]
		},
		{
		name: 'BackboneJS',
		price: 2.50,
		description: 'Estructura para aplicaciones web, proveyendo modelos de tipo llave-valor',
		specification: 'Te permite desarrollar en Javascript atendiendo a patrones, con una variante'+
		' del paradigma MVC, el mismo que se ha introducido con fuerza en la programación del lado del'+
		' servidor y que, desde hace menos tiempo, viene empezando a ser costumbre en el desarrollo del '+
		'lado del cliente',
		imagenes: [
		{
			full: 'img/backbonejs.png'
		}],
		reviews: [{
		stars: 5,
		body: "Me encanta este framework",
		author: 'scott@domain.com'
		},
		{
		stars: 2,
		body: "Creo que es un muy buen framework para un frontend :D",
		author: 'tim@hater.com'
		}]},
		{
		name: 'EmberJS',
		price: 2.30,
		description: 'Ember.js es un framework JavaScript para crear aplicaciones web del lado del cliente'+
		' (código abierto). Esta basado en la arquitectura modelo-vista-controlador (MVC)',
		specification: 'permite a los desarrolladores crear aplicaciones de una sola pagina (single-page) escalables',
		imagenes: [
		{
			full: 'img/emberjs_.jpeg'
		}],
		reviews: [{
		stars: 5,
		body: "Es un framework muy util y estricto de usar :(",
		author: 'useraccount@domain.com'
		},
		{
		stars: 2,
		body: "En realidad no me gusta para nada ese framework prefiero AngularJS",
		author: 'tim@hater.com'
		}]
		},
		{
		name: 'NodeJS',
		price: 3.25,
		description: 'Libreria javascript del lado del servidor, creado para desarrollo web escalable',
		specification: 'construido sobre el motor Javascript 8 de Google, basado en eventos, Orientado a Objetos, ideal para aplicaciones en tiempo real',
		imagenes: [
		{
			full: 'img/nodejs.png'
		}
		],
		reviews: [{
		stars: 5,
		body: "Es mi framework favorito :D",
		author: 'andrew@domain.com'
		},
		{
		stars: 2,
		body: "no me gusta para nada :S",
		author: 'tim@hater.com'
		}]
		}];

}])
	.controller('panels',function(){
		
		var tab = 1;

		this.selectTab = function(numTab){
			tab = numTab;
		};


		this.isSelected = function(checkTab){
			return tab === checkTab;
		};
	});
})();