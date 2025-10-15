// test-accesibilidad.js

class TestAccesibilidad {
    constructor() {
        this.resultados = [];
    }

    ejecutarTests() {
        console.log('🧪 Iniciando tests de accesibilidad...
');
        
        this.testTabindex();
        this.testNavegacionTeclado();
        this.testARIA();
        this.testLectoresDesuPantalla();
        this.testFocoVisual();
        
        this.mostrarResultados();
    }

    testTabindex() {
        console.log('📋 Test 1: Verificar tabindex');
        
        const desplegable = document.getElementById('desplegable-tallas');
        const tabindex = desplegable.getAttribute('tabindex');
        
        if (tabindex === '-1') {
            this.agregarResultado('✅ PASS', 'Desplegable tiene tabindex="-1"');
            console.log('✅ El desplegable NO es navegable por Tab');
        } else {
            this.agregarResultado('❌ FAIL', `Desplegable tiene tabindex="${tabindex}"`);
        }

        // Verificar que las opciones SÍ son navegables
        const opciones = document.querySelectorAll('.opcion-talla:not([disabled])');
        let todasNavegables = true;
        
        opciones.forEach((opcion, i) => {
            const tabindexOpcion = opcion.getAttribute('tabindex');
            if (tabindexOpcion === '-1') {
                todasNavegables = false;
                console.log(`❌ Opción ${i} tiene tabindex="-1" (debería ser navegable)`);
            }
        });

        if (todasNavegables) {
            this.agregarResultado('✅ PASS', 'Todas las opciones son navegables');
        }
    }

    testNavegacionTeclado() {
        console.log('
⌨️  Test 2: Navegación por teclado');
        
        const boton = document.getElementById('boton-talla');
        const desplegable = document.getElementById('desplegable-tallas');
        
        // Simular apertura con Enter
        boton.focus();
        const eventoEnter = new KeyboardEvent('keydown', { key: 'Enter' });
        boton.dispatchEvent(eventoEnter);
        
        setTimeout(() => {
            if (desplegable.classList.contains('abierto')) {
                this.agregarResultado('✅ PASS', 'Desplegable abre con Enter');
                console.log('✅ Desplegable responde a Enter');
            } else {
                this.agregarResultado('❌ FAIL', 'Desplegable no abre con Enter');
            }
        }, 100);
    }

    testARIA() {
        console.log('
♿ Test 3: Atributos ARIA');
        
        const boton = document.getElementById('boton-talla');
        const desplegable = document.getElementById('desplegable-tallas');
        
        const tests = [
            { elemento: boton, atributo: 'aria-haspopup', esperado: 'listbox' },
            { elemento: boton, atributo: 'aria-expanded', esperado: ['true', 'false'] },
            { elemento: desplegable, atributo: 'role', esperado: 'listbox' }
        ];

        tests.forEach(test => {
            const valor = test.elemento.getAttribute(test.atributo);
            const valido = Array.isArray(test.esperado) 
                ? test.esperado.includes(valor)
                : valor === test.esperado;
            
            if (valido) {
                this.agregarResultado('✅ PASS', `${test.atributo}="${valor}"`);
            } else {
                this.agregarResultado('❌ FAIL', `${test.atributo} incorrecto`);
            }
        });
    }

    testLectoresDepantalla() {
        console.log('
📢 Test 4: Compatibilidad con lectores de pantalla');
        
        const opciones = document.querySelectorAll('.opcion-talla');
        let todasTienenRole = true;
        
        opciones.forEach((opcion, i) => {
            if (opcion.getAttribute('role') !== 'option') {
                todasTienenRole = false;
            }
        });

        if (todasTienenRole) {
            this.agregarResultado('✅ PASS', 'Todas las opciones tienen role="option"');
        } else {
            this.agregarResultado('❌ FAIL', 'Faltan roles en opciones');
        }
    }

    testFocoVisual() {
        console.log('
👁️  Test 5: Indicadores visuales de foco');
        
        const boton = document.getElementById('boton-talla');
        const estilos = window.getComputedStyle(boton, ':focus');
        
        // Verificar que existe un estilo de foco visible
        if (estilos.outline !== 'none' || estilos.boxShadow !== 'none') {
            this.agregarResultado('✅ PASS', 'Foco visual presente');
        } else {
            this.agregarResultado('⚠️  WARN', 'Verificar foco visual manualmente');
        }
    }

    agregarResultado(estado, mensaje) {
        this.resultados.push({ estado, mensaje });
    }

    mostrarResultados() {
        console.log('
' + '='.repeat(50));
        console.log('📊 RESUMEN DE TESTS');
        console.log('='.repeat(50));
        
        this.resultados.forEach(r => {
            console.log(`${r.estado}: ${r.mensaje}`);
        });
        
        const total = this.resultados.length;
        const pasados = this.resultados.filter(r => r.estado.includes('✅')).length;
        
        console.log('
' + '='.repeat(50));
        console.log(`Resultado: ${pasados}/${total} tests pasados`);
        console.log('='.repeat(50));
    }
}

// Ejecutar tests después de inicializar el selector
setTimeout(() => {
    const test = new TestAccesibilidad();
    test.ejecutarTests();
}, 500);