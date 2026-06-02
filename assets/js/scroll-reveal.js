/*
 * 스크롤 리빌 — .skt-reveal 요소가 뷰포트에 들어오면 .is-visible 을 부여해
 * 부드럽게 나타나게 한다. 의존성 없는 순수 JS(IntersectionObserver).
 *
 * 초기 숨김(opacity:0)은 CSS에서 html.js-reveal 일 때만 적용되며, 이 클래스는
 * 동작 줄이기(prefers-reduced-motion)가 아닐 때만 head 인라인 스크립트가 부여한다.
 * 따라서 JS 비활성/실패 또는 동작 줄이기 환경에서는 콘텐츠가 항상 보인다.
 */
(function () {
  "use strict";

  var root = document.documentElement;

  // js-reveal 게이트가 없으면(동작 줄이기 등) 아무것도 숨기지 않은 상태이므로 종료
  if (!root.classList.contains("js-reveal")) return;

  var els = document.querySelectorAll(".skt-reveal");

  // 관찰 대상이 없거나 IO 미지원 → 게이트를 풀어 전부 보이게 하고 종료
  if (!els.length || !("IntersectionObserver" in window)) {
    root.classList.remove("js-reveal");
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

  els.forEach(function (el) { io.observe(el); });
})();
