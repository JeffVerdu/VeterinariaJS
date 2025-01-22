const fs = require('fs');

const archivo = './citas.json';

const registrar = (nombre, edad, tipo, color, enfermedad) => {
    let citas = [];
    try {
        const data = fs.readFileSync(archivo, 'utf-8');
        citas = JSON.parse(data);
    } catch (error) {
        console.log("No se encontró el archivo, se creará uno nuevo.");
    }

    const nuevaCita = {
        nombre,
        edad,
        tipo,
        color,
        enfermedad
    };

    citas.push(nuevaCita);

    fs.writeFileSync(archivo, JSON.stringify(citas, null, 2), 'utf-8');
    console.log("Cita registrada con éxito.");
};

const leer = () => {
    try {
        const data = fs.readFileSync(archivo, 'utf-8');
        const citas = JSON.parse(data);
        
        if (citas.length === 0) {
            console.log("No hay citas registradas.");
        } else {
            console.log("Citas registradas:");
            console.table(citas);
        }
    } catch (error) {
        console.log("Error al leer el archivo de citas:", error.message);
    }
};

module.exports = { registrar, leer };
