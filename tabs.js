const planetImageArr = document.querySelectorAll(".planet__image");
const planetInfoArr = document.querySelectorAll(".planet__info");
const planetButtonArr = document.querySelectorAll(".planet__button");

const tabs = () => {
  //setting active first button
  planetButtonArr[0].classList.add("planet__button_active");
  //hiding all elements except for first one
  planetImageArr.forEach((item, index) => {
    if (index !== 0) {
      item.classList.add("planet__image_hidden");
    }
  });
  planetInfoArr.forEach((item, index) => {
    if (index !== 0) {
      item.classList.add("planet__info_hidden");
    }
  });

  planetButtonArr.forEach((button) =>
    button.addEventListener("click", (item) => {
      //show the corresponding tab to clicked button
      planetButtonArr.forEach((e, index) => {
        if (e === item.target) {
          unActivateButtons();
          hideInfo();
          hideImages();
          planetImageArr[index].classList.remove("planet__image_hidden");
          planetInfoArr[index].classList.remove("planet__info_hidden");
          planetButtonArr[index].classList.add("planet__button_active");
        }
      });
    })
  );
};

const unActivateButtons = () => {
  planetButtonArr.forEach((item) => {
    item.classList.remove("planet__button_active");
  });
};
const hideImages = () => {
  planetImageArr.forEach((item) => {
    item.classList.add("planet__image_hidden");
  });
};
const hideInfo = () => {
  planetInfoArr.forEach((item) => {
    item.classList.add("planet__info_hidden");
  });
};

export default tabs;
