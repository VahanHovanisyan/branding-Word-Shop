document.addEventListener('DOMContentLoaded', () => {
  const nextAll = element => {
    const nextElements = [];

    while (element.nextElementSibling) {
      nextElements.push(element.nextElementSibling);
      element = element.nextElementSibling
    }

    return nextElements;
  }

  const nav = document.querySelector('.sale__tabs-nav')
  const navMore = document.querySelector('.sale__tabs-nav-more')
  const navSub = document.querySelector('.sale__tabs-sub-nav')
  const navBlock = document.querySelector('.sale__tabs-nav-block')
  const page = document.documentElement;
  const moreWidth = getComputedStyle(root).getPropertyValue('--more-width');
  const moreMargin = getComputedStyle(root).getPropertyValue('--more-margin');
  const menuMargin = getComputedStyle(root).getPropertyValue('--menu-margin');

  let windowWidth = window.innerWidth;

  const contract = () => {
    let w = 0;
    let outerWidth = parent.offsetWidth - (parseInt(moreWidth) + parseInt(moreMargin) + parseInt(menuMargin) + 30);
  }
})