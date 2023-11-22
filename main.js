obtenerDatosGraficaValoraciones = () => {
    const data = {
        labels: ['Muy alto', 'Medio alto', 'Medio', 'Medio Bajo', 'Muy Bajo', 'Sin identificar', ],
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
    return data;
}

obtenerDatosGraficaAmenazasOportunidades = () => {
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
    return dataAmenazas;
}

PintarGraficaTipoDonas('graficaValoraciones', obtenerDatosGraficaValoraciones());
PintarGraficaTipoDonas('graficaAmenazaOportunidades', obtenerDatosGraficaAmenazasOportunidades());