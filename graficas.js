PintarGraficaTipoDonas = (nombreDelcontenedor, data) => {
    const grafica = document.getElementById(nombreDelcontenedor);

    grafica.style.width = '100%'
    grafica.style.height = 'auto'

    const myChart = new Chart(grafica, {
        type: 'doughnut',
        data: data,
        options: {
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'left',
                }
            }
        }
    });
}