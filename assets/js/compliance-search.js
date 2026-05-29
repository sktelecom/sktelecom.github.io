// Compliance 제품 목록 클라이언트 검색 (의존성 없음, progressive enhancement)
(function () {
  var input = document.getElementById('complianceSearch');
  var list = document.getElementById('complianceList');
  if (!input || !list) return;
  var items = list.querySelectorAll('[data-name]');
  var noResult = document.getElementById('complianceNoResult');

  function filter() {
    var q = input.value.trim().toLowerCase();
    var visible = 0;
    items.forEach(function (el) {
      var match = el.getAttribute('data-name').indexOf(q) > -1;
      el.hidden = !match;
      if (match) visible++;
    });
    if (noResult) noResult.hidden = visible !== 0;
  }

  input.addEventListener('input', filter);
})();
