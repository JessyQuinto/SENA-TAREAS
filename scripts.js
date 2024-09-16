document.addEventListener("DOMContentLoaded", () => {
    const figureSelect = document.getElementById('figureSelect');
    const paramsInput = document.getElementById('paramsInput');
    const form = document.getElementById('figureForm');
    const resultDiv = document.getElementById('result');

    figureSelect.addEventListener('change', () => {
        paramsInput.innerHTML = '';
        resultDiv.innerHTML = '';
        const selectedFigure = figureSelect.value;

        if (selectedFigure === 'triangulo') {
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
            paramsInput.innerHTML = `
                <div class="input-group">
                    <label for="lado">Lado:</label>
                    <input type="number" id="lado" placeholder="Lado" required>
                </div>
            `;
        } else if (selectedFigure === 'circulo') {
            paramsInput.innerHTML = `
                <div class="input-group">
                    <label for="radio">Radio:</label>
                    <input type="number" id="radio" placeholder="Radio" required>
                </div>
            `;
        }
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const tipo = figureSelect.value;
        let params = [];

        if (tipo === 'triangulo') {
            const base = parseFloat(document.getElementById('base').value);
            const altura = parseFloat(document.getElementById('altura').value);
            const ladoC = parseFloat(document.getElementById('ladoC').value);
            params = [base, altura, ladoC];
        } else if (tipo === 'rectangulo') {
            const base = parseFloat(document.getElementById('base').value);
            const altura = parseFloat(document.getElementById('altura').value);
            params = [base, altura];
        } else if (tipo === 'cuadrado') {
            const lado = parseFloat(document.getElementById('lado').value);
            params = [lado];
        } else if (tipo === 'circulo') {
            const radio = parseFloat(document.getElementById('radio').value);
            params = [radio];
        }

        const resultado = calcularFigura(tipo, ...params);
        resultDiv.innerHTML = formatearResultado(tipo, resultado);
    });
});

function calcularTriangulo(base, altura, ladoC) {
    const perimetro = base + altura + ladoC;
    const area = (base * altura) / 2;
    return { perimetro, area };
}

function calcularRectangulo(base, altura) {
    const perimetro = 2 * (base + altura);
    const area = base * altura;
    return { perimetro, area };
}

function calcularCuadrado(lado) {
    const perimetro = 4 * lado;
    const area = lado * lado;
    return { perimetro, area };
}

function calcularCirculo(radio) {
    const perimetro = 2 * Math.PI * radio;
    const area = Math.PI * radio * radio;
    return { perimetro, area };
}

function calcularFigura(tipo, ...params) {
    switch(tipo) {
        case 'triangulo':
            if (params.length !== 3) return "Error: El triángulo necesita base, altura y lado C";
            return calcularTriangulo(...params);
        case 'rectangulo':
            if (params.length !== 2) return "Error: El rectángulo necesita base y altura";
            return calcularRectangulo(...params);
        case 'cuadrado':
            if (params.length !== 1) return "Error: El cuadrado necesita solo el lado";
            return calcularCuadrado(...params);
        case 'circulo':
            if (params.length !== 1) return "Error: El círculo necesita solo el radio";
            return calcularCirculo(...params);
        default:
            return "Error: Tipo de figura no reconocido";
    }
}

function formatearResultado(figura, resultado) {
    if (typeof resultado === 'string') {
        return `<p class="error">${resultado}</p>`;
    }
    return `
        <p>${figura.charAt(0).toUpperCase() + figura.slice(1)}:</p>
        <p><strong>Perímetro:</strong> ${resultado.perimetro.toFixed(2)}</p>
        <p><strong>Área:</strong> ${resultado.area.toFixed(2)}</p>
    `;
}
