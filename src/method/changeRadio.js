const el = (selector) => document.querySelector(selector);
const all = (selectorAll) => document.querySelectorAll(selectorAll);

function changeRadio() {
  all(".radio__input").forEach((item) => {
    if (item.id === "el1" && item.checked === true) {
      el("html").classList.add("light");
      el('#img2').classList.add('block')
      el('#img1').classList.remove('block')
    } 
    else if (item.id === "el2" && item.checked === true) {
      el("html").classList.remove("light");
      el('#img1').classList.add('block')
      el('#img2').classList.remove('block')
    }
  });
}

export default changeRadio;