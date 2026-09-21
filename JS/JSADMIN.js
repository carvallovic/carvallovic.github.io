// ==========================================================================
// 1. DATOS DE USUARIOS / PERSONAL
// ==========================================================================
const usuariosPorPagina = {
    1: [
        { nombre: "Víctor Carvallo", cargo: "Administrador General", perfil: "Administrador", nacimiento: "1980-05-14", estado: "Activo", ingreso: "2020-01-15", egreso: "-" },
        { nombre: "Ana María Rojas", cargo: "Arquitecta de Obra", perfil: "Supervisor", nacimiento: "1990-08-23", estado: "Activo", ingreso: "2023-01-10", egreso: "-" },
        { nombre: "Patricia Silva Castro", cargo: "Prevencionista de Riesgos", perfil: "Supervisor", nacimiento: "1988-03-19", estado: "Activo", ingreso: "2023-08-20", egreso: "-" },
        { nombre: "Matías Vera Muñoz", cargo: "Ejecutivo de Ventas", perfil: "Vendedor", nacimiento: "1993-02-11", estado: "Activo", ingreso: "2024-01-15", egreso: "-" },
        { nombre: "Claudia Reyes Morales", cargo: "Vendedora Terreno", perfil: "Vendedor", nacimiento: "1991-09-05", estado: "Activo", ingreso: "2023-05-10", egreso: "-" },
        { nombre: "Cristián Fuentes Parra", cargo: "Ejecutivo de Ventas", perfil: "Vendedor", nacimiento: "1987-11-30", estado: "Inactivo", ingreso: "2022-04-01", egreso: "2024-01-15" },
        { nombre: "Carlos Mendoza Silva", cargo: "Maestro Mayor", perfil: "Operativo", nacimiento: "1985-04-12", estado: "Activo", ingreso: "2022-03-15", egreso: "-" },
        { nombre: "Roberto Gómez Vera", cargo: "Electricista Capataz", perfil: "Operativo", nacimiento: "1982-11-05", estado: "Inactivo", ingreso: "2021-06-01", egreso: "2024-02-28" }
    ],
    2: [
        { nombre: "Valeria Godoy Nuñez", cargo: "Diseñadora de Interiores", perfil: "Supervisor", nacimiento: "1992-06-18", estado: "Activo", ingreso: "2024-05-10", egreso: "-" },
        { nombre: "Camila Sepúlveda Soto", cargo: "Asistente de Prevención", perfil: "Supervisor", nacimiento: "1995-02-14", estado: "Activo", ingreso: "2023-11-15", egreso: "-" },
        { nombre: "Gonzalo Ibáñez Lagos", cargo: "Topógrafo", perfil: "Supervisor", nacimiento: "1986-11-22", estado: "Activo", ingreso: "2022-04-10", egreso: "-" },
        { nombre: "Daniela Araya Soto", cargo: "Vendedora Canal Empresa", perfil: "Vendedor", nacimiento: "1994-04-18", estado: "Activo", ingreso: "2023-09-01", egreso: "-" },
        { nombre: "Felipe Henríquez Palma", cargo: "Ejecutivo de Ventas", perfil: "Vendedor", nacimiento: "1989-08-25", estado: "Activo", ingreso: "2022-10-12", egreso: "-" },
        { nombre: "Andrea Castillo Riquelme", cargo: "Vendedora de Proyectos", perfil: "Vendedor", nacimiento: "1992-12-03", estado: "Activo", ingreso: "2024-02-20", egreso: "-" },
        { nombre: "Mauricio Orellana Gómez", cargo: "Ejecutivo de Ventas", perfil: "Vendedor", nacimiento: "1986-07-14", estado: "Inactivo", ingreso: "2021-08-15", egreso: "2023-11-30" },
        { nombre: "Diego Morales Pinto", cargo: "Jornal Avanzado", perfil: "Operativo", nacimiento: "1994-07-30", estado: "Inactivo", ingreso: "2022-11-05", egreso: "2023-12-15" }
    ],
    3: [
        { nombre: "Natalia Espinoza Vega", cargo: "Dibujante Técnico", perfil: "Supervisor", nacimiento: "1989-09-04", estado: "Inactivo", ingreso: "2022-03-01", egreso: "2024-06-30" },
        { nombre: "Valentina Donoso Silva", cargo: "Vendedora Salón", perfil: "Vendedor", nacimiento: "1996-03-22", estado: "Activo", ingreso: "2024-03-10", egreso: "-" },
        { nombre: "Tomás Sanhueza Godoy", cargo: "Ejecutivo de Ventas", perfil: "Vendedor", nacimiento: "1990-10-08", estado: "Activo", ingreso: "2023-07-01", egreso: "-" },
        { nombre: "Paula Sepúlveda Tapia", cargo: "Vendedora de Mesón", perfil: "Vendedor", nacimiento: "1993-05-17", estado: "Activo", ingreso: "2024-01-20", egreso: "-" },
        { nombre: "Miguel Ángel Torres", cargo: "Carpintero de Terminaciones", perfil: "Operativo", nacimiento: "1987-09-25", estado: "Activo", ingreso: "2024-02-01", egreso: "-" },
        { nombre: "Fernando Tapia Araya", cargo: "Gasfiter Certificado", perfil: "Operativo", nacimiento: "1983-01-08", estado: "Inactivo", ingreso: "2023-04-18", egreso: "2025-10-30" },
        { nombre: "Andrés Fuenzalida Parra", cargo: "Bodeguero General", perfil: "Operativo", nacimiento: "1989-10-02", estado: "Activo", ingreso: "2021-09-01", egreso: "-" },
        { nombre: "Esteban Muñoz Palma", cargo: "Operador de Maquinaria", perfil: "Operativo", nacimiento: "1993-08-31", estado: "Activo", ingreso: "2022-07-22", egreso: "-" }
    ]
};

// ==========================================================================
// 2. DATOS DE PRODUCTOS Y SERVICIOS
// ==========================================================================
const productosPorPagina = {
    1: [
        { 
            nombre: "Construcción y ampliaciones", 
            precioDesde: "$500.000", 
            precioHasta: "$2.500.000", 
            estado: "Activo", 
            fechaAlta: "2024-01-15", 
            fechaModificacion: "2026-02-10" 
        },
        { 
            nombre: "Tabiquería", 
            precioDesde: "$150.000", 
            precioHasta: "$600.000", 
            estado: "Activo", 
            fechaAlta: "2024-02-01", 
            fechaModificacion: "2026-01-20" 
        },
        { 
            nombre: "Instalación de cerámicas", 
            precioDesde: "$120.000", 
            precioHasta: "$850.000", 
            estado: "Activo", 
            fechaAlta: "2024-03-10", 
            fechaModificacion: "2026-03-01" 
        },
        { 
            nombre: "Mantenciones del hogar", 
            precioDesde: "$80.000", 
            precioHasta: "$350.000", 
            estado: "Activo", 
            fechaAlta: "2024-01-10", 
            fechaModificacion: "2026-03-15" 
        }
    ]
};

// Variables de estado global
let paginaActual = 1;
let empleadoSeleccionado = null;
let productoSeleccionado = null;

// ==========================================================================
// 3. RENDERIZAR VISTA DASHBOARD INICIO
// ==========================================================================
function renderizarInicioAdmin() {
    renderizarUltimosUsuarios();
    renderizarUltimosProductos();
}

function renderizarUltimosUsuarios() {
    const tbody = document.getElementById('tablaUsuariosInicio');
    if (!tbody) return;

    const lista = usuariosPorPagina[1] || [];
    tbody.innerHTML = '';

    lista.slice(0, 5).forEach(user => {
        const tr = document.createElement('tr');
        const claseEstado = user.estado === 'Activo' ? 'estado-activo' : 'estado-inactivo';
        
        tr.innerHTML = `
            <td>${user.nombre}</td>
            <td>${user.cargo}</td>
            <td>${user.perfil}</td>
            <td>${user.nacimiento}</td>
            <td><span class="${claseEstado}">${user.estado}</span></td>
            <td>${user.ingreso}</td>
            <td>${user.egreso}</td>
        `;
        tbody.appendChild(tr);
    });
}

function renderizarUltimosProductos() {
    const tbody = document.getElementById('tablaProductosInicio');
    if (!tbody) return;

    const lista = productosPorPagina[1] || [];
    tbody.innerHTML = '';

    lista.forEach(prod => {
        const tr = document.createElement('tr');
        const claseEstado = prod.estado === 'Activo' ? 'estado-activo' : 'estado-inactivo';
        
        tr.innerHTML = `
            <td>${prod.nombre}</td>
            <td>${prod.precioDesde}</td>
            <td>${prod.precioHasta}</td>
            <td><span class="${claseEstado}">${prod.estado}</span></td>
            <td>${prod.fechaAlta}</td>
            <td>${prod.fechaModificacion}</td>
        `;
        tbody.appendChild(tr);
    });
}

// ==========================================================================
// 4. DETECCIÓN Y ROUTING DE PÁGINAS MANTENEDORAS (EMPLEADOS / PRODUCTOS)
// ==========================================================================
function esPaginaProductos() {
    const tituloHeader = document.querySelector('.header-left h2')?.innerText || '';
    return window.location.pathname.includes('productos.html') || tituloHeader.includes('Productos');
}

function renderizarTabla(pagina) {
    if (document.getElementById('tablaUsuariosInicio') || document.getElementById('tablaProductosInicio')) {
        renderizarInicioAdmin();
        return;
    }

    if (esPaginaProductos()) {
        renderizarTablaProductos(pagina);
    } else {
        renderizarTablaUsuarios(pagina);
    }
}

// ==========================================================================
// 5. LÓGICA PARA USUARIOS / PERSONAL
// ==========================================================================
function renderizarTablaUsuarios(pagina) {
    const tbody = document.getElementById('tablaCuerpo');
    if (!tbody) return;

    deseleccionarEmpleado();

    const lista = usuariosPorPagina[pagina] || [];
    tbody.innerHTML = '';

    lista.forEach(user => {
        const tr = document.createElement('tr');
        const claseEstado = user.estado === 'Activo' ? 'estado-activo' : 'estado-inactivo';
        
        tr.innerHTML = `
            <td>${user.nombre}</td>
            <td>${user.cargo}</td>
            <td>${user.perfil}</td>
            <td>${user.nacimiento}</td>
            <td><span class="${claseEstado}">${user.estado}</span></td>
            <td>${user.ingreso}</td>
            <td>${user.egreso}</td>
        `;

        tr.addEventListener('click', function() {
            seleccionarFila(tr, user);
        });

        tbody.appendChild(tr);
    });

    actualizarBotonesPaginacion(pagina);
}

function seleccionarFila(tr, user) {
    const btnEditar = document.getElementById('btnEditar');
    const filas = document.querySelectorAll('#tablaCuerpo tr');

    if (tr.classList.contains('fila-seleccionada')) {
        deseleccionarEmpleado();
        return;
    }

    filas.forEach(f => f.classList.remove('fila-seleccionada'));

    tr.classList.add('fila-seleccionada');
    empleadoSeleccionado = user;

    if (btnEditar) {
        btnEditar.style.display = 'inline-block';
    }
}

function deseleccionarEmpleado() {
    empleadoSeleccionado = null;
    const btnEditar = document.getElementById('btnEditar');
    if (btnEditar) {
        btnEditar.style.display = 'none';
    }
    const filas = document.querySelectorAll('#tablaCuerpo tr');
    filas.forEach(f => f.classList.remove('fila-seleccionada'));
}

function editarEmpleado() {
    if (empleadoSeleccionado) {
        sessionStorage.setItem('empleadoAEditar', JSON.stringify(empleadoSeleccionado));
        window.location.href = 'editar_empleado.html';
    }
}

// ==========================================================================
// 6. LÓGICA PARA PRODUCTOS / SERVICIOS
// ==========================================================================
function renderizarTablaProductos(pagina) {
    const tbody = document.getElementById('tablaCuerpo');
    if (!tbody) return;

    deseleccionarProducto();

    const lista = productosPorPagina[pagina] || [];
    tbody.innerHTML = '';

    lista.forEach(prod => {
        const tr = document.createElement('tr');
        const claseEstado = prod.estado === 'Activo' ? 'estado-activo' : 'estado-inactivo';
        
        tr.innerHTML = `
            <td>${prod.nombre}</td>
            <td>${prod.precioDesde}</td>
            <td>${prod.precioHasta}</td>
            <td><span class="${claseEstado}">${prod.estado}</span></td>
            <td>${prod.fechaAlta}</td>
            <td>${prod.fechaModificacion}</td>
        `;

        tr.addEventListener('click', function() {
            seleccionarFilaProducto(tr, prod);
        });

        tbody.appendChild(tr);
    });

    actualizarBotonesPaginacion(pagina);
}

function seleccionarFilaProducto(tr, prod) {
    const btnEditar = document.getElementById('btnEditar');
    const filas = document.querySelectorAll('#tablaCuerpo tr');

    if (tr.classList.contains('fila-seleccionada')) {
        deseleccionarProducto();
        return;
    }

    filas.forEach(f => f.classList.remove('fila-seleccionada'));

    tr.classList.add('fila-seleccionada');
    productoSeleccionado = prod;

    if (btnEditar) {
        btnEditar.style.display = 'inline-block';
    }
}

function deseleccionarProducto() {
    productoSeleccionado = null;
    const btnEditar = document.getElementById('btnEditar');
    if (btnEditar) {
        btnEditar.style.display = 'none';
    }
    const filas = document.querySelectorAll('#tablaCuerpo tr');
    filas.forEach(f => f.classList.remove('fila-seleccionada'));
}

function editarProducto() {
    if (productoSeleccionado) {
        sessionStorage.setItem('productoAEditar', JSON.stringify(productoSeleccionado));
        window.location.href = 'editar_producto.html';
    }
}

// ==========================================================================
// 7. PAGINACIÓN
// ==========================================================================
function actualizarBotonesPaginacion(pagina) {
    const botones = document.querySelectorAll('.btn-num');
    botones.forEach(btn => {
        btn.classList.remove('active');
        if (parseInt(btn.innerText) === pagina) {
            btn.classList.add('active');
        }
    });
}

function cambiarPagina(target) {
    const totalPaginas = esPaginaProductos() ? Object.keys(productosPorPagina).length : 3;

    if (target === 'prev') {
        if (paginaActual > 1) paginaActual--;
    } else if (target === 'next') {
        if (paginaActual < totalPaginas) paginaActual++;
    } else {
        paginaActual = target;
    }

    renderizarTabla(paginaActual);
}

// ==========================================================================
// 8. CONTROL DE FORMULARIOS Y EVENTOS DOM
// ==========================================================================
document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('tablaUsuariosInicio') || document.getElementById('tablaProductosInicio')) {
        renderizarInicioAdmin();
    }

    // --- FORMULARIO DE EMPLEADOS (NUEVO / EDITAR) ---
    const formNuevoUsuario = document.getElementById('formNuevoUsuario');
    if (formNuevoUsuario) {
        const datosEmpleadoGuardados = sessionStorage.getItem('empleadoAEditar');

        if (datosEmpleadoGuardados) {
            const empleado = JSON.parse(datosEmpleadoGuardados);

            if (document.getElementById('nombre')) document.getElementById('nombre').value = empleado.nombre || '';
            if (document.getElementById('cargo')) document.getElementById('cargo').value = empleado.cargo || '';
            if (document.getElementById('fechaNacimiento')) document.getElementById('fechaNacimiento').value = empleado.nacimiento || '';
            
            const selectPerfil = document.getElementById('perfil');
            if (selectPerfil) {
                if (empleado.perfil === 'Supervisor') selectPerfil.value = 'sup';
                else if (empleado.perfil === 'Operativo') selectPerfil.value = 'op';
                else if (empleado.perfil === 'Administrador') selectPerfil.value = 'admin';
                else if (empleado.perfil === 'Vendedor') selectPerfil.value = 'vend';
            }

            if (document.getElementById('correo')) {
                const mailSimulado = empleado.nombre.toLowerCase().replace(/ /g, '.').normalize("NFD").replace(/[\u0300-\u036f]/g, "") + '@montero.cl';
                document.getElementById('correo').value = mailSimulado;
            }
            if (document.getElementById('direccion')) document.getElementById('direccion').value = 'Av. Central 1234';
            if (document.getElementById('telefono')) document.getElementById('telefono').value = '+56987654321';
            if (document.getElementById('region')) document.getElementById('region').value = 'rm';
            if (document.getElementById('comuna')) document.getElementById('comuna').value = 'linares';

            sessionStorage.removeItem('empleadoAEditar');
        }

        formNuevoUsuario.addEventListener('submit', function (event) {
            event.preventDefault();

            const pass1 = document.getElementById('contrasena')?.value;
            const pass2 = document.getElementById('confirmarContrasena')?.value;

            if (pass1 && pass2 && pass1 !== pass2) {
                alert('Las contraseñas no coinciden. Por favor, verifíquelas.');
                return;
            }

            const mensaje = document.getElementById('mensajeExito');
            if (mensaje) {
                mensaje.style.display = 'block';
                mensaje.scrollIntoView({ behavior: 'smooth', block: 'center' });

                setTimeout(() => {
                    mensaje.style.display = 'none';
                }, 4000);
            }
        });
    }

    // --- FORMULARIO DE PRODUCTOS (EDITAR) ---
    const formEditarProducto = document.getElementById('formEditarProducto');
    if (formEditarProducto) {
        const datosProductoGuardados = sessionStorage.getItem('productoAEditar');

        if (datosProductoGuardados) {
            const producto = JSON.parse(datosProductoGuardados);

            if (document.getElementById('nombre')) document.getElementById('nombre').value = producto.nombre || '';
            if (document.getElementById('precioDesde')) document.getElementById('precioDesde').value = producto.precioDesde || '';
            if (document.getElementById('precioHasta')) document.getElementById('precioHasta').value = producto.precioHasta || '';
            if (document.getElementById('estado')) document.getElementById('estado').value = producto.estado || 'Activo';
            if (document.getElementById('fechaAlta')) document.getElementById('fechaAlta').value = producto.fechaAlta || '';
            if (document.getElementById('fechaModificacion')) document.getElementById('fechaModificacion').value = producto.fechaModificacion || '';

            sessionStorage.removeItem('productoAEditar');
        }

        formEditarProducto.addEventListener('submit', function (e) {
            e.preventDefault();

            const mensaje = document.getElementById('mensajeExito');
            if (mensaje) {
                mensaje.style.display = 'block';
                mensaje.scrollIntoView({ behavior: 'smooth', block: 'center' });

                setTimeout(() => {
                    mensaje.style.display = 'none';
                }, 4000);
            }
        });
    }
});