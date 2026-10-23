fetch('/api/plants')
.then((response) => response.json())
.then((result) => {
  const dataListElement = document.getElementById('plants-list-data');

  result.data.forEach((plant) => {
    const optionElement = document.createElement('option');
    optionElement.value = plant.slug;
    dataListElement.appendChild(optionElement);
  })

})
.catch((error) => console.log(error));

async function addPlant() {
  const plantSlug = document.getElementById('plant-list-input').value;
  const plantsSectionElement = document.getElementById('plant-container');

  const response = await fetch(`/api/plants/${plantSlug}`);
  const result = await response.json();
  const plant = result.data;

  const imageUrl = "https://plantsolve.com" + plant.heroImage;

  const plantCardElement = document.createElement('div');
  plantCardElement.innerHTML = `
    <h3 class="plant-header">${sanitizeXSS(plant.commonName)}<h3>
    <img class="plant-image" src=${imageUrl} alt="image of a ${sanitizeXSS(plant.commonName)}"/>
    <h4>Basic care</h4>
    <p>${sanitizeXSS(plant.quickAnswer)}</p>
  `

  plantsSectionElement.appendChild(plantCardElement);
}