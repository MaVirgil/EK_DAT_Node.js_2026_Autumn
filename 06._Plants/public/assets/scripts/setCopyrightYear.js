const copyrightInfoElement = document.getElementById('footer-copyright');

const currentYear = new Date().getFullYear();

copyrightInfoElement.textContent = `© ${currentYear}`