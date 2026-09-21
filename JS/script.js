let imagenes = [
    "img/construccion.png",
    "img/tabiqueria.png",
    "img/ceramica.png",
    "img/mantenciones.png"
];

let nombresServicios = [
    "Construcción y ampliaciones",
    "Tabiquería",
    "Instalación de cerámicas",
    "Mantenciones del hogar"
];

let posicionImagen = 0;

let imagenActual = document.getElementById("imagenActual");
let imagenNueva = document.getElementById("imagenNueva");
let nombreServicio = document.getElementById("nombreServicio");

if (imagenActual && imagenNueva) {

    imagenActual.src = imagenes[0];
    nombreServicio.textContent = nombresServicios[0];

    setInterval(function() {

        let siguiente = (posicionImagen + 1) % imagenes.length;

        imagenNueva.src = imagenes[siguiente];
        imagenNueva.style.transform = "translateX(0)";
        imagenNueva.style.opacity = "1";

        imagenActual.style.transform = "translateX(-100%)";
        imagenActual.style.opacity = "0";

        setTimeout(function() {

            imagenActual.src = imagenes[siguiente];
            imagenActual.style.transform = "translateX(0)";
            imagenActual.style.opacity = "1";

            imagenNueva.style.transform = "translateX(100%)";
            imagenNueva.style.opacity = "0";

            nombreServicio.textContent = nombresServicios[siguiente];

            posicionImagen = siguiente;

        }, 1000);

    }, 4000);
}


let formularioContacto = document.getElementById("formContacto");

if (formularioContacto) {

    let nombre = document.getElementById("nombre");
    let correo = document.getElementById("correo");
    let telefono = document.getElementById("telefono");
    let mensaje = document.getElementById("mensaje");

    let errorNombre = document.getElementById("errorNombre");
    let errorCorreo = document.getElementById("errorCorreo");
    let errorTelefono = document.getElementById("errorTelefono");
    let errorMensaje = document.getElementById("errorMensaje");

    nombre.addEventListener("input", function() {

        if (nombre.value.trim() == "") {
            errorNombre.textContent = "Debes ingresar tu nombre";
        } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre.value)) {
            errorNombre.textContent = "El nombre solo debe contener letras";
        } else {
            errorNombre.textContent = "";
        }

    });

    correo.addEventListener("input", function() {

        if (correo.value.trim() == "") {
            errorCorreo.textContent = "Debes ingresar tu correo";
        } else if (!/^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i.test(correo.value)) {
            errorCorreo.textContent =
                "El correo debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com";
        } else {
            errorCorreo.textContent = "";
        }

    });

    telefono.addEventListener("input", function() {

        if (telefono.value.trim() == "") {
            errorTelefono.textContent = "Debes ingresar tu teléfono";
        } else if (!/^(9\s?\d{4}\s?\d{4}|\+569\s?\d{4}\s?\d{4})$/.test(telefono.value)) {
            errorTelefono.textContent = "Ingresa un teléfono válido";
        } else {
            errorTelefono.textContent = "";
        }

    });

    mensaje.addEventListener("input", function() {

        if (mensaje.value.trim() == "") {
            errorMensaje.textContent = "Debes ingresar un mensaje";
        } else {
            errorMensaje.textContent = "";
        }

    });

    formularioContacto.addEventListener("submit", function(event) {

        event.preventDefault();

        if (nombre.value.trim() == "") {
            errorNombre.textContent = "Debes ingresar tu nombre";
            return;
        }

        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre.value)) {
            errorNombre.textContent = "El nombre solo debe contener letras";
            return;
        }

        if (correo.value.trim() == "") {
            errorCorreo.textContent = "Debes ingresar tu correo";
            return;
        }

        if (!/^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i.test(correo.value)) {
            errorCorreo.textContent =
                "El correo debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com";
            return;
        }

        if (telefono.value.trim() == "") {
            errorTelefono.textContent = "Debes ingresar tu teléfono";
            return;
        }

        if (!/^(9\s?\d{4}\s?\d{4}|\+569\s?\d{4}\s?\d{4})$/.test(telefono.value)) {
            errorTelefono.textContent = "Ingresa un teléfono válido";
            return;
        }

        if (mensaje.value.trim() == "") {
            errorMensaje.textContent = "Debes ingresar un mensaje";
            return;
        }

        document.getElementById("mensajeFormulario").textContent =
            "Mensaje enviado correctamente";

    });

}


let formCotizacion = document.getElementById("formCotizacion");

if (formCotizacion) {

    let tipoProyecto = document.getElementById("tipoProyecto");
    let metros = document.getElementById("metros");
    let comuna = document.getElementById("comuna");
    let descripcionProyecto = document.getElementById("descripcionProyecto");
    let materiales = document.getElementById("materiales");
    let nombreCotizacion = document.getElementById("nombreCotizacion");
    let correoCotizacion = document.getElementById("correoCotizacion");

    let errorTipoProyecto = document.getElementById("errorTipoProyecto");
    let errorMetros = document.getElementById("errorMetros");
    let errorComuna = document.getElementById("errorComuna");
    let errorDescripcionProyecto = document.getElementById("errorDescripcionProyecto");
    let errorMateriales = document.getElementById("errorMateriales");
    let errorNombreCotizacion = document.getElementById("errorNombreCotizacion");
    let errorCorreoCotizacion = document.getElementById("errorCorreoCotizacion");

    function validarTipoProyecto() {

        if (tipoProyecto.value == "") {
            errorTipoProyecto.textContent = "Debes seleccionar un tipo de proyecto";
            return false;
        }

        errorTipoProyecto.textContent = "";
        return true;
    }

    function validarMetros() {

        if (metros.value == "") {
            errorMetros.textContent = "Debes ingresar los metros cuadrados";
            return false;
        }

        if (Number(metros.value) <= 0) {
            errorMetros.textContent = "Los metros cuadrados deben ser mayores que 0";
            return false;
        }

        errorMetros.textContent = "";
        return true;
    }

    function validarComuna() {

        if (comuna.value.trim() == "") {
            errorComuna.textContent = "Debes ingresar la comuna";
            return false;
        }

        errorComuna.textContent = "";
        return true;
    }

    function validarDescripcion() {

        if (descripcionProyecto.value.trim() == "") {
            errorDescripcionProyecto.textContent = "Debes describir tu proyecto";
            return false;
        }

        errorDescripcionProyecto.textContent = "";
        return true;
    }

    function validarMateriales() {

        if (materiales.value.trim() == "") {
            errorMateriales.textContent = "Debes indicar materiales o terminaciones";
            return false;
        }

        errorMateriales.textContent = "";
        return true;
    }

    function validarNombreCotizacion() {

        if (nombreCotizacion.value.trim() == "") {
            errorNombreCotizacion.textContent = "Debes ingresar tu nombre";
            return false;
        }

        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombreCotizacion.value.trim())) {
            errorNombreCotizacion.textContent = "El nombre solo debe contener letras";
            return false;
        }

        errorNombreCotizacion.textContent = "";
        return true;
    }

    function validarCorreoCotizacion() {

        if (correoCotizacion.value.trim() == "") {
            errorCorreoCotizacion.textContent = "Debes ingresar tu correo";
            return false;
        }

        if (!/^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i.test(correoCotizacion.value.trim())) {
            errorCorreoCotizacion.textContent =
                "El correo debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com";
            return false;
        }

        errorCorreoCotizacion.textContent = "";
        return true;
    }

    tipoProyecto.addEventListener("change", validarTipoProyecto);
    metros.addEventListener("input", validarMetros);
    comuna.addEventListener("input", validarComuna);
    descripcionProyecto.addEventListener("input", validarDescripcion);
    materiales.addEventListener("input", validarMateriales);
    nombreCotizacion.addEventListener("input", validarNombreCotizacion);
    correoCotizacion.addEventListener("input", validarCorreoCotizacion);

    formCotizacion.addEventListener("submit", function(event) {

        event.preventDefault();

        let valido = true;

        if (!validarTipoProyecto()) {
            valido = false;
        }

        if (!validarMetros()) {
            valido = false;
        }

        if (!validarComuna()) {
            valido = false;
        }

        if (!validarDescripcion()) {
            valido = false;
        }

        if (!validarMateriales()) {
            valido = false;
        }

        if (!validarNombreCotizacion()) {
            valido = false;
        }

        if (!validarCorreoCotizacion()) {
            valido = false;
        }

        if (!valido) {
            return;
        }

        let solicitud = {
            tipoProyecto: tipoProyecto.value,
            metros: metros.value,
            comuna: comuna.value.trim(),
            descripcion: descripcionProyecto.value.trim(),
            materiales: materiales.value.trim(),
            nombre: nombreCotizacion.value.trim(),
            correo: correoCotizacion.value.trim()
        };

        localStorage.setItem(
            "solicitudCotizacion",
            JSON.stringify(solicitud)
        );

        document.getElementById("mensajeCotizacion").textContent =
            "Solicitud de cotización enviada correctamente";

    });

}


let formRegistro = document.getElementById("formRegistro");

if (formRegistro) {

    formRegistro.addEventListener("submit", function(event) {

        event.preventDefault();

        let nombre = document.getElementById("nombreRegistro").value.trim();
        let correo = document.getElementById("correoRegistro").value.trim();
        let password = document.getElementById("passwordRegistro").value;
        let confirmarPassword = document.getElementById("confirmarPassword").value;

        let errorNombre = document.getElementById("errorNombreRegistro");
        let errorCorreo = document.getElementById("errorCorreoRegistro");
        let errorPassword = document.getElementById("errorPasswordRegistro");
        let errorConfirmar = document.getElementById("errorConfirmarPassword");

        errorNombre.textContent = "";
        errorCorreo.textContent = "";
        errorPassword.textContent = "";
        errorConfirmar.textContent = "";

        document.getElementById("mensajeRegistro").textContent = "";

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

        if (!/^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i.test(correo)) {
            errorCorreo.textContent =
                "El correo debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com";
            return;
        }

        if (password == "") {
            errorPassword.textContent = "Debes ingresar una contraseña";
            return;
        }

        if (password.length < 6) {
            errorPassword.textContent =
                "La contraseña debe tener al menos 6 caracteres";
            return;
        }

        if (confirmarPassword == "") {
            errorConfirmar.textContent =
                "Debes confirmar tu contraseña";
            return;
        }

        if (password != confirmarPassword) {
            errorConfirmar.textContent =
                "Las contraseñas no coinciden";
            return;
        }

        document.getElementById("mensajeRegistro").textContent =
            "Usuario registrado correctamente";

    });

}


let formLogin = document.getElementById("formLogin");

if (formLogin) {

    formLogin.addEventListener("submit", function(event) {

        event.preventDefault();

        let correo = document.getElementById("correoLogin").value.trim();
        let password = document.getElementById("passwordLogin").value;

        let errorCorreo = document.getElementById("errorCorreoLogin");
        let errorPassword = document.getElementById("errorPasswordLogin");

        errorCorreo.textContent = "";
        errorPassword.textContent = "";

        document.getElementById("mensajeLogin").textContent = "";

        if (correo == "") {
            errorCorreo.textContent = "Debes ingresar tu correo";
            return;
        }

        if (!/^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i.test(correo)) {
            errorCorreo.textContent =
                "El correo debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com";
            return;
        }

        if (password == "") {
            errorPassword.textContent =
                "Debes ingresar tu contraseña";
            return;
        }

        if (password.length < 6) {
            errorPassword.textContent =
                "La contraseña debe tener al menos 6 caracteres";
            return;
        }

        document.getElementById("mensajeLogin").textContent =
            "Inicio de sesión correcto";

    });

}


let botonesServicio = document.querySelectorAll(".boton-servicio");

botonesServicio.forEach(function(boton) {

    boton.addEventListener("click", function() {

        let servicio = boton.getAttribute("data-servicio");

        let cotizacion = JSON.parse(localStorage.getItem("cotizacion")) || [];

        cotizacion.push(servicio);

        localStorage.setItem("cotizacion", JSON.stringify(cotizacion));

        alert("Servicio agregado a tu cotización");

    });

});


let listaCotizacion = document.getElementById("listaCotizacion");
let vaciarCotizacion = document.getElementById("vaciarCotizacion");
let solicitarCotizacion = document.getElementById("solicitarCotizacion");
let formularioCotizacion = document.getElementById("formularioCotizacion");

function mostrarCotizacion() {

    if (!listaCotizacion) {
        return;
    }

    let cotizacion = JSON.parse(localStorage.getItem("cotizacion")) || [];

    listaCotizacion.innerHTML = "";

    if (cotizacion.length == 0) {

        listaCotizacion.innerHTML =
            "<p>No has seleccionado servicios.</p>";

        return;
    }

    cotizacion.forEach(function(servicio, indice) {

        let elemento = document.createElement("div");

        elemento.innerHTML =
            servicio +
            ' <button onclick="eliminarServicio(' + indice + ')">Eliminar</button>';

        listaCotizacion.appendChild(elemento);

    });

}

function eliminarServicio(indice) {

    let cotizacion =
        JSON.parse(localStorage.getItem("cotizacion")) || [];

    cotizacion.splice(indice, 1);

    localStorage.setItem(
        "cotizacion",
        JSON.stringify(cotizacion)
    );

    mostrarCotizacion();

}

if (listaCotizacion) {
    mostrarCotizacion();
}

if (vaciarCotizacion) {

    vaciarCotizacion.addEventListener("click", function() {

        localStorage.removeItem("cotizacion");

        mostrarCotizacion();

    });

}

if (solicitarCotizacion) {

    solicitarCotizacion.addEventListener("click", function() {

        formularioCotizacion.style.display = "block";

    });

}


let parametros = new URLSearchParams(window.location.search);
let servicioSeleccionado = parametros.get("servicio");

let serviciosDetalle = {

    construccion: {
        nombre: "Construcción y ampliaciones",
        imagen: "img/construccion.png",
        descripcion: "Realizamos proyectos de construcción y ampliación para viviendas, adaptándonos a las necesidades de cada cliente y aprovechando de mejor manera los espacios disponibles.",
        incluye: "Ampliaciones de viviendas, construcción de nuevos espacios, remodelaciones y adaptación de espacios existentes.",
        proceso: "Evaluación del proyecto, planificación de los trabajos, ejecución de la obra y revisión de las terminaciones.",
        precio: "Desde $500.000"
    },

    tabiqueria: {
        nombre: "Tabiquería",
        imagen: "img/tabiqueria.png",
        descripcion: "Realizamos trabajos de tabiquería para dividir, organizar y renovar los espacios interiores del hogar.",
        incluye: "Instalación de estructuras, división de ambientes y habilitación de nuevos espacios interiores.",
        proceso: "Evaluación del espacio, definición de la distribución, instalación de la estructura y terminaciones.",
        precio: "Desde $150.000"
    },

    ceramicas: {
        nombre: "Instalación de cerámicas",
        imagen: "img/ceramica.png",
        descripcion: "Realizamos instalación de cerámicas en pisos y muros para renovar y mejorar distintos espacios del hogar.",
        incluye: "Preparación de superficies, instalación de cerámicas y terminaciones.",
        proceso: "Revisión de la superficie, preparación, instalación de las cerámicas y revisión final.",
        precio: "Desde $120.000"
    },

    mantenciones: {
        nombre: "Mantenciones del hogar",
        imagen: "img/mantenciones.png",
        descripcion: "Realizamos trabajos de mantención y reparación para conservar tu vivienda en buenas condiciones y prevenir problemas mayores.",
        incluye: "Reparaciones, mantenimiento general y trabajos de conservación de diferentes espacios del hogar.",
        proceso: "Evaluación del problema, definición del trabajo necesario, ejecución y revisión final.",
        precio: "Desde $80.000"
    }

};

if (servicioSeleccionado && serviciosDetalle[servicioSeleccionado]) {

    let servicio = serviciosDetalle[servicioSeleccionado];

    document.getElementById("tituloDetalle").textContent =
        servicio.nombre;

    document.getElementById("imagenDetalle").src =
        servicio.imagen;

    document.getElementById("descripcionDetalle").textContent =
        servicio.descripcion;

    document.getElementById("incluyeDetalle").textContent =
        servicio.incluye;

    document.getElementById("procesoDetalle").textContent =
        servicio.proceso;

    document.getElementById("precioDetalle").textContent =
        servicio.precio;

    document.getElementById("botonDetalle").addEventListener("click", function() {

        let cotizacion =
            JSON.parse(localStorage.getItem("cotizacion")) || [];

        cotizacion.push(servicio.nombre);

        localStorage.setItem(
            "cotizacion",
            JSON.stringify(cotizacion)
        );

        alert("Servicio agregado a tu cotización");

    });

}