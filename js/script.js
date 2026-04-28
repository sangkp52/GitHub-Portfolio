'use strict';

// Element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// Sidebar
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
if(sidebarBtn) sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// Testimonials Modal 
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

testimonialsItem.forEach(item => {
  item.addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
    testimonialsModalFunc();
  });
});

if(modalCloseBtn) modalCloseBtn.addEventListener("click", testimonialsModalFunc);
if(overlay) overlay.addEventListener("click", testimonialsModalFunc);

// Custom Select
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

formInputs.forEach(input => {
  input.addEventListener("input", function () {
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
});

// Page Navigation
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach((link, index) => {
  link.addEventListener("click", function () {
    const targetPage = this.innerHTML.toLowerCase();
    pages.forEach((page, i) => {
      if (targetPage === page.dataset.page) {
        page.classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        page.classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    });
  });
});

// --- ZOOM PICTURE ---

const allIconBoxes = document.querySelectorAll(".project-item-icon-box, .certificate-item-icon-box");
const Modal = document.getElementById("myModal");
const ModalImg = document.getElementById("imgToDisplay");
const closeBtn = document.querySelector(".close-button");

const closeModal = function () {
  if (Modal) {
    Modal.classList.remove("open");
  }
};

allIconBoxes.forEach(box => {
  box.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    const container = this.closest("figure");
    const img = container ? container.querySelector("img") : null;

    if (img && Modal && ModalImg) {
      ModalImg.src = img.src;
      Modal.classList.add("open")
    }
  });
});

if (closeBtn) {
  closeBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    closeModal();
  });
}

const portfolioLinks = document.querySelectorAll(".project-item > a, .certificate-item > a");

portfolioLinks.forEach(link => {
  link.addEventListener("click", function(e) {

    const href = this.getAttribute("href");
    
    if (!href || href === "#" || href === "") {
      e.preventDefault(); 
    }
  });
});