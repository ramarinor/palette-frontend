import "./Newsletter.css";

function Newsletter() {
  return (
    <section className="newsletter-and-social">
      <div className="newsletter">
        <form className="newsletter-form">
          <label>
            <h4 className="newsletter-headline">
              Sign up now and stay inspired!
            </h4>
            <input
              required
              type="email"
              placeholder="E-MAIL ADDRESS"
              className="newsletter-input"
              size={14}
            />
            <button type="submit" className="newsletter-button cta">
              Submit
            </button>
          </label>
        </form>
      </div>
      <div className="social">
        <h4 className="social-headline">
          Find more inspiration on our social media channels!
        </h4>
        <nav className="social-nav">
          <ul className="social-nav-list">
            <li className="social-nav-item">
              <a href="https://www.instagram.com/palette.eco/" target="_blank">
                <img
                  className="social-nav-logo"
                  src="../../../assets/icons/instagram.png"
                />
              </a>
            </li>
            <li className="social-nav-item">
              <a href="https://www.facebook.com/palette.eco/" target="_blank">
                <img
                  className="social-nav-logo"
                  src="../../../assets/icons/facebook.png"
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Newsletter;
