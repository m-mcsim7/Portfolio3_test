const iconMenu = document.querySelector(".burger");
const menuBody = document.querySelector(".nav__link");
const menuBodyOpacity = document.querySelector(".nav");
//const iconSunLuna = document.querySelector(".hero__iconBW");

iconMenu.addEventListener("click", function () {
  iconMenu.classList.toggle("_active");
  menuBody.classList.toggle("_active");
  menuBodyOpacity.classList.toggle("_active");
//  iconSunLuna.classList.toggle("_active");
  document.body.classList.toggle("_lock");
});

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((el) => el.addEventListener("click", closeMenu));
//nav.addEventListener('click', closeMenu);
function closeMenu(event) {
  if (event.target.classList.contains("nav-link")) {
    iconMenu.classList.remove("_active");
    menuBody.classList.remove("_active");
    menuBodyOpacity.classList.remove("_active");
    document.body.classList.remove("_lock");
  }
}

const portfolioImages = document.querySelectorAll(".portfolio-image");
const portfolioBtn = document.querySelectorAll(".portfolio__button");
const portfolioBtns = document.querySelector(".portfolio__buttons");

portfolioBtns.addEventListener("click", function changeImage(e) {
  //console.log(portfolioBtns.children)
  for (let h of portfolioBtns.children) {
    h.classList.remove("_active");
  }
  if (e.target.closest(".portfolio__button")) {
    //console.log(e.target.dataset.season)
    portfolioImages.forEach(
      (img, index) =>
        (img.src = `./image/${e.target.dataset.season}/${index + 1}.jpg`)
    );
    e.target.classList.add("_active");
  }
});

const seasons = ["winter", "spring", "summer", "autumn"];
function preloadSummerImages() {
  seasons.forEach((element) => {
    for (let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./image/${element}/${i}.jpg`;
    }
  });
}
preloadSummerImages();

const iconBW = document.querySelector(".hero__iconBW");

const itemsBW = document.querySelectorAll(".light-theme");
for (let i of itemsBW) {
  i.classList.remove("light-theme");
}
iconBW.addEventListener("click", function (e) {
  for (let i of itemsBW) {
    if (i.classList.contains("light-theme")) {
      iconBW.classList.add('luna')
      iconBW.classList.remove('sun')
      i.classList.remove("light-theme");
      localStorage.removeItem("theme");
    } else {
      iconBW.classList.add('sun')
      iconBW.classList.remove('luna')
      i.classList.add("light-theme");
      localStorage.setItem("theme", "white");
    }
  }
});

if (localStorage.getItem("theme") !== null) {
  for (let i of itemsBW) {
    i.classList.add("light-theme");
    localStorage.setItem("theme", "white");
  }
}
console.log(`Моя отметка - 85 балла(ов)
Отзыв по пунктам ТЗ:

Частично выполненные пункты:
1) при кликах по кнопкам Winter, Spring, Summer, Autumn в секции portfolio отображаются изображения из папки с соответствующим названием — 20 балл(а)
2) кнопка, по которой кликнули, становится активной т.е. выделяется стилем. Другие кнопки при этом будут неактивными — 5 балл(а)
3) при клике по надписи ru англоязычная страница переводится на русский язык — 10 балл(а)
4) при клике по надписи en русскоязычная страница переводится на английский язык — 10 балл(а)
5) надписи en или ru, соответствующие текущему языку страницы, становятся активными т.е. выделяются стилем — 5 балл(а)
6) тёмная тема приложения сменяется светлой — 10 балл(а)
7) светлая тема приложения сменяется тёмной — 10 балл(а)
8) после смены светлой и тёмной темы интерактивные элементы по-прежнему изменяют внешний вид при наведении и клике и при этом остаются видимыми на странице (нет ситуации с белым шрифтом на белом фоне) — 5 балл(а)
9) выбранный пользователем язык отображения страницы и светлая или тёмная тема сохраняются при перезагрузке страницы — 5 балл(а)
10) сложные эффекты для кнопок при наведении и/или клике — 5 балл(а)
`)
