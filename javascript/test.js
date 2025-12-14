document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('dark-mode-toggle');

  
  if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-mode');
    if(toggle) toggle.checked = true;
  }


  if(toggle){
    toggle.addEventListener('change', () => {
      if(toggle.checked){
        document.body.classList.add('dark-mode');
        localStorage.setItem('dark-mode', 'true');
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('dark-mode', 'false');
      }
    });
  }
});
