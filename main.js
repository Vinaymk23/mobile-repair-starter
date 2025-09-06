document.addEventListener('DOMContentLoaded', () => {
  console.log('main.js loaded, fetching site.json...');
  fetch('content/site.json')
    .then(res => res.json())
    .then(data => {
      console.log('Loaded site.json:', data);
      document.getElementById('hero-title').textContent = data.hero.title;
      document.getElementById('hero-tagline').textContent = data.hero.tagline;
      document.getElementById('cta-call').href = 'tel:' + data.contact.phone;
      document.getElementById('about-text').textContent = data.about;
      document.getElementById('contact-info').innerHTML = `Find us at ${data.contact.address}. Or call us at <a href='tel:${data.contact.phone}'>${data.contact.phone}</a>`;

      const servicesContainer = document.getElementById('services-list');
      servicesContainer.innerHTML = '';
      data.services.forEach(service => {
        const div = document.createElement('div');
        div.className = 'service-card';
        div.textContent = `${service.icon} ${service.name} — ${service.price}`;
        servicesContainer.appendChild(div);
      });
    })
    .catch(err => console.error('Error loading site.json:', err));
});
