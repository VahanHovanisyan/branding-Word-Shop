// import rus from "../language/rus.js";
// import fra from "../language/fra.js";
// import deu from "../language/deu.js";
// import eng from "../language/eng.js";

// const allLangs = ['rus','eng','fra','deu'];
// let currentLang = localStorage.getItem("language") || 'eng';
// const langButtons = document.querySelectorAll("[data-btn]");
// const currentPathName = window.location.pathname;
// let currentText = {};



// function checkPagePathName() {
//     switch (currentPathName) {
//         case '/index.html':
//             currentText = headerText;
//             break;
    
//         default:
//             currentText = headerText;
//             break;
//     }
// }
// checkPagePathName();

// // function changeLang() {
// //     for (const key in currentText) {
// //         const elem = document.querySelector(`[data-lang=${key}]`);
// //         if (elem) {
// //             elem.textContent = currentText[key][currentLang];
// //         }
// //     }
// // }
// // changeLang();

// function changeLang() {
//     for (const key in currentText) {
//       let elem = document.querySelectorAll(`[data-lang=${key}]`);
//       elem.forEach( elem => {
//          if (elem) {
//         elem.innerText = currentText[key][currentLang];
//       }
//       })
     
//     }
//     // Update URL with selected language
//     const urlParams = new URLSearchParams(window.location.search.substring(1));
//     urlParams.set('lang', currentLang);
//     const newUrl = `${window.location.origin}${window.location.pathname}?${urlParams.toString()}${window.location.hash}`;
//     window.history.replaceState(null, '', newUrl);
//     }
// changeLang();

// langButtons.forEach(btn => {
//     btn.addEventListener("click", (event) => {
//         currentLang = event.target.dataset.btn;
//         localStorage.setItem('language', event.target.dataset.btn)
//         resetActiveClass(langButtons, "selected")
//         btn.classList.add("selected")
//         changeLang();
//     });
// });

// function resetActiveClass(arr, ActiveClass) {
//     arr.forEach((elem) => {
//         elem.classList.remove(ActiveClass)
//     })
// }