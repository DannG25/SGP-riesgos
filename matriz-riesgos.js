const prob = [ 0.10, 0.30, 0.50, 0.70, 0.90 ];
const impact = [ 0.05, 0.10, 0.20, 0.40, 0.80 ];

const table = document.createElement('table');
prob.forEach(item => {
    const prob = document.createElement('tr');
    impact.forEach(col => {
        const celda = document.createElement('td');
        celda.innerHTML = item * col;
        prob.append(celda);
    })
    table.append(prob);
});

document.body.appendChild(table);


// const probabilidades = [ 0.10, 0.30, 0.50, 0.70, 0.90 ];
// const impacto = [ 0.05, 0.10, 0.20, 0.40, 0.80 ];  
