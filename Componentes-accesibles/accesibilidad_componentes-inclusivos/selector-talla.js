// selector-talla.js

class SelectorTalla {
    constructor() {
        this.boton = document.getElementById('boton-talla');
        this.desplegable = document.getElementById('desplegable-tallas');
        this.opciones = document.querySelectorAll('.opcion-talla:not(.no-disponible)');
        this.tallaSeleccionada = document.getElementById('talla-seleccionada');
        this.resultado = document.getElementById('resultado');
        this.tallaConfirmada = document.getElementById('talla-confirmada');
        this.abierto = false;
        this.indiceActual = -1;

        this.inicializar();
    }

    inicializar() {
        // Evento click en el botón principal
        this.boton.addEventListener('click', () => this.toggleDesplegable());

        // Eventos de teclado en el botón
        this.boton.addEventListener('keydown', (e) => this.manejarTecladoBoton(e));

        // Eventos click en las opciones
        this.opciones.forEach((opcion, index) => {
            opcion.addEventListener('click', () => this.seleccionarTalla(opcion));
            opcion.addEventListener('keydown', (e) => this.manejarTecladoOpcion(e, index));
        });

        // Cerrar al hacer click fuera
        document.addEventListener('click', (e) => {
            if (!this.boton.contains(e.target) && !this.desplegable.contains(e.target)) {
                this.cerrarDesplegable();
            }
        });
    }

    toggleDesplegable() {
        this.abierto ? this.cerrarDesplegable() : this.abrirDesplegable();
    }

    abrirDesplegable() {
        this.desplegable.classList.add('abierto');
        this.boton.setAttribute('aria-expanded', 'true');
        this.abierto = true;
        
        // Enfocar la primera opción
        if (this.opciones.length > 0) {
            this.opciones[0].focus();
            this.indiceActual = 0;
        }
    }

    cerrarDesplegable() {
        this.desplegable.classList.remove('abierto');
        this.boton.setAttribute('aria-expanded', 'false');
        this.abierto = false;
        this.indiceActual = -1;
    }

    seleccionarTalla(opcion) {
        const talla = opcion.getAttribute('data-talla');
        const texto = opcion.textContent;

        this.tallaSeleccionada.textContent = texto;
        this.tallaConfirmada.textContent = talla;
        this.resultado.classList.add('visible');

        this.cerrarDesplegable();
        this.boton.focus();

        console.log(`✅ Talla seleccionada: ${talla}`);
    }

    manejarTecladoBoton(e) {
        switch(e.key) {
            case 'Enter':
            case ' ':
            case 'ArrowDown':
                e.preventDefault();
                this.abrirDesplegable();
                break;
            case 'ArrowUp':
                e.preventDefault();
                this.abrirDesplegable();
                if (this.opciones.length > 0) {
                    this.opciones[this.opciones.length - 1].focus();
                    this.indiceActual = this.opciones.length - 1;
                }
                break;
        }
    }

    manejarTecladoOpcion(e, index) {
        switch(e.key) {
            case 'ArrowDown':
                e.preventDefault();
                this.navegarSiguiente();
                break;
            case 'ArrowUp':
                e.preventDefault();
                this.navegarAnterior();
                break;
            case 'Enter':
            case ' ':
                e.preventDefault();
                this.seleccionarTalla(this.opciones[index]);
                break;
            case 'Escape':
                e.preventDefault();
                this.cerrarDesplegable();
                this.boton.focus();
                break;
            case 'Home':
                e.preventDefault();
                this.opciones[0].focus();
                this.indiceActual = 0;
                break;
            case 'End':
                e.preventDefault();
                const ultimo = this.opciones.length - 1;
                this.opciones[ultimo].focus();
                this.indiceActual = ultimo;
                break;
        }
    }

    navegarSiguiente() {
        if (this.indiceActual < this.opciones.length - 1) {
            this.indiceActual++;
            this.opciones[this.indiceActual].focus();
        }
    }

    navegarAnterior() {
        if (this.indiceActual > 0) {
            this.indiceActual--;
            this.opciones[this.indiceActual].focus();
        }
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new SelectorTalla();
    console.log('🎯 Selector de talla inicializado');
});