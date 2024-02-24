/* const userTemplate = document.querySelector("#card-template").content;
const usersOnline = document.querySelector(".places__list");

initialCards.forEach(function (cardData) {
  const userElement = userTemplate
    .querySelector(".places__item")
    .cloneNode(true);
  userElement.querySelector(".card__image").src = cardData.link;
  userElement.querySelector(".card__title").textContent = cardData.name;
  userElement.querySelector(".card__image").setAttribute('alt', cardData.name);
  usersOnline.append(userElement);
});

const deleteButtons = document.querySelectorAll(".card__delete-button");
deleteButtons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    event.target.closest(".places__item").remove();
  });
});
 */
const userTemplate = document.querySelector("#card-template").content;
const usersOnline = document.querySelector(".places__list");

// @todo: Функция создания карточки
function createCard(data, onDelete){
  const cardElement = userTemplate.querySelector('.places__item').cloneNode(true); 
  //устанавливаем данные карточки и обработчик клика по корзинке удаления
  //...
  cardElement.querySelector(".card__image").src = data.link;
  cardElement.querySelector(".card__title").textContent = data.name;
  cardElement.querySelector(".card__image").setAttribute('alt', data.name);

  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", function () {
    onDelete(cardElement);
  });

  return cardElement;
}

function handleDeleteCard(cardElement) {
  cardElement.remove();
}

function renderCard(cardElement) {
  usersOnline.append(cardElement);
}

initialCards.forEach((cardData) => { 
  const card = createCard(cardData, handleDeleteCard);
  renderCard(card);
});

