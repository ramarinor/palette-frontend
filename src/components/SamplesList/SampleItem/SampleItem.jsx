import { Link } from "react-router-dom";
import "./SampleItem.css";
function SampleItem({ color }) {
  return (
    <li className="sample">
      <Link to={`/samples/${color.id}`} className="sample-link">
        <div
          className="sample-square"
          style={{ backgroundColor: color.hexCode }}
        >
          <img
            src={`../../../../assets/samples/${color.id}.jpeg`}
            alt={color.id}
          />
        </div>
        <div className="sample-info">{`${color.id.replace("-", " ")} - N°${
          color.number
        }`}</div>
        <div className="sample-price">€3</div>
      </Link>
    </li>
  );
}

export default SampleItem;
