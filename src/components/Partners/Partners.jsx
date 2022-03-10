import "./Partners.css";

function Partners() {
  return (
    <section className="partners">
      <h3 className="partners-title">OUR PARTNERS</h3>
      <div className="partners-content">
        <img
          className="partner"
          src="../../../assets/partners/you-may-love-it.svg"
          alt="you may love it icon"
        />
        <img
          className="partner"
          src="../../../assets/partners/typewolf.svg"
          alt="typewolf icon"
        />
        <img
          className="partner"
          src="../../../assets/partners/numbered.svg"
          alt="numbered icon"
        />
        <img
          className="partner"
          src="../../../assets/partners//shopify.svg"
          alt="shopify icon"
        />
      </div>
    </section>
  );
}

export default Partners;
