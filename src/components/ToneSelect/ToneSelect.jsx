import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const tones = ["light", "medium", "dark"];
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

function ToneSelect({ selectedTones, setSelectedTones }) {
  const handleChange = (event) => {
    const {
      target: { value }
    } = event;
    setSelectedTones(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="tone-label">Select your tones</InputLabel>
        <Select
          labelId="tone-label"
          multiple
          value={selectedTones}
          onChange={handleChange}
          input={<OutlinedInput label="Select your tones" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {tones.map((tone) => (
            <MenuItem key={tone} value={tone}>
              <Checkbox checked={selectedTones.indexOf(tone) > -1} />
              <ListItemText primary={tone} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default ToneSelect;
