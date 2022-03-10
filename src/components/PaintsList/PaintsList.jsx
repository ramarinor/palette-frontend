import PaintItem from "./PaintItem/PaintItem";
import "./PaintsList.css";

function PaintsList({ colors }) {
  return (
    <ul className="paints-list">
      {colors.map((color) => (
        <PaintItem color={color} key={color.id} />
      ))}
    </ul>
  );
}

export default PaintsList;
