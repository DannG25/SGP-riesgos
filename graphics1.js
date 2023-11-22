const grafica = document.getElementById('doughnutRiesgo');

grafica.style.width = '100%'
grafica.style.height = 'auto'

const dataAmenazas = {
    labels: ['Amenazas', 'Oportunidades'],
    datasets: [{
        labels: [
            'Amenazas', 
            'Oportunidades'
        ],
        label: 'Posibilidades',
        data: [47, 56], 
        borderColor: [
            'rgba(47, 231, 65, 0.7)',
            'rgba(229, 1, 39, 0.5)',
        ],

        cutout: [100],    
        borderAlign: ['inner'],
        backgroundColor: [
            'rgba(47, 231, 65, 0.7)',
            'rgba(229, 1, 39, 0.5)',
        ],
        hoverOffset: 15

    }]
};
const myChart = new Chart(grafica,{
    type: 'doughnut',
    data: dataAmenazas,
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

// const grafica = document.getElementById('posibilityDonut');
// grafica.style.width = '100%'
// grafica.style.height = 'auto'
// const data = {
// labels:['Amenazas','Oportunidades'],
// }

// const riesgoAmenaza = [0.10 ,0.12 ,0.14 ,0.18, 0.24, 0.28, 0.29, 0.36, 0.40, 0.56, 0.72]
// const riesgoOportunidad = [0.01,0.02, 0.03, 0.05, 0.06, 0.07, 0.08, 0.09,]

// obtenerOportunidades() {
// if
  
// }
