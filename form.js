const form = document.querySelector("[Data-js=form]");
const cardContainer = document.querySelector("[data-js=card-container]");
const questonInput = document.querySelector("[data-js=queston-input]");
const answerInput = document.querySelector("[data-js=answer-input]");
const questonCounter = document.querySelector(
  "[data-js=queston-character-count]"
);

const answer = document.querySelector("[data-js=answer-character-count]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElement = event.target;

  const formData = new FormData(formElement);
  const data = Object.fromEntries(formData);

  const newCard = Card(data);
  cardContainer.append(newCard);

  formElement.reset();
});

/* Schau mal nach*/

questonInput.addEventListener("input", () => {
  const currentCharactterCount = questonInput.ariaValueMax.length;
  questonCounter.textContent = `${currentCharacterCount}/150`;
});

answerInput.addEventListener("input", () => {
  const currentCharacterCount = answerInput.ariaValueMax.length;
  answerCounter.textContent = `${currentCharacterCount}/150`;
});

function Card(cardData) {
  const cardElement = document.createElement("li");
  cardElement.className = "card-list__item";
  cardElement.innerHTML = `<article class="card" data-js="card">
<h2 class="card__question" data-js=     



`;
}
