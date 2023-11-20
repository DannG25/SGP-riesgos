const probabilidades = [0.90, 0.70, 0.50, 0.30, 0.10];
const impactos = [0.05, 0.10, 0.20, 0.40, 0.80];
const impactos_oportunidades = [0.80, 0.40, 0.20, 0.10, 0.05];


const coloresValoracion = [{ valor: 0.05, colorFondo: "#c8ff54", colorTexto: "#000000" },
    { valor: 0.09, colorFondo: "#c8ff54", colorTexto: "#000000" },
    { valor: 0.07, colorFondo: "#c8ff54", colorTexto: "#000000" },
    { valor: 0.18, colorFondo: "#fffa23", colorTexto: "#000000" },
    { valor: 0.36, colorFondo: "#ff2c1b", colorTexto: "#ffffff" },
    { valor: 0.72, colorFondo: "#ff2c1b", colorTexto: "#ffffff" },
    { valor: 0.03, colorFondo: "#00ff00", colorTexto: "#000000" },
    { valor: 0.14, colorFondo: "#fffa23", colorTexto: "#000000" },
    { valor: 0.28, colorFondo: "#f8a022", colorTexto: "#ffffff" },
    { valor: 0.56, colorFondo: "#ff2c1b", colorTexto: "#ffffff" },
    { valor: 0.10, colorFondo: "#fffa23", colorTexto: "#000000" },
    { valor: 0.20, colorFondo: "#f8a022", colorTexto: "#ffffff" },
    { valor: 0.40, colorFondo: "#ff2c1b", colorTexto: "#ffffff" },
    { valor: 0.01, colorFondo: "#00ff00", colorTexto: "#000000" },
    { valor: 0.06, colorFondo: "#c8ff54", colorTexto: "#000000" },
    { valor: 0.06, colorFondo: "#c8ff54", colorTexto: "#000000" },
    { valor: 0.12, colorFondo: "#fffa23", colorTexto: "#000000" },
    { valor: 0.24, colorFondo: "#f8a022", colorTexto: "#ffffff" },
    { valor: 0.02, colorFondo: "#00ff00", colorTexto: "#000000" },
    { valor: 0.04, colorFondo: "#c8ff54", colorTexto: "#000000" },
    { valor: 0.08, colorFondo: "#c8ff54", colorTexto: "#000000" },
]

const obtenerColorCelda = (valor) => {
    const colorCelda = coloresValoracion.filter(item => {
        if (item.valor == valor)
            return item;
    });
    return colorCelda.length == 0 ? "#fff" : colorCelda[0];
}


pintarValoracion = (valor, contenedorValoracion) => {
    const celda = document.createElement('div');
    celda.classList.add('div_celda');
    const datosColores = obtenerColorCelda(valor);
    celda.style.backgroundColor = datosColores.colorFondo;

    const spanValor = document.createElement('span');
    spanValor.innerHTML = valor;
    spanValor.style.color = datosColores.colorTexto;
    celda.append(spanValor)
    contenedorValoracion.append(celda);

}

const dibujarMatriz = (nombreMatriz, datosProbrabilidades, datosImpactos) => {
    datosProbrabilidades.forEach(item => {
        const prob = document.createElement('div');
        prob.classList.add('div_row')
        datosImpactos.forEach(col => {
            pintarValoracion(parseFloat(item * col).toFixed(2), prob)
        })
        document.getElementById(nombreMatriz).appendChild(prob);
    });
}



dibujarMatriz('matriz_Amenazas', probabilidades, impactos);
dibujarMatriz('matriz_Oportunidades', probabilidades, impactos_oportunidades);