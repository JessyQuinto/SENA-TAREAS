# Calculadora de Área y Perímetro de Figuras Planas

Este proyecto implementa una aplicación web interactiva desarrollada en JavaScript que permite calcular el área y el perímetro de varias figuras geométricas planas. El usuario puede seleccionar entre diferentes figuras y proporcionar los parámetros necesarios, tales como base, altura, lado o radio, dependiendo de la figura seleccionada. El programa realiza los cálculos y muestra los resultados directamente en la interfaz de usuario.

## Funcionalidades

El programa puede calcular:

- **Área y perímetro de un triángulo**.
- **Área y perímetro de un rectángulo**.
- **Área y perímetro de un cuadrado**.
- **Área y perímetro de un círculo**.

### Figuras soportadas y sus fórmulas

| Figura       | Perímetro                                      | Área                                        |
|--------------|------------------------------------------------|---------------------------------------------|
| Triángulo    | P = base + altura + lado C                     | A = (base * altura) / 2                     |
| Rectángulo   | P = 2 * (base + altura)                        | A = base * altura                           |
| Cuadrado     | P = 4 * lado                                   | A = lado^2                                  |
| Círculo      | P = 2 * π * radio                              | A = π * radio^2                             |

Donde:
- `base`, `altura`, y `lado C` son las dimensiones del triángulo.
- `lado` es la longitud de un lado del cuadrado.
- `radio` es el radio del círculo.
- `π` es una constante aproximadamente igual a 3.1416.

## Estructura del Proyecto

El proyecto consiste en una interfaz web básica con HTML y CSS, y toda la lógica de cálculo está implementada en JavaScript.

### Lógica de Cálculo en JavaScript

El archivo `scripts.js` contiene la lógica principal para realizar los cálculos. El flujo es el siguiente:

1. **Selección de la Figura**: 
   El usuario selecciona una figura geométrica de un menú desplegable.
   
2. **Ingreso de Parámetros**:
   Dependiendo de la figura seleccionada, se muestran campos de entrada para los valores correspondientes (base, altura, lado, radio).

3. **Cálculo**:
   Basado en los valores ingresados, se realizan los cálculos utilizando las funciones dedicadas para cada figura:
   
   - **`calcularTriangulo(base, altura, ladoC)`**: Calcula el perímetro y el área de un triángulo.
   - **`calcularRectangulo(base, altura)`**: Calcula el perímetro y el área de un rectángulo.
   - **`calcularCuadrado(lado)`**: Calcula el perímetro y el área de un cuadrado.
   - **`calcularCirculo(radio)`**: Calcula el perímetro y el área de un círculo.

4. **Resultados**:
   El resultado del cálculo se muestra dinámicamente en la página, incluyendo el área y el perímetro de la figura seleccionada.

### Código de ejemplo

A continuación, un ejemplo del código JavaScript utilizado para el cálculo de un triángulo:

```javascript
function calcularTriangulo(base, altura, ladoC) {
    const perimetro = base + altura + ladoC;
    const area = (base * altura) / 2;
    return { perimetro, area };
}
Este código toma la base, altura y ladoC como parámetros de entrada, calcula el perímetro sumando las tres dimensiones, y calcula el área utilizando la fórmula A = (base * altura) / 2. Los valores calculados se devuelven como un objeto.

Ejemplo de Uso
Selecciona una figura geométrica en el menú desplegable.
Ingresa los parámetros requeridos (por ejemplo, base y altura para un triángulo).
Presiona el botón para calcular. El área y el perímetro aparecerán en pantalla.
Cómo ejecutar el proyecto
Este proyecto es una aplicación web estática, por lo que solo necesitas un navegador web para ejecutarla. Puedes descargar el código y abrir el archivo index.html en cualquier navegador moderno.

Clona el repositorio:
git clone https://github.com/tu-usuario/calculadora-figuras-geometricas.git
Abre el archivo index.html en tu navegador web.
Contribuciones
Si deseas contribuir a este proyecto, puedes hacer un fork del repositorio, crear una nueva rama para tus modificaciones y luego enviar un pull request. Toda contribución es bienvenida.

Licencia
Este proyecto está licenciado bajo la Licencia MIT.

### Descripción del contenido:

1. **Introducción:** Explica brevemente qué hace el proyecto y qué figuras geométricas cubre.
2. **Fórmulas:** Muestra las fórmulas matemáticas usadas para calcular el área y el perímetro de cada figura.
3. **Lógica en JavaScript:** Describe la lógica principal para el cálculo de las figuras.
4. **Código de ejemplo:** Proporciona un ejemplo concreto de una función JavaScript utilizada en los cálculos.
5. **Instrucciones para ejecutar:** Indica cómo clonar y ejecutar el proyecto.
6. **Contribuciones y Licencia:** Invita a contribuciones y menciona que el proyecto está bajo la 
