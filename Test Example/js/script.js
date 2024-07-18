/* Toggle Switcher */
document.addEventListener('DOMContentLoaded', (event) => {
    const switchButton = document.getElementById('mode-switch');
    
    switchButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      
      if (document.body.classList.contains('dark-mode')) {
        switchButton.textContent = 'Switch to Light Mode';
      } else {
        switchButton.textContent = 'Switch to Dark Mode';
      }
    });
  });
  