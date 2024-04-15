const overviewBtn = document.querySelector(".planet__button-overview");
const internalBtn = document.querySelector(".planet__button-internal");
const geologyBtn = document.querySelector(".planet__button-geology");

const buttonText = () => {
  let mql = window.matchMedia("(max-width: 40em)");
  if (mql.matches === false) {
    overviewBtn.innerHTML = "Overview";
    internalBtn.innerHTML = "internal structure";
    geologyBtn.innerHTML = "surface geology";
  }
  if (mql.matches === true) {
    overviewBtn.innerHTML = "Overview";
    internalBtn.innerHTML = "internal ";
    geologyBtn.innerHTML = "surface";
  }

  window.addEventListener("resize", () => {
    if (mql.matches === false) {
      overviewBtn.innerHTML = "Overview";
      internalBtn.innerHTML = "internal structure";
      geologyBtn.innerHTML = "surface geology";
    }
    if (mql.matches === true) {
      overviewBtn.innerHTML = "Overview";
      internalBtn.innerHTML = "internal ";
      geologyBtn.innerHTML = "surface";
    }
  });
};

export default buttonText;
