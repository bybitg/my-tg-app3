(() => {
  const notice = document.querySelector('.notice');
  let hideTimer;
  document.querySelectorAll('.hotspot').forEach((button) => {
    button.addEventListener('click', () => {
      notice.textContent = button.dataset.note || 'Раздел макета';
      notice.classList.add('show');
      window.clearTimeout(hideTimer);
      hideTimer = window.setTimeout(() => notice.classList.remove('show'), 1800);
    });
  });
})();
