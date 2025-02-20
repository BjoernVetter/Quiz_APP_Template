console.clear();
// Bookmark Button holen:
const bookmarkButton = document.querySelector('[data-js="bookmarkButton"]');

// Answer Button holen:
const answerButton = document.querySelector('[data-js="answerButton"]');

// answer holen:
const answer = document.querySelector('[data-js="answer"]');

bookmarkButton.addEventListener("click", () => {
  // console.log ("test");
  // console.log (bookmarkButton.classList);
  bookmarkButton.classList.toggle("bookmark--active");
});

answerButton.addEventListener("click", () => {
  answer.classList.toggle("card__answer--active");

  // Button_Text ändern

  if (answer.classList.contains("card__answer--active")) {
    answerButton.textContent = "Answer";
  } else {
    answerButton.textContent = "Show answer";
  }
});
