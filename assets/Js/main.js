const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {

    nav.classList.remove("visible");
})

function header() {
    document.write('<img class="logo" src="/assets/Imagenes/5.png" alt="Logo"><button id="abrir" class="abrir-menu"><i class="bi bi-list"></i></button><nav class="nav" id="nav"><button id="cerrar" class="cerrar-menu"><i class="bi bi-x-circle-fill"></i></button><ul class="nav-list"><li><a href="index.html">Inicio</a></li><li><a href="el_restaurante.html">El restaurante</a></li><li><a href="donde_estamos.html">¿Dónde estamos?</a></li><li><a href="la_carta.html">La carta</a></li><li><a href="contactos.html">Contacto - Reservas</a></li></ul></nav>')
}
function footer() {
    document.write('<div><div id="footer-div1">Seguinos en nuestras redes</div><div><a href=""><img class="footer-div-img-1" src="/assets/Imagenes/Logo de Instagram.png" alt=""></a><a href=""><img class="footer-div-img-1" src="/assets/Imagenes/Logo Linkedin.png" alt=""></a><img class="footer-div-img-1" src="/assets/Imagenes/Logo de Facebook.png" alt=""></a></div></div><div id="footer-div2" class="footer-div-2">Todos los derechos reservados - 2023</div><div class="footer-div-3"><div id="footer-div3">Chateá con nosotros</div><div><a><img id="Whatsapp" src="/assets/Imagenes/Ícono de Whatsapp.png" alt=""></a></div></div>')
}
//--------------Validación del formulario de contacto.--------------
function validacionContacto() {

    var contactoNombre = document.getElementById("nombre").value.trim()
    var contactoEmail = document.getElementById("email").value.trim()
    var contactoTelefono = document.getElementById("telefono").value.trim()
    var contactoAsunto = document.getElementById("asunto").value.trim()
    var contactoMensaje = document.getElementById("mensaje").value.trim()


    //Validación de que estén todos los campos completados
    if (contactoNombre === "" || contactoEmail === "" || contactoTelefono === "" || contactoAsunto === "" || contactoMensaje === "") {
        alert("Por favor, complete todos los campos del formulario.");
        return false;
    }
    //Validación de caracteres del nombre
    for (var i = 0; i < contactoNombre.length; i++) {
        let charCode = contactoNombre.charCodeAt(i);
        if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
            alert("El campo 'Nombre' solo puede contener caracteres alfabéticos y espacios.");
            return false;
        }
    }
    //Validación de que el campo "Teléfono" sean sólo números
    for (var i = 0; i < contactoTelefono.length; i++) {
        let charCode = contactoTelefono.charCodeAt(i);
        if (!(charCode >= 48 && charCode <= 57)) {
            alert("El campo 'Teléfono' solo puede contener caracteres numéricos.");
            return false;
        }
    }
}
//--------------Validación del formulario de reserva.--------------
function validacionReserva() {

    var reservaNombre = document.getElementById("nombre-r").value.trim()
    var reservaEmail = document.getElementById("email-r").value.trim()
    var reservaTelefono = document.getElementById("telefono-r").value.trim()
    var reservaCantidad = document.getElementById("cantidad-r").value.trim()
    var reservaPeticion = document.getElementById("peticion-r").value.trim()


    //Validación de que estén todos los campos completados
    if (reservaNombre === "" || reservaEmail === "" || reservaTelefono === "" || reservaCantidad === "") {
        alert("Por favor, complete todos los campos obligatorios del formulario del formulario.");
        return false;
    }
    //Validación de caracteres del nombre
    for (var i = 0; i < reservaNombre.length; i++) {
        let charCode = reservaNombre.charCodeAt(i);
        if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
            alert("El campo 'Nombre' solo puede contener caracteres alfabéticos y espacios.");
            return false;
        }
    }
    //Validación de que el campo "Teléfono" sean sólo números
    for (var i = 0; i < reservaTelefono.length; i++) {
        let charCode = reservaTelefono.charCodeAt(i);
        if (!(charCode >= 48 && charCode <= 57)) {
            alert("El campo 'Teléfono' solo puede contener caracteres numéricos.");
            return false;
        }
    }

    if (reservaCantidad > 10) {
        alert("No se puede realizar una reserva para más de 10 personas")
        return false
    }
}