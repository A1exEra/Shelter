fetch("../pets.json")
  .then((response) => {
    return response.json();
  })
  .then((petsData) => {
    console.log(petsData);
    modal(petsData);
    for (pet of petsData) {
      getPets.push(pet);
    }
  })
  .catch((e) => {
    console.log(e);
  });
const maxWidth768 = window.matchMedia("(max-width: 768px)");
console.log(maxWidth768);
const maxWidth1279 = window.matchMedia("(max-width: 1280px)");
let getPets = [];
console.log(getPets);
const petsCardWrapper = document.querySelector(`.cardWrapper`);
///////////////////////////////////////////
///JSON DOCUMENFRAGMENT()
////////////////////////////
///SLIDER COMPONENT///////////
// let jsonFragment = new DocumentFragment();
// function generatepets(petsData) {
//   petsData.forEach((pet) => {
//     let name = pet.name;
//     let petImg = pet.img;
//     const appendData = document.createElement(`div`);
//     appendData.classList.add(`slider_card`);
//     appendData.innerHTML = `
//         <img src="${petImg}" alt="${name}" />
//             <p>${name}</p>
//             <button type="button" class="btn_learn_more"><a href="#">Learn More</a></button>`;
//     petsCardWrapper.append(appendData);
//   });
// }
///////////////////////////////////////////////
const slides = document.querySelectorAll(`.slider_card`);
/////////////////////////////////////////////
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  let i;
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
/////////////////////////////////////////////
//MODAL//////////////////////////////////////
const openModal = document.querySelector(`.petModal`);
const closeModal = document.querySelector(`.BtnCloseModal`);
const petsContainer = document.querySelector(`#pets_outer`);
const modalInfoContainer = document.querySelector(`.modalInfoContainer`);
function modal(petsData) {
  slides.forEach((slide) => {
    slide.addEventListener(`click`, (e) => {
      e.preventDefault();
      e.stopImmediatePropagation();
      console.log(`Slider clicked`);
      openModal.classList.remove(`closeModal`);
      petsData.forEach((pet) => {
        const findPetName = slide.children[1].innerText;
        console.log(findPetName);
        if (pet.name === findPetName) {
          return (modalInfoContainer.innerHTML = `
                <div class="modalImg">
                  <img src="${pet.img}" alt="${pet.name}">
                </div>
                <div class="textModal">
                  <h2 class="petName">${pet.name}</h2>
                  <p class="petBreed">${pet.breed}</p>
                  <p class="petDescription">${pet.description}</p>
                  <ul class="petList">
                    <li class="petInfo">
                      <b>Age</b>: ${pet.age}
                    </li>
                    <li class="petInfo">
                      <b>Inoculations</b>: ${pet.inoculations}
                    </li>
                    <li class="petInfo">
                      <b>Diseases</b>: ${pet.diseases}
                    </li>
                    <li class="petInfo">
                      <b>Parasites</b>: ${pet.parasites}
                    </li>
                  </ul>
                </div>
                </div>
                `);
        }
      });
      document.body.style.overflow = `hidden`;
    });
  });
  closeModal.addEventListener(`click`, (e) => {
    e.preventDefault();
    openModal.classList.add(`closeModal`);
    document.body.style.overflow = `visible`;
  });
}
