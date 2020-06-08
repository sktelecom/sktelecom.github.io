var UxsUi = (function(window) {

  function accordion() {
    if($('.accordion').length) {
      var card = $('.accordion').find('.card');

      card.each(function() {
        var trigger  = $(this).find('.accordion-toggler');

        trigger.on('click', function() {
          var parents = $(this).closest('.card'),
              collapse = parents.find('.collapse'),
              header   = parents.find('.card-header');

          if(!collapse.hasClass('show')) {
            header.addClass('active');
            parents.siblings().find('.card-header').removeClass('active');
          } else {
            header.toggleClass('active');
          }
        });
      });
    }
  }

  function accordionFocus() {
    if($('.accordion').length) {
      $('.collapse').on('show.bs.collapse', function(e) {
        var $card = $(this).closest('.card');
        var $open = $($(this).parents('.accordion')).find('.collapse.show');
        var additionalOffset = 0;

        if($card.prevAll().filter($open.closest('.card')).length !== 0) {
          additionalOffset =  $open.height();
        }
        if($('.theme-header').length) {
          $('html,body').animate({
            scrollTop: $card.offset().top - additionalOffset - 80
          }, 500);
        } else {
          $('html,body').animate({
            scrollTop: $card.offset().top - additionalOffset
          }, 500);
        }
      });
    }
  }

  function themeHeader() {
    if($('.theme-header').length) {
      var themeHeader = $('.theme-header'),
          searcToggler = themeHeader.find('.search-toggler'),
          lnbToggler = themeHeader.find('.lnb-toggler'),
          gnbToggler = themeHeader.find('.ui-gnb-controls'),
          subMenuToggler = themeHeader.find('.navbar-nav-2depth-toggler'),
          bodyToggler = themeHeader.find('.ui-body-controls'),
          gnbLinks   = gnbToggler.parents('.theme-header').find('.nav-link'),
          navLinks   = gnbToggler.parents('.theme-header').find('.navbar-profile .list-group-item a'),
          sidebar    = $('.theme-body').find('.theme-sidebar');

      // searcToggler
      searcToggler.on('click', function(event) {
        var parents = $(this).parents('.search-item');
        parents.toggleClass('active');

        if(parents.hasClass('active')) {
          parents.find('.form-control').focus();
        } else {
          $(this).focus();
        }
        event.preventDefault();
      });

      // lnbToggler
      lnbToggler.on('click', function(event) {
        sidebar.toggleClass('active');
        sidebar.parents('.wrapper').toggleClass('sidebar-show');

        if(sidebar.hasClass('active')) {
          sidebar.animate({
            left: '0'
          }, 300);
        } else {
          sidebar.animate({
            left: '-15.88rem'
          }, 300);
        }

        event.preventDefault();
      });

      // gnbToggler
      gnbToggler.on('click', function (event) {
        $(this).parents('.theme-header').toggleClass('navbar-gnb-show');

        event.preventDefault();
      });

      subMenuToggler.on('click', function (event) {
        $(this).toggleClass('active');

        event.preventDefault();
      });

      // gnbLinks
      gnbLinks.on('click', function() {
        $(this).parents('.theme-header').removeClass('navbar-gnb-show');
      });

      navLinks.on('click', function() {
        $(this).parents('.theme-header').removeClass('navbar-gnb-show');
      });

      bodyToggler.on('click', function () {
        $('body').toggleClass('active');
      });
    }
    if($('.docs-header').length) {
      var docsHeader = $('.docs-header'),
          docsSidebar = $('.docs-body').find('.docs-sidebar'),
          docsToggler = docsHeader.find('.docs-sidebar-toggler');

      // docsToggler
      docsToggler.on('click', function(event) {
        docsSidebar.toggleClass('active');

        if(docsSidebar.hasClass('active')) {
          docsSidebar.animate({
            left: '0'
          }, 300);
        } else {
          docsSidebar.animate({
            left: '-15.88rem'
          }, 300);
        }

        event.preventDefault();
      });
    }
  }

  function changeHeaderBg() {
    if ($(window).scrollTop() < 50 && $('.ui-scroll-header').length) {
      $('.theme-header').addClass('top');
    } else {
      $('.theme-header').removeClass('top');
    };
  }

  function themeClassResize() {
    var themeHeader = $('.theme-header'),
        body = $('body'),
        subMenuToggler = $('.navbar-nav-2depth-toggler');

      if (window.innerWidth >= 768) {
        themeHeader.removeClass('navbar-gnb-show');
        themeHeader.removeClass('navbar-search-show-2');
        body.removeClass('active');
        subMenuToggler.removeClass('active');
      }
  }

  function themeBody() {
    if($('.theme-body.ui-sidebar-controls').length) {
      var themeBody = $('.theme-body.ui-sidebar-controls'),
          sidebarToggler = themeBody.find('.sidebar-toggler'),
          dropdownLink   = themeBody.find('.dropdown-link'),
          sidebarSubLink = themeBody.find('.theme-sidebar-sub-menu-link');

      sidebarToggler.on('click', function() {
        $(this).parents('.theme-sidebar').toggleClass('active');
      });

      dropdownLink.on('click', function(event) {
        $(this).parents('.theme-sidebar-menu-item').toggleClass('active');
        $(this).parents('.theme-sidebar-menu-item').addClass('current');
        $(this).parents('.theme-sidebar-menu-item').siblings('.theme-sidebar-menu-item').removeClass('current').find('.theme-sidebar-sub-menu-link').removeClass('current')

        event.preventDefault();
      });

      sidebarSubLink.on('click', function() {
        $(this).addClass('current').parents('.theme-sidebar-menu-item').addClass('current').siblings('.theme-sidebar-menu-item').removeClass('current');
        $(this).parents('.theme-sidebar-sub-item, .theme-sidebar-menu-item').siblings().find('.theme-sidebar-sub-menu-link').removeClass('current');
        $(this).parents('.theme-sidebar').find('.sidebar-toggler-text').text($(this).find('.sidebar-menu-link-text').text());
      });
    }
  }

  function navLnb() {
    var navLink = $('.theme-sidebar').find('.nav-link');
    var docsLink = $('.docs-sidebar').find('.nav-link');

    navLink.on('click', function (event) {
      $(this).toggleClass('active');

      if ($(this).hasClass('nav-dropdown-toggler')) {
        event.preventDefault();
      }
    });
    docsLink.on('click', function (event) {
      $(this).parent().toggleClass('active');

      if ($(this).parent().hasClass('nav-dropdown-toggler')) {
        event.preventDefault();
      }
    });
  }

  function btnLike() {
    if ($('.ui-btnLike').length) {
      var btnLike = $('.ui-btnLike');

      btnLike.on('click', function () {
        $(this).toggleClass('active');
      });
    }
  }

  function formSearch() {
    // custom-search
    $('.custom-search .form-control').on('keyup', function () {
      if ($(this).val().length > 0) {
        $(this).parents('.custom-search').find('.custom-search-clear').addClass('active');
      } else {
        $(this).parents('.custom-search').find('.custom-search-clear').removeClass('active');
      }
    });
    $('.custom-search .custom-search-clear').on('click', function () {
      $(this).parents('.custom-search').find('.form-control').focus().val('');
      $(this).removeClass('active');
    });

    // ui-navbar-search
    $('.ui-navbar-search .search-toggler').on('click', function () {
      $(this).parents('.navbar-search').toggleClass('active');
      $(this).parents('.navbar-search').find('.form-control').focus();
      $(this).parents('.theme-header').addClass('navbar-search-show');
    });
    $('.ui-navbar-search-2 .search-toggler').on('click', function () {
      $(this).parents('.navbar-search').toggleClass('active');
      $(this).parents('.navbar-search').find('.form-control').focus();
      $(this).parents('.theme-header').addClass('navbar-search-show-2');
    });
    $('.ui-navbar-search .custom-search-cancel').on('click', function () {
      $(this).parents('.navbar-search').toggleClass('active');
      $(this).parents('.theme-header').removeClass('navbar-search-show');
    });
    $('.ui-navbar-search-2 .custom-search-cancel').on('click', function () {
      $(this).parents('.navbar-search').toggleClass('active');
      $(this).parents('.theme-header').removeClass('navbar-search-show-2');
    });

    // contents-search
    $('.contents-search .contents-search-toggler').on('click', function () {
      $(this).parents('.contents-search').toggleClass('active');
      $(this).parents('.contents-search').find('.form-control').focus();
    });
    $('.contents-search .custom-search-cancel').on('click', function () {
      $(this).parents('.contents-search').toggleClass('active');
      $(this).parents('.contents-search').find('.form-control').val('');
    });
  }

  function formSearchNotTatrget() {
    if($('.contents-search').length) {
      $(document).on('click', function (event) {
        if($('.contents-search').hasClass('active')) {
          if(!$('.contents-search').has(event.target).length) {
            $('.contents-search').toggleClass('active').find('.form-control').val('');
          }
        }
      });
    }
  }

  // function sidebarNotTatrget() {
  //   if($('.docs-sidebar').length) {
  //     $(document).on('click', function (event) {
  //       if($('.docs-sidebar').hasClass('active')) {
  //         if(!$('.docs-sidebar, .docs-header').has(event.target).length) {
  //           $('.docs-sidebar').removeClass('active');
  //           $('.docs-sidebar').animate({
  //             left: '-15.88rem'
  //           }, 300);
  //         }
  //       }
  //     });
  //   }
  // }

  function tableCheckbox() {
    //테이블에서 체크된 박스 카운트
    if ($('.order-table').length) {

      $(".order-table input[type=checkbox]").change(function () {
        var checkedNumber = $('.order-table input[type=checkbox]:checked').length;
        var countChecked = $('.countChecked');
        var listAfterChecked = $('.list-after-checked ');
        var listBeforeChecked = $('.list-before-checked');

        countChecked.text(checkedNumber);
        listBeforeChecked.addClass('is-none');
        listAfterChecked.addClass('is-block');

        if (checkedNumber === 0) {
          listBeforeChecked.removeClass('is-none');
          listAfterChecked.removeClass('is-block');
        }
      });
    }
  }

  function recomment() {
    $('.recomment').click(function(){
      $(this).addClass('d-none');
      $(this).parent().next('div').removeClass('d-none');
    });
  }

  function modalVideo() {
    if($('.modal-video-content').length) {
      var videoContent = $('.modal-video-content'),
          videoBackdrop = $('.modal-backdrop'),
          videoPaused  = videoContent.find('.close'),
          media = videoContent.find('video');

      videoPaused.on('click', function() {
        if(!media.paused) {
          media.get(0).pause();
        }
      });
      $(document).on('click', function (event) {
        if(videoContent.parents('.modal').is(':visible')) {
          if(!videoContent.has(event.target).length) {
            media.get(0).pause();
          }
        }
      });
    }
  }

  function modalVideoAutoPlay() {
    if($('.js-video-autoplay').length) {
      $('.js-video-autoplay').on('click', function () {
        var target = $($(this).data('target')).find('video');
            // userNavigator = navigator.userAgent;

        target.get(0).load();
        target.get(0).play();

        // if (userNavigator.indexOf("iPhone") > 0 || userNavigator.indexOf("iPad") > 0 || userNavigator.indexOf("iPot") > 0 || userNavigator.indexOf("Android") > 0) {
        //   target.get(0).load();
        // }
      });
    }
  }

  function nonResponsive() {
    if($('.wrapper-non-responsive').length) {
      var themeHeader  = $('.theme-header'),
          currentWidth = document.documentElement.clientWidth;

      if(currentWidth <= 1200) {
        var documentScroll = $(document).scrollLeft();
        themeHeader.css('left', -documentScroll);
      }
    }
  }

  function btnGroupRadios() {
    if($('.btn-group-radios').length) {
      var btnRadios = $('.btn-group-radios').find('.btn');

      btnRadios.on('click', function() {
        $(this).addClass('active').siblings('.btn').removeClass('active');
      });
    }
  }

  function btnFavorite() {
    if($('.btn-favorite').length) {
      $('.btn-favorite').on('click', function() {
        $(this).toggleClass('like');
      });
    }
  }

  function btnBookmark() {
    if($('.btn-bookmark').length) {
      $('.btn-bookmark').on('click', function() {
        $(this).toggleClass('bookmark');
      });
    }
  }

  function fixedWrapper() {
    if($('.wrapper-fixed').length) {
      new PerfectScrollbar('.wrapper-fixed .sidebar-area');
    }
  }

  function tocTriggers() {
    if($('.js-toc-triggers').length) {
      $('.js-toc-triggers .nav-link').on('click', function(event) {
        if (this.hash !== "") {
          event.preventDefault();

          var hash = this.hash;

          $('html, body').animate({
            scrollTop: $(hash).offset().top - 90
          }, 400);
        }
      });
    }
  }

  function tocPosiiton() {
    if($('.js-toc-triggers').length) {
      var tocContents = $('.has-toc').outerHeight(),
          tocPadding = parseInt($('.has-toc').css('padding-bottom')) * 3 / 2,
          tocTrigger  = $('.js-toc-triggers'),
          tocHeight   = tocTrigger.outerHeight();

      if(tocContents - tocHeight - tocPadding <= $(document).scrollTop()) {
        tocTrigger.parents('.toc').addClass('toc-less-than');
      } else {
        tocTrigger.parents('.toc').removeClass('toc-less-than');
      }
    }
  }

  // function tocTargets() {
  //   if($('.js-toc-targets').length) {
  //     $('.js-toc-targets').each(function() {
  //       var scrollHeight     = $(document).height(),
  //           scrollPosition   = $(window).height() + $(window).scrollTop(),
  //           category         = $(this),
  //           categoryTriggers = $('.js-toc-triggers .nav-link'),
  //           categoryId       = category.attr('id'),
  //           categoryTop      = category.offset().top - 95,
  //           hGroup           = $('.js-heading-group').outerHeight();

  //       if (hGroup > $(window).scrollTop()) {
  //         categoryTriggers.removeClass('active');
  //       } else if (categoryTop < $(window).scrollTop()) {
  //         $('.js-toc-triggers .nav-link[href="#' + categoryId + '"]').addClass('active').siblings().removeClass('active');
  //       } else if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
  //         $('.js-toc-triggers .nav-link:last-child').addClass('active').siblings().removeClass('active');
  //       }
  //     });
  //   }
  // }

  function videoControl() {
    if($('.js-video-contents').length) {
      var videoContens =  $('.js-video-contents'),
          videoPlay    = videoContens.find('.vidoe-btn-play .btn'),
          videoPause   = videoContens.find('.vidoe-btn-pause .btn');

      videoPlay.on('click', function() {
        $(this).parents('.js-video-contents').find('video').get(0).play();
        $(this).parents('.vidoe-btn-play').hide().siblings('.vidoe-btn-pause').css('display', 'flex');
      });
      videoPause.on('click', function() {
        $(this).parents('.js-video-contents').find('video').get(0).pause();
        $(this).parents('.vidoe-btn-pause').hide().siblings('.vidoe-btn-play').css('display', 'flex');
      });
    }
  }

  function dropdownDisabledClick() {
    if($('.item-profile').length) {
      $('.item-profile .dropdown-menu .custom-switch').on('click', function(event){
        event.stopPropagation();
      });
    }
  }

  function highlightJS() {
    $('pre code').each(function(i, block) { hljs.highlightBlock(block); });
  }

  function dataTableParent() {
    if($('.js-data-table').length) {
      var tableParent = $('.js-data-table')
          tableMinWidth = tableParent.find('.table').css('min-width');

          tableParent.css('min-width', tableMinWidth);
    }
  }

  function colorChip() {
    if($('.color-chip').length) {
      var colorCircle = $('.color-chip .nav-link');
      colorCircle.on('click',function(){
        colorCircle.addClass('shadow-none');
          $(this).removeClass('shadow-none');
      });
    }
  }

  function imgResize() {
    $('.is_imgResize').each(function () {
      var $this = $(this);
      if (window.innerWidth <= 576) {
        $this.css('background-image', $this.css('background-image').replace('_pc.', '_m.'));
      } else {
        $this.css('background-image', $this.css('background-image').replace('_m.', '_pc.'));
      }
    });
  }

  function swiper() {
    if($('.swiper-slides').length) {
      var swiper = new Swiper('.swiper-slides', {
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
      });
    }
    if($('.swiper-centered-slides').length) {
      var swiper = new Swiper('.swiper-centered-slides', {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 0,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        breakpoints: {
          768: {
            slidesPerView: 'auto',
            centeredSlides: true
          }
        }
      });
    }
    if($('.swiper-multiple-slides').length) {
      var swiper = new Swiper('.swiper-multiple-slides', {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 24,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        breakpoints: {
          992: {
            slidesPerView: 2
          },
          1400: {
            slidesPerView: 3
          }
        }
      });
    }
  }

  function goToTop() {
    if($('[href="#go-to-top"]').length) {
      $('[href="#go-to-top"]').on('click', function(event) {
        $('html, body').animate({ scrollTop : 0 }, 300 );

        // if (this.hash !== "") {
        //   var hash = this.hash;

        //   $('html, body').animate({
        //     scrollTop: $(hash).offset().top
        //   }, 300);
        // }
        event.preventDefault();
      });
    }
  }

  function goToTopPosition() {
    if($('[href="#go-to-top"]').length) {
      if ($( this ).scrollTop() > 160) {
        $('[href="#go-to-top"]').css({
          'opacity' : '1',
          'visibility' : 'visible'
        });
      } else {
        $('[href="#go-to-top"]').css({
          'visibility' : 'hidden',
          'opacity' : '0',
          'transition' : 'visibility 0.2s linear, opacity 0.2s linear',
        });
      }
    }
  }

  function bookMark() {
    if($('.btn-bookmark').length) {
      $('.btn-bookmark').on('click', function (event) {
        event.preventDefault();

        $(this).toggleClass('active');
      });
    }
  }

  function iconClipseBoard() {
    if($('.ct-list .icons [class^="glyphicons"]').length) {
      var icons = $('.ct-list .icons');

      icons.each(function() {
        $(this).on('click', function() {
          var codeClone = $(this).find('[class^="glyphicons"]').clone(),
              toast     = $('.toast').find('.toast-body .code-view'),
              textarea  = document.createElement('textarea');

          toast.html('').append(codeClone).text(toast.html());

          textarea.value = toast.text();
          
          document.body.appendChild(textarea);
          textarea.select();

          document.execCommand('copy');
          document.body.removeChild(textarea);
          
          $('.toast').toast('show');
        });
      });
    }
  }

  window.addEventListener('DOMContentLoaded', function(){
    colorChip();
    accordion();
    themeHeader();
    themeBody();
    navLnb();
    btnLike();
    btnBookmark();
    formSearch();
    tableCheckbox();
    recomment();
    modalVideo();
    modalVideoAutoPlay();
    nonResponsive();
    btnGroupRadios();
    btnFavorite();
    tocTriggers();
    // tocTargets();
    accordionFocus();
    formSearchNotTatrget();
    videoControl();
    dropdownDisabledClick();
    highlightJS();
    dataTableParent();
    tocPosiiton();
    imgResize();
    swiper();
    // sidebarNotTatrget();
    goToTop();
    goToTopPosition();
    bookMark();
    iconClipseBoard();
  });

  window.addEventListener('scroll', function() {
    nonResponsive();
    tocPosiiton();
    // tocTargets();
    changeHeaderBg();
    goToTopPosition();
  });

  window.addEventListener('resize', function (e) {
    themeClassResize();
    imgResize();
  });

  return {
    bindLnbNav: function () {
      navLnb();
      fixedWrapper();
    }
  }
})(window);

// 폴리필 >>>>>>>>>>>>>>>>
// CustomEvent()
(function () {
  if ( typeof window.CustomEvent === "function" ) return false;

  function CustomEvent ( event, params ) {
    params = params || { bubbles: false, cancelable: false, detail: null };
    var evt = document.createEvent( 'CustomEvent' );
    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
    return evt;
   }

  window.CustomEvent = CustomEvent;
})();

// closest()

if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector ||
                              Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function(s) {
    var el = this;

    do {
      if (el.matches(s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}

// <<<<<<<<<<<<<< 폴리필

// ----- All Check >>>>>>>>>

(function(window) {

  var containerClass = "uxs-check-all-container";
  var allCheckBoxClass = "uxs-check-all";
  var checkBoxClass = "uxs-check-all-item";


  /*
   * 체크박스의 상태를 변경하는 함수
   */
  function setChecked(target, input, checked) {
    if (!(input instanceof HTMLInputElement)) return;

    if (input.checked !== checked) {
      input.checked = checked;

      setTimeout(function() {
        var event = new CustomEvent('change', {
          bubbles: true,
          cancelable: false,
          detail: {relatedTarget: target}
        })

        input.dispatchEvent(event);
      })
    }
  }

  /*
   * 체크 박스의 상태값이 변경되었을 때 호출되는 함수
   */
  function onChange(event) {

    event.preventDefault();

    var target = event.target;

    if (!(target instanceof Element)) return
    if (target.classList.contains(allCheckBoxClass)) {
      onCheckAll(event);
    } else if (target.classList.contains(checkBoxClass)) {
      onCheckAllItem(event);
    }
  }

  /*
   * 전체 체크 박스의 상태가 변경되었을 경우 호출되는 함수
   */
  function onCheckAll(event) {

    if (event.bubbles && event.detail) {

      var relatedTarget = event.detail.relatedTarget;

      if (relatedTarget && relatedTarget.classList.contains(checkBoxClass)) {
        return;
      }
    }

    var target = event.target;
    if (!(target instanceof HTMLInputElement)) return;

    var container = target.container;

    var inputs = container.getElementsByClassName(checkBoxClass);

  for (var i = 0;i < inputs.length;i++) {
      setChecked(target, inputs[i], target.checked);
    }
  }

  /*
   * 체크 박스의 상태가 변경되었을 경우 호출되는 함수
   */
  function onCheckAllItem(event) {
    // if (event instanceof CustomEvent && event.detail) {
    if (event.bubbles && event.detail) {
      var relatedTarget = event.detail.relatedTarget;
      if (
        relatedTarget &&
        (relatedTarget.classList.contains(allCheckBoxClass) || relatedTarget.classList.contains(checkBoxClass))
      ) {
        return
      }
    }
    var target = event.target;
    if (!(target instanceof HTMLInputElement)) return;

    var container = target.container;

    var itemCheckboxes = container.getElementsByClassName(checkBoxClass);

    var allCheckbox = container.getElementsByClassName(allCheckBoxClass);

    if (allCheckbox[0]) {
      var total = itemCheckboxes.length;

      var count = 0;

      for(var i = 0;i < itemCheckboxes.length;i++) {
        if(itemCheckboxes[i].checked) {
          count++;
        }
      }

      var checked = count === total;
      setChecked(target, allCheckbox[0], checked);
    }
  }

  window.addEventListener('DOMContentLoaded', function(){
    obj.subscribe();
  });

  var obj = {
    /*
     * 초기화 함수
     */
    subscribe : function() {

      var containers = document.getElementsByClassName(containerClass);

      for(var i = 0;i < containers.length ;i++) {

        var container = containers[i];

        var matches = container.querySelectorAll("."+allCheckBoxClass + ",." + checkBoxClass);
        for(var j = 0;j < matches.length; j++) {
          // matches[j].addEventListener('mousedown', onMouseDown);
          matches[j].addEventListener('change', onChange);
          matches[j].container = container;
        }
      }
    }
  }

  return obj;

})(window);

// <<<<<<<<< All Check -----



// ----- Tab Wizard >>>>>>>>>

var TabWizard = (function(window) {

  var tabClass = "uxs-tab";
  var tabItemClass = "items";

  var bigPrevBtnClass = "uxs-big-prev-btn";
  var prevBtnClass = "uxs-prev-btn";
  var netBtnClass = "uxs-next-btn";

  var currentClass = "current";
  var disabledClass = "disabled";

  var currentTab = 0;
  var formFuncArray;

  /*
   * 탭의 index에 따라 이전/다음 버튼의 show/hide를 판단하는 함수
   * n : 진행중인 탭의 index
   */
  function showTab(n) {

    var x = document.getElementsByClassName(tabClass);

    x[n].style.display = "block";

    if(n == 0) {
        // 첫 페이지
        setBtnDisplay(bigPrevBtnClass, "inline");
        setBtnDisplay(prevBtnClass, "none");
        setBtnDisplay(netBtnClass, "none");
    } else if(n === x.length -1) {
        // 마지막 페이지
        setBtnDisplay(bigPrevBtnClass, "none");
        setBtnDisplay(prevBtnClass, "none");
        setBtnDisplay(netBtnClass, "none");
    } else {
        setBtnDisplay(bigPrevBtnClass, "none");
        setBtnDisplay(prevBtnClass, "inline");
        setBtnDisplay(netBtnClass, "inline");
    }

    fixStepIndicator(n);
  };

  /*
   * 인디케이터의 상태를 표시하는 함수
   * n : 진행중인 탭의 index
   */
  function fixStepIndicator(n) {
    var i, x = document.getElementsByClassName(tabItemClass);

    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" " + currentClass, "");
        x[i].className = x[i].className.replace(" " + disabledClass, "");
    }

    for (i = 0; i < n; i++) {
        x[i].className += " " + disabledClass;
    }

    x[n].className += " " + currentClass;
  };

  /*
   * 이전/다음 버턴들을 show/hide 동작하게 하는 함수
   * btnClass : 클래스 이름
   * display : 스타일값
   */
  function setBtnDisplay(btnClass, display) {
    var btns = document.getElementsByClassName(btnClass);

    for(var i = 0;i < btns.length;i++) {
      btns[i].style.display = display;
    }
  };

  return {

    /*
     * 탭 위자드를 초기화하는 함수
     * funcArray : 각 단계를 넘어갈 때 유효성 검사를 하는 함수 배열
     */
    init : function(funcArray) {

      var tabs = document.getElementsByClassName(tabClass);

      for(var i = 0;i < tabs.length;i++) {
        tabs[i].style.display = 'none';
      }

      formFuncArray = funcArray;

      showTab(currentTab);
    },

    /*
     * 탭 위자드를 초기화하는 함수
     * funcArray : 각 단계를 넘어갈 때 유효성 검사를 하는 함수 배열
     */
    nextPrevTab : function(n) {

      if(!formFuncArray[currentTab]()) return false;

      var x = document.getElementsByClassName(tabClass);
      x[currentTab].style.display = "none";

      currentTab = currentTab + n;

      showTab(currentTab);
    },

  };

})(window);

// <<<<<<<<< Tab Wizard -----


// ----- DropZone >>>>>>>>>

var DropZone = (function(window) {

   var dropZoneClass = "uxs-drop-zone";

  return {

    init : function(callbackfunc) {

        var dropZones = document.getElementsByClassName(dropZoneClass);

        for(var i = 0; i < dropZones.length; i++) {

          dropZones[i].addEventListener('dragover', function(e) {
            e.stopPropagation();
            e.preventDefault();
          });

          dropZones[i].addEventListener('drop', function(e) {
            e.stopPropagation();
            e.preventDefault();

            var files = e.dataTransfer.files;

            if (files != null) {
              if (files.length < 1) {
                console.log("file error");
                return;
              } else {
                callbackfunc(files, this)
              }
            } else {
              console.log("file error");
            }
          });
        }
      }
  }

})(window)

// <<<<<<<<< DropZone -----


// ----- Editor >>>>>>>>>

var Editor = (function(window) {

  if (typeof CKEDITOR == "undefined") return;

  CKEDITOR.disableAutoInline = true;

  function init() {

    /* PlaceHolder Plugin >>>>>>>>>>>>>>> */

      // Check if the browser supports the placeholder attribute on textareas natively.
      var supportsPlaceholder = 'placeholder' in document.createElement( 'textarea' );

      // If the data is "empty" (BR, P) or the placeholder then return an empty string.
      // Otherwise return the original data
      function dataIsEmpty( data ) {
        if ( !data)
          return true;

        if ( data.length > 20 )
          return false;

        var value = data.replace( /[\n|\t]*/g, '' ).toLowerCase();
        if ( !value || value == '<br>' || value == '<p>&nbsp;<br></p>' || value == '<p><br></p>' || value == '<div><br></div>' || value == '<p>&nbsp;</p>' || value == '&nbsp;' || value == ' ' || value == '&nbsp;<br>' || value == ' <br>' )
          return true;

        return false;
      }

      function addPlaceholder(ev) {
        var editor = ev.editor;

        // do not add placeholder in readOnly mode
        if (editor.readOnly)
          return;

        var root = editor.editable();
        var placeholder = ev.listenerData;
        if (!root)
          return;

        if (editor.mode == 'wysiwyg') {
          // If the blur is due to a dialog, don't apply the placeholder
          if ( CKEDITOR.dialog._.currentTop )
            return;

          if ( !root )
            return;

          if ( dataIsEmpty( root.getHtml() ) ) {
            root.setHtml( placeholder );
            root.addClass( 'placeholder' );
          }
        }

        if (editor.mode == 'source') {
          if ( supportsPlaceholder ) {
            if (ev.name == 'mode') {
              root.setAttribute( 'placeholder', placeholder );
            }
            return;
          }

          if ( dataIsEmpty( root.getValue() ) ) {
            root.setValue( placeholder );
            root.addClass( 'placeholder' );
          }
        }
      }

      function removePlaceholder(ev) {
        var editor = ev.editor;
        var root = editor.editable();
        if (!root)
          return;

        if (editor.mode == 'wysiwyg' ) {
          if (!root.hasClass( 'placeholder' ))
            return;

          root.removeClass( 'placeholder' );
          // fill it properly
          if (CKEDITOR.dtd[ root.getName() ]['p']) {
            var value = '';
            if ( editor.enterMode === CKEDITOR.ENTER_P ) {
              value = '<p><br/></p>';
            } else if (editor.enterMode === CKEDITOR.ENTER_DIV) {
              value = '<div><br/><\/div>';
            } else {
              // This is for CKEDITOR.ENTER_BR
              value = '<br/>';
              // FireFox prepends an additional line
              if (CKEDITOR.env.gecko || CKEDITOR.env.ie) {
                value = ' ';
              }
            }
            root.setHtml(value);
            // Set caret in position
            var range = new CKEDITOR.dom.range(editor.document);
            range.moveToElementEditablePosition(root.getFirst(), true);
            editor.getSelection().selectRanges([ range ]);
          } else {
            root.setHtml(' ');
          }
        }

        if (editor.mode == 'source') {
          if ( !root.hasClass( 'placeholder' ) )
            return;

          root.removeClass( 'placeholder' );
          root.setValue( '' );
        }
      }

      function handleReadOnlyChange(ev) {
        var editor = ev.editor;
        if (editor.readOnly) {
          removePlaceholder(ev);
        } else {
          addPlaceholder(ev);
        }
      }

      function getLang( element ) {
        if (!element)
          return null;

        return element.getAttribute( 'lang' ) || getLang( element.getParent() );
      }

      CKEDITOR.plugins.add( 'confighelper', {
        getPlaceholderCss : function() {
          return '.placeholder{ color: #c7c7cc; }';
        },

        onLoad : function() {
          CKEDITOR.addCss( this.getPlaceholderCss() );
        },

        init : function( editor ) {

          // correct focus status after switch mode
          editor.on( 'mode', function( ev ) {
            // Let's update to match reality
            ev.editor.focusManager.hasFocus = false;
            // Now focus it:
          });

          // Placeholder - Start
          // Get the placeholder from the replaced element or from the configuration
          var placeholder = editor.element.getAttribute( 'placeholder' ) || editor.config.placeholder;

          if (placeholder) {
            // CSS for textarea mode
            var node = CKEDITOR.document.getHead().append( 'style' );
            node.setAttribute( 'type', 'text/css' );
            var content = 'textarea.placeholder { color: #999; font-style: italic; }';

            if ( CKEDITOR.env.ie && CKEDITOR.env.version < 11)
              node.$.styleSheet.cssText = content;
            else
              node.$.innerHTML = content;

            // Watch for the calls to getData to remove the placeholder
            editor.on( 'getData', function( ev ) {
              var element = editor.editable();

              if ( element && element.hasClass( 'placeholder' ) )
                ev.data.dataValue = '';
            });

            // Watch for setData to remove placeholder class
            editor.on('setData', function(ev) {
              if ( CKEDITOR.dialog._.currentTop )
                return;

              if ( editor.mode == 'source' && supportsPlaceholder )
                return;

              var root = editor.editable();

              if ( !root )
                return;

              if ( !dataIsEmpty( ev.data.dataValue ) ) {
                // Remove the class if new data is not empty
                if ( root.hasClass( 'placeholder' ) )
                  root.removeClass( 'placeholder' );
              } else {
                // if data is empty, set it to the placeholder
                addPlaceholder(ev);
              }
            });

            editor.on('blur', addPlaceholder, null, placeholder);
            editor.on('mode', addPlaceholder, null, placeholder);
            editor.on('contentDom', addPlaceholder, null, placeholder);

            editor.on('focus', removePlaceholder);
            editor.on('key', removePlaceholder);
            editor.on('beforeModeUnload', removePlaceholder);

            editor.on('readOnly', handleReadOnlyChange, null, placeholder);
          } // Placeholder - End


          // SCAYT lang from element lang:
          var lang = editor.config.contentsLanguage || getLang( editor.element );
          if ( lang && editor.plugins.scayt && !editor.config.scayt_sLang ) {
            try {
              // Remove the stored language
              if (localStorage)
                localStorage.removeItem( 'scayt_0_lang' );
            } catch (e) { /* */}

            // Convert from HTML5 Lang to spellchecker.net values
            var map = {
              'en'   : 'en_US',
              'en-us': 'en_US',
              'en-gb': 'en_GB',
              'pt-br': 'pt_BR',
              'da'   : 'da_DK',
              'da-dk': 'da_DK',
              'nl-nl': 'nl_NL',
              'en-ca': 'en_CA',
              'fi-fi': 'fi_FI',
              'fr'   : 'fr_FR',
              'fr-fr': 'fr_FR',
              'fr-ca': 'fr_CA',
              'de'   : 'de_DE',
              'de-de': 'de_DE',
              'el-gr': 'el_GR',
              'it'   : 'it_IT',
              'it-it': 'it_IT',
              'nb-no': 'nb_NO',
              'pt'   : 'pt_PT',
              'pt-pt': 'pt_PT',
              'es'   : 'es_ES',
              'es-es': 'es_ES',
              'sv-se': 'sv_SE'
            };
            editor.config.scayt_sLang = map[ lang.toLowerCase() ];
          }

          // Parse the config to turn it into a js object
          // format= dialogName:tabName:fieldName
          var parseDefinitionToObject = function( value ) {
            // Allow JSON definitions
            if (typeof value == 'object')
              return value;

            var contents = value.split( ';' ),
              tabsToProcess = {},
              i;

            for ( i = 0; i < contents.length; i++ ) {
              var parts = contents[ i ].split( ':' );
              if ( parts.length == 3 ) {
                var dialogName = parts[ 0 ],
                  tabName = parts[ 1 ],
                  fieldName = parts[ 2 ];

                if ( !tabsToProcess[ dialogName ] )
                  tabsToProcess[ dialogName ] = {};
                if ( !tabsToProcess[ dialogName ][ tabName ] )
                  tabsToProcess[ dialogName ][ tabName ] = [];

                tabsToProcess[ dialogName ][ tabName ].push( fieldName );
              }
            }
            return tabsToProcess;
          };

          // Customize dialogs:
          function customizeDialogs( ev ) {
            if ( editor != ev.editor )
              return;

            var dialogName = ev.data.name,
              dialogDefinition = ev.data.definition,
              tabsToProcess,
              i, name, fields, tab;

            if (dialogName == 'tableProperties')
              dialogName = 'table';

            // Parse the config to turn it into a js object
            if ( !( 'removeDialogFields' in editor._ ) && editor.config.removeDialogFields )
              editor._.removeDialogFields = parseDefinitionToObject( editor.config.removeDialogFields );

            // Remove fields of this dialog.
            if ( editor._.removeDialogFields && ( tabsToProcess = editor._.removeDialogFields[ dialogName ] ) ) {
              for ( name in tabsToProcess ) {
                fields = tabsToProcess[ name ];
                tab = dialogDefinition.getContents( name );
                if (!tab)
                  continue;

                for ( i = 0; i < fields.length ; i++ )
                  tab.remove( fields[ i ] );
              }
            }


            if ( !( 'hideDialogFields' in editor._ ) && editor.config.hideDialogFields )
              editor._.hideDialogFields = parseDefinitionToObject( editor.config.hideDialogFields );

            // Remove fields of this dialog.
            if ( editor._.hideDialogFields && ( tabsToProcess = editor._.hideDialogFields[ dialogName ] ) ) {
              for ( name in tabsToProcess ) {
                fields = tabsToProcess[ name ];
                tab = dialogDefinition.getContents( name );
                if (!tab)
                  continue;

                for ( i = 0; i < fields.length ; i++ )
                  tab.get( fields[ i ] ).hidden = true;
              }
            }

            // Set default values.
            if ( editor.config.dialogFieldsDefaultValues && ( tabsToProcess = editor.config.dialogFieldsDefaultValues[ dialogName ] ) ) {
              for ( name in tabsToProcess ) {
                fields = tabsToProcess[ name ];
                tab = dialogDefinition.getContents( name );
                if (!tab)
                  continue;

                for ( var fieldName in fields ) {
                  var dialogField = tab.get( fieldName );
                  if ( dialogField )
                    dialogField[ 'default' ] = fields[ fieldName ];
                }
              }
            }


          }

          CKEDITOR.on( 'dialogDefinition', customizeDialogs );
          editor.once( 'beforeDestroy', function() {
            CKEDITOR.removeListener( 'dialogDefinition', customizeDialogs );
          });

        }
      } );

      /* <<<<<<<<<<<<<<<< PlaceHolder Plugin  */
  }

  window.addEventListener('DOMContentLoaded', function(){
    init();
  });

  return {

    setEditor : function(editorId, css, uploadUrl) {

      var config = {
        extraPlugins: 'codesnippet, confighelper, image2',
      };

      config.toolbarGroups = [
          { name: 'styles', groups: [ 'styles' ] },
          { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
          { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
          { name: 'links', groups: [ 'links' ] },
          { name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
          { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
          { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
          { name: 'forms', groups: [ 'forms' ] },
          { name: 'insert', groups: [ 'insert' ] },];

      config.removeButtons = 'Source,Save,NewPage,Preview,Print,Templates,Cut,Undo,Redo,Copy,Paste,PasteText,PasteFromWord,Find,Replace,SelectAll,Scayt,Form,Styles,Font,FontSize,TextColor,Maximize,RemoveFormat,CopyFormatting,Underline,Subscript,Superscript,CreateDiv,Blockquote,JustifyLeft,BidiLtr,BidiRtl,JustifyCenter,JustifyRight,Language,JustifyBlock,Anchor,Radio,Checkbox,Flash,Table,HorizontalRule,TextField,Textarea,Smiley,SpecialChar,Select,Button,PageBreak,Iframe,ImageButton,HiddenField,BGColor,ShowBlocks,About';
      config.removePlugins = 'image';

      function insertThemeCSS(file) {

        var cssPath = "../../../assets/";
        var cssLink = document.createElement("link");

        cssLink.href = cssPath+file;
        cssLink.rel = "stylesheet";
        cssLink.type = "text/css";

        for(var i = 0; i < window.frames.length; i++) {
          if(frames[i].frameElement.className === 'cke_dialog_ui_input_file' ||
          frames[i].frameElement.className === 'cke_panel_frame') {
            frames[i].document.head.appendChild(cssLink);

            const element = document.getElementsByClassName('cke_dialog_ui_file');
            element[0].firstChild.innerHTML = '파일 선택 후 서버로 전송 버튼을 눌러주세요.';
          }
        }
      }

      CKEDITOR.on( 'dialogDefinition', function( evt ) {
        var dialog = evt.data;
        if ( dialog.name == 'link' ) {
          evt.data.definition.removeContents( 'upload' );
        }

        evt.data.definition.dialog.on('show', function () {
          setTimeout(function() {
            insertThemeCSS(css);
          }, 500);
        });
      });

      var OriginalFunction = CKEDITOR.tools.callFunction;
      CKEDITOR.tools.callFunction = function(n,x){
        OriginalFunction(n, x);
        insertThemeCSS(css);
      }

      // 이미지 업로드 url 설정
      config.filebrowserUploadUrl = uploadUrl;
      config.uploadUrl = uploadUrl;

      // CKEDITOR.disableAutoInline = true;
      return CKEDITOR.inline( editorId, config);

    }
  }

})(window);

// <<<<<<<<< Editor -----


// ----- Chart >>>>>>>>>

var UXSChart = (function(window) {

  if (typeof Chart == "undefined") return;

  // ----------------------------- Zoom -----------------------------
  var helpers = Chart.helpers;

  // console.log("chart: ", helpers);

  var dStartX = 0;
  var dEndX = 0;

  // Take the zoom namespace of Chart
  var zoomNS = (Chart.Zoom = Chart.Zoom || {});

  // Where we store functions to handle different scale types
  var zoomFunctions = (zoomNS.zoomFunctions = zoomNS.zoomFunctions || {});
  var panFunctions = (zoomNS.panFunctions = zoomNS.panFunctions || {});

  // 글로벌 플러그인을 Zoom 으로 설정한다.
  // pan, zoom 에 대해서 설정
  Chart.Zoom.defaults = Chart.defaults.global.plugins.zoom = {
    pan: {
      enabled: false,
      mode: 'xy',
      speed: 20,
      threshold: 10,
    },
    zoom: {
      enabled: false,
      mode: 'xy',
      sensitivity: 3,
      speed: 0.1,
    },
  };

  // 옵션을 처리
  function resolveOptions(chart, options) {
    var deprecatedOptions = {};
    // chart.options.pan 값이 정의가 되어 있다면
    if (typeof chart.options.pan !== 'undefined') {
      // 옵션값을 디프리케이트 옵션으로 추가한다.
      deprecatedOptions.pan = chart.options.pan;
    }

    // if (typeof chart.options.pan !== 'undefined') {
    if (typeof chart.options.zoom !== "undefined") {
      deprecatedOptions.zoom = chart.options.zoom;
    }
    // 옵션과 디프리케이트 옵션을 신규로 머지한다.
    chart.$zoom._options = helpers.merge({}, [options, deprecatedOptions]);

    // console.log("resolveOptions: ", chart.$zoom._options);
  }

  // 원래 옵션을 저장한다.
  function storeOriginalOptions(chart) {
    // 차트내 zoom 내부의 원래 옵션을 조회한다.
    var originalOptions = chart.$zoom._originalOptions;
    // console.log("storeOriginalOptions: ", originalOptions);
    helpers.each(chart.scales, function(scale) {
      if (!originalOptions[scale.id]) {
        originalOptions[scale.id] = helpers.clone(scale.options);
      }
    });
    helpers.each(originalOptions, function(opt, key) {
      if (!chart.scales[key]) {
        delete originalOptions[key];
      }
    });
  }

  function directionEnabled(mode, dir) {
    if (mode === undefined) {
      return true;
    } else if (typeof mode === 'string') {
      return mode.indexOf(dir) !== -1;
    }

    return false;
  }

  function rangeMaxLimiter(zoomPanOptions, newMax) {
    if (
      zoomPanOptions.scaleAxes &&
      zoomPanOptions.rangeMax &&
      !helpers.isNullOrUndef(zoomPanOptions.rangeMax[zoomPanOptions.scaleAxes])
    ) {
      var rangeMax = zoomPanOptions.rangeMax[zoomPanOptions.scaleAxes];
      if (newMax > rangeMax) {
        newMax = rangeMax;
      }
    }
    return newMax;
  }

  function rangeMinLimiter(zoomPanOptions, newMin) {
    if (
      zoomPanOptions.scaleAxes &&
      zoomPanOptions.rangeMin &&
      !helpers.isNullOrUndef(zoomPanOptions.rangeMin[zoomPanOptions.scaleAxes])
    ) {
      var rangeMin = zoomPanOptions.rangeMin[zoomPanOptions.scaleAxes];
      if (newMin < rangeMin) {
        newMin = rangeMin;
      }
    }
    return newMin;
  }

  function getValueForPixel(scale, pixel) {
    var me = scale;

    var offset = me.options.offset;
    var offsetAmt = Math.max(me._ticks.length - (offset ? 0 : 1), 1);
    var isHorizontal = me.isHorizontal();
    var valueDimension = (isHorizontal ? me.width : me.height) / offsetAmt;
    var value;

    pixel -= isHorizontal ? me.left : me.top;

    if (offset) {
      pixel -= valueDimension / 2;
    }

    if (pixel <= 0) {
      value = 0;
    } else {
      value = Math.floor(pixel / valueDimension);
    }

    return value + me.minIndex;
  }

  function zoomCategoryScale(scale, zoom, center, zoomOptions) {
    /*
    var labels = scale.chart.data.labels;
    var minIndex = scale.minIndex;
    var lastLabelIndex = labels.length - 1;
    var maxIndex = scale.maxIndex;
    var sensitivity = zoomOptions.sensitivity;
    var chartCenter = scale.isHorizontal()
      ? scale.left + scale.width / 2
      : scale.top + scale.height / 2;
    var centerPointer = scale.isHorizontal() ? center.x : center.y;

    zoomNS.zoomCumulativeDelta =
      zoom > 1 ? zoomNS.zoomCumulativeDelta + 1 : zoomNS.zoomCumulativeDelta - 1;

    if (Math.abs(zoomNS.zoomCumulativeDelta) > sensitivity) {
      if (zoomNS.zoomCumulativeDelta < 0) {
        if (centerPointer >= chartCenter) {
          if (minIndex <= 0) {
            maxIndex = Math.min(lastLabelIndex, maxIndex + 1);
          } else {
            minIndex = Math.max(0, minIndex - 1);
          }
        } else if (centerPointer < chartCenter) {
          if (maxIndex >= lastLabelIndex) {
            minIndex = Math.max(0, minIndex - 1);
          } else {
            maxIndex = Math.min(lastLabelIndex, maxIndex + 1);
          }
        }
        zoomNS.zoomCumulativeDelta = 0;
      } else if (zoomNS.zoomCumulativeDelta > 0) {
        if (centerPointer >= chartCenter) {
          minIndex =
            minIndex < maxIndex
              ? (minIndex = Math.min(maxIndex, minIndex + 1))
              : minIndex;
        } else if (centerPointer < chartCenter) {
          maxIndex =
            maxIndex > minIndex
              ? (maxIndex = Math.max(minIndex, maxIndex - 1))
              : maxIndex;
        }
        zoomNS.zoomCumulativeDelta = 0;
      }
      scale.options.ticks.min = rangeMinLimiter(zoomOptions, labels[minIndex]);
      scale.options.ticks.max = rangeMaxLimiter(zoomOptions, labels[maxIndex]);
    }
  */
    var labels = scale.chart.data.labels;

    var range = scale.max - scale.min;
    var newDiff = range * (zoom - 1);

    var centerPoint = scale.isHorizontal() ? center.x : center.y;

    var start = getValueForPixel(scale, dStartX);
    var end = getValueForPixel(scale, dEndX) + 1;

    scale.options.ticks.min = labels[start];
    scale.options.ticks.max = labels[end];
  }

  function zoomNumericalScale(scale, zoom, center, zoomOptions) {
    var range = scale.max - scale.min;
    var newDiff = range * (zoom - 1);

    var centerPoint = scale.isHorizontal() ? center.x : center.y;
    var minPercent = (scale.getValueForPixel(centerPoint) - scale.min) / range;
    var maxPercent = 1 - minPercent;

    var minDelta = newDiff * minPercent;
    var maxDelta = newDiff * maxPercent;

    scale.options.ticks.min = rangeMinLimiter(zoomOptions, scale.min + minDelta);
    scale.options.ticks.max = rangeMaxLimiter(zoomOptions, scale.max - maxDelta);
  }

  function zoomTimeScale(scale, zoom, center, zoomOptions) {
    zoomNumericalScale(scale, zoom, center, zoomOptions);

    scale.options.time.min = scale.options.ticks.min;
    scale.options.time.max = scale.options.ticks.max;
  }

  function zoomScale(scale, zoom, center, zoomOptions) {
    var fn = zoomFunctions[scale.type];
    if (fn) {
      fn(scale, zoom, center, zoomOptions);
    }
  }

  /**
   * @param chart The chart instance
   * @param {number} percentZoomX The zoom percentage in the x direction
   * @param {number} percentZoomY The zoom percentage in the y direction
   * @param {{x: number, y: number}} focalPoint The x and y coordinates of zoom focal point. The point which doesn't change while zooming. E.g. the location of the mouse cursor when "drag: false"
   * @param {string} whichAxes `xy`, 'x', or 'y'
   */

  function doZoom(chart, percentZoomX, percentZoomY, focalPoint, whichAxes) {
    var ca = chart.chartArea;
    if (!focalPoint) {
      focalPoint = {
        x: (ca.left + ca.right) / 2,
        y: (ca.top + ca.bottom) / 2,
      };
    }

    var zoomOptions = chart.$zoom._options.zoom;

    if (zoomOptions.enabled) {
      storeOriginalOptions(chart);
      // Do the zoom here
      var zoomMode = zoomOptions.mode;

      // Which axe should be modified when figers were used.
      var _whichAxes;
      if (zoomMode === 'xy' && whichAxes !== undefined) {
        // based on fingers positions
        _whichAxes = whichAxes;
      } else {
        // no effect
        _whichAxes = 'xy';
      }

      helpers.each(chart.scales, function(scale) {
        if (
          scale.isHorizontal() &&
          directionEnabled(zoomMode, 'x') &&
          directionEnabled(_whichAxes, 'x')
        ) {
          zoomOptions.scaleAxes = 'x';
          zoomScale(scale, percentZoomX, focalPoint, zoomOptions);
        } else if (
          !scale.isHorizontal() &&
          directionEnabled(zoomMode, 'y') &&
          directionEnabled(_whichAxes, 'y')
        ) {
          // Do Y zoom
          zoomOptions.scaleAxes = 'y';
          zoomScale(scale, percentZoomY, focalPoint, zoomOptions);
        }
      });

      chart.update(0);

      if (typeof zoomOptions.onZoom === 'function') {
        zoomOptions.onZoom({chart: chart});
      }
    }
  }

  function panCategoryScale(scale, delta, panOptions) {
    var labels = scale.chart.data.labels;
    var lastLabelIndex = labels.length - 1;
    var offsetAmt = Math.max(scale.ticks.length, 1);
    var panSpeed = panOptions.speed;
    var minIndex = scale.minIndex;
    var step = Math.round(scale.width / (offsetAmt * panSpeed));
    var maxIndex;

    zoomNS.panCumulativeDelta += delta;

    minIndex =
      zoomNS.panCumulativeDelta > step
        ? Math.max(0, minIndex - 1)
        : zoomNS.panCumulativeDelta < -step
        ? Math.min(lastLabelIndex - offsetAmt + 1, minIndex + 1)
        : minIndex;
    zoomNS.panCumulativeDelta =
      minIndex !== scale.minIndex ? 0 : zoomNS.panCumulativeDelta;

    maxIndex = Math.min(lastLabelIndex, minIndex + offsetAmt - 1);

    scale.options.ticks.min = rangeMinLimiter(panOptions, labels[minIndex]);
    scale.options.ticks.max = rangeMaxLimiter(panOptions, labels[maxIndex]);
  }

  function panNumericalScale(scale, delta, panOptions) {
    var tickOpts = scale.options.ticks;
    var prevStart = scale.min;
    var prevEnd = scale.max;
    var newMin = scale.getValueForPixel(
      scale.getPixelForValue(prevStart) - delta
    );
    var newMax = scale.getValueForPixel(scale.getPixelForValue(prevEnd) - delta);
    var rangeMin = newMin;
    var rangeMax = newMax;
    var diff;

    if (
      panOptions.scaleAxes &&
      panOptions.rangeMin &&
      !helpers.isNullOrUndef(panOptions.rangeMin[panOptions.scaleAxes])
    ) {
      rangeMin = panOptions.rangeMin[panOptions.scaleAxes];
    }
    if (
      panOptions.scaleAxes &&
      panOptions.rangeMax &&
      !helpers.isNullOrUndef(panOptions.rangeMax[panOptions.scaleAxes])
    ) {
      rangeMax = panOptions.rangeMax[panOptions.scaleAxes];
    }

    if (newMin >= rangeMin && newMax <= rangeMax) {
      tickOpts.min = newMin;
      tickOpts.max = newMax;
    } else if (newMin < rangeMin) {
      diff = prevStart - rangeMin;
      tickOpts.min = rangeMin;
      tickOpts.max = prevEnd - diff;
    } else if (newMax > rangeMax) {
      diff = rangeMax - prevEnd;
      tickOpts.max = rangeMax;
      tickOpts.min = prevStart + diff;
    }
  }

  function panTimeScale(scale, delta, panOptions) {
    panNumericalScale(scale, delta, panOptions);

    var options = scale.options;
    options.time.min = options.ticks.min;
    options.time.max = options.ticks.max;
  }

  function panScale(scale, delta, panOptions) {
    var fn = panFunctions[scale.type];
    if (fn) {
      fn(scale, delta, panOptions);
    }
  }

  function doPan(chartInstance, deltaX, deltaY) {
    storeOriginalOptions(chartInstance);
    var panOptions = chartInstance.$zoom._options.pan;
    if (panOptions.enabled) {
      var panMode = panOptions.mode;

      helpers.each(chartInstance.scales, function(scale) {
        if (
          scale.isHorizontal() &&
          directionEnabled(panMode, 'x') &&
          deltaX !== 0
        ) {
          panOptions.scaleAxes = 'x';
          panScale(scale, deltaX, panOptions);
        } else if (
          !scale.isHorizontal() &&
          directionEnabled(panMode, 'y') &&
          deltaY !== 0
        ) {
          panOptions.scaleAxes = 'y';
          panScale(scale, deltaY, panOptions);
        }
      });

      chartInstance.update(0);

      if (typeof panOptions.onPan === 'function') {
        panOptions.onPan({chart: chartInstance});
      }
    }
  }

  function getXAxis(chartInstance) {
    var scales = chartInstance.scales;
    var scaleIds = Object.keys(scales);
    for (var i = 0; i < scaleIds.length; i++) {
      var scale = scales[scaleIds[i]];

      if (scale.isHorizontal()) {
        return scale;
      }
    }
  }

  function getYAxis(chartInstance) {
    var scales = chartInstance.scales;
    var scaleIds = Object.keys(scales);
    for (var i = 0; i < scaleIds.length; i++) {
      var scale = scales[scaleIds[i]];

      if (!scale.isHorizontal()) {
        return scale;
      }
    }
  }

  // Store these for later
  zoomNS.zoomFunctions.category = zoomCategoryScale;
  zoomNS.zoomFunctions.time = zoomTimeScale;
  zoomNS.zoomFunctions.linear = zoomNumericalScale;
  zoomNS.zoomFunctions.logarithmic = zoomNumericalScale;
  zoomNS.panFunctions.category = panCategoryScale;
  zoomNS.panFunctions.time = panTimeScale;
  zoomNS.panFunctions.linear = panNumericalScale;
  zoomNS.panFunctions.logarithmic = panNumericalScale;
  // Globals for category pan and zoom
  zoomNS.panCumulativeDelta = 0;
  zoomNS.zoomCumulativeDelta = 0;

  // Chartjs Zoom Plugin
  var zoomPlugin = {
    id: 'zoom',

    afterInit: function(chartInstance) {
      chartInstance.resetZoom = function() {
        storeOriginalOptions(chartInstance);
        var originalOptions = chartInstance.$zoom._originalOptions;
        helpers.each(chartInstance.scales, function(scale) {
          var timeOptions = scale.options.time;
          var tickOptions = scale.options.ticks;

          if (originalOptions[scale.id]) {
            if (timeOptions) {
              timeOptions.min = originalOptions[scale.id].time.min;
              timeOptions.max = originalOptions[scale.id].time.max;
            }

            if (tickOptions) {
              tickOptions.min = originalOptions[scale.id].ticks.min;
              tickOptions.max = originalOptions[scale.id].ticks.max;
            }
          } else {
            if (timeOptions) {
              delete timeOptions.min;
              delete timeOptions.max;
            }

            if (tickOptions) {
              delete tickOptions.min;
              delete tickOptions.max;
            }
          }
        });

        chartInstance.update();
      };
    },

    beforeUpdate: function(chart, options) {
      resolveOptions(chart, options);
    },

    beforeInit: function(chartInstance, pluginOptions) {
      chartInstance.$zoom = {
        _originalOptions: {},
      };
      resolveOptions(chartInstance, pluginOptions);

      var node = (chartInstance.$zoom._node = chartInstance.chart.ctx.canvas);

      var options = chartInstance.$zoom._options;
      var panThreshold = options.pan && options.pan.threshold;

      chartInstance.$zoom._mouseDownHandler = function(event) {
        if (
          chartInstance.$zoom._options.zoom &&
          chartInstance.$zoom._options.zoom.drag
        ) {
          node.addEventListener(
            'mousemove',
            chartInstance.$zoom._mouseMoveHandler
          );
          chartInstance.$zoom._dragZoomStart = event;
        }
      };
      node.addEventListener('mousedown', chartInstance.$zoom._mouseDownHandler);

      chartInstance.$zoom._mouseMoveHandler = function(event) {
        if (
          chartInstance.$zoom._options.zoom &&
          chartInstance.$zoom._options.zoom.drag &&
          chartInstance.$zoom._dragZoomStart
        ) {
          chartInstance.$zoom._dragZoomEnd = event;
          chartInstance.update(0);
        }
      };

      chartInstance.$zoom._mouseUpHandler = function(event) {
        if (
          !(
            chartInstance.$zoom._options.zoom &&
            chartInstance.$zoom._options.zoom.drag
          ) ||
          !chartInstance.$zoom._dragZoomStart
        ) {
          return;
        }

        node.removeEventListener(
          'mousemove',
          chartInstance.$zoom._mouseMoveHandler
        );

        var beginPoint = chartInstance.$zoom._dragZoomStart;

        var offsetX = beginPoint.target.getBoundingClientRect().left;
        var startX = Math.min(beginPoint.clientX, event.clientX) - offsetX;
        var endX = Math.max(beginPoint.clientX, event.clientX) - offsetX;

        var offsetY = beginPoint.target.getBoundingClientRect().top;
        var startY = Math.min(beginPoint.clientY, event.clientY) - offsetY;
        var endY = Math.max(beginPoint.clientY, event.clientY) - offsetY;

        dStartX = startX;
        dEndX = endX;

        var dragDistanceX = endX - startX;
        var dragDistanceY = endY - startY;

        // Remove drag start and end before chart update to stop drawing selected area
        chartInstance.$zoom._dragZoomStart = null;
        chartInstance.$zoom._dragZoomEnd = null;

        // console.log ('dragDistanceX : ' + dragDistanceX);

        if (dragDistanceX <= 3) {
          return;
        }

        if (dragDistanceX <= 0 && dragDistanceY <= 0) {
          return;
        }

        var chartArea = chartInstance.chartArea;

        var chartDistanceX = chartArea.right - chartArea.left;
        var xEnabled = directionEnabled(
          chartInstance.$zoom._options.zoom.mode,
          'x'
        );
        var zoomX =
          xEnabled && dragDistanceX
            ? 1 + (chartDistanceX - dragDistanceX) / chartDistanceX
            : 1;

        var chartDistanceY = chartArea.bottom - chartArea.top;
        var yEnabled = directionEnabled(
          chartInstance.$zoom._options.zoom.mode,
          'y'
        );
        var zoomY =
          yEnabled && dragDistanceY
            ? 1 + (chartDistanceY - dragDistanceY) / chartDistanceY
            : 1;

        doZoom(chartInstance, zoomX, zoomY, {
          x:
            (startX - chartArea.left) / (1 - dragDistanceX / chartDistanceX) +
            chartArea.left,
          y:
            (startY - chartArea.top) / (1 - dragDistanceY / chartDistanceY) +
            chartArea.top,
        });
      };
      node.ownerDocument.addEventListener(
        'mouseup',
        chartInstance.$zoom._mouseUpHandler
      );

      chartInstance.$zoom._wheelHandler = function(event) {
        if (
          !(
            chartInstance.$zoom._options.zoom &&
            chartInstance.$zoom._options.zoom.drag
          )
        ) {
          var rect = event.target.getBoundingClientRect();
          var offsetX = event.clientX - rect.left;
          var offsetY = event.clientY - rect.top;

          var center = {
            x: offsetX,
            y: offsetY,
          };

          var speedPercent = chartInstance.$zoom._options.zoom.speed;

          if (event.deltaY >= 0) {
            speedPercent = -speedPercent;
          }
          doZoom(chartInstance, 1 + speedPercent, 1 + speedPercent, center);

          // Prevent the event from triggering the default behavior (eg. Content scrolling).
          if (event.cancelable) {
            event.preventDefault();
          }
        }
      };

      node.addEventListener('wheel', chartInstance.$zoom._wheelHandler);

      if (Hammer) {
        var mc = new Hammer.Manager(node);
        mc.add(new Hammer.Pinch());
        mc.add(
          new Hammer.Pan({
            threshold: panThreshold,
          })
        );

        // Hammer reports the total scaling. We need the incremental amount
        var currentPinchScaling;
        var handlePinch = function(e) {
          var diff = (1 / currentPinchScaling) * e.scale;
          var rect = e.target.getBoundingClientRect();
          var offsetX = e.center.x - rect.left;
          var offsetY = e.center.y - rect.top;
          var center = {
            x: offsetX,
            y: offsetY,
          };

          // fingers position difference
          var x = Math.abs(e.pointers[0].clientX - e.pointers[1].clientX);
          var y = Math.abs(e.plointers[0].clientY - e.pointers[1].clientY);

          // diagonal fingers will change both (xy) axes
          var p = x / y;
          var xy;
          if (p > 0.3 && p < 1.7) {
            xy = 'xy';
          } else if (x > y) {
            xy = 'x'; // x axis
          } else {
            xy = 'y'; // y axis
          }

          doZoom(chartInstance, diff, diff, center, xy);

          // Keep track of overall scale
          currentPinchScaling = e.scale;
        };

        mc.on('pinchstart', function() {
          currentPinchScaling = 1; // reset tracker
        });
        mc.on('pinch', handlePinch);
        mc.on('pinchend', function(e) {
          handlePinch(e);
          currentPinchScaling = null; // reset
          zoomNS.zoomCumulativeDelta = 0;
        });

        var currentDeltaX = null;
        var currentDeltaY = null;
        var panning = false;
        var handlePan = function(e) {
          if (currentDeltaX !== null && currentDeltaY !== null) {
            panning = true;
            var deltaX = e.deltaX - currentDeltaX;
            var deltaY = e.deltaY - currentDeltaY;
            currentDeltaX = e.deltaX;
            currentDeltaY = e.deltaY;
            doPan(chartInstance, deltaX, deltaY);
          }
        };

        mc.on('panstart', function(e) {
          currentDeltaX = 0;
          currentDeltaY = 0;
          handlePan(e);
        });
        mc.on('panmove', handlePan);
        mc.on('panend', function() {
          currentDeltaX = null;
          currentDeltaY = null;
          zoomNS.panCumulativeDelta = 0;
          setTimeout(function() {
            panning = false;
          }, 500);
        });

        chartInstance.$zoom._ghostClickHandler = function(e) {
          if (panning && e.cancelable) {
            e.stopImmediatePropagation();
            e.preventDefault();
          }
        };
        node.addEventListener('click', chartInstance.$zoom._ghostClickHandler);

        chartInstance._mc = mc;
      }
    },

    beforeDatasetsDraw: function(chartInstance) {
      var ctx = chartInstance.chart.ctx;
      var chartArea = chartInstance.chartArea;
      ctx.save();
      ctx.beginPath();

      if (chartInstance.$zoom._dragZoomEnd) {
        var xAxis = getXAxis(chartInstance);
        var yAxis = getYAxis(chartInstance);
        var beginPoint = chartInstance.$zoom._dragZoomStart;
        var endPoint = chartInstance.$zoom._dragZoomEnd;

        var startX = xAxis.left;
        var endX = xAxis.right;
        var startY = yAxis.top;
        var endY = yAxis.bottom;

        if (directionEnabled(chartInstance.$zoom._options.zoom.mode, 'x')) {
          var offsetX = beginPoint.target.getBoundingClientRect().left;
          startX = Math.min(beginPoint.clientX, endPoint.clientX) - offsetX;
          endX = Math.max(beginPoint.clientX, endPoint.clientX) - offsetX;
        }

        if (directionEnabled(chartInstance.$zoom._options.zoom.mode, 'y')) {
          var offsetY = beginPoint.target.getBoundingClientRect().top;
          startY = Math.min(beginPoint.clientY, endPoint.clientY) - offsetY;
          endY = Math.max(beginPoint.clientY, endPoint.clientY) - offsetY;
        }

        var rectWidth = endX - startX;
        var rectHeight = endY - startY;
        var dragOptions = chartInstance.$zoom._options.zoom.drag;

        if (rectWidth < 3) {
          rectWidth = 0;
        }

        ctx.fillStyle = dragOptions.backgroundColor || 'rgba(225,225,225,0.3)';
        ctx.fillRect(startX, startY, rectWidth, rectHeight);

        if (dragOptions.borderWidth > 0) {
          ctx.lineWidth = dragOptions.borderWidth;
          ctx.strokeStyle = dragOptions.borderColor || 'rgba(225,225,225)';
          ctx.strokeRect(startX, startY, rectWidth, rectHeight);
        }
      }

      ctx.rect(
        chartArea.left,
        chartArea.top,
        chartArea.right - chartArea.left,
        chartArea.bottom - chartArea.top
      );
      ctx.clip();
    },

    afterDatasetsDraw: function(chartInstance) {
      chartInstance.chart.ctx.restore();
    },

    destroy: function(chartInstance) {
      if (chartInstance.$zoom) {
        var node = chartInstance.$zoom._node;

        if (chartInstance.$zoom._options.zoom) {
          node.removeEventListener(
            'mousedown',
            chartInstance.$zoom._mouseDownHandler
          );
          node.removeEventListener(
            'mousemove',
            chartInstance.$zoom._mouseMoveHandler
          );
          node.ownerDocument.removeEventListener(
            'mouseup',
            chartInstance.$zoom._mouseUpHandler
          );
          node.removeEventListener('wheel', chartInstance.$zoom._wheelHandler);
        }

        if (Hammer) {
          node.removeEventListener(
            'click',
            chartInstance.$zoom._ghostClickHandler
          );
        }

        delete chartInstance.$zoom;

        var mc = chartInstance._mc;
        if (mc) {
          mc.remove('pinchstart');
          mc.remove('pinch');
          mc.remove('pinchend');
          mc.remove('panstart');
          mc.remove('pan');
          mc.remove('panend');
        }
      }
    },
  };

  Chart.plugins.register(zoomPlugin);

  // https://www.chartjs.org/docs/latest/configuration/
  Chart.defaults.global.legend.labels.usePointStyle = true;

  var doughnutCenterTitleColor = '#ababab';
  var doughnutCenterTextColor = '#2a2c2e';

  function generateHash() {
    return (
      Math.random()
        .toString(36)
        .substring(2, 15) +
      Math.random()
        .toString(36)
        .substring(2, 15)
    );
  }

  function cloneObject(obj) {

    var copy;

    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
      copy = new Date();
      copy.setTime(obj.getTime());
      return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
      copy = [];
      for (var i = 0, len = obj.length; i < len; i++) {
          copy[i] = cloneObject(obj[i]);
      }
      return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
      copy = {};
      for (var attr in obj) {
          if (obj.hasOwnProperty(attr)) copy[attr] = cloneObject(obj[attr]);
      }
      return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");

  }

  var dynamicFncMap = [];
  var dynamicEventFncMap = [];
  var toogleLegendIndex = 0;

  function setlegendIndex(legendIndex) {
    toogleLegendIndex = legendIndex;
  }

  function toggleLegend(chart) {

    if (chart.data.datasets.length === 1) {
      var meta = chart.getDatasetMeta(0);


      if (meta.dataset == null) {
        var hidden = meta.data[toogleLegendIndex].hidden;
        meta.data[toogleLegendIndex].hidden = !hidden;
      } else {
        meta = chart.getDatasetMeta(toogleLegendIndex);
        meta.hidden = meta.hidden === null ? !chart.data.datasets[toogleLegendIndex].hidden : null;
      }
    } else {
      var meta = chart.getDatasetMeta(toogleLegendIndex);
      meta.hidden = meta.hidden === null ? !chart.data.datasets[toogleLegendIndex].hidden : null;
    }

    chart.update();
  }

  function getIndex(element) {
    var _i = 0;

    while((element = element.previousSibling) != null ) {
      _i++;
    }

    return _i;
  }

  function legendCallback(chart) {

    dynamicFncMap[chart.chart.canvas.id + '-legend-click'] = function () {
      toggleLegend(chart);
    }

    var chartType = chart.config.type;
    var legendPosition = '';

    switch (chart.legend.position) {
      case 'top':
        legendPosition = 'top';
        break;
      case 'bottom':
        legendPosition = 'bottom';
        break;
      default:
        legendPosition = 'bottom';
        break;
    }

    var chartClass = 'chart-' + chartType;
    var legendCalss = 'legend-' + legendPosition;

    if(chart.canvas.parentNode.parentNode.classList.contains(chartClass)) {
      chart.canvas.parentNode.parentNode.removeChild(chart.canvas.parentNode.parentNode.firstChild);
    }

    chart.canvas.parentNode.parentNode.classList.add(chartClass);
    chart.canvas.parentNode.parentNode.classList.add(legendCalss);

    var text = [];
    var meta;

    for (let i = 0; i < chart.data.datasets; i++) {
      meta = chart.getDatasetMeta(i);
      meta.hidden = false;

      meta.data.forEach(function(data) {
        data.hidden = false;
      });
    }

    text = getMultiDataSetsLegend(chart);

    const block_to_insert = document.createElement('div');
    block_to_insert.id = generateHash();
    block_to_insert.innerHTML = text.join('');
    block_to_insert.className = 'legend';

    chart.canvas.parentNode.parentNode.insertBefore(block_to_insert,
      chart.canvas.parentNode.parentNode.firstChild);

  }

  function getMultiDataSetsLegend(chart) {
    const text = [];

    for (var i = 0; i < chart.data.datasets.length; i++) {
      var color = chart.data.datasets[i].borderColor;

      if (color === undefined) { color = chart.data.datasets[i].backgroundColor; }

      if (Array.isArray(color)) {
        for (var i = 0; i < color.length; i++) {

          text.push(
            '<span><i style="background-color:' +
              color[i] +
              '"></i>' +
              chart.data.labels[i] +
              '</span>'
          );
        }
      } else {

        text.push(
          '<span><i style="background-color:' +
          color +
            '"></i>' +
            chart.data.datasets[i].label +
            '</span>'
        );
      }
    }

    return text;
  }

  var chartFontStyle = false || !!document.documentMode
    ? '"Helvetica Neue", "Helvetica", "Arial", sans-serif'
    : '-apple-system,BlinkMacSystemFont,“Segoe UI”,Roboto,“Helvetica Neue”,Arial,“Noto Sans”,sans-serif,“Apple Color Emoji”,“Segoe UI Emoji”,“Segoe UI Symbol”,“Noto Color Emoji”';

  // ----------------------------- Doughnut Chart -----------------------------

  var __doughnutChartOptions = {
    maintainAspectRatio: false,

    tooltips: {
      callbacks: {
        title: function (tooltipItem, data) {
          return data['labels'][tooltipItem[0]['index']];
        },
        label: function (tooltipItem, data) {
          return data['datasets'][0]['data'][tooltipItem['index']];
        },
      },
    },

    legend: {
      display: false,
      position : 'bottom',
    },
    elements: {
      center: {
        color: '#2a2c2e',
        fontStyle: chartFontStyle,
        sidePadding: 15,
      },

      arc: {
        borderWidth: 3,
      },
    },
    cutoutPercentage: 66,

    legendCallback: legendCallback,
  };

  var doughnutChartPlugins = [
    {
      beforeDraw: function(chart) {
        if (chart.config.options.elements.center) {
          //Get ctx from string
          var ctx = chart.chart.ctx;

          //Get options from the center object in options
          var centerConfig = chart.config.options.elements.center;
          var fontStyle = centerConfig.fontStyle || 'Arial';
          var title = centerConfig.title;
          var txt = centerConfig.text;
          // var txt2 = centerConfig.text2;
          var color = centerConfig.color || '#000';

          var sidePadding = centerConfig.sidePadding || 20;
          var sidePaddingCalculated =
            (sidePadding / 100) * (chart.innerRadius * 2);
          //Start with a base font of 30px
          ctx.font = '30px ' + fontStyle;

          var txt1 = '';
          var txt2 = '';

          if (!txt) {
            return;
          }

          if (txt.length > 10) {
            txt1 = txt.substring(0, txt.length / 2);
            txt2 = txt.substring(txt.length / 2, txt.length);
          } else {
            txt1 = txt;
          }

          //Get the width of the string and also the width of the element minus 10 to give it 5px side padding

          var stringWidth = 0;

          if (!txt2) {
            stringWidth = ctx.measureText(txt1).width;
          } else {
            stringWidth = ctx.measureText(txt1).width * 0.5;
          }

          var elementWidth = chart.innerRadius * 2 - sidePaddingCalculated;

          // Find out how much the font can grow in width.
          var widthRatio = elementWidth / stringWidth;

          var ratio;

          if (!txt2) {
            ratio = 13;
          } else {
            ratio = 7;
          }

          // var newFontSize = Math.floor(7 * widthRatio);
          var newFontSize = Math.floor(ratio * widthRatio);
          var elementHeight = chart.innerRadius * 2;

          // Pick a new font size so it will not be larger than the height of label.
          var fontSizeToUse = Math.min(newFontSize, elementHeight);

          fontSizeToUse = fontSizeToUse * 1.5;

          //Set font settings to draw it correctly.
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          var centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
          var centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
          ctx.font = fontSizeToUse + 'px ' + chartFontStyle;
          ctx.fillStyle = doughnutCenterTextColor;

          //Draw text in center

          var cartHeight = chart.chartArea.top - chart.chartArea.bottom;

          // --- content text ---

          var temp = 0;

          if (!txt2) {
            // temp = (chart.chartArea.top - chart.chartArea.bottom) / 5 / 5;
            temp = (chart.chartArea.top - chart.chartArea.bottom) / 5 / 6;

            if (temp > -10) {
              temp = -10;
            }

            ctx.fillStyle = color;
            ctx.fillText(txt1, centerX, centerY - temp);

          } else {
            temp = (chart.chartArea.top - chart.chartArea.bottom) / 5 / 3;

            if (temp > -19) {
              temp = -19;
            }

            ctx.fillStyle = color;
            ctx.fillText(txt2, centerX, centerY - temp);
            ctx.fillText(txt1, centerX, centerY);
          }

          // --- title text ---

          ctx.font = fontSizeToUse - 2 + 'px ' + fontStyle;
          ctx.fillStyle = doughnutCenterTitleColor;
          ctx.fillText(title, centerX, centerY + temp);

          // console.log (ctx);
        }
      },
    },
  ];

  // ----------------------------- Pie Chart -----------------------------

  var __pieChartOptions = {
    maintainAspectRatio: false,

    elements: {
        arc: {
            borderColor : '#fff'
        }
    },

    tooltips: {
      callbacks: {
        title: function (tooltipItem, data) {
          return data['labels'][tooltipItem[0]['index']];
        },
        label: function (tooltipItem, data) {
          return data['datasets'][0]['data'][tooltipItem['index']];
        },
      },
    },

    legend: {
      display: false,
      position : 'bottom'
    },

    legendCallback: legendCallback,
  };

  // ----------------------------- Line Chart -----------------------------

  var __lineChartOptions = {
    maintainAspectRatio: false,

    scales: {
      xAxes: [
        {
          gridLines: {
            color: '#efeff4',
            drawTicks: false,
            tickMarkLength: 0,
          },

          ticks: {
            fontColor: '#aaaaaf',
            padding: 10,
            fontSize: 11,
            autoSkip:true,
            source : 'data',
            beginAtZero:true,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            color: '#efeff4',
            zeroLineColor: '#d1d1d6',
            drawTicks: false,
            tickMarkLength: 0,
          },
          ticks: {
            fontColor: '#aaaaaf',
            padding: 10,
            fontSize: 11,
            beginAtZero:true,
          },
        },
      ],
    },
    elements: {
      line: {
        // tension: 0.000001,
        tension: 0.015,
      },
      point: {
        radius: 0,
      },
    },

    legend: {
      display: false,
      position : 'bottom',
    },

    legendCallback: legendCallback,

    tooltips: {
      mode: 'nearest',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true,
    },
    plugins: {
      zoom: {
        zoom: {
          enabled: true,
          drag: true,
          mode: 'x',
          speed: 0.05,
        },
      },
    },
  };

  // ----------------------------- Progress Chart -----------------------------

  var __progressChartOptions = {
    maintainAspectRatio: false,

    legend: {
      display: false,
    },
    // maintainAspectRatio: false,
    // cutoutPercentage: 84,
    cutoutPercentage: 74,

    tooltips: {
      enabled: false,
    },

    elements: {
      arc: {
        borderWidth: 0,

      },
      center: {
        titleColor : '#ababab',
        title: undefined,
      },
    },
  };

  var progressChartPlugins = [
    {
      beforeDraw: function(chart) {
        // chart.canvas.parentNode.className = 'chart-progress';

        var ctx = chart.chart.ctx;

        //Get options from the center object in options
        var centerConfig = chart.config.options.elements.center;
        var fontStyle = chartFontStyle;
        var centerTitle = centerConfig.title;
        var centerTitleColor = centerConfig.titleColor;
        var txt = chart.config.data.datasets[0].data[0] + '%';
        var sidePadding = 15 || 20;
        var sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2);
        //Start with a base font of 30px
        ctx.font = '30px ' + fontStyle;

        //Get the width of the string and also the width of the element minus 10 to give it 5px side padding
        var stringWidth = ctx.measureText(txt).width;
        var elementWidth = chart.innerRadius * 2 - sidePaddingCalculated;

        var ratio = 10;

        // Find out how much the font can grow in width.
        var widthRatio = elementWidth / stringWidth;
        // var newFontSize = Math.floor (30 * widthRatio);
        var newFontSize = Math.floor(ratio * widthRatio);

        var elementHeight = chart.innerRadius * 2;

        // Pick a new font size so it will not be larger than the height of label.
        var fontSizeToUse = Math.min(newFontSize, elementHeight);

        if (fontSizeToUse > 20) fontSizeToUse = 20;
        if (fontSizeToUse < 16) fontSizeToUse = 16;

        //Set font settings to draw it correctly.
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        var centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
        var centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
        ctx.font = fontSizeToUse + 'px ' + chartFontStyle;


        //Draw text in center
        if (centerTitle !== undefined && centerTitle !== null) {
          ctx.fillStyle = centerTitleColor;
          ctx.fillText(centerTitle, centerX, centerY - fontSizeToUse / 1.5);
          ctx.fillText(txt, centerX, centerY + fontSizeToUse / 1.5);
        }
        else {
          ctx.fillText(txt, centerX, centerY);
        }


      },
    },
  ];

  // ----------------------------- Bubble Chart -----------------------------

  var __bubbleChartOptions = {
    maintainAspectRatio: false,

    scales: {
      xAxes: [
        {
          gridLines: {
            color: '#efeff4',
            zeroLineColor: '#d1d1d6',
            drawTicks: false,
            tickMarkLength: 0,
          },
          ticks: {
            fontColor: '#aaaaaf',
            padding: 8,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            color: '#efeff4',
            zeroLineColor: '#d1d1d6',
            drawTicks: false,
            tickMarkLength: 0,
          },
          ticks: {
            fontColor: '#aaaaaf',
            padding: 8,
          },
        },
      ],
    },
    legendCallback: legendCallback,

    legend : {
      position : 'bottom',
      display : false,
    }
  };

  // ----------------------------- Bar Chart >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  Chart.elements.Rectangle.prototype.draw = function() {

    var ctx = this._chart.ctx;
    var vm = this._view;

    var left, right, top, bottom, signX, signY, borderSkipped, radius;
    var borderWidth = vm.borderWidth;

    // If radius is less than 0 or is large enough to cause drawing errors a max
    //      radius is imposed. If cornerRadius is not defined set it to 0.
    var cornerRadius = this._chart.config.options.cornerRadius;
    if(cornerRadius < 0){ cornerRadius = 0; }
    if(typeof cornerRadius == 'undefined'){ cornerRadius = 0; }

    if (!vm.horizontal) {
        // bar
        left = vm.x - vm.width / 2;
        right = vm.x + vm.width / 2;
        top = vm.y;
        bottom = vm.base;
        signX = 1;
        signY = bottom > top? 1: -1;
        borderSkipped = vm.borderSkipped || 'bottom';
    } else {
        // horizontal bar
        left = vm.base;
        right = vm.x;
        top = vm.y - vm.height / 2;
        bottom = vm.y + vm.height / 2;
        signX = right > left? 1: -1;
        signY = 1;
        borderSkipped = vm.borderSkipped || 'left';
    }

    // Canvas doesn't allow us to stroke inside the width so we can
    // adjust the sizes to fit if we're setting a stroke on the line
    if (borderWidth) {
        // borderWidth shold be less than bar width and bar height.
        var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
        borderWidth = borderWidth > barSize? barSize: borderWidth;
        var halfStroke = borderWidth / 2;
        // Adjust borderWidth when bar top position is near vm.base(zero).
        var borderLeft = left + (borderSkipped !== 'left'? halfStroke * signX: 0);
        var borderRight = right + (borderSkipped !== 'right'? -halfStroke * signX: 0);
        var borderTop = top + (borderSkipped !== 'top'? halfStroke * signY: 0);
        var borderBottom = bottom + (borderSkipped !== 'bottom'? -halfStroke * signY: 0);
        // not become a vertical line?
        if (borderLeft !== borderRight) {
            top = borderTop;
            bottom = borderBottom;
        }
        // not become a horizontal line?
        if (borderTop !== borderBottom) {
            left = borderLeft;
            right = borderRight;
        }
    }

    ctx.beginPath();
    ctx.fillStyle = vm.backgroundColor;
    ctx.strokeStyle = vm.borderColor;
    ctx.lineWidth = borderWidth;

    // Corner points, from bottom-left to bottom-right clockwise
    // | 1 2 |
    // | 0 3 |
    var corners = [
        [left, bottom],
        [left, top],
        [right, top],
        [right, bottom]
    ];

    // Find first (starting) corner with fallback to 'bottom'
    var borders = ['bottom', 'left', 'top', 'right'];
    var startCorner = borders.indexOf(borderSkipped, 0);
    if (startCorner === -1) {
        startCorner = 0;
    }

    function cornerAt(index) {
        return corners[(startCorner + index) % 4];
    }

    // Draw rectangle from 'startCorner'
    var corner = cornerAt(0);
    ctx.moveTo(corner[0], corner[1]);

    for (var i = 1; i < 4; i++) {
        corner = cornerAt(i);
        nextCornerId = i+1;
        if(nextCornerId == 4){
            nextCornerId = 0
        }

        nextCorner = cornerAt(nextCornerId);

        width = corners[2][0] - corners[1][0];
        height = corners[0][1] - corners[1][1];
        x = corners[1][0];
        y = corners[1][1];

        var radius = cornerRadius;
        // Fix radius being too large
        if(radius > Math.abs(height)/2){
            radius = Math.floor(Math.abs(height)/2);
        }
        if(radius > Math.abs(width)/2){
            radius = Math.floor(Math.abs(width)/2);
        }

        // console.log(this._chart.config.options);

        if(this._chart.config.options.scales.xAxes[0].stacked ||
          this._chart.config.options.scales.yAxes[0].stacked) {
            // drawStackedBar(this._chart.data.datasets, ctx, vm, width, height, x, y, radius);
            drawStackedBar(this, width, height, x, y, radius);
        } else {
            drawBar(this, width, height, x, y, radius);
        }
    }

    ctx.fill();
    if (borderWidth) {
        ctx.stroke();
    }
  };

  function drawBar(chart, width, height, x, y, radius) {

    var ctx = chart._chart.ctx;
    var vm = chart._view;

    if(height < 0){

      // Negative values in a standard bar chart
      x_tl = x;           x_tr = x+width;
      y_tl = y+height;    y_tr = y+height;

      x_bl = x;           x_br = x+width;
      y_bl = y;           y_br = y;

      var backupR = radius;

      // Draw
      ctx.moveTo(x_bl+radius, y_bl);
      ctx.lineTo(x_br-radius, y_br);
      ctx.quadraticCurveTo(x_br, y_br, x_br, y_br-radius);

      if(!chart._chart.config.options.allRounded)
        radius = 0;

      ctx.lineTo(x_tr, y_tr+radius);

      radius = backupR;

      ctx.quadraticCurveTo(x_tr, y_tr, x_tr-radius, y_tr);

      if(!chart._chart.config.options.allRounded)
        radius = 0;

      ctx.lineTo(x_tl+radius, y_tl);
      ctx.quadraticCurveTo(x_tl, y_tl, x_tl, y_tl+radius);

      radius = backupR;

      ctx.lineTo(x_bl, y_bl-radius);
      ctx.quadraticCurveTo(x_bl, y_bl, x_bl+radius, y_bl);

    }else if(width < 0){

        // Negative values in a horizontal bar chart
        x_tl = x+width;     x_tr = x;
        y_tl= y;            y_tr = y;

        x_bl = x+width;     x_br = x;
        y_bl = y+height;    y_br = y+height;

        var backupR = radius;

        if(!chart._chart.config.options.allRounded)
          radius = 0;

        // Draw
        ctx.moveTo(x_bl+radius, y_bl);
        ctx.lineTo(x_br-radius, y_br);
        ctx.quadraticCurveTo(x_br, y_br, x_br, y_br-radius);
        ctx.lineTo(x_tr, y_tr+radius);

        radius = backupR;

        ctx.quadraticCurveTo(x_tr, y_tr, x_tr-radius, y_tr);
        ctx.lineTo(x_tl+radius, y_tl);
        ctx.quadraticCurveTo(x_tl, y_tl, x_tl, y_tl+radius);
        ctx.lineTo(x_bl, y_bl-radius);
        ctx.quadraticCurveTo(x_bl, y_bl, x_bl+radius, y_bl);

    }else{

        if(vm.horizontal) {

            var backupR = radius;

            //Positive Value
            ctx.moveTo(x + radius, y);
            ctx.lineTo(x + width - radius, y);
            ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
            ctx.lineTo(x + width, y + height - radius);

            ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
            ctx.lineTo(x + radius, y + height);

            if(!chart._chart.config.options.allRounded)
              radius = 0;

            ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
            ctx.lineTo(x, y + radius);
            ctx.quadraticCurveTo(x, y, x + radius, y);

        } else {

            var backupR = radius;

            //Positive Value
            ctx.moveTo(x + radius, y);
            ctx.lineTo(x + width - radius, y);
            ctx.quadraticCurveTo(x + width, y, x + width, y + radius);

            if(!chart._chart.config.options.allRounded)
              radius = 0;

            ctx.lineTo(x + width, y + height - radius);

            radius = backupR;

            ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);

            if(!chart._chart.config.options.allRounded)
              radius = 0;

            ctx.lineTo(x + radius, y + height);
            ctx.quadraticCurveTo(x, y + height, x, y + height - radius);

            radius = backupR;

            ctx.lineTo(x, y + radius);
            ctx.quadraticCurveTo(x, y, x + radius, y);

        }
    }
  }

  function drawStackedBar(chart, width, height, x, y, radius) {

    var ctx = chart._chart.ctx;
    var vm = chart._view;

    if(vm.horizontal) {

      var showArray = [];

      for(var i = 0; i < chart._chart.data.datasets.length; i++) {


        if(chart._chart.getDatasetMeta(i).hidden === null ||
        !chart._chart.getDatasetMeta(i).hidden) {
          showArray.push(i);
        }
      }

      var first = false;
      var last = false;

      if(showArray.length > 0) {

        if(chart._datasetIndex === showArray[0]) {
          first = true;
        }

        if(chart._datasetIndex === showArray[showArray.length - 1]) {
          last = true;
        }
      }


      if(first && last) {

        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);

      } else if(first && !last) {

        var backupR = radius;

        radius = 0;

        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);

        radius = backupR;

        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);

      } else if(!first && last) {

        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);

        radius = 0;

        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);

      } else {

        ctx.moveTo(x, y);
        ctx.lineTo(x + width, y);
        ctx.lineTo(x + width, y + height );
        ctx.lineTo(x , y + height);
        ctx.lineTo(x, y );

      }

    } else {

      if(chart._datasetIndex == 0) {

        var backupR = radius;

        radius = 0;

        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);

        radius = backupR;

        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);

        radius = 0;

        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);

      } else if(chart._datasetIndex === chart._chart.data.datasets.length-1) {

        var backupR = radius;

        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);

        radius = 0;

        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);

        radius = backupR;

        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);

      } else {

        ctx.moveTo(x, y);
        ctx.lineTo(x + width, y);
        ctx.lineTo(x + width, y + height );
        ctx.lineTo(x , y + height);
        ctx.lineTo(x, y );

      }
    }
  }

  var __barChartOptions = {
    maintainAspectRatio: false,
    cornerRadius: 2,
      legend: {
          display: false,
          position : 'bottom',
      },
      scales: {
          xAxes: [{
            barPercentage : 0.15,
              gridLines: {
                  color: '#efeff4',
                  drawTicks: false,
                  tickMarkLength: 0,
              },
              ticks: {
                  beginAtZero:true,
                  fontColor: '#aaaaaf',
                  padding: 8,
              }
          }],
          yAxes: [{
              gridLines: {
                  drawBorder: false,
                  color: '#efeff4',
                  zeroLineColor: '#d1d1d6',
                  drawTicks: false,
                  tickMarkLength: 0,
              },
              ticks: {
                  beginAtZero:true,
                  fontColor: '#aaaaaf',
                  padding: 15,
              }
          }]
      },
      legendCallback: legendCallback,
  };



  var __barChartHorizontalOptions = {
    maintainAspectRatio: false,
    cornerRadius: 2,
    legend: {
        display: false,
    },
    scales: {
        yAxes: [{
            barThickness : 36,
            gridLines: {
                color: 'rgba(0, 0, 0, 0.0)',

            },
            ticks: {
                beginAtZero:true,
                display: false,
            },
        }],
        xAxes: [{
            gridLines: {
                drawBorder: false,
                color: '#efeff4',
            },
            ticks: {
                beginAtZero:true,
                fontColor: '#aaaaaf',
                padding: 15,
            }
        }]
      },
      legendCallback: legendCallback,
  };

  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Bar Chart Type1 -----------------------------

  // ----------------------------- Stacked Bar Chart Type >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  var __stackedBarChartOptions = {
    maintainAspectRatio: false,
    cornerRadius: 0,
    legend: {
        display: false,
        position : 'bottom',
      },
    scales: {
      xAxes: [{

        barPercentage : 0.15,
        stacked: true,
        gridLines: {
          color: '#efeff4',
          drawTicks: false,
          tickMarkLength: 0,
        },
        ticks: {
          padding: 8,
          fontColor: '#aaaaaf',
          beginAtZero:true,
        }
      }],
      yAxes: [{

        stacked: true,
        gridLines: {
            color: '#efeff4',
            zeroLineColor: '#d1d1d6',
            drawTicks: false,
            tickMarkLength: 0,
          },
        ticks: {
          fontColor: '#aaaaaf',
          padding: 8,
        }
      }]
    },
    legendCallback: legendCallback,
  };

  var __stackedBarChartHorizontalOptions = {
    maintainAspectRatio: false,
    cornerRadius: 80,
    legend: {
        display: false,
        position: 'bottom',
      },
    scales: {
      xAxes: [{
        barPercentage : 0.15,

        stacked: true,
        gridLines: {
            color: 'rgba(0, 0, 0, 0.0)',
            zeroLineColor: 'transparent'
          },
          ticks: {
            // beginAtZero:true,
            display: false,
        },
      }],
      yAxes: [{
        barThickness : 10,
        stacked: true,
        gridLines: {
          color: 'rgba(0, 0, 0, 0.0)',
        },
        ticks: {
          padding: 20,
          fontColor: '#aaaaaf',
        }
      }]
    },
    legendCallback: legendCallback,
  };

  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Stacked Bar Chart Type -----------------------------

  // ----------------------------- Histogram Chart Type >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  var histogramOptions = {
    maintainAspectRatio: false,
    legend: {
        display: false,
        position : 'bottom',
    },
    scales: {
        xAxes:[
        {
            barPercentage: 0.99,
            categoryPercentage: 0.99,
            gridLines: {
                color: 'rgba(0, 0, 0, 0.0)',
            },
            ticks: {
                fontColor: '#aaaaaf',
            },
            drawTicks: false,
            tickMarkLength: 0,
        }],
        yAxes: [{
            gridLines: {
                color: '#efeff4',
                drawTicks: false,
                tickMarkLength: 0,
            },
            ticks: {
                fontColor: '#aaaaaf',
                padding: 8,
                beginAtZero:true,
            },
        }],
    },
  };

  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Histogram Chart Type -----------------------------

  // ----------------------------- Group Bar Chart Type >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  var __groupBarChartOptions = {
    maintainAspectRatio: false,
    cornerRadius: 2,
    legend: {
        display: false,
        position : 'bottom',
    },
    scales: {
        xAxes: [{
            barPercentage : 0.8,
            categoryPercentage : 0.5,
            gridLines: {
                color: '#efeff4',
                drawTicks: false,
                tickMarkLength: 0,
            },
            ticks: {
                beginAtZero:true,
                fontColor: '#aaaaaf',
                padding: 8,
            }
        }],
        yAxes: [{
            // barThickness : 36,
            type: 'linear',
            display: true,
            position: 'left',
            id: 'y-axis-1',
            gridLines: {
              drawBorder: false,
              color: '#efeff4',
              zeroLineColor: '#d1d1d6',
              drawTicks: false,
              tickMarkLength: 0,
            },
            ticks: {
                beginAtZero:true,
                fontColor: '#aaaaaf',
                padding: 8,
            },

        }, {
            // barThickness : 36,
            type: 'linear',
            display: true,
            position: 'right',
            id: 'y-axis-2',
            ticks: {
                beginAtZero:true,
            },
            gridLines: {
                color: 'rgba(0, 0, 0, 0.0)',
                zeroLineColor: '#d1d1d6',
            },
        }],
    },

    legendCallback: legendCallback,
  };

  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Group Bar Chart Type -----------------------------

  // ----------------------------- Polar Chart Type >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  var __polarChartOptions = {
    maintainAspectRatio: false,
    elements: {
      arc: {
          borderColor : '#fff'
      }
    },
    legend: {
      display: false,
      position : 'bottom'
    },
    scale: {
      ticks: {
        beginAtZero: true,
        fontColor: '#aaaaaf',
      },
      gridLines: {
          color: '#efeff4'
      },
      reverse: false
    },
    animation: {
      animateRotate: false,
      animateScale: true
    },
    legendCallback: legendCallback,

  };

  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Polar Chart Type -----------------------------

  // ----------------------------- Radar Chart Type >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  var __radarChartOptions = {
    maintainAspectRatio: false,
    legend: {
        display: false,
        position : 'bottom'
    },
    scale: {
      ticks: {
        beginAtZero: true,
        fontColor: '#aaaaaf'
      },
      angleLines: { color: '#efeff4' },
      gridLines: {
        color: '#efeff4'
      },
    },

    legendCallback: legendCallback,
  };

  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Radar Chart Type -----------------------------

  // ----------------------------- Scatterplot Chart Type >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  var __scatterChartOptions = {
    maintainAspectRatio: false,
    legend: {
        display: false,
        position : 'bottom',
    },
    scales: {
        xAxes: [{
            gridLines: {
                color: '#efeff4',
                zeroLineColor: '#d1d1d6',
                drawTicks: false,
                tickMarkLength: 0,
            },
            ticks: {
                fontColor: '#aaaaaf',
                padding: 8,
            }
        }],
        yAxes: [{
            gridLines: {
                color: '#efeff4',
                zeroLineColor: '#d1d1d6',
                drawTicks: false,
                tickMarkLength: 0,
            },
            ticks: {
                fontColor: '#aaaaaf',
                padding: 8,
            },
        }],
    },

    legendCallback: legendCallback,
  };

  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Scatterplot Chart Type -----------------------------

  var lightColorSet  = {

    // ----------------------------- Chart Colors - 차트의 데이터 시각화를 위한 12개의 색상표입니다.

    chartColorSet1 : [
      '#add45c',
      '#58c684',
      '#00baad',
      '#2b7b9b',
      '#3d3d6b',
      '#501849',
      '#900a3f',
      '#c60039',
      '#ff5733',
      '#ff8d19',
      '#ffc300',
      '#ecde52',
    ],

    chartColorSet2 : [
      '#3d3d6b',
      '#501849',
      '#900a3f',
      '#c60039',
      '#ff5733',
      '#ff8d19',
      '#ffc300',
      '#ecde52',
      '#add45c',
      '#58c684',
      '#00baad',
      '#2b7b9b',
    ],

    chartColorSet3 : [
      '#ff5733',
      '#ff8d19',
      '#ffc300',
      '#ecde52',
      '#add45c',
      '#58c684',
      '#00baad',
      '#2b7b9b',
      '#3d3d6b',
      '#501849',
      '#900a3f',
      '#c60039',
    ],

    chartColorSet4 : [
      '#ffc300',
      '#ecde52',
      '#add45c',
      '#58c684',
      '#00baad',
      '#2b7b9b',
      '#3d3d6b',
      '#501849',
      '#900a3f',
      '#c60039',
      '#ff5733',
      '#ff8d19',
    ],

    chartColorSet5 : [
      '#900a3f',
      '#c60039',
      '#ff5733',
      '#ff8d19',
      '#ffc300',
      '#ecde52',
      '#add45c',
      '#58c684',
      '#00baad',
      '#2b7b9b',
      '#3d3d6b',
      '#501849',
    ],

    // ---------------- Categorical 3colors - 카테고리 범주가 3개일 경우의 권장하는 Color Set

    chartColorCategory3_1 : [
      '#2b7b9b',
      '#00baad',
      '#58c684',
    ],

    chartColorCategory3_2 : [
      '#575798',
      '#932c86',
      '#d80f5e',
    ],

    chartColorCategory3_3 : [
      '#01e3d3',
      '#3fa2ca',
      '#575798',
    ],

    chartColorCategory3_4 : [
      '#c60039',
      '#ff5733',
      '#ff8d19',
    ],

    chartColorCategory3_5 : [
      '#ffc300',
      '#ecde52',
      '#add45c',
    ],

    chartColorCategory3_6 : [
      '#ff795c',
      '#ffa447',
      '#ffcf33',
    ],

    // ---------------- Categorical 5colors - 카테고리 범주가 5일 경우의 권장하는 Color Set

    chartColorCategory5_1 : [
      '#2b7b9b',
      '#00baad',
      '#58c684',
      '#add45c',
      '#ecde52',
    ],

    chartColorCategory5_2 : [
      '#3d3d6b',
      '#2b7b9b',
      '#00baad',
      '#58c684',
      '#add45c',
    ],

    chartColorCategory5_3 : [
      '#575798',
      '#3fa2ca',
      '#01e3d3',
      '#7ad29d',
      '#bfde80',
    ],

    chartColorCategory5_4 : [
      '#c60039',
      '#ff5733',
      '#ff8d19',
      '#ffc300',
      '#ecde52',
    ],

    chartColorCategory5_5 : [
      '#ff8d19',
      '#ffc300',
      '#ecde52',
      '#add45c',
      '#58c684',
    ],

    chartColorCategory5_6 : [
      '#ff795c',
      '#ffa447',
      '#ffcf33',
      '#f0e577',
      '#bfde80',
    ],


    // ---------------- Sequential Color Scales 단일 데이터의 높고 낮은 수치나 양적 데이터를 나타낼 때 사용되는 색상입니다.

    // 하나의 색상에 명도 차이를 조정하여 밀도나 높이 차이를 표시할 수 있습니다.
    // 하나의 색상을 사용하거나 비슷한 두 가지 색상을 사용할 수 있습니다.

    // Single-hue Sequential Color Scales

    chartColorSeq1 : [
      '#900a3f',
      '#d80f5e',
      '#f24187',
      '#f789b4',
      '#fcd0e1',
    ],

    chartColorSeq2 : [
      '#c60039',
      '#ff0950',
      '#ff4c7f',
      '#ff8eae',
      '#ffd0de',
    ],

    chartColorSeq3 : [
      '#ff5733',
      '#ff795c',
      '#ff9a85',
      '#ffbcad',
      '#ffddd6',
    ],

    chartColorSeq4 : [
      '#ff8d19',
      '#ffa447',
      '#ffba75',
      '#ffd1a3',
      '#ffe8d1',
    ],

    chartColorSeq5 : [
      '#ffc300',
      '#ffcf33',
      '#ffdb66',
      '#ffe799',
      '#fff3cc',
    ],

    chartColorSeq6 : [
      '#ecde52',
      '#f0e577',
      '#f4ec9c',
      '#f8f3c0',
      '#faf8db',
    ],

    chartColorSeq7 : [
      '#add45c',
      '#bfde80',
      '#d2e7a5',
      '#e4f1c9',
      '#eff6e1',
    ],

    chartColorSeq8 : [
      '#58c684',
      '#7ad29d',
      '#9cddb6',
      '#bfe9d0',
      '#e1f5e9',
    ],

    chartColorSeq9 : [
      '#00baad',
      '#01e3d3',
      '#42f8ea',
      '#a2fff8',
      '#d9fffc',
    ],

    chartColorSeq10 : [
      '#2b7b9b',
      '#3fa2ca',
      '#73bbd8',
      '#a6d4e6',
      '#daedf5',
    ],

    chartColorSeq11 : [
      '#3d3d6b',
      '#575798',
      '#8080b7',
      '#aeaed1',
      '#dbdbeb',
    ],

    chartColorSeq12 : [
      '#501849',
      '#932c86',
      '#c94cba',
      '#dd8fd4',
      '#f1d1ed',
    ],

    // Multi-hue Sequential Color Scales



    chartColorMultiHueSeq1 : [
      '#2b7b9b',
      '#5675c9',
      '#9166cc',
      '#dc6ebf',
      '#f5aed2',
    ],

    chartColorMultiHueSeq2 : [
      '#58c684',
      '#01b8b8',
      '#3fa2ca',
      '#77aed6',
      '#c1cae5',
    ],

    chartColorMultiHueSeq3 : [
      '#ecde52',
      '#a9dc77',
      '#8fd88a',
      '#8adeba',
      '#bbf5ea',
    ],

    chartColorMultiHueSeq4 : [
      '#ff8d19',
      '#e0c256',
      '#d5d67b',
      '#d2e7a5',
      '#d1efcb',
    ],

    chartColorMultiHueSeq5 : [
      '#c60039',
      '#d93d38',
      '#e76239',
      '#ffa448',
      '#facf85',
    ],

    chartColorMultiHueSeq6 : [
      '#4f1849',
      '#a52e6d',
      '#ff4c7f',
      '#ff788b',
      '#ffbeb6',
    ],

    chartColorMultiHueSeq7 : [
      '#3c3d6b',
      '#93468f',
      '#c44391',
      '#f86c9d',
      '#ffb1c8',
    ],

    // ---------------- Diverging Color Scales - 두 개의 상반된 양적 데이터를 비교하는 차트를 사용할 때에는 서로 대비가 되는 두 가지 색상을 사용합니다.
    // 평균보다 높거나 낮은 데이터 또는 양수와 음수의 값을 비교할 때 자연스럽습니다.
    // 보색 또는 대비되는 색상을 양 끝에 두고 중앙에는 중립적인 색상 또는 흰색을 배치하여 분리합니다.

    chartColorDiverging1 : [
      '#900a3f',
      '#f24187',
      '#fcd0e1',
      '#daedf5',
      '#73bbd8',
      '#2b7b9b',
    ],

    chartColorDiverging2 : [
      '#501849',
      '#d671ca',
      '#f1d1ed',
      '#d9fffc',
      '#42f8ea',
      '#00baad',
    ],

    chartColorDiverging3 : [
      '#3d3d6b',
      '#8080b7',
      '#dbdbeb',
      '#bfe9d0',
      '#9cddb6',
      '#58c684',
    ],

    chartColorDiverging4 : [
      '#2b7b9b',
      '#73bbd8',
      '#daedf5',
      '#e4f1c9',
      '#d2e7a5',
      '#add45c',
    ],

    chartColorDiverging5 : [
      '#00baad',
      '#42f8ea',
      '#d9fffc',
      '#f8f3c0',
      '#f4ec9c',
      '#ecde52',
    ],

    chartColorDiverging6 : [
      '#58c684',
      '#9cddb6',
      '#e1f5e9',
      '#fff3cc',
      '#ffdb66',
      '#ffc300',
    ],

    chartColorDiverging7 : [
      '#add15c',
      '#d2e7a5',
      '#eff6e1',
      '#ffd1a3',
      '#ffba75',
      '#ff8d19',
    ],

    chartColorDiverging8 : [
      '#ffc300',
      '#ffdb66',
      '#fff3cc',
      '#ffd0de',
      '#ff4c7f',
      '#c60039',
    ],

    chartColorDiverging9 : [
      '#ff5733',
      '#ff9a85',
      '#ffddd6',
      '#f1d1ed',
      '#c94cba',
      '#501849',
    ],

    // ---------------- Special Element (Neutral color) - 툴팁, 차트 제목, 데이터 포인트, 차트 축, 선 등 데이터 요소들을 제외한 나머지 요소들은 중립적인 색을 사용합니다.

    chartColorNeutral1 : [
      '#131516',
      '#373d3f',
      '#555f61',
      '#6f7c80',
      '#8c979a',
    ],

    chartColorNeutral2 : [
      '#8c979a',
      '#a7afb2',
      '#c1c7c9',
      '#dadedf',
      '#f2f3f4',
    ],

    chartColorNeutral3 : [
      '#0f0f0f',
      '#2b2b2b',
      '#474747',
      '#636363',
      '#7f7f7f',
    ],

    chartColorNeutral4 : [
      '#7f7f7f',
      '#9c9c9c',
      '#b8b8b8',
      '#d4d4d4',
      '#f0f0f0',
    ],

    chartColorNeutral5 : [
      '#161413',
      '#3e3937',
      '#605856',
      '#7f7470',
      '#99908d',
    ],

    chartColorNeutral6 : [
      '#99908d',
      '#b1aaa8',
      '#c8c3c1',
      '#dedbda',
      '#f4f3f2',
    ],


    progressChartColor1 : '#e6785c',
    progressChartColor2 : '#5cb8e5'
  };

  var darkColorSet  = {

    // ----------------------------- Chart Colors - 차트의 데이터 시각화를 위한 12개의 색상표입니다.

    chartColorSet1 : [
      '#add45c',
      '#58c684',
      '#00baad',
      '#2e84a6',
      '#6363ac',
      '#af329f',
      '#cc0c53',
      '#e30606',
      '#ff5733',
      '#ff8d19',
      '#ffc300',
      '#ecde52',
    ],

    chartColorSet2 : [
      '#6363ac',
      '#af329f',
      '#cc0c53',
      '#e30606',
      '#ff5733',
      '#ff8d19',
      '#ffc300',
      '#ecde52',
      '#add45c',
      '#58c684',
      '#00baad',
      '#2e84a6',
    ],

    chartColorSet3 : [
      '#ff5733',
      '#ff8d19',
      '#ffc300',
      '#ecde52',
      '#add45c',
      '#58c684',
      '#00baad',
      '#2e84a6',
      '#6363ac',
      '#af329f',
      '#cc0c53',
      '#e30606',
    ],

    chartColorSet4 : [
      '#ffc300',
      '#ecde52',
      '#add45c',
      '#58c684',
      '#00baad',
      '#2e84a6',
      '#6363ac',
      '#af329f',
      '#cc0c53',
      '#e30606',
      '#ff5733',
      '#ff8d19',
    ],

    chartColorSet5 : [
      '#cc0c53',
      '#e30606',
      '#ff5733',
      '#ff8d19',
      '#ffc300',
      '#ecde52',
      '#add45c',
      '#58c684',
      '#00baad',
      '#2e84a6',
      '#6363ac',
      '#af329f',
    ],

    // ---------------- Sequential Color Scales
    // 단일 데이터의 높고 낮은 수치나 양적 데이터를 나타낼 때에는 색상의 명도 차이를 조정하여 표시합니다.
    // 인접한 두 가지 색상을 혼합하면 단계 별 차이가 더 명확하게 드러나기 때문에 많은 단계를 표현하기에 적절합니다.
    // 색상이 어두울수록 높거나 많은 수치를 나타내는 것이 자연스럽기 때문에 색상의 방향을 반대로 하여 사용자에게 혼란을 줘서는 안됩니다.

    // ---------------- Categorical 3colors - 카테고리 범주가 3개일 경우의 권장하는 Color Set

    chartColorCategory3_1 : [
      '#e30606',
      '#ff5733',
      '#ff8d19',
    ],

    chartColorCategory3_2 : [
      '#ffc300',
      '#ecde52',
      '#add45c',
    ],

    chartColorCategory3_3 : [
      '#2e84a6',
      '#00baad',
      '#58c684',
    ],

    chartColorCategory3_4 : [
      '#6363ac',
      '#af329f',
      '#cc0c53',
    ],

    chartColorCategory3_5 : [
      '#00baad',
      '#2e84a6',
      '#6363ac',
    ],

    chartColorCategory3_6 : [
      '#ff795c',
      '#ffa447',
      '#ffcf33',
    ],

    // ---------------- Categorical 5colors - 카테고리 범주가 5일 경우의 권장하는 Color Set

    chartColorCategory5_1 : [
      '#e30606',
      '#ff5733',
      '#ff8d19',
      '#ffc300',
      '#ecde52',
    ],

    chartColorCategory5_2 : [
      '#ff8d19',
      '#ffc300',
      '#ecde52',
      '#add45c',
      '#58c684',
    ],

    chartColorCategory5_3 : [
      '#2e84a6',
      '#00baad',
      '#58c684',
      '#add45c',
      '#ecde52',
    ],

    chartColorCategory5_4 : [
      '#6363ac',
      '#2e84a6',
      '#00baad',
      '#58c684',
      '#add45c',
    ],

    chartColorCategory5_5 : [
      '#ff795c',
      '#ffa447',
      '#ffcf33',
      '#f0e577',
      '#bfde80',
    ],

    chartColorCategory5_6 : [
      '#af329f',
      '#6363ac',
      '#2e84a6',
      '#00baad',
      '#58c684',
    ],


    // ---------------- Sequential Color Scales
    // 단일 데이터의 높고 낮은 수치나 양적 데이터를 나타낼 때에는 색상의 명도 차이를 조정하여 표시합니다.
    // 인접한 두 가지 색상을 혼합하면 단계 별 차이가 더 명확하게 드러나기 때문에 많은 단계를 표현하기에 적절합니다.
    // 색상이 어두울수록 높거나 많은 수치를 나타내는 것이 자연스럽기 때문에 색상의 방향을 반대로 하여 사용자에게 혼란을 줘서는 안됩니다.

    chartColorSeq1 : [
      '#cc0c53',
      '#f11869',
      '#f44988',
      '#f789b4',
      '#fbc2d7',
    ],

    chartColorSeq2 : [
      '#e30606',
      '#fa2224',
      '#fa5453',
      '#fc9f9f',
      '#fed1d1',
    ],

    chartColorSeq3 : [
      '#ff5733',
      '#ff795c',
      '#ff9a85',
      '#ffbcad',
      '#ffddd6',
    ],

    chartColorSeq4 : [
      '#ff8d19',
      '#ffa447',
      '#ffba75',
      '#ffd1a3',
      '#ffe8d1',
    ],

    chartColorSeq5 : [
      '#ffc300',
      '#ffcf33',
      '#ffdb66',
      '#ffe799',
      '#fff3cc',
    ],

    chartColorSeq6 : [
      '#ecde52',
      '#f0e577',
      '#f4ec9c',
      '#f8f3c0',
      '#faf8db',
    ],

    chartColorSeq7 : [
      '#add45c',
      '#bfde80',
      '#d2e7a5',
      '#e4f1c9',
      '#eff6e1',
    ],

    chartColorSeq8 : [
      '#58c684',
      '#7ad29d',
      '#9cddb6',
      '#bfe9d0',
      '#e1f5e9',
    ],

    chartColorSeq9 : [
      '#00baad',
      '#00d3c5',
      '#04eddc',
      '#3bfff1',
      '#bafff9',
    ],

    chartColorSeq10 : [
      '#2e84a6',
      '#3da2c9',
      '#64b5d4',
      '#a2d2e5',
      '#c9e5f0',
    ],

    chartColorSeq11 : [
      '#6363ac',
      '#8384be',
      '#a6a6cf',
      '#c7c6e1',
      '#d7d7ea',
    ],

    chartColorSeq12 : [
      '#af329f',
      '#cb49ba',
      '#d671ca',
      '#e298d8',
      '#edc0e7',
    ],

    // Multi-hue Sequential Color Scales



    chartColorMultiHueSeq1 : [
      '#2e84a6',
      '#6363ac',
      '#8384be',
      '#e298d8',
      '#edc0e7',
    ],

    chartColorMultiHueSeq2 : [
      '#58c684',
      '#00baad',
      '#00d3c5',
      '#64b5d4',
      '#a2d2e5',
    ],

    chartColorMultiHueSeq3 : [
      '#ecde52',
      '#a9dc77',
      '#8fd88a',
      '#8adeba',
      '#bbf5ea',
    ],

    chartColorMultiHueSeq4 : [
      '#ff8d19',
      '#e0c256',
      '#d5d67b',
      '#d2e7a5',
      '#d1efcb',
    ],

    chartColorMultiHueSeq5 : [
      '#e30606',
      '#ff5733',
      '#ff795c',
      '#ffa448',
      '#facf85',
    ],

    chartColorMultiHueSeq6 : [
      '#af329f',
      '#cc0c53',
      '#f11869',
      '#fa5453',
      '#fc9f9f',
    ],

    chartColorMultiHueSeq7 : [
      '#6363ac',
      '#af329f',
      '#cb49ba',
      '#f44988',
      '#f992b8',
    ],

    // ---------------- Diverging Color Scales - 두 개의 상반된 양적 데이터를 비교하는 차트를 사용할 때에는 서로 대비가 되는 두 가지 색상을 사용합니다.
    // 평균보다 높거나 낮은 데이터 또는 양수와 음수의 값을 비교할 때 자연스럽습니다.
    // 보색 또는 대비되는 색상을 양 끝에 두고 중앙에는 중립적인 색상 또는 흰색을 배치하여 분리합니다.

    chartColorDiverging1 : [
      '#cc0c53',
      '#f44988',
      '#f992b8',
      '#c9e5f0',
      '#64b5d4',
      '#2e84a6',
    ],

    chartColorDiverging2 : [
      '#af329f',
      '#d671ca',
      '#edc0e7',
      '#bafff9',
      '#04eddc',
      '#00baad',
    ],

    chartColorDiverging3 : [
      '#6363ac',
      '#a6a6cf',
      '#d7d7ea',
      '#e1f5e9',
      '#9cddb6',
      '#58c684',
    ],

    chartColorDiverging4 : [
      '#2e84a6',
      '#64b5d4',
      '#c9e5f0',
      '#e4f1c9',
      '#d2e7a5',
      '#add45c',
    ],

    chartColorDiverging5 : [
      '#00baad',
      '#04eddc',
      '#bafff9',
      '#f8f3c0',
      '#f4ec9c',
      '#ecde52',
    ],

    chartColorDiverging6 : [
      '#58c684',
      '#9cddb6',
      '#e1f5e9',
      '#fff3cc',
      '#ffdb66',
      '#ffc300',
    ],

    chartColorDiverging7 : [
      '#add15c',
      '#d2e7a5',
      '#eff6e1',
      '#ffd1a3',
      '#ffba75',
      '#ff8d19',
    ],

    chartColorDiverging8 : [
      '#ffc300',
      '#ffdb66',
      '#fff3cc',
      '#fbc2d7',
      '#f44988',
      '#cc0c53',
    ],

    chartColorDiverging9 : [
      '#ff5733',
      '#ff9a85',
      '#ffddd6',
      '#fbc2d7',
      '#d671ca',
      '#af329f',
    ],



    // ---------------- 비데이터 요소들(툴팁, 데이터 포인트, 차트 축, 선 등)은 중립적인 색을 사용하여, 데이터 요소들이 시각적으로 도드라질 수 있도록 보조합니다.

    chartColorNeutral1 : [
      '#131516',
      '#373d3f',
      '#555f61',
      '#6f7c80',
      '#8c979a',
    ],

    chartColorNeutral2 : [
      '#8c979a',
      '#a7afb2',
      '#c1c7c9',
      '#dadedf',
      '#f2f3f4',
    ],

    chartColorNeutral3 : [
      '#0f0f0f',
      '#2b2b2b',
      '#474747',
      '#636363',
      '#7f7f7f',
    ],

    chartColorNeutral4 : [
      '#7f7f7f',
      '#9c9c9c',
      '#b8b8b8',
      '#d4d4d4',
      '#f0f0f0',
    ],

    chartColorNeutral5 : [
      '#161413',
      '#3e3937',
      '#605856',
      '#7f7470',
      '#99908d',
    ],

    chartColorNeutral6 : [
      '#99908d',
      '#b1aaa8',
      '#c8c3c1',
      '#dedbda',
      '#f4f3f2',
    ],

    progressChartColor1 : '#e6785c',
    progressChartColor2 : '#5cb8e5'

  };

  return {

    // ------- get color set --------

    getLightColorSet : function() {
      return lightColorSet;
    },

    getDarkColorSet : function() {
      return darkColorSet;
    },

    // ------- get chart options --------

    getDoughnutChartOptions : function() {
      return cloneObject(__doughnutChartOptions);
    },

    getPieChartOptions : function() {
      return cloneObject(__pieChartOptions);
    },

    getLineChartOptions : function() {
      return cloneObject(__lineChartOptions);
    },

    getProgressChartOptions : function() {
      return cloneObject(__progressChartOptions);
    },

    getBubbleChartOptions : function() {
      return cloneObject(__bubbleChartOptions);
    },

    getBarChartOptions : function() {
      return cloneObject(__barChartOptions);
    },

    getBarChartHorizontalOptions  : function() {
      return clone(__barChartHorizontalOptions);
    },

    getStackedBarChartOptions : function() {
      return cloneObject(__stackedBarChartOptions);
    },

    getStackedBarChartHorizontalOptions : function() {
      return cloneObject(__stackedBarChartHorizontalOptions);
    },

    getHistogramOptions : function() {
      return cloneObject(histogramOptions);
    },

    getGroupBarChartOptions : function() {
      return cloneObject(__groupBarChartOptions);
    },

    getPolarChartOptions : function() {
      return cloneObject(__polarChartOptions);
    },

    getRadarChartOptions : function() {
      return cloneObject(__radarChartOptions);
    },

    getScatterChartOptions : function() {
      return cloneObject(__scatterChartOptions);
    },

    // ------- get plugins --------

    getDoughnutChartPlugins : function() {
      return doughnutChartPlugins;
    },

    getProgressChartPlugins : function() {
      return progressChartPlugins;
    },

    setLegendClickHandler : function() {

      var legend = document.querySelectorAll('.legend span');

      for(var i = 0;i < dynamicEventFncMap.length;i++) {
        legend[i].removeEventListener('click', dynamicEventFncMap[i]);
      }

      for (var i = 0; i < legend.length; i++) {

        dynamicEventFncMap[i] = function(event) {
          var _this  = this,
              _index = getIndex(_this),
              // _parents = _this.closest('.tms-card'),
              _parents = _this.closest('.chart'),
              _canvas  = _parents.querySelector('canvas').getAttribute('id'),
              _trigger  = _canvas.concat('-legend-click');

          // console.log(_index);
          // console.log(_parents);
          // console.log(_trigger);

          _this.classList.toggle('active');
          setlegendIndex(_index);
          dynamicFncMap[_trigger]();

          event.preventDefault();
        };

        legend[i].addEventListener('click', dynamicEventFncMap[i]);

      }
    },

    hexToRgb : function( hexType, alpha ) {

      var hex = hexType.replace( "#", "" );
      var value = hex.match( /[a-f\d]/gi );


      // 헥사값이 세자리일 경우, 여섯자리로.
      if ( value.length == 3 ) hex = value[0] + value[0] + value[1] + value[1] + value[2] + value[2];


      value = hex.match( /[a-f\d]{2}/gi );

      var r = parseInt( value[0], 16 );
      var g = parseInt( value[1], 16 );
      var b = parseInt( value[2], 16 );

      var rgbType = "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";

      return rgbType;
    }
  }

})(window);



// <<<<<<<<< Chart -----