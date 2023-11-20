const prob = [0.90, 0.70, 0.50, 0.30, 0.10];
const impact = [0.05, 0.10, 0.20, 0.40, 0.80];

const matrizColores = [{ valor: 0.05, color: "#c8ff54" }, { valor: 0.09, color: "#c8ff54" }, { valor: 0.07, color: "#c8ff54" }, { valor: 0.18, color: "#fffa23" },
{valor:0.36, color:"#ff2c1b"}, {valor:0.72, color:"#ff2c1b"}, {valor:0.03, color:"#00ff00"},{valor:0.14, color:"#fffa23"}, {valor:0.28, color:"#f8a022"}, {valor:0.56, color:"#ff2c1b"},
, {valor:0.10, color:"#fffa23"}, {valor:0.20, color:"#f8a022"}, {valor:0.40, color:"#ff2c1b"}, {valor:0.01, color:"#00ff00"}, {valor:0.06, color:"#c8ff54"}, {valor:0.06, color:"#c8ff54"},
{valor:0.12, color:"#fffa23"}, {valor:0.24, color:"#f8a022"}, {valor:0.02, color:"#00ff00"}, {valor:0.04, color:"#c8ff54"}, {valor:0.08, color:"#c8ff54"},]

const obtenerColorCelda = (valor) => {
    const colorCelda = matrizColores.filter(item => {
        if (item.valor == valor)
            return item;
    });
    return colorCelda.length == 0 ? "#fff" : colorCelda[0].color;
}

const fila = document.createElement('td');

const table = document.createElement('table');
prob.forEach(item => {
    const prob = document.createElement('tr');
    impact.forEach(col => {
        const celda = document.createElement('td');
        const valor = parseFloat(item * col).toFixed(2);
        celda.style.backgroundColor = obtenerColorCelda(valor);
        celda.innerHTML = valor;
        prob.append(celda);
    })
    table.append(prob);
});

document.body.appendChild(table);

const prob2 = [0.10, 0.30, 0.50, 0.70, 0.90];
const impact2 = [0.80, 0.40, 0.20, 0.10, 0.05];

const fila2 = document.createElement('td');

const table2 = document.createElement('table');
prob.forEach(item => {
    const prob2 = document.createElement('tr');
    impact2.forEach(col => {
        const celda = document.createElement('td');
        const valor = parseFloat(item * col).toFixed(2);
        celda.style.backgroundColor = obtenerColorCelda(valor);
        celda.innerHTML = valor;
        prob2.append(celda);
    })
    table.append(prob2);
});

document.body.appendChild(table);

// const probabilidades = [ 0.10, 0.30, 0.50, 0.70, 0.90 ];
// const impacto = [ 0.05, 0.10, 0.20, 0.40, 0.80 ];  
