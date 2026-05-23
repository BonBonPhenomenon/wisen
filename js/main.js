/* ============================================================
   WISEN — Global JavaScript
   main.js · v1.0 · May 2026
   ============================================================ */

/* ── TAB SWITCHING (used on all report pages) ── */
function showTab(prefix, id, btn) {
  const panelPrefix = prefix + '-';
  document.querySelectorAll('[id^="' + panelPrefix + '"]')
    .forEach(p => p.classList.remove('active'));
  btn.closest('nav').querySelectorAll('.tab-btn')
    .forEach(b => b.classList.remove('active'));
  document.getElementById(panelPrefix + id).classList.add('active');
  btn.classList.add('active');
}

/* ── CURRENCY TOGGLE (used on all report pages) ── */
function setCurrency(val, btn) {
  document.querySelectorAll('.currency-pill')
    .forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.body.classList.remove('show-nzd', 'show-aud');
  if (val === 'nzd') document.body.classList.add('show-nzd');
  if (val === 'aud') document.body.classList.add('show-aud');
}

/* ── ACTIVE NAV LINK ──
   Highlights the correct header nav link based on current page filename.
   Add data-page="filename-without-extension" to each <a> in the header. ── */
document.addEventListener('DOMContentLoaded', () => {
  const current = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
  document.querySelectorAll('.site-nav-link').forEach(link => {
    if (link.dataset.page === current) link.classList.add('active');
  });
});
