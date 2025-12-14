

console.log('renderer chargé');

document.querySelectorAll('button[data-bat]').forEach(btn => {
  btn.addEventListener('click', () => {
    console.log('CLICK', btn.dataset.bat);
    window.api.runBatAdmin(btn.dataset.bat);
  });
});


