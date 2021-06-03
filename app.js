// local places information
const places = [
  {
    id: 1,
    place: "Lima",
    country: "Peru",
    img:
      "willian-justen-de-vasconcellos-mZKEIRBStv4-unsplash.jpg",
    text:
      "Panorama of Miraflores Coast.",
  },
  {
    id: 2,
    place: "La Merced",
    country: "Peru",
    img:
      "hans-luiggi-uvQmacxnfcE-unsplash.jpg",
    text:
      "Mountains.",
  },
  {
    id: 3,
    place: "Machupicchu",
    country: "Peru",
    img:
      "jeison-higuita-KD9AsSBYz3Q-unsplash.jpg",
    text:
      "Woman standing under brown rock formation.",
  },
  {
    id: 4,
    place: "Cuzco",
    country: "Peru",
    img:
      "peter-livesey-WEME5LOrLpE-unsplash.jpg",
    text:
      "Woman in store with display of assorted shirts and textiles.",
  },
  {
    id: 5,
    place: "Apurimac",
    country: "Peru",
    img:
      "carlos-ruiz-huaman-l91dwhigRu8-unsplash.jpg",
    text:
      "Man carring flag on top of cliff.",
  },
  {
    id: 6,
    place: "The Titicaca Lake",
    country: "Peru",
    img:
      "persnickety-prints-piGJujLGW_s-unsplash.jpg",
    text:
      "Several women standing near to tower.",
  },
];
// select items
const img = document.getElementById("place-img");
const place = document.getElementById("place");
const country = document.getElementById("country");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = places[currentItem];
  img.src = "./img/" + item.img;
  place.textContent = item.place;
  country.textContent = item.country;
  info.textContent = item.text;
});

// show place based on item
function showPlace(p) {
  const item = places[p];
  img.src = "./img/" + item.img;
  place.textContent = item.place;
  country.textContent = item.country;
  info.textContent = item.text;
}
// show next place
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > places.length - 1) {
    currentItem = 0;
  }
  showPlace(currentItem);
});
// show prev place
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = places.length - 1;
  }
  showPlace(currentItem);
});
// show random place
randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * places.length);
  showPlace(currentItem);
});
