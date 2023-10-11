const el = (selector) => document.querySelector(selector);
const all = (selectorAll) => document.querySelectorAll(selectorAll);

export function open() {
  el('.logo__text').classList.add('open')
  el('.search__input').classList.add('open')
  all('.nav__link').forEach((item) => {
    item.classList.add('open')
  })
  el('.logout__text').classList.add('open')
  el('.radio__img').classList.add('open')
  el('.radio__text').classList.add('open')
  el('.logo__arrow').classList.add('open')
}

export function close() {
  el('.logo__text').classList.remove('open')
  el('.search__input').classList.remove('open')
  all('.nav__link').forEach((item) => {
    item.classList.remove('open')
  })
  el('.logout__text').classList.remove('open')
  el('.radio__img').classList.remove('open')
  el('.radio__text').classList.remove('open')
  el('.logo__arrow').classList.remove('open')
}