$(document).ready(

    function(){
     
        var nuevacarta='carta1.jpg'
        var cont=1;

        setInterval(
            function(){
                console.log('Hola');
                //var num1 =console.log(Math.random()*10);
                //var num1 =Math.round(num1);
                console.log(Math.round(Math.random()*10));
                nuevacarta='img/carta'+cont+'.jpg'
                $('cartaMaestra').attr('src', nuevacarta);
                cont++;

                if(cont>3){
                    cont==0;
                }
            },200
        );

        $('carta').click(
            function(){
                $(this).hide();
            }
        );
    }

);