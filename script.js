
//TP07
/*	Mejorar el modulo IMDB
El modulo Debera, de forma privada o publica, mostrar/renderizar las peliculas en el DOM//
El objeto pelicula ahora Debera tener la propiedad descripcion e imagen // YA
El titulo Debera ser un H2, la descipcion un P y la imagen un img // A
*/


function Pelicula (id, titulo, descripcion, imagen) {

	this.id = id;
	this.titulo = titulo;
	this.descripcion = descripcion;
	this.imagen = imagen;

}

var IMDB = (function (){

	//Atributos privados

	var peliculas = [] //Hacer privado del módulo
	var claveLocalStorage = 'peliculas';

	//Metodos

	//Funcion para precargar peliculas
    
    var precargarPeliculas = function () {
        
        var datos = localStorage.getItem(claveLocalStorage);

        if (datos !== null && datos !== '') {

            pelicula = JSON.parse(datos);
            
            for (i = 0; i < peliculas.length; i++) {
                
                dibujarPelicula(peliculas[i]);
                
            }

        }

    }

	//Funcion para validar que la pelicula no fue ingresada previamente

	var peliculaNoIngresada = function (pelicula){

		var pos = -1;
		var peliculaActual;

		for (i = 0; i < peliculas.length && pos === -1; i++) {

			peliculaActual = peliculas[i];

			if (peliculaActual.id === pelicula.id){

				pos = i;

			}
		}

		return pos;
	}


	//Funcion para agregar la pelicula

	var agregarPelicula = function (pelicula){

		var pos = peliculaNoIngresada(pelicula);

		if (pos === -1){

			peliculas.push(pelicula);

			alert ('la pelicula ha sido agregada');

		} else {

			alert('Lo sentimos, la pelicula ' + pelicula.titulo + 'ya esta en nuestros archivos');

		}
	}



	//Funcion para eliminar una pelicula por ID


	var eliminarPelicula = function (idPelicula){
		
		for(i = 0; i <= peliculas.length ; i++){

			if (peliculas[i].id === idPelicula){

				peliculas.splice(i, 1);

				alert ('la pelicula de id ' + idPelicula + ' ha sido eliminada');

			} else {

				alert ('la pelicula de id ' + idPelicula + ' no figura en nuestros archivos')
			}

		}

	}


	//Funcion para ordenar peliculas por ID

	
	var compararId = function (peliculaA,peliculaB) {

		var resultado;

		if(peliculaA.id < peliculaB.id){

			resultado = -1;

		}

		if(peliculaB.id === peliculaB.id){

			resultado = 0;
			
		}

		if(peliculaA.id > peliculaB.id){

			resultado = 1;
			
		}

		return resultado;

		}


	var ordenarId = function() {

		console.log(peliculas.sort(this.compararId));

	}

	
	// Funcion para persistir peliculas en el local storage

	var guardarPelicula = function(){

		var datos = JSON.stringify(peliculas);

		localStorage.setItem(claveLocalStorage, datos);
	}


	//Dibujar peliculas en el DOM

	var dibujarPelicula = function(pelicula){

		var ul = document.getElementById("listado");
		var li = document.createElement('li');
		var h2 = document.createElement('h2');
		var p = document.createElement('p');

		var titulo = document.createTextNode(pelicula.titulo);
		var descripcion = document.createTextNode(pelicula.descripcion)
		var img = document.createElement('img');


		// img.setAttribute('src', pelicula.imagen);

		li.setAttribute('id', pelicula.titulo);

		li.setAttribute('class', 'list-group-item');

		h2.appendChild(titulo);

		p.appendChild(descripcion);

		li.appendChild(img);

		li.appendChild(h2);

		li.appendChild(p);
		
		ul.appendChild(li);

	}

	//Borrar peliculas del DOM

	var borrarPeliculaDOM = function(pelicula){

		var ul = document.getElementById("listado");
		var li = document.getElementById(pelicula.titulo);

		ul.removeChild(li);

	}


	// Funcion para recuperar peliculas en el local storage

	var recuperarPelicula = function(){
		
		var datos = localStorage.getItem('peliculas');

		if(datos !== null){

			 datos = JSON.parse(datos);

			 peliculas = datos;
		}
	}

	// Funcion para eliminar peliculas en el local storage

	var eliminarPeliculaLs = function(id){

		var datos = localStorage.getItem('peliculas');

		if(datos !== null){

			localStorage.removeItem(pelicula.id, id)

		}

	}

	//

	var limpiarDOM = function () {

        nuevaLista = []
        localStorage.removeItem(claveLocalStorage);
        
        var peliculas = document.getElementById("listado");
        
        while (peliculas.firstChild) {
            peliculas.removeChild(peliculas.firstChild);
        }
        
    }

    precargarPeliculas();


	return {

		agregarPelicula: agregarPelicula,
		eliminarPelicula: eliminarPelicula,
		limpiarDOM: limpiarDOM,
		dibujarPelicula: dibujarPelicula,
		borrarPeliculaDOM:borrarPeliculaDOM,

	};

})()



//Caso de prueba 1
//Dibujar pelicula

var pelicula = new Pelicula(0, 'Strange Encounters Of The Third Kind', 'descripcion', 'img');

IMDB.dibujarPelicula(pelicula)

//Caso de prueba 2
//Dibujar pelicula

var pelicula = new Pelicula(0, 'Strange Encounters Of The Third Kind', 'descripcion', 'img');

IMDB.dibujarPelicula(pelicula)

var pelicula = new Pelicula(1, 'Titanic', 'descripcion', 'img');

IMDB.dibujarPelicula(pelicula)

IMDB.borrarPeliculaDOM(pelicula)

//Caso de prueba 3
//Vaciar DOM

var pelicula = new Pelicula(0, 'Strange Encounters Of The Third Kind', 'descripcion', 'img');

IMDB.dibujarPelicula(pelicula)

var pelicula = new Pelicula(1, 'Titanic', 'descripcion', 'img');

IMDB.dibujarPelicula(pelicula)

IMDB.limpiarDOM();







