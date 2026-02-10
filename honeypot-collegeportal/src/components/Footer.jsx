import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: About */}
        <div className="footer-column">
          <h3>About College</h3>
          <p>
            Our prestigious college is dedicated to providing quality education
            and preparing students for successful careers in the global world.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#academics">Academics</a>
            </li>
            <li>
              <a href="#admissions">Admissions</a>
            </li>
            <li>
              <a href="#student-life">Student Life</a>
            </li>
            <li>
              <a href="#research">Research</a>
            </li>
            <li>
              <a href="#career-services">Career Services</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>
            <strong>Address:</strong> 123 College Road, City, State 12345
          </p>
          <p>
            <strong>Email:</strong> info@college.edu
          </p>
          <p>
            <strong>Phone:</strong> +1 (XXX) XXX-XXXX
          </p>
        </div>

        {/* Column 4: Social Media */}
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#facebook" className="social-icon">
              Facebook
            </a>
            <a href="#twitter" className="social-icon">
              Twitter
            </a>
            <a href="#linkedin" className="social-icon">
              LinkedIn
            </a>
            <a href="#instagram" className="social-icon">
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>&copy; {currentYear} College Portal. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <span>|</span>
          <a href="#terms">Terms of Service</a>
          <span>|</span>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
