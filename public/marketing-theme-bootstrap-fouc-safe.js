// FOUC-safe theme bootstrap — runs synchronously in <head> before paint.
// Reads localStorage("ecommua-theme") then prefers-color-scheme.
(function () {
  try {
    var s = localStorage.getItem('ecommua-theme');
    var m = s || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (m === 'dark') document.documentElement.classList.add('dark');
    document.documentElement.style.colorScheme = m;
  } catch (e) { /* noop */ }
})();
