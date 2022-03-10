import { color } from '@mui/system';
import { useEffect, useState } from 'react';
import Background from '../components/Background/Background';
import ColorSelect from '../components/ColorSelect/ColorSelect';
import PaintsList from '../components/PaintsList/PaintsList';
import Reasons from '../components/Reasons/Reasons';
import ToneSelect from '../components/ToneSelect/ToneSelect';

function Paints() {
  const [colors, setColors] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedTones, setSelectedTones] = useState([]);
  function getColorsToDisplay() {
    let colorsToDisplay = colors;
    if (selectedColors.length !== 0) {
      colorsToDisplay = colorsToDisplay.filter((color) =>
        selectedColors.includes(color.color)
      );
    }
    if (selectedTones.length !== 0) {
      colorsToDisplay = colorsToDisplay.filter((color) =>
        selectedTones.includes(color.tone)
      );
    }
    return colorsToDisplay;
  }
  useEffect(() => {
    fetch('https://power-glossy-rocket.glitch.me/colors')
      .then((resp) => resp.json())
      .then((colors) => setColors(colors));
  }, []);
  return (
    <main>
      <Background
        className='background'
        style={{ backgroundImage: 'url(../../assets/backgrounds/paints.jpeg)' }}
      >
        <h2 className='background-headline'>Shop our paints</h2>
        <Reasons style={{ color: 'white' }} />
      </Background>
      <section className='paints'>
        <div className='filters'>
          <ColorSelect
            selectedColors={selectedColors}
            setSelectedColors={setSelectedColors}
          />
          <ToneSelect
            selectedTones={selectedTones}
            setSelectedTones={setSelectedTones}
          />
        </div>
        <main className='paints-content'>
          <PaintsList colors={getColorsToDisplay()} />
        </main>
      </section>
    </main>
  );
}

export default Paints;
