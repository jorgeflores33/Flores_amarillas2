const openGift = document.getElementById("openGift");
const flowersField = document.getElementById("field");
const moreFlowers = document.getElementById("moreFlowers");
const petals = document.getElementById("petals");

function createFlower(index, total) {
  const flower = document.createElement("div");
  flower.className = "flower";

  const stem = document.createElement("div");
  stem.className = "stem";

  const bloom = document.createElement("div");
  bloom.className = "bloom";

  const left = (index / (total - 1)) * 100;
  const height = 85 + Math.random() * 95;
  const scale = 0.55 + Math.random() * 0.8;

  flower.style.left = `${left + (Math.random() * 4 - 2)}%`;
  flower.style.height = `${height}px`;
  flower.style.transform = `scale(${scale})`;
  flower.style.animationDelay = `${Math.random() * 2}s`;

  stem.style.height = `${height}px`;
  stem.style.setProperty("--lean", `${Math.random() * 12 - 6}deg`);

  flower.append(stem, bloom);
  flowersField.appendChild(flower);
}

function createField(total = 35) {
  flowersField.innerHTML = "";
  for (let i = 0; i < total; i++) {
    createFlower(i, total);
  }
}

function createPetal() {
  const petal = document.createElement("span");
  petal.className = "petal";

  petal.style.left = `${Math.random() * 100}vw`;
  petal.style.setProperty("--drift", `${Math.random() * 180 - 90}px`);
  petal.style.animationDuration = `${4 + Math.random() * 5}s`;
  petal.style.animationDelay = `${Math.random() * 1.5}s`;

  petals.appendChild(petal);
  setTimeout(() => petal.remove(), 10000);
}

function rain(amount = 28) {
  for (let i = 0; i < amount; i++) {
    setTimeout(createPetal, i * 90);
  }
}

createField();

openGift.addEventListener("click", () => {
  document.getElementById("flores").scrollIntoView({ behavior: "smooth" });
  rain(35);
});

moreFlowers.addEventListener("click", () => {
  rain(60);

  const button = moreFlowers;
  button.textContent = "🌻 Floreció para ti";
  button.style.pointerEvents = "none";

  setTimeout(() => {
    button.textContent = "Haz que florezca ✦";
    button.style.pointerEvents = "auto";
  }, 2500);
});

window.addEventListener("scroll", () => {
  if (Math.random() > 0.94) createPetal();
});
