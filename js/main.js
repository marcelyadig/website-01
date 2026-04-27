const pages = document.querySelectorAll('.page');
const hamburger = document.getElementById('hamburger');
const navOverlay = document.getElementById('navOverlay');

function showPage(id) {
  pages.forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  document.getElementById('filterBtn')
    .classList.toggle('hidden', id !== 'projects');
}

function navigate(id) {
  navOverlay.classList.remove('open');
  showPage(id);
}

hamburger.addEventListener('click', () => {
  navOverlay.classList.toggle('open');
});

/* Accordion logic */
document.querySelectorAll('.project-header').forEach(header => {
  header.addEventListener('click', () => {
    const project = header.parentElement;
    document.querySelectorAll('.project').forEach(p => {
      if (p !== project) p.classList.remove('open');
    });
    project.classList.toggle('open');
  });
});

/* Custom Cursor */
const cursor = document.getElementById('cursor');
const arrow = document.getElementById('cursor-arrow');

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  arrow.style.left = e.clientX + 'px';
  arrow.style.top = (e.clientY - 20) + 'px';
});

/* Initial */
showPage('splash');
