import "../assets/scss/main.scss";

import "./gsap/gsap.min.js";
import "./gsap/ScrollTrigger.min.js";
import "./gsap/main-gsap.js";
import "./common.js";

var header_nav = document.querySelector(".header__main");
var header_offset = document.querySelector(".header__top").offsetHeight;

if (window.scrollY > header_offset) {
  header_nav.classList.add("sticky-nav");
}
window.addEventListener("scroll", function () {
  if (window.scrollY > header_offset) {
    header_nav.classList.add("sticky-nav");
  } else {
    header_nav.classList.remove("sticky-nav");
  }
});

$(document).ready(function () {
  const $menuOverlay = $(".menu-overlay");

  $(".burger-mob").click(function () {
    $(this).toggleClass("active");
    $(".header__menu").toggleClass("active");

    if ($(this).hasClass("active")) {
      $("body").css("overflow-y", "hidden");
      $menuOverlay.addClass("visible");
    } else {
      $("body").css("overflow-y", "visible");
      $menuOverlay.removeClass("visible");
    }
  });

  $(".menu__link, .menu__btn").click(function () {
    closeMenu();
  });

  $menuOverlay.click(function (e) {
    if (!$(e.target).closest(".header__menu").length) {
      closeMenu();
    }
  });

  function closeMenu() {
    $(".burger-mob").removeClass("active");
    $(".header__menu").removeClass("active");
    $("body").css("overflow-y", "auto");
    $menuOverlay.removeClass("visible");
  }

  $(".stages__tabs-btn").click(function () {
    $(".stages__content").removeClass("active");
    $(".stages__tabs-btn").removeClass("active");

    var stages_content = "#" + $(this).attr("data-target");
    $(stages_content).addClass("active");
    $(this).addClass("active");
  });

  $(".faq-item__title").click(function () {
    const $parent = $(this).parent();

    if ($parent.hasClass("active")) {
      $parent.removeClass("active");
    } else {
      $(".faq-item").removeClass("active");
      $parent.addClass("active");
    }
  });

  //   var header_nav = document.querySelector(".header__main");
  //   var header_offset = document.querySelector(".header__top").offsetHeight;

  //   if (window.scrollY > header_offset) {
  //     header_nav.classList.add("sticky-nav");
  //   }
  //   window.addEventListener("scroll", function () {
  //     if (window.scrollY > header_offset) {
  //       header_nav.classList.add("sticky-nav");
  //     } else {
  //       header_nav.classList.remove("sticky-nav");
  //     }
  //   });

  //   if (!$(header_nav).hasClass("sticky-nav")) {
  //     $(header_nav).addClass("sticky-nav");
  //   }
});
