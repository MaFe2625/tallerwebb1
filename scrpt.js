//EJERCICIO 2//
function calcularTotalFinal(cuenta, servicio) {
    let propina = 0;
    let descuento = 0;


    switch (servicio.toLowerCase()) {
        case "excelente":
            propina = cuenta * 0.20;
            break;
        case "bueno":
            propina = cuenta * 0.15;
            break;
        case "regular":
            propina = cuenta * 0.10;
            break;
        default:
            console.log("Nivel de servicio no válido");
            return;
    }


    if (cuenta > 200000) {
        descuento = cuenta * 0.20;
    } else if (cuenta > 100000) {
        descuento = cuenta * 0.10;
    }

    const totalFinal = cuenta + propina - descuento;


    console.log("Total de la cuenta: $" + cuenta.toFixed(2));
    console.log("Propina (" + servicio + "): $" + propina.toFixed(2));
    console.log("Descuento: $" + descuento.toFixed(2));
    console.log("Total a pagar: $" + totalFinal.toFixed(2));

    return totalFinal;
}


const totalCuenta = 150000;
const nivelServicio = "bueno";

calcularTotalFinal(totalCuenta, nivelServicio);
/*
*/
//EJERCICIO 3//
const presupuestos = {
    alimentacion: 300000,
    transporte: 200000,
    entretenimiento: 500000,
    otros: 100000
};

let gastos = {
    alimentacion: 0,
    transporte: 0,
    entretenimiento: 0,
    otros: 0
};


function registrarGasto(categoria, monto) {
    if (!gastos.hasOwnProperty(categoria)) {
        console.log("Categoría no válida.");
        return;
    }


    gastos[categoria] += monto;


    if (gastos[categoria] > presupuestos[categoria]) {
        console.log(`⚠️ Alerta: Has excedido el presupuesto en ${categoria}.`);
    } else {
        console.log(`Gasto registrado en ${categoria}: $${monto}`);
    }
}


function mostrarResumen() {
    let totalGastos = 0;

    console.log("Resumen de gastos mensuales:");
    for (let categoria in gastos) {
        console.log(`${categoria}: $${gastos[categoria]}`);
        totalGastos += gastos[categoria];
    }
    console.log(`Total de gastos del mes: $${totalGastos}`);
}


registrarGasto("alimentacion", 150000);
registrarGasto("transporte", 100000);
registrarGasto("entretenimiento", 600000);
registrarGasto("otros", 50000);

mostrarResumen();
/*
*/
// EJERCICIO 4//
function calcularPrima(salarioMensual, diasTrabajados, ausenciasInjustificadas) {
    const diasPorMes = 30;
    const primaCompleta = (salarioMensual * diasTrabajados) / diasPorMes;


    const primaProporcional = diasTrabajados < 180 ? (primaCompleta * diasTrabajados) / 180 : primaCompleta;

    let deduccion = 0;
    if (ausenciasInjustificadas > 5) {
        const porcentajeDeduccion = 0.10;
        deduccion = primaProporcional * porcentajeDeduccion;
    }

    const primaFinal = primaProporcional - deduccion;
    return primaFinal;
}


const salarioMensual = 3000;
const diasTrabajados = 150;
const ausenciasInjustificadas = 6; /

const prima = calcularPrima(salarioMensual, diasTrabajados, ausenciasInjustificadas);
console.log(`La prima de servicios es: $${prima.toFixed(2)}`);
/*
*/
//ejercicio 5//
function calcularPromedioPonderado(materias) {
    let sumaPonderada = 0;
    let sumaPesos = 0;

    for (const materia of materias) {
        sumaPonderada += materia.calificacion * materia.peso;
        sumaPesos += materia.peso;
    }

    const promedioPonderado = sumaPonderada / sumaPesos;
    return promedioPonderado;
}

function determinarResultado(promedio) {
    if (promedio >= 3.5) {
        return "Aprobado";
    } else if (promedio < 2.5) {
        return "Debe repetir el curso";
    } else {
        return "Reprobado";
    }
}

const materias = [
    { nombre: "Matemáticas", calificacion: 4.0, peso: 3 },
    { nombre: "Ciencias", calificacion: 3.2, peso: 2 },
    { nombre: "Historia", calificacion: 2.8, peso: 1 },
    { nombre: "Inglés", calificacion: 3.6, peso: 2 }
];

const promedio = calcularPromedioPonderado(materias);
const resultado = determinarResultado(promedio);

console.log(`El promedio ponderado es: ${promedio.toFixed(2)}`);
console.log(`Resultado: ${resultado}`);
/*
*/
//EJERCICIO 6//
function registrarAsistencia(participantes, horaIngreso) {
    let totalAsistentes = 0;
    let totalTarde = 0;
    const registroAsistencia = [];

    for (const participante of participantes) {
        const { nombre, horaLlegada } = participante;
        const llegoTarde = horaLlegada > horaIngreso;
        let puntajeAsistencia = llegoTarde ? 0.5 : 1;

        if (llegoTarde) totalTarde++;
        totalAsistentes++;

        registroAsistencia.push({
            nombre,
            horaLlegada,
            puntajeAsistencia,
            llegoTarde
        });
    }

    return {
        registroAsistencia,
        totalAsistentes,
        totalTarde
    };
}


const horaIngreso = "09:00";
const participantes = [
    { nombre: "Alice", horaLlegada: "08:50" },
    { nombre: "Bob", horaLlegada: "09:10" },
    { nombre: "Carlos", horaLlegada: "09:00" },
    { nombre: "Diana", horaLlegada: "09:05" }
];

const resumenAsistencia = registrarAsistencia(participantes, horaIngreso);

console.log("Resumen de asistencia:");
console.log(`Total de asistentes: ${resumenAsistencia.totalAsistentes}`);
console.log(`Total que llegaron tarde: ${resumenAsistencia.totalTarde}`);
console.log("Detalle de asistencia:");
resumenAsistencia.registroAsistencia.forEach((registro) => {
    console.log(
        `${registro.nombre} - Hora de llegada: ${registro.horaLlegada} - Puntaje de asistencia: ${registro.puntajeAsistencia} - ${registro.llegoTarde ? "Llegó tarde" : "A tiempo"
        }`
    );
});
/*
*/
//EJERCICIO 7//
function calcularCalorias(ejercicio, intensidad, duracion) {
    let caloriasPorMinuto;


    if (ejercicio === "correr") {
        if (intensidad === "baja") {
            caloriasPorMinuto = 10;
        } else if (intensidad === "media") {
            caloriasPorMinuto = 13;
        } else if (intensidad === "alta") {
            caloriasPorMinuto = 16;
        }
    } else if (ejercicio === "nadar") {
        if (intensidad === "baja") {
            caloriasPorMinuto = 8;
        } else if (intensidad === "media") {
            caloriasPorMinuto = 11;
        } else if (intensidad === "alta") {
            caloriasPorMinuto = 14;
        }
    } else if (ejercicio === "bicicleta") {
        if (intensidad === "baja") {
            caloriasPorMinuto = 6;
        } else if (intensidad === "media") {
            caloriasPorMinuto = 9;
        } else if (intensidad === "alta") {
            caloriasPorMinuto = 12;
        }
    }


    const caloriasQuemadas = caloriasPorMinuto * duracion;
    return caloriasQuemadas;
}


const ejercicio = "correr";
const intensidad = "alta";
const duracion = 30;

const calorias = calcularCalorias(ejercicio, intensidad, duracion);
console.log(`Calorías quemadas: ${calorias}`);
/*
*/
//EJERCICIO 9//
function calcularInteresCompuesto() {

    const capitalInicial = parseFloat(prompt("Ingrese el capital inicial:"));
    const interesAnual = parseFloat(prompt("Ingrese el interés anual (en %):")) / 100;
    const años = parseInt(prompt("Ingrese el número de años:"));
    let capitalFinal = capitalInicial;


    for (let i = 1; i <= años; i++) {

        const interesDelAno = capitalFinal * interesAnual;
        capitalFinal += interesDelAno;


        const depositoAdicional = parseFloat(prompt(`Año ${i}: ¿Desea hacer un depósito adicional? (Ingrese 0 si no):`));
        capitalFinal += depositoAdicional;


        console.log(`Capital al final del año ${i}: ${capitalFinal.toFixed(2)}`);
    }


    alert(`Capital final después de ${años} años: ${capitalFinal.toFixed(2)}`);
}

calcularInteresCompuesto();
