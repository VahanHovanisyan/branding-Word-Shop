// const customSelect = (selectElem) => {
//     const select = document.querySelector(selectElem);
//     // const selectList = select.querySelector(".select__list");
//     const selectItem = select.querySelectorAll(".select__option")
//     const selectItemSelected = select.querySelector(".select__item-selected")
//     const selectInput = select.querySelector(".select__input")
//     const sel = select.querySelector(".sel");
//     // selectInput.style.display = "none";
//     document.addEventListener("click", function (event) {
//         const click = event.target;
//         if (click.closest(selectElem)) {
//             if (click.closest(".select__item-selected")) {
//                 select.classList.toggle("open");
//             }
//             // else if (!click.closest(".select") || click.closest(".select__option")) {
//             //     select.classList.remove("open");
//             //     event.stopPropagation()
//             // }
//             if (click.closest(".select__option")) {
//                 select.classList.remove("open");
//                 // selectItem.forEach(function (item) {item.classList.remove("selected")})
//                 // click.closest(".select__option").classList.add("selected")
//                 // event.stopPropagation()
//                 // click.closest(".select__option").addEventListener('change', function () {
//                 //     let lang = click.closest(".select__option").dataset.value;
//                 //     location.href = window.location.pathname + '#' + lang;
//                 //     // location.reload();
//                 // });
//             }
            
//         } else if (!click.closest(selectElem)) {
//             select.classList.remove("open");
//             event.stopPropagation()
//         }
//         // 
//         selectItem.forEach(function (item) {
//             item.addEventListener("click", function () {
//                 selectItemSelected.innerText = this.innerText;
//                 // selectInput.value = this.dataset.value;
//                 // this.dataset.value = select.dataset.value
//                 // realSelect.value = this.dataset.value
//                 // console.log(realSelect.value);
//             });
//         });

//         // const realSelect = document.querySelector(".select select");
//         // select.addEventListener('change', function () {
//         //     let lang = realSelect.value;
//         //     location.href = window.location.pathname + '#' + lang;
//         //     // location.reload();
//         //     // console.log(lang);
//         // });

//         // перенаправить на url с указанием языка
        
        
//     })

//     // select.addEventListener("focus", function (event) {
//     //     //  select.classList.toggle("open");
//     //     // if (event.target.closest(".select__item-selected")) {
            
           
//     //     // } 
//     //     if (!event.target.closest(".select__item-selected")) {
//     //         select.classList.toggle("open");
//     //         // this.removeEventListener();
//     //     }
        
//     // })




//     if (document.body.classList.contains("pc") && select.classList.contains("select_hover")) {
//         document.addEventListener("mousemove", function (event) {
//             if (event.target.closest(selectElem)) {
//                 selectItem.forEach(function (item) {
//                     item.addEventListener("click", function (e) {
//                         selectItemSelected.innerText = this.innerText;
//                         // selectInput.value = this.dataset.value;
//                     })
//                 })
//             }
//         })
//     }
// }

// customSelect('.select');











// document.addEventListener("click", (event) => {
//     if (event.target.closest(".select__option-selected")) {
//         select.classList.toggle("open");
//         console.log(select.childNodes);
//     } else if (!event.target.closest(".select") || event.target.closest(".select__option")) {
//         select.classList.remove("open");
//         event.stopPropagation()
//     }

//     selectItem.forEach(function (item) {
//         item.addEventListener("click", function () {

//             selectItemSelected.innerText = this.innerText;
//             selectInput.value = this.dataset.value;

//         })
//     })
// })



/*Переключатель языка*/
// document.addEventListener('DOMContentLoaded', () => {
//     let ru = document.querySelector(".lang-switcher .lang-ru a");
//     let ua = document.querySelector(".lang-switcher .lang-ua a");
//     let value = window.location.href.match(/[^\/]+/g).pop();
//     let url = `/ru/${value}/`;
//     if (ua) {
//         url = `/ua/${value}/`;
//         ua.setAttribute('href', url);
//     }
//     if (ru) ru.setAttribute('href', url);
// });




// const langArr = {
//     "unit": {
//         "ru": "создаем многоязычный сайт",
//         "en": "build a multi language site ",
//         "ua": "створюємо багатомовний сайт",
//     },
//     "chip": {
//         "ru": "графический чип",
//         "en": "graphics processing unit",
//         "ua": "графічний чіп",
//     },
//     "memory": {
//         "ru": "объем памяти",
//         "en": "memory size",
//         "ua": "oбсяг пам'яті",
//     },
//     "memory-type": {
//         "ru": "тип памяти",
//         "en": "memory type",
//         "ua": "nип пам'яті",
//     },
//     "cool": {
//         "ru": "тип системы охлаждения",
//         "en": "сooling system type",
//         "ua": "тип системи охолодження",
//     },
//     "more": {
//         "ru": "детально о товаре",
//         "en": "more details",
//         "ua": "детально про товар",
//     },
// }