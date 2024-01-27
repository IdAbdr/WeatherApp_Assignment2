const catButton = document.getElementById('catButton');
const dogButton = document.getElementById('dogButton');

const catFactsApiUrl = "https://catfact.ninja/fact";
const dogsApiUrl = "https://dog.ceo/api/breeds/image/random";

catButton.addEventListener('click', getCatFact);
dogButton.addEventListener('click', getDogImage);

async function getCatFact() {
    try {
        const response = await fetch(catFactsApiUrl);
        const data = await response.json();
        // Ваш код для обработки факта о кошках
        console.log("Cat Fact:", data.fact);
    } catch (error) {
        console.error("Error fetching cat fact:", error);
    }
}

async function getDogImage() {
    try {
        const response = await fetch(dogsApiUrl);
        const data = await response.json();
        // Ваш код для обработки изображения собаки
        console.log("Dog Image URL:", data.message);
    } catch (error) {
        console.error("Error fetching dog image:", error);
    }
}