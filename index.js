const { registrar, leer } = require('./operaciones');

const [operacion, nombre, edad, tipo, color, enfermedad] = process.argv.slice(2);

if (operacion === "registrar") {
    if (!nombre || !edad || !tipo || !color || !enfermedad) {
        console.log("Error: Debes proporcionar todos los datos para registrar una cita.");
        process.exit(1);
    }
    registrar(nombre, edad, tipo, color, enfermedad);
}

if (operacion === "leer") {
    leer();
}

if (!operacion || (operacion !== "registrar" && operacion !== "leer")) {
    console.log("Operación no válida. Usa 'registrar' o 'leer'.");
}
