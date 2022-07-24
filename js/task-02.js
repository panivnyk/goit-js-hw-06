const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEL = document.querySelector("#ingredients");
const listIngridientsEl = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.classList = "item";
  li.textContent = ingredient;
  return li;
});

listEL.append(...listIngridientsEl);
