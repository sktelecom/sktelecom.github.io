/*
 * UI 보조 요소 — 스크롤 진행 바 + 맨 위로 버튼. 의존성 없는 순수 JS.
 * 동작 줄이기(prefers-reduced-motion)일 때 부드러운 스크롤 대신 즉시 이동한다.
 */
(function () {
  "use strict";

  var reduce = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var isEn = (document.documentElement.lang || "").slice(0, 2) === "en";

  // 0) 스킵 링크 — 키보드 사용자가 반복되는 내비를 건너뛰고 본문으로 (접근성)
  var main = document.querySelector("main");
  if (main) {
    if (!main.id) main.id = "main-content";
    var skip = document.createElement("a");
    skip.className = "skt-skip-link";
    skip.href = "#" + main.id;
    skip.textContent = isEn ? "Skip to content" : "본문 바로가기";
    document.body.insertBefore(skip, document.body.firstChild);
  }

  // 1) 스크롤 진행 바 (상단 고정, 액센트색)
  var bar = document.createElement("div");
  bar.className = "skt-progress";
  bar.setAttribute("aria-hidden", "true");
  document.body.appendChild(bar);

  // 2) 맨 위로 버튼
  var btn = document.createElement("button");
  btn.type = "button";
  btn.className = "skt-to-top";
  btn.setAttribute("aria-label", isEn ? "Back to top" : "맨 위로");
  btn.innerHTML = '<i class="fas fa-arrow-up" aria-hidden="true"></i>';
  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  });
  document.body.appendChild(btn);

  var ticking = false;
  function update() {
    var doc = document.documentElement;
    var st = window.scrollY || doc.scrollTop;
    var h = doc.scrollHeight - doc.clientHeight;
    bar.style.transform = "scaleX(" + (h > 0 ? st / h : 0) + ")";
    btn.classList.toggle("is-visible", st > 400);
    ticking = false;
  }
  function onScroll() {
    if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  update();
})();
