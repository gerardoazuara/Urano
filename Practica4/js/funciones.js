/*function calcula(operacion){
    var operador1 = document.calculadora.operador1.value;//obtener el valor de una caja de texto por medio de name
    var operador2 = document.getElementById("operador2").value;//Obtener el valor de una caja de texto por medio del id
    //alert(operador1);
    //alert(operador2);
    var result= eval(operador1 + operacion + operador2);//para evaluar una expresion matematica
    document.calculadora.resultado.value= result;
}*/

//alert("Hola JavaScript")

//function hola(){sdfjksj}funcion explicita
$(document).ready(function(){
	//alert("Hola desde JQuery")

	$('h1').hide('slow');	//seleccionar todas las etiquetas h1, la funcion hide puede llevar o no parametro
	$('h1').show('slow');	//tambien  puede ser en FAST o milisegundos
	$('h1').click(function(){
			$(this).hide('FAST');// seleccionar el elemento NO TODOS los elementos
			$('#consola').html($(this).css('fontSize'));

			if($(this).css('fontSize')=='50px'){
				$(this).css('fontSize','32px')
			}else{
				$(this).css('fontSize','50px');
			}
			
			$(this).show('slow');
	});


	$('#btn2').click(function(){
		$('#img1').attr('src','img/004.png');
	});

	$('#btn2').click(function(){
		$('#img1').attr('src','img/007.png');
	});
});//con esta funcion indica que el documento esta listo, que su estructura fue descargada ready