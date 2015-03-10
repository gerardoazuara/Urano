$(document).ready(function(){
     
    $('h1').hide('fast');
    $('h1').show('slow');

    $('h1').click(function(){
        if($(this).css('fontSize')=='50px'){
                $(this).css('fontSize','32px')
                $(this).css('color','white')
            }else{
                $(this).css('fontSize','50px');
                $(this).css('color','gray')
            }
        
    })

	$('#btn1').click(function CalcularPrestamo(){
		var v_monto = document.getElementById("monto").value;//Obtener el valor de una caja de texto por medio del id
    	var v_meses = document.getElementById("meses").value;//Obtener el valor de una caja de texto por medio del id		

        document.frm_confirmacion.montoSolicitado.value= v_monto;
        if(v_meses >= 1 && v_meses <= 3){
            document.frm_confirmacion.valorPrestamo.value =  eval(v_monto + "*" + 1.01);    
        }else{
            if(v_meses>=4 && v_meses<=7){
                document.frm_confirmacion.valorPrestamo.value =  eval(v_monto + "*" + 1.02);
            }else{
                if(v_meses>=8)
                    document.frm_confirmacion.valorPrestamo.value =  eval(v_monto + "*" + 1.03);
            }
        }
        document.frm_confirmacion.pagoMensual.value =eval(document.getElementById("valorPrestamo").value + "/" + v_meses);
	})
});