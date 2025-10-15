# 🎯 Selector de Talla Accesible

Un componente de selector de talla completamente accesible, construido con HTML, CSS y JavaScript vanilla. Implementa las mejores prácticas de accesibilidad web (WCAG 2.1) y demuestra el uso correcto de `tabindex="-1"` en elementos desplegables.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Accessibility](https://img.shields.io/badge/WCAG-2.1%20AA-success.svg)

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Demo](#-demo)
- [Por qué tabindex="-1"](#-por-qué-tabindex-1)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Navegación por Teclado](#-navegación-por-teclado)
- [Tests de Accesibilidad](#-tests-de-accesibilidad)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Compatibilidad](#-compatibilidad)
- [Contribuir](#-contribuir)
- [Licencia](#-licencia)

## ✨ Características

- ✅ **100% Accesible**: Cumple con WCAG 2.1 nivel AA
- ⌨️ **Navegación completa por teclado**: Flechas, Enter, Escape, Home, End
- 📢 **Compatible con lectores de pantalla**: ARIA roles y propiedades
- 🎨 **Indicadores visuales de foco**: Outline claro y visible
- 🚫 **Gestión de estados deshabilitados**: Tallas agotadas claramente marcadas
- 📱 **Responsive**: Funciona en dispositivos móviles y de escritorio
- 🧪 **Suite de tests incluida**: Validación automática de accesibilidad
- 🎯 **Zero dependencias**: Vanilla JavaScript puro

## 🎬 Demo

![Demo del selector](https://via.placeholder.com/600x400?text=Demo+GIF)

[Ver demo en vivo](#) _(Agrega tu enlace aquí)_

## 🔍 Por qué `tabindex="-1"`

### El Problema

Cuando creas un desplegable, tienes dos niveles de navegación:
1. **Elemento contenedor** (el desplegable completo)
2. **Elementos hijos** (las opciones individuales)

Sin `tabindex="-1"`, los usuarios navegarían así:
