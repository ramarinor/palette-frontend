import "./Reasons.css";

function Reasons({ ...props }) {
  return (
    <div className="reasons" {...props}>
      <div className="reason">
        <span className="reason-number">01</span>
        <span className="reason-info">ECO-FRIENDLY &#38; PREMIUM A+ PAINT</span>
      </div>
      <div className="reason">
        <span className="reason-number">02</span>
        <span className="reason-info">
          CURATED SELECTION OF 50 EXCLUSIVE COLORS
        </span>
      </div>
      <div className="reason">
        <span className="reason-number">03</span>
        <span className="reason-info">
          EASY TO TRY ON WITH OUR SAMPLE STICKERS
        </span>
      </div>
      <div className="reason">
        <span className="reason-number">04</span>
        <span className="reason-info">
          FREE SHIPPING &#38; RETURNS IN EUROPE
        </span>
      </div>
    </div>
  );
}

export default Reasons;
