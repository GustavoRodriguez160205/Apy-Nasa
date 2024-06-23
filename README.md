# 🪐 Mostrar Imágenes de Planetas con la API de NASA

Este proyecto utiliza la API de NASA para mostrar imágenes de diferentes planetas en el Sistema Solar. Utiliza JavaScript para hacer solicitudes a la API y mostrar las imágenes en una página web.

## Funcionalidad

El proyecto realiza lo siguiente:

- Hace uso de la API de NASA para obtener imágenes de planetas específicos.
- Muestra las primeras 5 imágenes disponibles para cada planeta.
- Acompaña cada imagen con el nombre del planeta correspondiente.
- Ajusta el tamaño de las imágenes para que sean más pequeñas y se vean bien en la página.

## Tecnologías Utilizadas

- HTML
- CSS (no se muestra en el ejemplo, pero podría usarse para estilizar las imágenes)
- JavaScript

## Cómo Funciona

1. **HTML**: 
   - Define un contenedor (`<div>`) con el ID `planetImages` donde se mostrarán las imágenes de los planetas.
   - Carga el archivo `script.js` que contiene el código JavaScript necesario.

2. **JavaScript (`script.js`)**:
   - Utiliza `fetch` para obtener datos de la API de NASA y maneja errores con `try...catch`.
   - Recorre una lista de planetas predefinidos.
   - Para cada planeta, hace una solicitud a la API para obtener imágenes.
   - Filtra y muestra las primeras 5 imágenes disponibles para cada planeta.
   - Crea elementos de imagen (`<img>`) y párrafos (`<p>`) para mostrar las imágenes y los nombres de los planetas.
   - Añade estos elementos al contenedor `planetImages` en el HTML.

## Configuración del Proyecto

- Asegúrate de tener una conexión a Internet para que las imágenes de la API de NASA se carguen correctamente.
- No se requieren configuraciones adicionales para ejecutar este proyecto.

## Cómo Usar

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/tu-usuario/nombre-de-tu-repo.git
