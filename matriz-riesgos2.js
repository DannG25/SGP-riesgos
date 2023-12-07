// const probabilidades = [0.90, 0.70, 0.50, 0.30, 0.10];
// const impactos = [0.05, 0.10, 0.20, 0.40, 0.80];
//const impactos_oportunidades = [0.80, 0.40, 0.20, 0.10, 0.05];
const probabilidades = [
    { descripcion: "Muy alto", valor: 0.90 },
    { descripcion: "Alto", valor: 0.70 },
    { descripcion: "Medio", valor: 0.50 },
    { descripcion: "Bajo", valor: 0.30 },
    { descripcion: "Muy bajo", valor: 0.10 }
]
const impactos = [
    { descripcion: "Muy bajo", valor: 0.05 },
    { descripcion: "Bajo", valor: 0.10 },
    { descripcion: "Medio", valor: 0.20 },
    { descripcion: "Alto", valor: 0.40 },
    { descripcion: "Muy alto", valor: 0.80 },
]
impactos.unshift({ descripcion: "Muy bajo", valor: "0" });
//const impactos_oportunidades = impactos.sort(function(i, x) { return x.valor - i.valor });
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
    const colorCelda = coloresValoracion.filter(color => {
        if (color.valor == valor)
            return color;
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

const dibujarMatriz = (nombreMatriz, datosProbabilidades, datosImpactos) => {
    datosProbabilidades.forEach(probabilidad => {

        const contenedor = document.createElement('div');
        contenedor.classList.add('div_row')

        datosImpactos.forEach(impacto => {
            if (impacto.valor != 0)
                pintarValoracion(parseFloat(impacto.valor * probabilidad.valor).toFixed(2), contenedor)
        })

        const celdaDescripcion = document.createElement('div');
        celdaDescripcion.innerHTML = probabilidad.descripcion;
        celdaDescripcion.classList.add('div_celda')
        if (nombreMatriz == 'matriz_Amenazas')
            contenedor.prepend(celdaDescripcion)
        else
            contenedor.append(celdaDescripcion);


        document.getElementById(nombreMatriz).appendChild(contenedor);

    });

    const contenedorNombresImpactos = document.createElement('div');
    contenedorNombresImpactos.classList.add('div_row')

    datosImpactos.forEach(impacto => {
        const divImpacto = document.createElement('div');
        divImpacto.classList.add("div_celda");
        divImpacto.innerHTML = (impacto.valor == 0) ? '' : impacto.descripcion;
        contenedorNombresImpactos.append(divImpacto);
    })
    document.getElementById(nombreMatriz).appendChild(contenedorNombresImpactos);
}

dibujarMatriz('matriz_Amenazas', probabilidades, impactos);
dibujarMatriz('matriz_Oportunidades', probabilidades, impactos.sort(function(i, x) { return x.valor - i.valor }));
//obtenerDatosDescripcion('descripcion', descripcionProbabilidad);