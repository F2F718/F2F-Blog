(function() {
  'use strict';
  if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') return;
  var welcomeHTML = 
    '<div id="welcome-overlay" class="welcome-overlay">' +
      '<div class="welcome-content">' +
        '<div class="welcome-logo">F2F</div>' +
        '<div class="welcome-subtitle">付双飞的线上书房</div>' +
        '<div class="welcome-divider"></div>' +
        '<a href="javascript:void(0)" id="welcome-enter-btn" class="welcome-enter-btn">进 入</a>' +
        '<div class="welcome-quote">"在文字里，记录思考与生活"</div>' +
      '</div>' +
    '</div>';
  document.body.insertAdjacentHTML('afterbegin', welcomeHTML);
  var overlay = document.getElementById('welcome-overlay');
  var enterBtn = document.getElementById('welcome-enter-btn');
  function enterSite() {
    overlay.classList.add('hidden');
    setTimeout(function() { if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay); }, 1200);
  }
  if (enterBtn) enterBtn.addEventListener('click', function(e) { e.preventDefault(); enterSite(); });
  if (overlay) overlay.addEventListener('click', function(e) { if (e.target === overlay) enterSite(); });
})();
