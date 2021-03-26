document.querySelector(".toggle-menu").addEventListener("click", function () {
  document.querySelector("#sidemenu").classList.add('do-show');
  document.querySelector('body').classList.add('menu-open');
});

document.querySelector(".toggle-menu.close").addEventListener("click", function () {
  document.querySelector("#sidemenu").classList.remove('do-show');
  document.querySelector('body').classList.remove('menu-open');
});
