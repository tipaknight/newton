const tabsBtnI = document.querySelectorAll('.tabs__nav-btn-ind');
const tabsItemI = document.querySelectorAll('.tabs__item-ind');

tabsBtnI.forEach(onTabClick);
function onTabClick(item) {
  item.addEventListener("click", function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains('active')) {
      tabsBtnI.forEach(function (item) {
        item.classList.remove('active');
      });

      tabsItemI.forEach(function (item) {
        item.classList.remove('active');
      });

      currentBtn.classList.add('active');
      currentTab.classList.add('active');
    }

  });
}

document.querySelector('.tabs__nav-btn-ind').click();