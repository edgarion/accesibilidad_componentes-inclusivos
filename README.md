# ♿ Biblioteca de Componentes Web Accesibles

Una colección completa de componentes web accesibles construidos con HTML, CSS y JavaScript vanilla. Cada componente sigue las pautas WCAG 2.1 AA y las mejores prácticas de ARIA para garantizar una experiencia inclusiva para todos los usuarios.

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Accessibility](https://img.shields.io/badge/WCAG-2.1%20AA-success.svg)
![Zero Dependencies](https://img.shields.io/badge/dependencies-zero-brightgreen.svg)

## 📋 Tabla de Contenidos

- [Componentes Disponibles](#-componentes-disponibles)
- [Instalación](#-instalación)
- [Guía Rápida](#-guía-rápida)
- [Componentes](#-componentes)
  - [Accordion (Acordeón)](#1-accordion-acordeón)
  - [Modal (Diálogo)](#2-modal-diálogo)
  - [Tabs (Pestañas)](#3-tabs-pestañas)
  - [Dropdown (Desplegable)](#4-dropdown-desplegable)
  - [Tooltip](#5-tooltip)
  - [Skip Links](#6-skip-links-enlaces-de-salto)
- [Navegación por Teclado](#-navegación-por-teclado)
- [Tests de Accesibilidad](#-tests-de-accesibilidad)
- [Mejores Prácticas](#-mejores-prácticas)
- [Contribuir](#-contribuir)
- [Licencia](#-licencia)

## 🎯 Componentes Disponibles

| Componente | Descripción | ARIA Roles | Navegación |
|------------|-------------|------------|------------|
| **Accordion** | Paneles expandibles/colapsables | `button`, `region` | Enter, Space, Tab |
| **Modal** | Ventanas emergentes con trap focus | `dialog`, `alertdialog` | Esc, Tab, Shift+Tab |
| **Tabs** | Navegación por pestañas | `tablist`, `tab`, `tabpanel` | Flechas, Home, End |
| **Dropdown** | Menús desplegables | `button`, `listbox`, `option` | Flechas, Enter, Esc |
| **Tooltip** | Información contextual | `tooltip` | Hover, Focus |
| **Skip Links** | Navegación rápida | `navigation` | Tab |

## 📦 Instalación

### Descarga Directa

```bash
git clone https://github.com/tu-usuario/componentes-accesibles.git
cd componentes-accesibles
