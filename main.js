

const ctx = document.getElementById(myChart);

const data = {
    labels: [
      'Muy alto',
      'Medio alto',
      'Medio',
      'Medio Bajo',
      'Medio Bajo',
      'Muy bajo',
      'Sin identificar',
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgba(229, 1, 39, 0.5)',
        'rgba(255, 154, 31, 0.5)',
        'rgba(255, 251, 90, 0.5)',
        'rgba(47, 231, 65, 0.26)',
        'rgba(47, 231, 65, 0.7)',
        'rgba(144, 130, 122, 0.5)',
      ],
      hoverOffset: 4
    }]
  };
