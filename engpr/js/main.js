let currentLang = "en";

document.getElementById('toggleLang').addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'al' : 'en';
  
  document.querySelectorAll('.sport-title').forEach(el => {
    el.textContent = currentLang === 'en' ? el.dataset.en : el.dataset.al;
  });
  
  document.querySelectorAll('.sport-desc').forEach(el => {
    el.textContent = currentLang === 'en' ? el.dataset.en : el.dataset.al;
  });
});
