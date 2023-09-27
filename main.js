const ctx = document.getElementById('myChart');
ctx.style.width = '100%'
ctx.style.height = 'auto'
const data = {
    labels: ['Muy alto', 'Medio alto', 'Medio', 'Medio Bajo', 'Muy Bajo', 'Sin identificar',],
    datasets: [{
        labels: [
            'Muy alto',
            'Medio alto',
            'Medio',
            'Medio Bajo',
            'Muy Bajo',
            'Sin identificar',
        ],
        label: 'Riesgos',
        data: [30, 15, 21, 13, 19, 45],
        borderColor: [
            'rgba(229, 1, 39, 0.5)',
            'rgba(255, 154, 31, 0.5)',
            'rgba(255, 251, 90, 0.5)',
            'rgba(47, 231, 65, 0.26)',
            'rgba(47, 231, 65, 0.7)',
            'rgba(144, 130, 122, 0.5)',
        ],
        cutout: [85],    
        borderAlign: ['inner'],
        backgroundColor: [
            'rgba(229, 1, 39, 0.5)',
            'rgba(255, 154, 31, 0.5)',
            'rgba(255, 251, 90, 0.5)',
            'rgba(47, 231, 65, 0.26)',
            'rgba(47, 231, 65, 0.7)',
            'rgba(144, 130, 122, 0.5)',
        ],
        hoverOffset: 10

    }]
};

const chart = new Chart(ctx, {
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
