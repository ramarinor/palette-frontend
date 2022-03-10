import { Link } from "react-router-dom";
import "./SamplesSection.css";

function SamplesSection() {
  return (
    <section className="samples-section">
      <div className="samples-headline">
        <h4 className="samples-headline-content">
          Try our sticker samples before making up your mind!
        </h4>
        <Link className="samples-link cta" to="/samples">
          SHOP OUR SAMPLES
        </Link>
      </div>
      <div className="samples-image"></div>
    </section>
  );
}

export default SamplesSection;
