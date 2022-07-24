const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listImgEL = document.querySelector("ul.gallery");

const makelistImgEl = images.map((image) => {
  const imageEl = `<li class="img"><img src="${image.url}" alt="${image.alt}" width="420" height="250" /> </li>`;
  return imageEl;
});
listImgEL.insertAdjacentHTML("afterbegin", makelistImgEl.join(" "));

const designGallery = `
list-style: none; 
display: flex;
flex-wrap: wrap;
gap: 10px 20px;
justify-content: center;
`;

listImgEL.style.cssText = designGallery;
