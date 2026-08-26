/* ==========================================================================
   SHIPRAKWAY Consulting

   >>> ENQUIRY ADDRESSES <<<
   Enquiries from the contact form go TO the primary address and are
   copied (CC) to the secondary one, so both inboxes see every enquiry.
   Both are also listed as clickable links in the Contact section and
   the footer — editing them here updates those links automatically.
   ========================================================================== */
const CONTACT_EMAILS = {
  primary:   'support@shiprakway.com',
  secondary: 'shiprakwayconsulting@gmail.com'
};

/* Keep the visible mailto: links in sync with the addresses above. */
document.querySelectorAll('a.js-email').forEach(a => {
  const addr = CONTACT_EMAILS[a.dataset.email] || CONTACT_EMAILS.primary;
  a.href = 'mailto:' + addr;
  a.textContent = addr;
  /* escape first, then allow a line break at the @ rather than mid-word */
  a.innerHTML = a.innerHTML.replace('@', '<wbr>@');
});

/* --- mobile navigation --------------------------------------------------- */
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

function setMenu(open) {
  if (!nav || !menuToggle) return;
  nav.classList.toggle('open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}

menuToggle?.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && nav?.classList.contains('open')) {
    setMenu(false);
    menuToggle?.focus();
  }
});

/* Close the menu if the viewport grows past the mobile breakpoint. */
window.matchMedia('(min-width:1001px)').addEventListener('change', e => {
  if (e.matches) setMenu(false);
});

/* --- scroll reveal ------------------------------------------------------- */
const reveals = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => revealObserver.observe(el));
} else {
  /* No IntersectionObserver — show everything rather than hiding the page. */
  reveals.forEach(el => el.classList.add('visible'));
}

/* Safety net: if anything above fails, nothing stays invisible. */
window.addEventListener('load', () => {
  setTimeout(() => reveals.forEach(el => el.classList.add('visible')), 3000);
});

/* --- active nav highlighting --------------------------------------------- */
const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.nav a[href^="#"]')];

if ('IntersectionObserver' in window && sections.length) {
  const visible = new Set();

  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) visible.add(entry.target.id);
      else visible.delete(entry.target.id);
    });

    /* Pick the topmost section currently in the reading band, so overlapping
       observers can't fight over which link is active. */
    const current = sections.find(s => visible.has(s.id));
    if (!current) return;
    navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + current.id));
  }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });

  sections.forEach(s => sectionObserver.observe(s));
}

/* --- footer year --------------------------------------------------------- */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* --- contact form -> mailto ---------------------------------------------- */
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function fail(field, msg) {
  field.classList.add('invalid');
  field.focus();
  if (note) {
    note.className = 'form-note error';
    note.textContent = msg;
  }
  return false;
}

form?.addEventListener('submit', e => {
  e.preventDefault();

  const name    = document.getElementById('name');
  const email   = document.getElementById('email');
  const company = document.getElementById('company');
  const topic   = document.getElementById('topic');
  const message = document.getElementById('message');

  [name, email, message].forEach(f => f.classList.remove('invalid'));

  if (!name.value.trim())              return fail(name, 'Please enter your name.');
  if (!EMAIL_RE.test(email.value.trim())) return fail(email, 'Please enter a valid business email address.');
  if (!message.value.trim())           return fail(message, 'Please tell us briefly what you need.');

  const subject = 'Website enquiry' + (topic.value ? ' — ' + topic.value : '');

  const body = [
    'Name: '    + name.value.trim(),
    'Email: '   + email.value.trim(),
    'Company: ' + (company.value.trim() || '—'),
    'Area of interest: ' + (topic.value || '—'),
    '',
    'Requirement:',
    message.value.trim(),
    '',
    '— Sent from the SHIPRAKWAY Consulting website'
  ].join('\r\n');

  const href = 'mailto:' + CONTACT_EMAILS.primary +
               '?cc='      + encodeURIComponent(CONTACT_EMAILS.secondary) +
               '&subject=' + encodeURIComponent(subject) +
               '&body='    + encodeURIComponent(body);

  if (note) {
    note.className = 'form-note ok';
    note.innerHTML = 'Opening your email app with the enquiry ready to send. ' +
      'If nothing happens, email us directly at ' +
      '<a href="mailto:' + CONTACT_EMAILS.primary + '">' + CONTACT_EMAILS.primary + '</a>.';
  }

  window.location.href = href;
});

/* Clear the error state as soon as the visitor starts correcting it. */
form?.querySelectorAll('input,textarea').forEach(f => {
  f.addEventListener('input', () => f.classList.remove('invalid'));
});
