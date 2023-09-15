
const prob = [ 0.10, 0.30,0.50,0.70,0.90 ]
const impact = [ 0.90, 0.70, 0.50, 0.30, 0.10 ] 

const table = document.createElement('table');
impact.forEach(item => {
    const impact = document.createElement('tr');
    prob.forEach(col => {
        const celda = document.createElement('td');
        celda.innerHTML = item * col;
        impact.append(celda);
    })
    table.append(impact)
});
document.body.appendChild(table);