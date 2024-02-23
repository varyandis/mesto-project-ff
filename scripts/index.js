const userTemplate = document.querySelector("#card-template").content;
const usersOnline = document.querySelector(".places__list");

initialCards.forEach(function (cardData) {
  const userElement = userTemplate
    .querySelector(".places__item")
    .cloneNode(true);
  userElement.querySelector(".card__image").src = cardData.link;
  userElement.querySelector(".card__title").textContent = cardData.name;
  usersOnline.append(userElement);
});

const deleteButtons = document.querySelectorAll(".card__delete-button");
deleteButtons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    event.target.closest(".places__item").remove();
  });
});
