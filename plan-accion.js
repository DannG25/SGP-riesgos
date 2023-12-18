const planAccion = [
    { descripcion: "Garantizar el cumplimento en los objetivos del contrato.", codigo: "CON - 001" },
    { descripcion: "Actualización de modificaciones de areas a todas las instancias.", codigo: "CON - 002" },
    { descripcion: "Entrega de diseños definitivos en las fechas establecidas.", codigo: "DIS - 001" },
    { descripcion: "Actualización de precios en el ERP.", codigo: "PRP - 001"},
    { descripcion: "Validación de históricos presupuestos vs ejecución proyectos anteriores.", codigo: "PRP - 002" },
    { descripcion: "Programar capacitacion del SST.", codigo: "REC - 001" },
    { descripcion: "Control de cambios en el diseño durante la planeación y ejecución del proyecto.", codigo: "REC - 002" },
]

const pintarPlanAccion = (descripcion, codigo) =>{
planAccion.forEach(element => {

    const table = document.createElement('table');
    const filaCodigos = document.createElement('tr');
    

    const filaDescripcion = document.createElement('tr');
    contenedor.classList.add('tr-fila')
    
    if (filaCodigos.valor != 0)
    pintarPlanAccion(parseFloat (filaCodigos.valor * filaDescripcion.valor).toFixed(2), contenedor)    
});
const celdaDescripcion = document.createElement('th');
contenedor.classList.add('tr-fila')

}
