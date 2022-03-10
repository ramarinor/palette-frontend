import { useState } from "react";
import "./Calculator.css";

function Calculator({ setModalMessage }) {
  const [roomOrWall, setRoomOrWall] = useState("room");
  function calculate(e) {
    e.preventDefault();
    const width = Number(e.target.width.value);
    const length = Number(e.target.length.value);
    const height = Number(e.target.height.value);
    const doorSurface = 1.85;
    const windowSurface = 1.4;
    const numberOfDoors = Number(e.target.doors.value);
    const numberOfWindows = Number(e.target.windows.value);
    const surface =
      roomOrWall === "room"
        ? 2 * (width + length) * height -
          numberOfDoors * doorSurface -
          numberOfWindows * windowSurface
        : width * height -
          numberOfDoors * doorSurface -
          numberOfWindows * windowSurface;
    const litersNeedes = Math.ceil(surface / 10);
    setModalMessage(
      `You need approximately ${litersNeedes} liters of our paint!`
    );
  }
  return (
    <main className="calculator">
      <h2>Calculate how much paint you need!</h2>
      <form onSubmit={calculate}>
        <label>
          I'm painting a
          <select
            name="roomOrWall"
            defaultValue={roomOrWall}
            onChange={(e) => setRoomOrWall(e.target.value)}
          >
            <option value="room">room</option>
            <option value="wall">wall</option>
          </select>
        </label>

        <div>
          <label>
            which is
            <input
              type="number"
              step=".01"
              name="width"
              defaultValue={0}
              min={0}
            />
            meters wide,&nbsp;
          </label>
          {roomOrWall === "room" && (
            <label>
              <input
                type="number"
                step=".01"
                name="length"
                defaultValue={0}
                min={0}
              />
              meters long,&nbsp;
            </label>
          )}
          <label>
            and{" "}
            <input
              type="number"
              step=".01"
              name="height"
              defaultValue={0}
              min={0}
            />
            meters high.
          </label>
        </div>
        <div>
          <label>
            with <input type="number" name="doors" defaultValue={0} min={0} />
            doors,&nbsp;
          </label>
          <label>
            and <input type="number" name="windows" defaultValue={0} min={0} />
            windows.
          </label>
        </div>
        <button className="cta">Calculate</button>
      </form>
    </main>
  );
}

export default Calculator;
