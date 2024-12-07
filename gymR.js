// Dynamic Features: Toggle between sections

document.addEventListener('DOMContentLoaded', () => {
    const dietLinks = document.querySelectorAll('.dropdown-item');
    dietLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        alert(`You selected: ${e.target.textContent}`);
      });
    });
  });
  