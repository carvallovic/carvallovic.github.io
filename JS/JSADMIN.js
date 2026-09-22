// ==========================================================================
// 1. DATOS DE USUARIOS / PERSONAL (CON CORREO Y PERFIL)
// ==========================================================================
const usuariosPorPagina = {
    1: [
        { nombre: "Víctor Carvallo", cargo: "Administrador General", perfil: "Administrador", correo: "v.carvallo@profesor.duoc.cl", nacimiento: "1980-05-14", estado: "Activo", ingreso: "2020-01-15", egreso: "-" },
        { nombre: "Ana María Rojas", cargo: "Arquitecta de Obra", perfil: "Supervisor", correo: "a.rojas@duoc.cl", nacimiento: "1990-08-23", estado: "Activo", ingreso: "2023-01-10", egreso: "-" },
        { nombre: "Patricia Silva Castro", cargo: "Prevencionista de Riesgos", perfil: "Supervisor", correo: "p.silva@profesor.duoc.cl", nacimiento: "1988-03-19", estado: "Activo", ingreso: "2023-08-20", egreso: "-" },
        { nombre: "Matías Vera Muñoz", cargo: "Ejecutivo de Ventas", perfil: "Vendedor", correo: "m.vera@gmail.com", nacimiento: "1993-02-11", estado: "Activo", ingreso: "2024-01-15", egreso: "-" },
        { nombre: "Claudia Reyes Morales", cargo: "Vendedora Terreno", perfil: "Vendedor", correo: "c.reyes@duoc.cl", nacimiento: "1991-09-05", estado: "Activo", ingreso: "2023-05-10", egreso: "-" },
        { nombre: "Cristián Fuentes Parra", cargo: "Ejecutivo de Ventas", perfil: "Vendedor", correo: "c.fuentes@gmail.com", nacimiento: "1987-11-30", estado: "Inactivo", ingreso: "2022-04-01", egreso: "2024-01-15" },
        { nombre: "Carlos Mendoza Silva", cargo: "Maestro Mayor", perfil: "Operativo", correo: "c.mendoza@duoc.cl", nacimiento: "1985-04-12", estado: "Activo", ingreso: "2022-03-15", egreso: "-" },
        { nombre: "Roberto Gómez Vera", cargo: "Electricista Capataz", perfil: "Operativo", correo: "r.gomez@gmail.com", nacimiento: "1982-11-05", estado: "Inactivo", ingreso: "2021-06-01", egreso: "2024-02-28" }
    ],
    2: [
        { nombre: "Valeria Godoy Nuñez", cargo: "Diseñadora de Interiores", perfil: "Supervisor", correo: "v.godoy@profesor.duoc.cl", nacimiento: "1992-06-18", estado: "Activo", ingreso: "2024-05-10", egreso: "-" },
        { nombre: "Camila Sepúlveda Soto", cargo: "Asistente de Prevención", perfil: "Supervisor", correo: "c.sepulveda@duoc.cl", nacimiento: "1995-02-14", estado: "Activo", ingreso: "2023-11-15", egreso: "-" },
        { nombre: "Gonzalo Ibáñez Lagos", cargo: "Topógrafo", perfil: "Supervisor", correo: "g.ibanez@profesor.duoc.cl", nacimiento: "1986-11-22", estado: "Activo", ingreso: "2022-04-10", egreso: "-" },
        { nombre: "Daniela Araya Soto", cargo: "Vendedora Canal Empresa", perfil: "Vendedor", correo: "d.araya@gmail.com", nacimiento: "1994-04-18", estado: "Activo", ingreso: "2023-09-01", egreso: "-" },
        { nombre: "Felipe Henríquez Palma", cargo: "Ejecutivo de Ventas", perfil: "Vendedor", correo: "f.henriquez@duoc.cl", nacimiento: "1989-08-25", estado: "Activo", ingreso: "2022-10-12", egreso: "-" },
        { nombre: "Andrea Castillo Riquelme", cargo: "Vendedora de Proyectos", perfil: "Vendedor", correo: "a.castillo@gmail.com", nacimiento: "1992-12-03", estado: "Activo", ingreso: "2024-02-20", egreso: "-" },
        { nombre: "Mauricio Orellana Gómez", cargo: "Ejecutivo de Ventas", perfil: "Vendedor", correo: "m.orellana@duoc.cl", nacimiento: "1986-07-14", estado: "Inactivo", ingreso: "2021-08-15", egreso: "2023-11-30" },
        { nombre: "Diego Morales Pinto", cargo: "Jornal Avanzado", perfil: "Operativo", correo: "d.morales@gmail.com", nacimiento: "1994-07-30", estado: "Inactivo", ingreso: "2022-11-05", egreso: "2023-12-15" }
    ],
    3: [
        { nombre: "Natalia Espinoza Vega", cargo: "Dibujante Técnico", perfil: "Supervisor", correo: "n.espinoza@profesor.duoc.cl", nacimiento: "1989-09-04", estado: "Inactivo", ingreso: "2022-03-01", egreso: "2024-06-30" },
        { nombre: "Valentina Donoso Silva", cargo: "Vendedora Salón", perfil: "Vendedor", correo: "v.donoso@duoc.cl", nacimiento: "1996-03-22", estado: "Activo", ingreso: "2024-03-10", egreso: "-" },
        { nombre: "Tomás Sanhueza Godoy", cargo: "Ejecutivo de Ventas", perfil: "Vendedor", correo: "t.sanhueza@gmail.com", nacimiento: "1990-10-08", estado: "Activo", ingreso: "2023-07-01", egreso: "-" },
        { nombre: "Paula Sepúlveda Tapia", cargo: "Vendedora de Mesón", perfil: "Vendedor", correo: "p.sepulveda@duoc.cl", nacimiento: "1993-05-17", estado: "Activo", ingreso: "2024-01-20", egreso: "-" },
        { nombre: "Miguel Ángel Torres", cargo: "Carpintero de Terminaciones", perfil: "Operativo", correo: "m.torres@gmail.com", nacimiento: "1987-09-25", estado: "Activo", ingreso: "2024-02-01", egreso: "-" },
        { nombre: "Fernando Tapia Araya", cargo: "Gasfiter Certificado", perfil: "Operativo", correo: "f.tapia@duoc.cl", nacimiento: "1983-01-08", estado: "Inactivo", ingreso: "2023-04-18", egreso: "2025-10-30" },
        { nombre: "Andrés Fuenzalida Parra", cargo: "Bodeguero General", perfil: "Operativo", correo: "a.fuenzalida@gmail.com", nacimiento: "1989-10-02", estado: "Activo", ingreso: "2021-09-01", egreso: "-" },
        { nombre: "Esteban Muñoz Palma", cargo: "Operador de Maquinaria", perfil: "Operativo", correo: "e.munoz@duoc.cl", nacimiento: "1993-08-31", estado: "Activo", ingreso: "2022-07-22", egreso: "-" }
    ]
};

// ==========================================================================
// 2. DATOS DE CLIENTES
// ==========================================================================
const clientesPorPagina = {
    1: [
        { nombre: "Gonzalo Morales Ruiz", cargo: "Particular", perfil: "Usuario", correo: "g.morales@gmail.com", nacimiento: "1988-06-15", estado: "Activo", ingreso: "2023-02-10", egreso: "-" },
        { nombre: "María José Fernández", cargo: "Particular", perfil: "Usuario", correo: "mj.fernandez@duoc.cl", nacimiento: "1992-11-03", estado: "Activo", ingreso: "2023-05-18", egreso: "-" },
        { nombre: "Empresa Constructora Alfa", cargo: "Cliente Corporativo", perfil: "Usuario", correo: "contacto.alfa@gmail.com", nacimiento: "1980-01-20", estado: "Activo", ingreso: "2022-09-01", egreso: "-" },
        { nombre: "Inmobiliaria Del Sur SpA", cargo: "Cliente Corporativo", perfil: "Usuario", correo: "ventas.delsur@duoc.cl", nacimiento: "1985-04-12", estado: "Activo", ingreso: "2021-11-15", egreso: "-" },
        { nombre: "Rodrigo Alarcón Silva", cargo: "Particular", perfil: "Usuario", correo: "r.alarcon@gmail.com", nacimiento: "1995-08-25", estado: "Inactivo", ingreso: "2022-03-10", egreso: "2024-01-05" },
        { nombre: "Camila Fuentes Lagos", cargo: "Particular", perfil: "Usuario", correo: "c.fuentes@duoc.cl", nacimiento: "1991-03-30", estado: "Activo", ingreso: "2023-10-12", egreso: "-" },
        { nombre: "Javier Ortiz Bravo", cargo: "Particular", perfil: "Usuario", correo: "j.ortiz@gmail.com", nacimiento: "1984-12-05", estado: "Activo", ingreso: "2024-01-08", egreso: "-" },
        { nombre: "Inversiones San Pedro", cargo: "Cliente Corporativo", perfil: "Usuario", correo: "sanpedro@profesor.duoc.cl", nacimiento: "1987-07-22", estado: "Activo", ingreso: "2022-06-20", egreso: "-" }
    ],
    2: [
        { nombre: "Francisca Ibáñez M.", cargo: "Particular", perfil: "Usuario", correo: "f.ibanez@duoc.cl", nacimiento: "1993-09-14", estado: "Activo", ingreso: "2023-04-05", egreso: "-" },
        { nombre: "Diseño y Obras Nahuel", cargo: "Cliente Corporativo", perfil: "Usuario", correo: "obras.nahuel@gmail.com", nacimiento: "1982-02-28", estado: "Activo", ingreso: "2021-08-14", egreso: "-" },
        { nombre: "Hernán Castro Pinto", cargo: "Particular", perfil: "Usuario", correo: "h.castro@profesor.duoc.cl", nacimiento: "1979-10-10", estado: "Inactivo", ingreso: "2020-05-19", egreso: "2023-08-30" },
        { nombre: "Paula Venegas Soto", cargo: "Particular", perfil: "Usuario", correo: "p.venegas@gmail.com", nacimiento: "1996-01-18", estado: "Activo", ingreso: "2024-02-11", egreso: "-" },
        { nombre: "Constructora Horizon Ltd", cargo: "Cliente Corporativo", perfil: "Usuario", correo: "horizon@duoc.cl", nacimiento: "1983-05-04", estado: "Activo", ingreso: "2022-01-25", egreso: "-" },
        { nombre: "Felipe Ossa Guzmán", cargo: "Particular", perfil: "Usuario", correo: "f.ossa@gmail.com", nacimiento: "1990-07-07", estado: "Activo", ingreso: "2023-08-01", egreso: "-" },
        { nombre: "Loreto Medina Valdés", cargo: "Particular", perfil: "Usuario", correo: "l.medina@duoc.cl", nacimiento: "1988-12-21", estado: "Activo", ingreso: "2023-12-03", egreso: "-" },
        { nombre: "Tomás Guajardo R.", cargo: "Particular", perfil: "Usuario", correo: "t.guajardo@gmail.com", nacimiento: "1994-04-09", estado: "Inactivo", ingreso: "2022-10-15", egreso: "2024-02-01" }
    ],
    3: [
        { nombre: "Comercializadora Bicentenario", cargo: "Cliente Corporativo", perfil: "Usuario", correo: "bicentenario@duoc.cl", nacimiento: "1986-03-17", estado: "Activo", ingreso: "2023-03-22", egreso: "-" },
        { nombre: "Daniela Navarrete V.", cargo: "Particular", perfil: "Usuario", correo: "d.navarrete@gmail.com", nacimiento: "1997-06-02", estado: "Activo", ingreso: "2024-03-01", egreso: "-" },
        { nombre: "Álvaro Tapia Reyes", cargo: "Particular", perfil: "Usuario", correo: "a.tapia@profesor.duoc.cl", nacimiento: "1981-11-11", estado: "Activo", ingreso: "2022-07-19", egreso: "-" }
    ]
};

// ==========================================================================
// 3. DATOS DE PRODUCTOS Y SERVICIOS
// ==========================================================================
const productosPorPagina = {
    1: [
        { nombre: "Construcción y ampliaciones", precioDesde: "$500.000", precioHasta: "$2.500.000", estado: "Activo", fechaAlta: "2024-01-15", fechaModificacion: "2026-02-10" },
        { nombre: "Tabiquería", precioDesde: "$150.000", precioHasta: "$600.000", estado: "Activo", fechaAlta: "2024-02-01", fechaModificacion: "2026-01-20" },
        { nombre: "Instalación de cerámicas", precioDesde: "$120.000", precioHasta: "$850.000", estado: "Activo", fechaAlta: "2024-03-10", fechaModificacion: "2026-03-01" },
        { nombre: "Mantenciones del hogar", precioDesde: "$80.000", precioHasta: "$350.000", estado: "Activo", fechaAlta: "2024-01-10", fechaModificacion: "2026-03-15" }
    ]
};

// Variables globales
let paginaActual = 1;
let empleadoSeleccionado = null;
let clienteSeleccionado = null;
let productoSeleccionado = null;

// ==========================================================================
// 4. LÓGICA DE CONTROL DE ACCESO Y MENÚS SEGÚN PERFIL
// ==========================================================================
function aplicarPermisosMenu() {
    const perfil = sessionStorage.getItem('perfilLogueado') || 'Administrador';

    const permisos = {
        'Administrador': ['dashboard', 'ordenes', 'productos', 'reportes', 'personal', 'clientes'],
        'Supervisor':    ['dashboard', 'ordenes', 'productos', 'reportes', 'personal', 'clientes'],
        'Operativo':     ['dashboard', 'ordenes', 'productos', 'reportes', 'personal', 'clientes'],
        'Vendedor':      ['dashboard', 'ordenes', 'productos', 'clientes'],
        'Usuario':       ['ordenes']
    };

    const menusPermitidos = permisos[perfil] || permisos['Administrador'];

    const itemsMenu = document.querySelectorAll('.menu-grupo a[data-menu]');
    itemsMenu.forEach(item => {
        const idMenu = item.getAttribute('data-menu');
        if (menusPermitidos.includes(idMenu)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });

    const paginaActualArchivo = window.location.pathname.split('/').pop() || 'admin_home.html';
    const mapaPaginaMenu = {
        'admin_home.html': 'dashboard',
        'ordenes.html': 'ordenes',
        'productos.html': 'productos',
        'nuevo_producto.html': 'productos',
        'editar_producto.html': 'productos',
        'empleados.html': 'personal',
        'nuevo_empleado.html': 'personal',
        'editar_empleado.html': 'personal',
        'clientes.html': 'clientes',
        'nuevo_cliente.html': 'clientes',
        'editar_cliente.html': 'clientes'
    };

    const requerimientoMenu = mapaPaginaMenu[paginaActualArchivo];
    if (requerimientoMenu && !menusPermitidos.includes(requerimientoMenu)) {
        if (menusPermitidos.includes('ordenes')) {
            window.location.href = 'ordenes.html';
        } else if (menusPermitidos.includes('dashboard')) {
            window.location.href = 'admin_home.html';
        }
    }
}

// ==========================================================================
// 5. BÚSQUEDA Y VALIDACIÓN DE USUARIOS
// ==========================================================================
function validarCorreoDominio(correo) {
    if (!correo) return false;
    const correoLimpio = correo.trim().toLowerCase();
    const dominiosPermitidos = ['@duoc.cl', '@profesor.duoc.cl', '@gmail.com'];
    return dominiosPermitidos.some(dominio => correoLimpio.endsWith(dominio));
}

function buscarUsuarioPorCorreo(correo) {
    if (!correo) return null;
    const correoLimpio = correo.trim().toLowerCase();

    for (const p in usuariosPorPagina) {
        const u = usuariosPorPagina[p].find(item => item.correo.trim().toLowerCase() === correoLimpio);
        if (u) return u;
    }

    for (const p in clientesPorPagina) {
        const c = clientesPorPagina[p].find(item => item.correo.trim().toLowerCase() === correoLimpio);
        if (c) return c;
    }

    return null;
}

function buscarUsuarioPorNombre(nombre) {
    if (!nombre) return null;
    const nombreLimpio = nombre.trim().toLowerCase();

    for (const p in usuariosPorPagina) {
        const u = usuariosPorPagina[p].find(item => item.nombre.trim().toLowerCase() === nombreLimpio);
        if (u) return u;
    }

    for (const p in clientesPorPagina) {
        const c = clientesPorPagina[p].find(item => item.nombre.trim().toLowerCase() === nombreLimpio);
        if (c) return c;
    }

    return null;
}

// ==========================================================================
// 6. RENDERIZADO DEL DASHBOARD INICIO
// ==========================================================================
function renderizarInicioAdmin() {
    renderizarSaludoUsuario();
    renderizarUltimosClientes();
    renderizarUltimosProductos();
    aplicarPermisosMenu();
}

function renderizarSaludoUsuario() {
    const elSaludo = document.getElementById('saludoUsuario') || document.querySelector('.header-left h2');
    if (!elSaludo) return;

    const nombreUsuario = sessionStorage.getItem('usuarioLogueado');
    if (nombreUsuario) {
        elSaludo.innerText = `Hola ${nombreUsuario}`;
    }
}

function renderizarUltimosClientes() {
    const tbody = document.getElementById('tablaClientesInicio') || document.getElementById('tablaUsuariosInicio');
    if (!tbody) return;

    const lista = clientesPorPagina[1] || [];
    tbody.innerHTML = '';

    lista.slice(0, 5).forEach(client => {
        const tr = document.createElement('tr');
        const claseEstado = client.estado === 'Activo' ? 'estado-activo' : 'estado-inactivo';
        
        tr.innerHTML = `
            <td>${client.nombre}</td>
            <td>${client.cargo}</td>
            <td>${client.perfil}</td>
            <td>${client.correo}</td>
            <td>${client.nacimiento}</td>
            <td><span class="${claseEstado}">${client.estado}</span></td>
            <td>${client.ingreso}</td>
            <td>${client.egreso}</td>
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
// 7. ROUTING Y TABLAS DE MANTENEDORES
// ==========================================================================
function esPaginaClientes() {
    const tituloHeader = document.querySelector('.header-left h2')?.innerText || '';
    return window.location.pathname.includes('clientes.html') || tituloHeader.includes('Clientes');
}

function esPaginaProductos() {
    const tituloHeader = document.querySelector('.header-left h2')?.innerText || '';
    return window.location.pathname.includes('productos.html') || tituloHeader.includes('Productos');
}

function renderizarTabla(pagina) {
    if (document.getElementById('tablaClientesInicio') || document.getElementById('tablaUsuariosInicio') || document.getElementById('tablaProductosInicio')) {
        renderizarInicioAdmin();
        return;
    }

    if (esPaginaClientes()) {
        renderizarTablaClientes(pagina);
    } else if (esPaginaProductos()) {
        renderizarTablaProductos(pagina);
    } else {
        renderizarTablaUsuarios(pagina);
    }
}

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
            <td>${user.correo}</td>
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

function renderizarTablaClientes(pagina) {
    const tbody = document.getElementById('tablaCuerpo');
    if (!tbody) return;

    deseleccionarCliente();

    const lista = clientesPorPagina[pagina] || [];
    tbody.innerHTML = '';

    lista.forEach(client => {
        const tr = document.createElement('tr');
        const claseEstado = client.estado === 'Activo' ? 'estado-activo' : 'estado-inactivo';
        
        tr.innerHTML = `
            <td>${client.nombre}</td>
            <td>${client.cargo}</td>
            <td>${client.perfil}</td>
            <td>${client.correo}</td>
            <td>${client.nacimiento}</td>
            <td><span class="${claseEstado}">${client.estado}</span></td>
            <td>${client.ingreso}</td>
            <td>${client.egreso}</td>
        `;

        tr.addEventListener('click', function() {
            seleccionarFilaCliente(tr, client);
        });

        tbody.appendChild(tr);
    });

    actualizarBotonesPaginacion(pagina);
}

function seleccionarFilaCliente(tr, client) {
    const btnEditar = document.getElementById('btnEditar');
    const filas = document.querySelectorAll('#tablaCuerpo tr');

    if (tr.classList.contains('fila-seleccionada')) {
        deseleccionarCliente();
        return;
    }

    filas.forEach(f => f.classList.remove('fila-seleccionada'));

    tr.classList.add('fila-seleccionada');
    clienteSeleccionado = client;

    if (btnEditar) {
        btnEditar.style.display = 'inline-block';
    }
}

function deseleccionarCliente() {
    clienteSeleccionado = null;
    const btnEditar = document.getElementById('btnEditar');
    if (btnEditar) {
        btnEditar.style.display = 'none';
    }
    const filas = document.querySelectorAll('#tablaCuerpo tr');
    filas.forEach(f => f.classList.remove('fila-seleccionada'));
}

function editarCliente() {
    if (clienteSeleccionado) {
        sessionStorage.setItem('clienteAEditar', JSON.stringify(clienteSeleccionado));
        window.location.href = 'editar_cliente.html';
    }
}

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
// 8. PAGINACIÓN
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
    let totalPaginas = 3;
    if (esPaginaProductos()) {
        totalPaginas = Object.keys(productosPorPagina).length;
    } else if (esPaginaClientes()) {
        totalPaginas = Object.keys(clientesPorPagina).length;
    }

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
// 9. LÓGICA Y ESTRUCTURA DE MODALES (PERFIL Y CERRAR SESIÓN)
// ==========================================================================
function inyectarModales() {
    if (document.getElementById('modalPerfil')) return;

    const htmlModales = `
    <div id="modalPerfil" class="modal-overlay">
        <div class="modal-box">
            <div class="modal-header">
                <span>DATOS DEL PERFIL</span>
                <span style="cursor: pointer;" onclick="cerrarModal('modalPerfil')">✕</span>
            </div>
            <div class="modal-body">
                <div class="modal-info-item">
                    <strong>Nombre:</strong>
                    <span id="perfilNombre">-</span>
                </div>
                <div class="modal-info-item">
                    <strong id="labelCargoTipo">Cargo:</strong>
                    <span id="perfilCargo">-</span>
                </div>
                <div class="modal-info-item">
                    <strong>Perfil:</strong>
                    <span id="perfilRol">-</span>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn-cancelar" onclick="cerrarModal('modalPerfil')">CANCELAR</button>
                <button type="button" class="btn-registrar" style="background-color: #bb2d3b; border-color: #bb2d3b;" onclick="abrirConfirmacionLogout()">CERRAR SESIÓN</button>
            </div>
        </div>
    </div>

    <div id="modalConfirmarLogout" class="modal-overlay">
        <div class="modal-box">
            <div class="modal-header">
                <span>CONFIRMAR ACCIÓN</span>
            </div>
            <div class="modal-body">
                <p style="margin: 10px 0; font-weight: bold; text-align: center;">¿De verdad quieres cerrar sesión?</p>
            </div>
            <div class="modal-footer" style="justify-content: center;">
                <button type="button" class="btn-cancelar" onclick="cerrarModal('modalConfirmarLogout')">NO</button>
                <button type="button" class="btn-registrar" onclick="confirmarCerrarSesion()">SÍ</button>
            </div>
        </div>
    </div>
    `;

    document.body.insertAdjacentHTML('beforeend', htmlModales);
}

function abrirModalPerfil() {
    inyectarModales();

    const nombre = sessionStorage.getItem('usuarioLogueado') || 'Gonzalo Morales Ruiz';
    const perfil = sessionStorage.getItem('perfilLogueado') || 'Administrador';
    
    const usuarioInfo = buscarUsuarioPorNombre(nombre);
    const cargo = usuarioInfo ? usuarioInfo.cargo : (perfil === 'Administrador' ? 'Administrador de Sistema' : perfil);

    const elNombre = document.getElementById('perfilNombre');
    const elCargo = document.getElementById('perfilCargo');
    const elRol = document.getElementById('perfilRol');
    const labelCargoTipo = document.getElementById('labelCargoTipo');

    // Modificación dinámica de la etiqueta según el Perfil
    if (labelCargoTipo) {
        if (perfil === 'Usuario') {
            labelCargoTipo.innerText = 'Tipo cliente:';
        } else {
            labelCargoTipo.innerText = 'Cargo:';
        }
    }

    if (elNombre) elNombre.innerText = nombre;
    if (elCargo) elCargo.innerText = cargo;
    if (elRol) elRol.innerText = perfil;

    const modal = document.getElementById('modalPerfil');
    if (modal) modal.classList.add('activo');
}

function cerrarModal(idModal) {
    const modal = document.getElementById(idModal);
    if (modal) modal.classList.remove('activo');
}

function abrirConfirmacionLogout() {
    cerrarModal('modalPerfil');
    const modal = document.getElementById('modalConfirmarLogout');
    if (modal) modal.classList.add('activo');
}

function confirmarCerrarSesion() {
    sessionStorage.clear();
    window.location.href = 'cerrando_sesion.html';
}

// ==========================================================================
// 10. INICIALIZACIÓN DE EVENTOS AL CARGAR EL DOM
// ==========================================================================
document.addEventListener('DOMContentLoaded', function () {
    aplicarPermisosMenu();
    inyectarModales();

    // Enlazar evento click al botón de Perfil en el Sidebar Footer
    const itemsPerfil = document.querySelectorAll('.sidebar-footer a, a[href="#profile"]');
    itemsPerfil.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            abrirModalPerfil();
        });
    });

    if (document.getElementById('tablaClientesInicio') || document.getElementById('tablaUsuariosInicio') || document.getElementById('tablaProductosInicio')) {
        renderizarInicioAdmin();
    }

    // LOGIN
    const formLogin = document.getElementById('formLogin') || document.querySelector('.login-form');
    if (formLogin) {
        formLogin.addEventListener('submit', function (event) {
            event.preventDefault();

            const correoInput = document.getElementById('correo')?.value;
            const contrasenaInput = document.getElementById('contrasena')?.value;

            const usuarioEncontrado = buscarUsuarioPorCorreo(correoInput);

            if (!usuarioEncontrado) {
                alert('El correo electrónico ingresado no se encuentra registrado.');
                return;
            }

            if (contrasenaInput !== '123456') {
                alert('Contraseña incorrecta. Intenta Nuevamente.');
                return;
            }

            sessionStorage.setItem('usuarioLogueado', usuarioEncontrado.nombre);
            sessionStorage.setItem('perfilLogueado', usuarioEncontrado.perfil);

            if (usuarioEncontrado.perfil === 'Usuario') {
                window.location.href = 'ordenes.html';
            } else {
                window.location.href = 'admin_home.html';
            }
        });
    }

    // FORMULARIO DE EMPLEADOS
    const formNuevoUsuario = document.getElementById('formNuevoUsuario');
    if (formNuevoUsuario) {
        const datosEmpleadoGuardados = sessionStorage.getItem('empleadoAEditar');

        if (datosEmpleadoGuardados) {
            const empleado = JSON.parse(datosEmpleadoGuardados);

            if (document.getElementById('nombre')) document.getElementById('nombre').value = empleado.nombre || '';
            if (document.getElementById('cargo')) document.getElementById('cargo').value = empleado.cargo || '';
            if (document.getElementById('fechaNacimiento')) document.getElementById('fechaNacimiento').value = empleado.nacimiento || '';
            if (document.getElementById('correo')) document.getElementById('correo').value = empleado.correo || '';
            
            const selectPerfil = document.getElementById('perfil');
            if (selectPerfil) {
                if (empleado.perfil === 'Supervisor') selectPerfil.value = 'sup';
                else if (empleado.perfil === 'Operativo') selectPerfil.value = 'op';
                else if (empleado.perfil === 'Administrador') selectPerfil.value = 'admin';
                else if (empleado.perfil === 'Vendedor') selectPerfil.value = 'vend';
            }

            if (document.getElementById('direccion')) document.getElementById('direccion').value = 'Av. Central 1234';
            if (document.getElementById('telefono')) document.getElementById('telefono').value = '+56987654321';
            if (document.getElementById('region')) document.getElementById('region').value = 'rm';
            if (document.getElementById('comuna')) document.getElementById('comuna').value = 'linares';

            sessionStorage.removeItem('empleadoAEditar');
        }

        formNuevoUsuario.addEventListener('submit', function (event) {
            event.preventDefault();

            const correo = document.getElementById('correo')?.value;
            if (!validarCorreoDominio(correo)) {
                alert('El correo electrónico debe terminar en @duoc.cl, @profesor.duoc.cl o @gmail.com');
                return;
            }

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

    // FORMULARIO DE CLIENTES
    const formNuevoCliente = document.getElementById('formNuevoCliente');
    if (formNuevoCliente) {
        const datosClienteGuardados = sessionStorage.getItem('clienteAEditar');

        if (datosClienteGuardados) {
            const cliente = JSON.parse(datosClienteGuardados);

            if (document.getElementById('nombre')) document.getElementById('nombre').value = cliente.nombre || '';
            if (document.getElementById('cargo')) document.getElementById('cargo').value = cliente.cargo || '';
            if (document.getElementById('fechaNacimiento')) document.getElementById('fechaNacimiento').value = cliente.nacimiento || '';
            if (document.getElementById('correo')) document.getElementById('correo').value = cliente.correo || '';
            
            const selectPerfil = document.getElementById('perfil');
            if (selectPerfil) selectPerfil.value = 'user';

            if (document.getElementById('direccion')) document.getElementById('direccion').value = 'Av. Providencia 456';
            if (document.getElementById('telefono')) document.getElementById('telefono').value = '+56912345678';
            if (document.getElementById('region')) document.getElementById('region').value = 'rm';
            if (document.getElementById('comuna')) document.getElementById('comuna').value = 'santiago';

            sessionStorage.removeItem('clienteAEditar');
        }

        formNuevoCliente.addEventListener('submit', function (event) {
            event.preventDefault();

            const correo = document.getElementById('correo')?.value;
            if (!validarCorreoDominio(correo)) {
                alert('El correo electrónico debe terminar en @duoc.cl, @profesor.duoc.cl o @gmail.com');
                return;
            }

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

    // FORMULARIO DE PRODUCTOS
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

    // CARGA DE DATOS EN EDITAR CLIENTE
    const formEditarCliente = document.getElementById('formEditarCliente');
    if (formEditarCliente) {
        const datosClienteGuardados = sessionStorage.getItem('clienteAEditar');

        if (datosClienteGuardados) {
            const cliente = JSON.parse(datosClienteGuardados);

            if (document.getElementById('nombre')) document.getElementById('nombre').value = cliente.nombre || '';
            if (document.getElementById('tipo')) document.getElementById('tipo').value = cliente.cargo || '';
            if (document.getElementById('perfil')) document.getElementById('perfil').value = cliente.perfil || 'Usuario';
            if (document.getElementById('correo')) document.getElementById('correo').value = cliente.correo || '';
            if (document.getElementById('fechaNacimiento')) document.getElementById('fechaNacimiento').value = cliente.nacimiento || '';

            sessionStorage.removeItem('clienteAEditar');
        }

        formEditarCliente.addEventListener('submit', function (event) {
            event.preventDefault();

            const correo = document.getElementById('correo')?.value;
            if (!validarCorreoDominio(correo)) {
                alert('El correo electrónico debe terminar en @duoc.cl, @profesor.duoc.cl o @gmail.com');
                return;
            }

            const pass1 = document.getElementById('contrasena')?.value;
            const pass2 = document.getElementById('confirmarContrasena')?.value;

            if (pass1 || pass2) {
                if (pass1 !== pass2) {
                    alert('Las contraseñas no coinciden. Por favor, verifíquelas.');
                    return;
                }
            }

            const alerta = document.getElementById('alertaExito');
            if (alerta) {
                alerta.style.display = 'block';
                alerta.scrollIntoView({ behavior: 'smooth', block: 'center' });
                setTimeout(() => { alerta.style.display = 'none'; }, 4000);
            }
        });
    }

    // CARGA DE DATOS EN EDITAR EMPLEADO
    const formEditarEmpleado = document.getElementById('formEditarEmpleado');
    if (formEditarEmpleado) {
        const datosEmpleadoGuardados = sessionStorage.getItem('empleadoAEditar');

        if (datosEmpleadoGuardados) {
            const empleado = JSON.parse(datosEmpleadoGuardados);

            if (document.getElementById('nombre')) document.getElementById('nombre').value = empleado.nombre || '';
            if (document.getElementById('cargo')) document.getElementById('cargo').value = empleado.cargo || '';
            if (document.getElementById('perfil')) document.getElementById('perfil').value = empleado.perfil || 'Administrador';
            if (document.getElementById('estado')) document.getElementById('estado').value = empleado.estado || 'Activo';
            if (document.getElementById('correo')) document.getElementById('correo').value = empleado.correo || '';
            if (document.getElementById('fechaNacimiento')) document.getElementById('fechaNacimiento').value = empleado.nacimiento || '';

            sessionStorage.removeItem('empleadoAEditar');
        }

        formEditarEmpleado.addEventListener('submit', function (event) {
            event.preventDefault();

            const correo = document.getElementById('correo')?.value;
            if (!validarCorreoDominio(correo)) {
                alert('El correo electrónico debe terminar en @duoc.cl, @profesor.duoc.cl o @gmail.com');
                return;
            }

            const pass1 = document.getElementById('contrasena')?.value;
            const pass2 = document.getElementById('confirmarContrasena')?.value;

            if (pass1 || pass2) {
                if (pass1 !== pass2) {
                    alert('Las contraseñas no coinciden. Por favor, verifíquelas.');
                    return;
                }
            }

            const alerta = document.getElementById('alertaExito');
            if (alerta) {
                alerta.style.display = 'block';
                alerta.scrollIntoView({ behavior: 'smooth', block: 'center' });
                setTimeout(() => { alerta.style.display = 'none'; }, 4000);
            }
        });
    }
});