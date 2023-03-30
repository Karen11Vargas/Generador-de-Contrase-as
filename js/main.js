(function(){
     //Variables de la aplicacion 

     var app = document.getElementById('app');
     var inputCaracteres = document.getElementById('numero-caracteres');

    var configuracion = {
        caracteres : parseInt(inputCaracteres.value),
        simbolos: true, 
        numeros: true,
        mayusculas: true,
        minusculas: true 
    }

    var caracteres = {
        numeros : '0 1 2 3 4 5 6 7 8 9',
        simbolos: '! @ # $ %* _ - + = { [ } ] : ; < > . ? /', 
        mayusculas: 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z',
        minusculas: 'a b c d e f g h i j k l m n o p q r s t u v w x y z'
    }

    // Eventos 

    //Esta funcion ni permite que se haga un submit en el formulario
    app.addEventListener('submit', function(e){   
        e.preventDefault();
    });

    //Accede a los elementos y encunetra el que tenga el id indicado
    app.elements.namedItem('btn-mas-uno').addEventListener('click', function(){
        configuracion.caracteres++;
        inputCaracteres.value = configuracion.caracteres;
    }); 

    app.elements.namedItem('btn-menos-uno').addEventListener('click', function(){
        if (configuracion.caracteres>1) {
            configuracion.caracteres--;
            inputCaracteres.value = configuracion.caracteres;
        }
    }); 
    

    var btnOpciones=['btn-simbolos', 'btn-numeros', 'btn-mayusculas'];

    for (let index = 0; index < btnOpciones.length; index++) {
        app.elements.namedItem(btnOpciones[index]).addEventListener('click', function(){
            btnCambio(this);
            configuracion.simbolos = !configuracion.simbolos;
            configuracion.numeros = !configuracion.numeros;
            configuracion.mayusculas = !configuracion.mayusculas;
        })
    }
  
    //Funciones

    function btnCambio(btn){
        btn.classList.toggle('false');
        btn.childNodes[0].classList.toggle('fa-check');
        btn.childNodes[0].classList.toggle('fa-times');
    }
     
}
())