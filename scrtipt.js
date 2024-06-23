document.addEventListener('DOMContentLoaded', () => {
  const planetImages = document.getElementById('planetImages'); // Contenedor de las imágenes
  const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']; // Lista de planetas

  const fetchPlanetImages = async (planet) => {
    try {
      const response = await fetch(`https://images-api.nasa.gov/search?q=${planet}&media_type=image`);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      const items = data.collection.items.slice(0, 5); // Obtener solo las primeras 5 imágenes
      return { planet, items }; // Devolver el nombre del planeta y las imágenes
    } catch (error) {
      console.error(`Error fetching data for ${planet}:`, error);
      return { planet, items: [] }; // Devolver el nombre del planeta y un array vacío en caso de error
    }
  };

  const displayPlanetImages = async () => {
    for (let planet of planets) {
      const { planet: planetName, items } = await fetchPlanetImages(planet);
      items.forEach(image => {
        if (image.links && image.links[0] && image.links[0].href) {
          const img = document.createElement('img');
          img.src = image.links[0].href;
          img.alt = `${planetName} Image`;
          img.width = 100;
          img.height = 100;
          
          const planetNameElement = document.createElement('p');
          planetNameElement.textContent = planetName;
          
          const container = document.createElement('div');
          container.appendChild(img);
          container.appendChild(planetNameElement);
          
          planetImages.appendChild(container);
        }
      });
    }
  };

  displayPlanetImages(); // Llama a la función para mostrar las imágenes
});
