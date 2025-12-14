

console.log('renderer chargé');

document.querySelectorAll('button[data-bat]').forEach(btn => {
  btn.addEventListener('click', () => {
    console.log('CLICK', btn.dataset.bat);
    window.api.runBatAdmin(btn.dataset.bat);
  });
});
document.querySelectorAll('button[data-exe]').forEach(btn => {
  btn.addEventListener('click', async () => {
    await window.api.runExeAdmin(btn.dataset.exe);
  });
});


