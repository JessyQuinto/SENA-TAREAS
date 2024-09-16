// El evento 'DOMContentLoaded' asegura que el código se ejecute cuando todo el DOM ha sido cargado.
document.addEventListener("DOMContentLoaded", () => {
    // Se seleccionan los elementos del DOM por sus IDs para manejarlos posteriormente.
    const figureSelect = document.getElementById('figureSelect'); // Elemento select para escoger la figura geométrica.
    const paramsInput = document.getElementById('paramsInput'); // Elemento donde se mostrarán los inputs de parámetros.
    const form = document.getElementById('figureForm'); // El formulario que contiene los elementos de entrada.
    const resultDiv = document.getElementById('result'); // Div donde se mostrarán los resultados.

    // Escucha el evento 'change' cuando el usuario selecciona una figura geométrica.
    figureSelect.addEventListener('change', () => {
        // Limpiar el contenido del contenedor de parámetros y de resultados.
        paramsInput.innerHTML = ''; 
        resultDiv.innerHTML = ''; 

        // Obtener la figura seleccionada.
        const selectedFigure = figureSelect.value;

        // Dependiendo de la figura seleccionada, se muestra el formulario adecuado.
        if (selectedFigure === 'triangulo') {
            // Si se selecciona "triángulo", se generan tres inputs para base, altura y lado C.
            paramsInput.innerHTML = `
                <div class="input-group">
                    <label for="base">Base:</label>
                    <input type="number" id="base" placeholder="Base" required>
                </div>
                <div class="input-group">
                    <label for="altura">Altura:</label>
                    <input type="number" id="altura" placeholder="Altura" required>
                </div>
                <div class="input-group">
                    <label for="ladoC">Lado C:</label>
                    <input type="number" id="ladoC" placeholder="Lado C" required>
                </div>
            `;
        } else if (selectedFigure === 'rectangulo') {
            // Si se selecciona "rectángulo", se generan inputs para la base y la altura.
            paramsInput.innerHTML = `
                <div class="input-group">
                    <label for="base">Base:</label>
                    <input type="number" id="base" placeholder="Base" required>
                </div>
                <div class="input-group">
                    <label for="altura">Altura:</label>
                    <input type="number" id="altura" placeholder="Altura" required>
                </div>
            `;
        } else if (selectedFigure === 'cuadrado') {
            // Si se selecciona "cuadrado", se genera un input para el lado.
            paramsInput.innerHTML = `
                <div class="input-group">
                    <label for="lado">Lado:</label>
                    <input type="number" id="lado" placeholder="Lado" required>
                </div>
            `;
        } else if (selectedFigure === 'circulo') {
            // Si se selecciona "círculo", se genera un input para el radio.
            paramsInput.innerHTML = `
                <div class="input-group">
                    <label for="radio">Radio:</label>
                    <input type="number" id="radio" placeholder="Radio" required>
                </div>
            `;
        }
    });

    // Escucha el evento 'submit' cuando el formulario es enviado.
    form.addEventListener('submit', (event) => {
        // Se previene la acción por defecto del formulario (que es recargar la página).
        event.preventDefault();

        // Obtener la figura seleccionada.
        const tipo = figureSelect.value;
        let params = []; // Array para almacenar los parámetros ingresados.

        // Dependiendo de la figura seleccionada, se extraen los valores ingresados en los inputs.
        if (tipo === 'triangulo') {
            const base = parseFloat(document.getElementById('base').value);
            const altura = parseFloat(document.getElementById('altura').value);
            const ladoC = parseFloat(document.getElementById('ladoC').value);
            params = [base, altura, ladoC]; // Parámetros del triángulo: base, altura y lado C.
        } else if (tipo === 'rectangulo') {
            const base = parseFloat(document.getElementById('base').value);
            const altura = parseFloat(document.getElementById('altura').value);
            params = [base, altura]; // Parámetros del rectángulo: base y altura.
        } else if (tipo === 'cuadrado') {
            const lado = parseFloat(document.getElementById('lado').value);
            params = [lado]; // Parámetro del cuadrado: lado.
        } else if (tipo === 'circulo') {
            const radio = parseFloat(document.getElementById('radio').value);
            params = [radio]; // Parámetro del círculo: radio.
        }

        // Se llama a la función calcularFigura que retorna el perímetro y el área según la figura seleccionada.
        const resultado = calcularFigura(tipo, ...params);

        // Se formatea y muestra el resultado en el div de resultados.
        resultDiv.innerHTML = formatearResultado(tipo, resultado);
    });
});

// Función que calcula el perímetro y el área de un triángulo.
function calcularTriangulo(base, altura, ladoC) {
    const perimetro = base + altura + ladoC; // Perímetro del triángulo.
    const area = (base * altura) / 2; // Área del triángulo.
    return { perimetro, area }; // Devuelve un objeto con el perímetro y el área.
}

// Función que calcula el perímetro y el área de un rectángulo.
function calcularRectangulo(base, altura) {
    const perimetro = 2 * (base + altura); // Perímetro del rectángulo.
    const area = base * altura; // Área del rectángulo.
    return { perimetro, area }; // Devuelve un objeto con el perímetro y el área.
}

// Función que calcula el perímetro y el área de un cuadrado.
function calcularCuadrado(lado) {
    const perimetro = 4 * lado; // Perímetro del cuadrado.
    const area = lado * lado; // Área del cuadrado.
    return { perimetro, area }; // Devuelve un objeto con el perímetro y el área.
}

// Función que calcula el perímetro y el área de un círculo.
function calcularCirculo(radio) {
    const perimetro = 2 * Math.PI * radio; // Perímetro del círculo.
    const area = Math.PI * radio * radio; // Área del círculo.
    return { perimetro, area }; // Devuelve un objeto con el perímetro y el área.
}

// Función que selecciona la figura geométrica y llama a la función correspondiente para calcular el área y perímetro.
function calcularFigura(tipo, ...params) {
    switch(tipo) {
        case 'triangulo':
            // Validación de parámetros del triángulo.
            if (params.length !== 3) return "Error: El triángulo necesita base, altura y lado C";
            return calcularTriangulo(...params); // Llama a calcularTriangulo con los parámetros.
        case 'rectangulo':
            // Validación de parámetros del rectángulo.
            if (params.length !== 2) return "Error: El rectángulo necesita base y altura";
            return calcularRectangulo(...params); // Llama a calcularRectangulo con los parámetros.
        case 'cuadrado':
            // Validación de parámetros del cuadrado.
            if (params.length !== 1) return "Error: El cuadrado necesita solo el lado";
            return calcularCuadrado(...params); // Llama a calcularCuadrado con el parámetro.
        case 'circulo':
            // Validación de parámetros del círculo.
            if (params.length !== 1) return "Error: El círculo necesita solo el radio";
            return calcularCirculo(...params); // Llama a calcularCirculo con el parámetro.
        default:
            return "Error: Tipo de figura no reconocido"; // En caso de un tipo no reconocido.
    }
}

// Función para formatear el resultado y mostrarlo en el DOM.
function formatearResultado(figura, resultado) {
    // Si el resultado es un error, lo muestra en el div de resultados.
    if (typeof resultado === 'string') {
        return `<p class="error">${resultado}</p>`;
    }
    // Si el cálculo fue exitoso, muestra el perímetro y el área.
    return `
        <p>${figura.charAt(0).toUpperCase() + figura.slice(1)}:</p> 
        <p><strong>Perímetro:</strong> ${resultado.perimetro.toFixed(2)}</p> 
        <p><strong>Área:</strong> ${resultado.area.toFixed(2)}</p> 
    `;
}
