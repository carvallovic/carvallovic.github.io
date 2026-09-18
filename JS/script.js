let imagenActual = document.getElementById("imagenActual");
let imagenNueva = document.getElementById("imagenNueva");
let nombre = document.getElementById("nombreServicio");

if (imagenActual && imagenNueva && nombre) {

let imagenes = [
    "img/Construccion.png",
    "img/Tabiqueria.png",
    "img/Ceramica.png",
    "img/Mantenciones.png"
];

let nombres = [
    "Construcción y ampliaciones",
    "Tabiquería",
    "Instalación de cerámicas",
    "Mantenciones del hogar"
];

let indice = 0;

setInterval(function() {

    let siguiente = indice + 1;

    if (siguiente == imagenes.length) {
        siguiente = 0;
    }

    imagenNueva.src = imagenes[siguiente];

    imagenNueva.style.transition = "none";
    imagenNueva.style.transform = "translateX(100%)";
    imagenNueva.style.opacity = "0";

    nombre.style.opacity = "0";

    setTimeout(function() {

        imagenActual.style.transition = "transform 1.2s ease, opacity 1.2s ease";
        imagenNueva.style.transition = "transform 1.2s ease, opacity 1.2s ease";

        imagenActual.style.transform = "translateX(-100%)";
        imagenActual.style.opacity = "0";

        imagenNueva.style.transform = "translateX(0)";
        imagenNueva.style.opacity = "1";

        nombre.textContent = nombres[siguiente];
        nombre.style.opacity = "1";

    }, 50);

    setTimeout(function() {

        imagenActual.src = imagenes[siguiente];

        imagenActual.style.transition = "none";
        imagenActual.style.transform = "translateX(0)";
        imagenActual.style.opacity = "1";

        imagenNueva.style.transition = "none";
        imagenNueva.style.transform = "translateX(100%)";
        imagenNueva.style.opacity = "0";

        indice = siguiente;

    }, 1300);

}, 4000);
}

let formulario = document.getElementById("formulario");

if (formulario) {

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        let nombre = document.getElementById("nombre").value.trim();
        let correo = document.getElementById("correo").value.trim();
        let telefono = document.getElementById("telefono").value.trim();
        let mensaje = document.getElementById("mensaje").value.trim();

        let errorNombre = document.getElementById("errorNombre");
        let errorCorreo = document.getElementById("errorCorreo");
        let errorTelefono = document.getElementById("errorTelefono");
        let errorMensaje = document.getElementById("errorMensaje");

        errorNombre.textContent = "";
        errorCorreo.textContent = "";
        errorTelefono.textContent = "";
        errorMensaje.textContent = "";

        document.getElementById("mensajeEnviado").textContent = "";

        if (nombre == "") {
            errorNombre.textContent = "Debes ingresar tu nombre";
            return;
        }

        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
            errorNombre.textContent = "El nombre solo debe contener letras";
            return;
        }

        if (correo == "") {
            errorCorreo.textContent = "Debes ingresar tu correo";
            return;
        }

        if (!/^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/.test(correo)) {
            errorCorreo.textContent =
                "El correo debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com";
            return;
        }

        if (telefono == "") {
            errorTelefono.textContent = "Debes ingresar tu teléfono";
            return;
        }

        if (!/^(?:\+56\s?9\s?\d{4}\s?\d{4}|9\s?\d{4}\s?\d{4})$/.test(telefono)) {
            errorTelefono.textContent = "Debes ingresar un teléfono válido";
            return;
        }

        if (mensaje == "") {
            errorMensaje.textContent = "Debes ingresar un mensaje";
            return;
        }

        document.getElementById("mensajeEnviado").textContent =
            "Mensaje enviado correctamente";

    });
}

// Carrito de servicios

let botonesServicio = document.querySelectorAll(".boton-servicio");

botonesServicio.forEach(function(boton) {

    boton.addEventListener("click", function() {

        let servicio = boton.dataset.servicio;

        let cotizacion = JSON.parse(localStorage.getItem("cotizacion")) || [];

        cotizacion.push(servicio);

        localStorage.setItem("cotizacion", JSON.stringify(cotizacion));

        alert("Servicio agregado a tu cotización");

    });

});

// Mostrar servicios en la cotización

let listaCotizacion = document.getElementById("listaCotizacion");

if (listaCotizacion) {

    let cotizacion = JSON.parse(localStorage.getItem("cotizacion")) || [];

    if (cotizacion.length == 0) {

        listaCotizacion.innerHTML =
            "<p>No has seleccionado ningún servicio.</p>";

    } else {

        for (let i = 0; i < cotizacion.length; i++) {

            let contenedor = document.createElement("div");

            let servicio = document.createElement("span");

            servicio.textContent = "✓ " + cotizacion[i];

            let botonEliminar = document.createElement("button");

            botonEliminar.textContent = "Eliminar";

            botonEliminar.addEventListener("click", function() {

                cotizacion.splice(i, 1);

                localStorage.setItem(
                    "cotizacion",
                    JSON.stringify(cotizacion)
                );

                location.reload();

            });

            contenedor.appendChild(servicio);
            contenedor.appendChild(botonEliminar);

            listaCotizacion.appendChild(contenedor);
        }
    }
}


// Vaciar cotización

let botonVaciar = document.getElementById("vaciarCotizacion");

if (botonVaciar) {

    botonVaciar.addEventListener("click", function() {

        localStorage.removeItem("cotizacion");

        location.reload();

    });
}

// Mostrar formulario de solicitud de cotización

let botonSolicitar = document.getElementById("solicitarCotizacion");
let formularioCotizacion = document.getElementById("formularioCotizacion");

if (botonSolicitar && formularioCotizacion) {

    botonSolicitar.addEventListener("click", function() {

        formularioCotizacion.style.display = "block";

    });

}

// Validación del formulario de solicitud de cotización

let formCotizacion = document.getElementById("formCotizacion");

if (formCotizacion) {

    formCotizacion.addEventListener("submit", function(event) {

        event.preventDefault();

        let tipoProyecto = document.getElementById("tipoProyecto").value;
        let metros = document.getElementById("metros").value.trim();
        let comuna = document.getElementById("comuna").value.trim();
        let descripcion = document.getElementById("descripcionProyecto").value.trim();
        let materiales = document.getElementById("materiales").value.trim();
        let nombre = document.getElementById("nombreCotizacion").value.trim();
        let correo = document.getElementById("correoCotizacion").value.trim();

        let errorTipoProyecto = document.getElementById("errorTipoProyecto");
        let errorMetros = document.getElementById("errorMetros");
        let errorComuna = document.getElementById("errorComuna");
        let errorDescripcion = document.getElementById("errorDescripcionProyecto");
        let errorMateriales = document.getElementById("errorMateriales");
        let errorNombre = document.getElementById("errorNombreCotizacion");
        let errorCorreo = document.getElementById("errorCorreoCotizacion");

        errorTipoProyecto.textContent = "";
        errorMetros.textContent = "";
        errorComuna.textContent = "";
        errorDescripcion.textContent = "";
        errorMateriales.textContent = "";
        errorNombre.textContent = "";
        errorCorreo.textContent = "";

        document.getElementById("mensajeCotizacion").textContent = "";


        if (tipoProyecto == "") {

            errorTipoProyecto.textContent =
                "Debes seleccionar el tipo de proyecto";

            return;
        }


        if (metros == "") {

            errorMetros.textContent =
                "Debes ingresar los metros cuadrados aproximados";

            return;
        }


        if (Number(metros) <= 0) {

            errorMetros.textContent =
                "Los metros cuadrados deben ser mayores que 0";

            return;
        }


        if (comuna == "") {

            errorComuna.textContent =
                "Debes ingresar la comuna";

            return;
        }


        if (descripcion == "") {

            errorDescripcion.textContent =
                "Debes describir el proyecto";

            return;
        }


        if (materiales.length > 500) {

            errorMateriales.textContent =
                "Los materiales o terminaciones no pueden superar los 500 caracteres";

            return;
        }


        if (nombre == "") {

            errorNombre.textContent =
                "Debes ingresar tu nombre";

            return;
        }


        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {

            errorNombre.textContent =
                "El nombre solo debe contener letras";

            return;
        }


        if (correo == "") {

            errorCorreo.textContent =
                "Debes ingresar tu correo";

            return;
        }


        if (!/^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/.test(correo)) {

            errorCorreo.textContent =
                "El correo debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com";

            return;
        }


        document.getElementById("mensajeCotizacion").textContent =
            "Solicitud de cotización enviada correctamente";

    });

}

// Validación en tiempo real del formulario de contacto

let nombreContacto = document.getElementById("nombre");
let correoContacto = document.getElementById("correo");
let telefonoContacto = document.getElementById("telefono");

if (nombreContacto && correoContacto && telefonoContacto) {

    nombreContacto.addEventListener("input", function() {

        let nombre = nombreContacto.value.trim();
        let error = document.getElementById("errorNombre");

        if (nombre != "" && !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {

            error.textContent =
                "El nombre solo debe contener letras";

        } else {

            error.textContent = "";

        }

    });


    correoContacto.addEventListener("input", function() {

        let correo = correoContacto.value.trim();
        let error = document.getElementById("errorCorreo");

        if (correo != "" &&
            !/^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/.test(correo)) {

            error.textContent =
                "El correo debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com";

        } else {

            error.textContent = "";

        }

    });


    telefonoContacto.addEventListener("input", function() {

        let telefono = telefonoContacto.value.trim();
        let error = document.getElementById("errorTelefono");

        if (telefono != "" &&
            !/^(?:\+56\s?9\s?\d{4}\s?\d{4}|9\s?\d{4}\s?\d{4})$/.test(telefono)) {

            error.textContent =
                "Debes ingresar un teléfono válido";

        } else {

            error.textContent = "";

        }

    });

}