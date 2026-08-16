/* ============================================================
   data.js — Datos de prueba · Panadería La Espiga
   ------------------------------------------------------------
   Edita aquí libremente. El sistema construye su estado inicial
   a partir de este objeto SEED (insumos, productos y caja).
   El kárdex de saldos iniciales se genera solo a partir de los
   stocks que definas abajo.

   Reglas de los datos:
   - insumo:   { nombre, unidad, stock, min, costo }
   - producto: { nombre, tipo, cat, precio, stock, min, receta }
       · tipo = "elaborado"  -> lleva receta (consume insumos)
       · tipo = "reventa"    -> receta vacía {} (se compra y se vende igual)
   - receta:   { <idInsumo>: cantidad_por_unidad }
       · las claves deben coincidir con los ids de insumos de abajo
   - caja.apertura: monto con el que abre la caja del turno
   ============================================================ */

const SEED = {

  negocio: {
    nombre: "La Espiga",
    rubro: "Panadería & Pastelería",
    ruc: "20481234567",
    direccion: "Av. Raymondi 123 - Tingo María",
    telefono: "962 000 000",
    serie: "NV",            // serie de la nota de venta (NV-000001, 000002, …)
    cajero: "C. Quinto",
  },

  caja: {
    apertura: 150.00,
  },

  insumos: {
    harina:   { nombre: "Harina",   unidad: "kg", stock: 50,  min: 10,  costo: 3.20  },
    azucar:   { nombre: "Azúcar",   unidad: "kg", stock: 20,  min: 5,   costo: 4.00  },
    levadura: { nombre: "Levadura", unidad: "g",  stock: 600, min: 120, costo: 0.02  },
    sal:      { nombre: "Sal",      unidad: "kg", stock: 10,  min: 2,   costo: 1.50  },
    huevos:   { nombre: "Huevos",   unidad: "u",  stock: 120, min: 36,  costo: 0.50  },
    manteca:  { nombre: "Manteca",  unidad: "kg", stock: 8,   min: 3,   costo: 12.00 },
  },

  productos: {
    frances: {
      nombre: "Pan francés", tipo: "elaborado", cat: "Panadería",
      precio: 0.30, stock: 40, min: 20,
      receta: { harina: 0.04, levadura: 1.5, sal: 0.0008 },
    },
    yema: {
      nombre: "Pan de yema", tipo: "elaborado", cat: "Panadería",
      precio: 0.50, stock: 20, min: 15,
      receta: { harina: 0.05, azucar: 0.01, huevos: 0.1, manteca: 0.008 },
    },
    empanada: {
      nombre: "Empanada", tipo: "elaborado", cat: "Pastelería",
      precio: 1.50, stock: 12, min: 10,
      receta: { harina: 0.06, azucar: 0.005, manteca: 0.01, huevos: 0.05 },
    },
    torta: {
      nombre: "Torta chica", tipo: "elaborado", cat: "Pastelería",
      precio: 25.00, stock: 2, min: 2,
      receta: { harina: 0.4, azucar: 0.3, huevos: 6, manteca: 0.2 },
    },
    mantequilla: {
      nombre: "Mantequilla", tipo: "reventa", cat: "Lácteos",
      precio: 8.00, stock: 20, min: 8, receta: {},
    },
    gaseosa: {
      nombre: "Gaseosa 500ml", tipo: "reventa", cat: "Bebidas",
      precio: 3.50, stock: 30, min: 12, receta: {},
    },
    leche: {
      nombre: "Leche 1L", tipo: "reventa", cat: "Lácteos",
      precio: 4.50, stock: 24, min: 10, receta: {},
    },
  },

};

/* Exponer para el navegador y, si algún día lo usas en Node, para require() */
if (typeof window !== "undefined") window.SEED = SEED;
if (typeof module !== "undefined") module.exports = SEED;