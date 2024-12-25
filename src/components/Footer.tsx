// src/components/Footer.tsx

import FooterNavGroup from './FooterNavGroup';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Navigation groups remain the same */}
        <div className="footer-nav">
          <FooterNavGroup title="Non IT Jobs">
            <ul>
              <li><a href="#">Marketing</a></li>
              <li><a href="#">Sales</a></li>
              <li><a href="#">Banking</a></li>
            </ul>
          </FooterNavGroup>

          <FooterNavGroup title="IT Jobs">
            <ul>
              <li><a href="#">Software Development</a></li>
              <li><a href="#">DevOps</a></li>
              <li><a href="#">Data Science</a></li>
            </ul>
          </FooterNavGroup>

          <FooterNavGroup title="Job Seekers">
            <ul>
              <li><a href="#">Search Jobs</a></li>
              <li><a href="#">Create Job Alert</a></li>
              <li><a href="#">Career Advice</a></li>
            </ul>
          </FooterNavGroup>

          <FooterNavGroup title="Employers">
            <ul>
              <li><a href="#">Post Jobs</a></li>
              <li><a href="#">Search Resume</a></li>
              <li><a href="#">Recruiter Login</a></li>
            </ul>
          </FooterNavGroup>

          <FooterNavGroup title="foundit">
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Career with Us</a></li>
            </ul>
          </FooterNavGroup>
        </div>

        <div className="footer-contact">
          <div className="contact-info">
            <p>info@foundit.in</p>
            <div className="contact-numbers">
              <span>Toll No: +91-40-66116611</span>
              <span>Toll Free No: 1-800-4196666</span>
            </div>
          </div>

          <div className="app-download">
            <p>Download the App</p>
            <div className="app-buttons">
              <a href="#" className="app-button">
                <img src="/googlePlay.png" alt="Get it on Google Play" />
              </a>
              <a href="#" className="app-button">
                <img src="/appStore.png" alt="Download on App Store" />
              </a>
            </div>
          </div>

          <div className="social-links">
            <p>Stay Connected</p>
            <div className="social-icons">
              <a href="#" aria-label="Facebook" className="social-icon">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="social-icon">
                <Twitter size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="social-icon">
                <Linkedin size={18} />
              </a>
              <a href="#" aria-label="Instagram" className="social-icon">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="YouTube" className="social-icon">
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-links">
            <a href="#">Security & Fraud</a>
            <span>|</span>
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Terms of Use</a>
            <span>|</span>
            <a href="#">Beware of Fraudsters</a>
            <span>|</span>
            <a href="#">Be safe</a>
            <span>|</span>
            <a href="#">Complaints</a>
          </div>
          <p className="copyright">© 2023 foundit | All right Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;