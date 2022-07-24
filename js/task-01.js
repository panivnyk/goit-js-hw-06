const itemEl = document.querySelectorAll("li.item");
console.log("Number of categories:", itemEl.length);

const textHeader = itemEl.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
