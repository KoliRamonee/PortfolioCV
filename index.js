//Tarjetas de Lugares.HTML
    function mostrarPagina(idPagina) { 
    var paginas = document.querySelectorAll('.pagina');
    for (var i = 0; i < paginas.length; i++) {
        paginas[i].classList.remove('activa');
    }
    document.getElementById(idPagina).classList.add('activa');
    }
    function expandirCard(numeroTarjeta) {
        // Ocultar todas las tarjetas
        var tarjetas = document.querySelectorAll('.tarjeta');
        tarjetas.forEach(function(tarjeta) {
        tarjeta.style.display = 'none';
        }); 
        // Mostrar la tarjeta correspondiente al número
        var tarjetaMostrar = document.getElementById('tarjeta' + numeroTarjeta);
        tarjetaMostrar.style.display = 'block';
    }
    function cerrarTarjeta(numeroTarjeta) {
        // Ocultar la tarjeta correspondiente al número
        var tarjetaCerrar = document.getElementById('tarjeta' + numeroTarjeta);
        tarjetaCerrar.style.display = 'none';
    }    