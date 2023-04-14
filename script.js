"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const sectionOne = document.querySelector("#section--1");
const nav = document.querySelector(".nav");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach(mov => mov.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

const translatePTBR = function (translate = false) {
  if (translate) {
    document.querySelector("#abra").textContent = "Abra sua conta";
    document.querySelector("#apenas").textContent = "em apenas ";
    document.querySelector("#cinco").textContent = "5 minutos";
    document.querySelector("#nome").textContent = "Nome";
    document.querySelector("#sobrenome").textContent = "Sobrenome";
    document.querySelector("#email").textContent = "Email";
    document.querySelector("#proximo").textContent = "Próximo passo →";
    document.querySelector("#translate").textContent = "Translate 🇺🇸";

    document.querySelector("title").textContent =
      "Bankist | Quando banco encontra minimalismo";

    document.querySelector("h4").textContent =
      "Uma experiência bancária mais simples para uma vida mais simples.";
    document.querySelector(".quando").textContent = "Quando";
    document.querySelector(".encontra").textContent = "encontra";
    document.querySelector("#banco").textContent = "banco";
    document.querySelector("#minimalismo").textContent = "minimalismo";
    document.querySelector(".section__description").textContent = "Recursos";
    document.getElementById("recursos").textContent = "Recursos";
    document.querySelector(".operacoes").textContent = document.querySelector(
      ".operacoes2"
    ).textContent = "Operações";
    document.querySelector("#clientes").textContent = "Clientes";
    document.querySelector("#abriracc").textContent = "Abrir conta";
    document.querySelector(".section__header").textContent =
      "Tudo que você precisa em um banco moderno e muito mais.";
    document.querySelector(".features__header").textContent =
      "Banco 100% digital";
    document.querySelector("#moneygrow").textContent =
      "Veja seu dinheiro crescer";
    document.querySelector("#debitcard").textContent =
      "Cartão de débito incluído";
    document.querySelector("#simpler").textContent =
      "Tudo o mais simples possível.";
    document.querySelector("#itransfer").textContent =
      "01 Transferência Imediata";
    document.querySelector("#iloan").textContent = "02 Empréstimo Imediato";
    document.querySelector("#iclose").textContent = "03 Fechamento Imediato";
    document.querySelector("#transferc").textContent =
      "Transfira dinheiro para qualquer pessoa, instantaneamente! Sem taxas!";
    document.querySelector("#loanc").textContent =
      "Compre uma casa ou realize os seus sonhos, com empréstimos instantâneos.";
    document.querySelector("#closingc").textContent =
      "Não precisa mais da sua conta? Sem problemas! Feche-a instantaneamente.";
    document.querySelector("#notsure").textContent = "Ainda na dúvida?";
    document.querySelector("#millions").textContent =
      "Milhões de banqueiros já estão simplificando suas vidas.";
    document.querySelector("#year").textContent =
      "O melhor dia para se juntar ao Bankist foi há um ano atrás. O segundo melhor é hoje!";
    document.querySelector("#openacc").textContent =
      "Abra sua conta gratuita hoje!";
    document.querySelector("#about").textContent = "Sobre";
    document.querySelector("#pricing").textContent = "Preços";
    document.querySelector("#terms").textContent = "Termos de uso";
    document.querySelector("#privacy").textContent = "Política de Privacidade";
    document.querySelector("#careers").textContent = "Carreiras";
    document.querySelector("#contact").textContent = "Contato";
    document.querySelector("#logic").textContent =
      "Lógica de programação e funcionalidades feitas por Levy Prado.";
  } else {
    document.querySelector("#abra").textContent = "Open your account";
    document.querySelector("#apenas").textContent = "in just ";
    document.querySelector("#cinco").textContent = "5 minutes";
    document.querySelector("#nome").textContent = "First Name";
    document.querySelector("#sobrenome").textContent = "Last Name";
    document.querySelector("#email").textContent = "Email Addres";
    document.querySelector("#proximo").textContent = "Next step →";
    document.querySelector("#translate").textContent = "Traduzir 🇧🇷";

    document.querySelector("title").textContent =
      "Bankist | When banking meets minimalist";
    document.querySelector(".quando").textContent = "When";
    document.querySelector(".encontra").textContent = "meets";
    document.querySelector("#banco").textContent = "banking";
    document.querySelector("#minimalismo").textContent = "minimalist";
    document.querySelector("h4").textContent =
      "A simpler banking experience for a simpler life.";

    document.querySelector(".section__description").textContent = "Features";
    document.getElementById("recursos").textContent = "Features";
    document.querySelector(".operacoes").textContent = document.querySelector(
      ".operacoes2"
    ).textContent = "Operations";
    document.querySelector("#clientes").textContent = "Testimonials";
    document.querySelector("#abriracc").textContent = "Open account";
    document.querySelector(".section__header").textContent =
      "Everything you need in a modern bank and more.";
    document.querySelector(".features__header").textContent =
      "100% digital bank";
    document.querySelector("#moneygrow").textContent = "Watch your money grow";
    document.querySelector("#debitcard").textContent =
      " Free debit card included";
    document.querySelector("#simpler").textContent =
      "Everything as simple as possible, but no simpler.";
    document.querySelector("#itransfer").textContent = "01 Instant Transfers";
    document.querySelector("#iloan").textContent = "02 Instant Loans";
    document.querySelector("#iclose").textContent = "03 Instant closing";
    document.querySelector("#transferc").textContent =
      "Transfer money to anyone, instantly! No fees, no BS. ";
    document.querySelector("#loanc").textContent =
      "Buy a home or make your dreams come true, with instant loans.";
    document.querySelector("#closingc").textContent =
      "No longer need your account? No problem! Close it instantly.";
    document.querySelector("#notsure").textContent = "NOT SURE YET?";
    document.querySelector("#millions").textContent =
      "Millions of Bankists are already making their lifes simpler. ";
    document.querySelector("#year").textContent =
      "The best day to join Bankist was one year ago. The second best is today!";
    document.querySelector("#openacc").textContent =
      "Open your free account today!";
    document.querySelector("#about").textContent = "About";
    document.querySelector("#pricing").textContent = "Pricing";
    document.querySelector("#terms").textContent = "Terms of use";
    document.querySelector("#privacy").textContent = "Privacy Policy";
    document.querySelector("#careers").textContent = "Careers";
    document.querySelector("#contact").textContent = "Contact us";
    document.querySelector("#logic").textContent =
      "Programming logic and functionalities made by Levy Prado.";
  }
};

const hoverMouse = function (e, op) {
  if (e.target.classList.contains("nav__link")) {
    const clicked = e.target;
    const siblings = clicked.closest(".nav").querySelectorAll(".nav__link");
    const logo = clicked.closest(".nav").querySelector("img");
    siblings.forEach(el => {
      if (el !== clicked) el.style.opacity = op;
    });
    logo.style.opacity = op;
  }
};

document.querySelector(".nav").addEventListener("mouseover", function (e) {
  hoverMouse(e, 0.5);
});

document.querySelector(".nav").addEventListener("mouseout", function (e) {
  hoverMouse(e, 1);
});

const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;

const callbackfn = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const observer = new IntersectionObserver(callbackfn, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
observer.observe(header);

nav.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const section = e.target.getAttribute("href");
    document.querySelector(`${section}`).scrollIntoView({ behavior: "smooth" });
  }
});

document
  .querySelector(".operations__tab-container")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const clicked = e.target.closest(".operations__tab");
    if (!clicked) return;
    document.querySelectorAll(".operations__tab").forEach(el => {
      el.classList.remove("operations__tab--active");
    });

    clicked.classList.add("operations__tab--active");

    document
      .querySelectorAll(".operations__content")
      .forEach(el => el.classList.remove("operations__content--active"));

    document
      .querySelector(`.operations__content--${clicked.dataset.tab}`)
      .classList.add("operations__content--active");
  });

document
  .querySelector(".btn--scroll-to")
  .addEventListener("click", function (e) {
    e.preventDefault();
    sectionOne.scrollIntoView({ behavior: "smooth" });
  });

let translated = false;
document.querySelector("#translate").addEventListener("click", function (e) {
  e.preventDefault();
  translatePTBR(!translated);
  translated = !translated;
});
