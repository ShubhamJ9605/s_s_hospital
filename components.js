export function renderNav(activePage) {
  return `
  <nav class="navbar" id="navbar">
    <a href="index.html" class="nav-logo">
      <img src="/logo.png" alt="Samarth Sahyadri Hospital" class="nav-logo-img" />
      <div class="nav-logo-text">
        Samarth<br>Sahyadri
        <small>Multispeciality Hospital</small>
      </div>
    </a>
    <div class="nav-links">
      <a href="index.html" class="nav-link ${activePage === 'index.html' ? 'active' : ''}">Home</a>
      <a href="about.html" class="nav-link ${activePage === 'about.html' ? 'active' : ''}">About Us</a>
      <a href="specialities.html" class="nav-link ${activePage === 'specialities.html' ? 'active' : ''}">Services</a>
      <a href="doctors.html" class="nav-link ${activePage === 'doctors.html' ? 'active' : ''}">Doctors</a>
      <a href="contact.html" class="nav-link ${activePage === 'contact.html' ? 'active' : ''}">Contact</a>
    </div>
    <div class="nav-cta-group">
      <a href="tel:+912553250108" class="nav-emergency-btn">
        <i class="fa-solid fa-phone-volume"></i> Emergency: Call Now
      </a>
      <a href="contact.html" class="nav-book-btn">Book Appointment</a>
    </div>
    <button class="hamburger" id="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </nav>
  <div class="mobile-menu" id="mobileMenu">
    <a href="index.html" class="nav-link">Home</a>
    <a href="about.html" class="nav-link">About Us</a>
    <a href="specialities.html" class="nav-link">Services</a>
    <a href="doctors.html" class="nav-link">Doctors</a>
    <a href="contact.html" class="nav-link">Contact</a>
    <a href="tel:+912553250108" class="nav-emergency-btn">
      <i class="fa-solid fa-phone-volume"></i> Emergency: Call Now
    </a>
    <a href="contact.html" class="nav-book-btn">Book Appointment</a>
  </div>
  `;
}

export function renderFooter() {
  return `
  <footer>
    <div class="footer-top">
      <div class="footer-top-name">Samarth Sahyadri Multispeciality Hospital</div>
    </div>
    <div class="footer-grid">
      <div class="footer-brand">
        <p>Providing state-of-the-art healthcare with compassion and excellence to the community of Igatpuri and beyond.</p>
        <p style="margin-top:1.5rem;font-size:0.8rem">&copy; 2024 Samarth Sahyadri Multispeciality Hospital. All rights reserved.</p>
      </div>
      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="specialities.html">Services</a></li>
          <li><a href="doctors.html">Our Doctors</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Services</h4>
        <ul>
          <li><a href="specialities.html">Emergency Services</a></li>
          <li><a href="specialities.html">General Medicine</a></li>
          <li><a href="specialities.html">Orthopedics</a></li>
          <li><a href="specialities.html">Gynecology</a></li>
          <li><a href="specialities.html">Pediatrics</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <div class="footer-contact-item">
          <span class="footer-contact-icon"><i class="fa-solid fa-location-dot"></i></span>
          <span>Main Hospital Address,<br>Ghoti Budruk, Igatpuri,<br>Maharashtra 422402</span>
        </div>
        <div class="footer-contact-item">
          <span class="footer-contact-icon"><i class="fa-solid fa-phone"></i></span>
          <span><a href="tel:+912553250100">+91 2553 250 100</a></span>
        </div>
        <div class="footer-contact-item">
          <span class="footer-contact-icon"><i class="fa-solid fa-envelope"></i></span>
          <span><a href="mailto:info@samarthsahyadri.com">info@samarthsahyadri.com</a></span>
        </div>
        <div style="margin-top:1rem;background:var(--red);border-radius:12px;padding:1rem 1.2rem;display:flex;align-items:center;gap:0.7rem">
          <i class="fa-solid fa-phone-volume" style="color:#fff;font-size:1rem"></i>
          <div>
            <div style="color:rgba(255,255,255,0.7);font-size:0.7rem;font-weight:600">24/7 Helpline</div>
            <a href="tel:+912553250108" style="color:#fff;font-weight:700;font-size:0.95rem">+91 2553 250 108</a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; 2024 Samarth Sahyadri Multispeciality Hospital. All rights reserved.</span>
      <span>Designed with care for Nashik District.</span>
    </div>
  </footer>
  <div class="float-buttons">
    <a href="tel:+912553250108" class="float-btn float-call" title="Emergency Call">
      <svg viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
    </a>
    <a href="https://wa.me/912553250100?text=Hi%2C+I%27d+like+to+enquire+about+an+appointment+at+Samarth+Sahyadri+Hospital." target="_blank" class="float-btn float-whatsapp" title="WhatsApp">
      <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    </a>
  </div>
  <div class="mobile-sticky-bar">
    <a href="tel:+912553250108" class="sticky-action-item call">
      <svg viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
      <span>Emergency</span>
    </a>
    <a href="https://wa.me/912553250100" target="_blank" class="sticky-action-item whatsapp">
      <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      <span>WhatsApp</span>
    </a>
    <a href="https://maps.app.goo.gl/d9Z54G5uH3HnJgZ7A" target="_blank" class="sticky-action-item map">
      <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
      <span>Location</span>
    </a>
  </div>
  `;
}
