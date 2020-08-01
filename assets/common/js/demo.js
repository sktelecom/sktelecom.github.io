(function(window) {
  // include & current pages
  function includeHTML() {
    var z, i, elmnt, file, xhttp;

    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName('*');
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];

      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute('data-include');
      if (file) {

        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = 'Page not found.';}

            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute('data-include');
            includeHTML();

            if ($('.theme-body .theme-sidebar').length) {
              var name = $('.theme-sidebar').data('name');

              // current pages
              $('.nav-triggers').each(function(index, el) {
                if (name == el.getAttribute('data-name')) {
                  el.classList.add('current');
                  
                  var triggers = $(el);
                  if (triggers.hasClass('nav-first-link')) {
                    return false;
                  }
                  triggers.closest('.nav-item').children('.nav-first-link').addClass('current active');
                }
              });
              
              UxsUi.bindLnbNav();
            }
            if ($('.docs-body .docs-sidebar').length) {
              var name = $('.docs-sidebar').data('name');

              // current pages
              $('.nav-triggers').each(function(index, el) {
                if (name == el.getAttribute('data-name')) {
                  $(this).parents('li').addClass('current');
                  
                  var triggers = $(el);
                  if (triggers.hasClass('nav-first-link')) {
                    return false;
                  }
                  triggers.closest('.nav-item').addClass('current active');
                }
              });
              
              UxsUi.bindLnbNav();
            }
          }
        }
        xhttp.open('GET', file, true);
        xhttp.send();

        /* Exit the function: */
        return;
      }
    }
  }

  function toc() {
    if ($('.toc').length) {
      var toc = $('.toc');
      var tocContentBody = $('.toc-content');
      var tocContentBodyTop = tocContentBody.offset().top;

      $(window).scroll(function () {
        var currentScroll = $(window).scrollTop();

        if (currentScroll >= tocContentBodyTop) {
          toc.css({
            position: 'fixed',
            top: '7.375rem',
            right: '1.5rem'
          });
        } else {
          toc.css({
            position: 'relative',
            top: 'auto',
            right: 'auto'
          });
        }
      });
    }
  }

  window.addEventListener('DOMContentLoaded', function(){
    if($('.theme-body, .docs-body').length) {
      // include
      includeHTML();
      toc();
    }
  });
})(window);

