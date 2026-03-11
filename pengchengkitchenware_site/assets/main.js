
(function(){
  const navLinks = document.querySelectorAll('[data-nav]');
  const path = location.pathname.replace(/\/$/, '');
  navLinks.forEach(a => {
    const href = a.getAttribute('href');
    if (!href) return;
    if (href === '/index.html' && (path === '' || path === '/')) a.classList.add('active');
    if (href !== '/index.html' && path.endsWith(href)) a.classList.add('active');
  });

  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? 'Close' : 'Menu';
    });
  }

  const form = document.getElementById('enquiryForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const name = (fd.get('name') || '').toString().trim();
      const company = (fd.get('company') || '').toString().trim();
      const email = (fd.get('email') || '').toString().trim();
      const message = (fd.get('message') || '').toString().trim();

      const subject = encodeURIComponent('Sourcing enquiry - ' + (company || 'UK buyer'));
      const lines = [
        'Name: ' + (name || '-'),
        'Company: ' + (company || '-'),
        'Email: ' + (email || '-'),
        '',
        'Requirement:',
        message || '-',
        '',
        '---',
        'Sent via pengchengkitchenware.co.uk website'
      ];
      const body = encodeURIComponent(lines.join('\n'));
      window.location.href = 'mailto:info@pengchengkitchenware.co.uk?subject=' + subject + '&body=' + body;
    });
  }
})();
