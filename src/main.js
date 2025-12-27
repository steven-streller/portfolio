// Import styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'aos/dist/aos.css';
import './assets/css/main.css';

// Google Fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/poppins/600.css';

// Import JavaScript dependencies
import $ from 'jquery';
import 'bootstrap';
import AOS from 'aos';

// Import images
import avatarImg from './assets/images/avatar.jpg';
import faviconIco from './assets/favicon.ico';

// Import PDFs
import lebenslaufPdf from './assets/documents/Lebenslauf,-Steven-Streller.pdf';
import masterThesisPdf from './assets/documents/Master-Thesis.pdf';
import masterprojektPdf from './assets/documents/Masterprojekt.pdf';
import masterseminarPdf from './assets/documents/Masterseminar.pdf';
import softwarearchitekturenPdf from './assets/documents/Softwarearchitekturen.pdf';

// Make jQuery available globally for Bootstrap
window.$ = window.jQuery = $;

// Initialize AOS animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

// Calculate and display birth date with age
const birthElement = document.getElementById("birth");
if (birthElement) {
  const ageDifMs = Date.now() - new Date("1997-07-23");
  const ageDate = new Date(ageDifMs);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);
  birthElement.innerHTML = `23.07.1997 (${age})`;
}

// Display copyright year
const copyrightElement = document.getElementById("copyright");
if (copyrightElement) {
  copyrightElement.innerHTML = `&copy; ${new Date().getFullYear()} Alle Rechte vorbehalten.`;
}

// Set avatar image source
document.querySelector('.avatar img').src = avatarImg;

// Set favicon
const faviconLink = document.querySelector('link[rel="icon"]');
if (faviconLink) {
  faviconLink.href = faviconIco;
}

// Set PDF links
document.querySelectorAll('a[href*="Lebenslauf,-Steven-Streller.pdf"]').forEach(link => {
  link.href = lebenslaufPdf;
});

document.querySelectorAll('a[href*="Master-Thesis.pdf"]').forEach(link => {
  link.href = masterThesisPdf;
});

document.querySelectorAll('a[href*="Masterprojekt.pdf"]').forEach(link => {
  link.href = masterprojektPdf;
});

document.querySelectorAll('a[href*="Masterseminar.pdf"]').forEach(link => {
  link.href = masterseminarPdf;
});

document.querySelectorAll('a[href*="Softwarearchitekturen.pdf"]').forEach(link => {
  link.href = softwarearchitekturenPdf;
});
