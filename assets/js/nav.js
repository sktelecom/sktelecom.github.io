(function ($) {
  'use strict';
  const breakpoint = 1200;

  // Accessibility for desktop main menu items
  $(function () {
    function goToLastItemInSubmenu(navItem) {
      let stack = [$(navItem)];

      while (stack.length) {
        const currentLiChildren = stack.pop();
        $(currentLiChildren).addClass("submenu-open");
        $(currentLiChildren).find("> a").attr("aria-expanded", "true");

        const lastChildrenLi = $(currentLiChildren).find("> ul > li.has-children").last();
        if ($(lastChildrenLi).is($(currentLiChildren).find("> ul > li").last())) {
          stack.push(lastChildrenLi);
        }
      }

      $(navItem).find(".nav-link").last().focus();
    }

    const mainMenuLinks = $('.td-navbar .navbar-nav > li > a');

    // on tab, if hovers over any nav-link in main menu
    $(mainMenuLinks).bind('keydown', function (event) {
      const navItem = $(this).closest(".nav-item");
      const prevNavItem = $(navItem).prev();

      // if tabbing backward
      if (event.shiftKey && event.key.toUpperCase() === "TAB") {

        // if prev item has submenu
        if ($(prevNavItem).length && $(prevNavItem).hasClass("has-children")) {
          event.preventDefault();
          goToLastItemInSubmenu(prevNavItem);
          return;
        }

        // if prev item doesn't have submenu
        if ($(prevNavItem).length && !$(prevNavItem).hasClass("has-children")) {
          $(navItem).find("li.has-children").removeClass("submenu-open");
          $(navItem).find("a[aria-expanded]").attr("aria-expanded", "false");
        }

      // if tabbing forward
      } else if (event.key.toUpperCase() === "TAB") {

        // if it's an item with submenu
        if ($(navItem).hasClass("has-children")) {
          $(navItem).addClass("submenu-open");
          $(navItem).find("> a").attr("aria-expanded", "true");
          return;
        }
      }
    });
  });

  // Accessibility for desktop submenu items
  $(function () {
    function closeSubmenu(currentLi) {
      // if all submenus closed
      if (!$(currentLi).parent().hasClass("dropdown-menu")) {
        return;
       }

      // if current li is not the last in submenu
      if (!$(currentLi).is(":last-child")) {
       return;
      }

      const nextLi = $(currentLi).parent().closest("li.has-children");
      $(nextLi).find("a[aria-expanded]").attr("aria-expanded", "false");
      nextLi.removeClass("submenu-open");
      closeSubmenu(nextLi);
    }

    const subMenuLinks = $('.td-navbar .dropdown-menu > li > a');

    $(subMenuLinks).bind('keydown', function (event) {
      const navItem = $(this).closest(".nav-item");
      const prevNavItem = $(navItem).prev();
      const nextNavItem = $(navItem).next();

      // if tabbing backward
      if (event.shiftKey && event.key.toUpperCase() === "TAB") {

        // if current is first item in submenu
        if (!$(prevNavItem).length) {
          $(navItem).parent().closest(".nav-item").removeClass("submenu-open");
          $(navItem).parent().closest(".nav-item").find("a[aria-expanded]").attr("aria-expanded", "false");
          return;
        }

        // if prev item has submenu
        if ($(prevNavItem).hasClass("has-children")) {
          $(prevNavItem).addClass("submenu-open");
          $(prevNavItem).find("> a").attr("aria-expanded", "true");
          return;
        }

        // if prev item doesn't have submenu
        if (!$(prevNavItem).hasClass("has-children")) {
          $(navItem).parent("ul").find("li.has-children").removeClass("submenu-open");
          $(navItem).find("a[aria-expanded]").attr("aria-expanded", "false");
          return;
        }

      // if tabbing forward
      } else if (event.key.toUpperCase() === "TAB") {
        // if current item has submenu
        if ($(navItem).hasClass("has-children")) {
          $(navItem).addClass("submenu-open");
          $(navItem).find("> a").attr("aria-expanded", "true");
          return;
        }

        // if next item is none
        if ($(nextNavItem).length === 0) {
          closeSubmenu(navItem);
          return;
        }
      }
    });
  })

  function closeMobileMenu(body, header, mobileMenuBtn, mobileMenu) {
    $(body).removeClass('mobile-menu-open');
    $(header).removeClass('mobile-menu-open');
    $(mobileMenuBtn).attr('aria-label', 'Open mobile menu').removeClass("open").attr('aria-expanded', 'false');
    $(mobileMenu).find(".nav-submenu-btn").removeClass("open").attr('aria-label', 'Open submenu').attr('aria-expanded', 'false');
    $(mobileMenu).find("> ul > li > .navbar-submenu").slideUp();
    $(mobileMenu).find(".nav-item").removeClass("submenu-open");
    $(mobileMenu).find(".td-search-input").val("");
  }

  // Show or hide mobile menu
  $(function () {
    const body = $('body');
    const header = $('header');
    const mobileMenuBtn = $(header).find('.navbar-mobile-button').first();
    const mobileMenu = $('.td-navbar-mobile');

    $(mobileMenuBtn).click(() => {
      mobileMenuBtn.toggleClass("open");

      if (mobileMenuBtn.hasClass("open")) {
        body.addClass('mobile-menu-open');
        header.addClass('mobile-menu-open');
        mobileMenuBtn.attr('aria-label', 'Close mobile menu').attr('aria-expanded', 'true');
      } else {
        closeMobileMenu(body, header, mobileMenuBtn, mobileMenu)
      }
    })
  });

  // Remove mobile menu after breakpoint in window.width
  $(function () {
    const body = $('body');
    const header = $('header');
    const mobileMenuBtn = $(header).find('.navbar-mobile-button').first();
    const mobileMenu = $('.td-navbar-mobile');

    $(window).resize(() => {
      if ($(document).width() > breakpoint) {
        closeMobileMenu(body, header, mobileMenuBtn, mobileMenu)
      }
    });
  });

  // Expand / collapse submenu on clicking chevron
  $(function () {
    $(".nav-submenu-btn").click(function(e) {
      e.preventDefault();
      const navItem = $(this).closest(".nav-item");
      $(navItem).toggleClass("submenu-open");

      if ($(navItem).hasClass("submenu-open")) {
        $("ul:first", navItem).slideDown();
        $(navItem).find("> a > .nav-submenu-btn").attr('aria-label', 'Close submenu').attr("aria-expanded", "true");
      } else {
        $("ul:first", navItem).slideUp();
        $(navItem).find("> a > .nav-submenu-btn").attr('aria-label', 'Open submenu').attr("aria-expanded", "false");
      }
    })
  });
}(jQuery));
