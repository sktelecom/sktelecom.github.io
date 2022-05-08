(function ($) {
  $(function () {
    // on tab, if clicking a button with '.btn-link-down' class
    const headerHeightDesktop = 80;
    const headerHeightMobile = 64;
    const viewBreakpoint = 991;
    const offset = 0;
    const animationDelay = 0;

    $(".btn-link-down").click(function (event) {
      let target;
      const targetId = $(this).attr("data-target-id");

      if ($(`#${targetId}`).length === 0) return;

      if ($(window).width() < viewBreakpoint) {
        target = $(`#${targetId}`).offset().top - headerHeightMobile - offset;
      } else {
        target = $(`#${targetId}`).offset().top - headerHeightDesktop - offset;
      }

      $("html").stop(true).animate({scrollTop: target}, animationDelay);
    });
  });
}(jQuery));
