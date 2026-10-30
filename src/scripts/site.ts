// Native page links handle navigation, history and focus without JS.
// Language persistence is deliberately excluded from the restricted preview.
if (!import.meta.env.PUBLIC_PREVIEW) {
  document.querySelectorAll<HTMLAnchorElement>('[data-set-lang]').forEach((a) => {
    a.addEventListener('click', () => {
      try { localStorage.setItem('lang', a.dataset.setLang ?? 'en'); } catch { /* optional */ }
    });
  });
}
