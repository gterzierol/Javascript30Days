const endPoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");
const cities = [];

const prom = fetch(endPoint)
  .then((data) => data.json())
  .then((data) => cities.push(...data));

function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    //Bende yeni öğrendim :D
    //içine arama yaptığımız kelimeyi veya harfleri veriyoruz
    //
    //
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  console.log(matchArray);
  const html = matchArray
    .map((place) => {
    return `
      <li>
        <span class="name">${place.city},     ${place.state}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}

searchInput.addEventListener("keyup", displayMatches);
