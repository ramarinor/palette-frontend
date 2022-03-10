import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "grey",
  "black",
  "pink",
  "beige",
  "white"
];
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

function ColorSelect({ selectedColors, setSelectedColors }) {
  const handleChange = (event) => {
    const {
      target: { value }
    } = event;
    setSelectedColors(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="color-label">Select your colors</InputLabel>
        <Select
          labelId="color-label"
          multiple
          value={selectedColors}
          onChange={handleChange}
          input={<OutlinedInput label="Select your colors" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {colors.map((color) => (
            <MenuItem key={color} value={color}>
              <Checkbox checked={selectedColors.indexOf(color) > -1} />
              <ListItemText primary={color} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default ColorSelect;
