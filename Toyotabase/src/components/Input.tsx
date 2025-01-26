import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => {
  const [dropdown1, setDropdown1] = useState("");
  const [dropdown2, setDropdown2] = useState("");
  const [textInput1, setTextInput1] = useState("");
  const [textInput2, setTextInput2] = useState("");
  const [dropdown3, setDropdown3] = useState("");

  return (
    <div className="container mt-4">
      {/* Title Section */}
      <header className="text-center mb-4">
        <h1 className="border border-danger py-3" style={{ fontFamily: "Avenir, sans-serif" }}>
          Menu
        </h1>
      </header>

      {/* Form Section */}
      <div className="row justify-content-center gy-3">
        {/* Dropdown 1 */}
        <div className="col-auto">
          <select
            className="form-select"
            value={dropdown1}
            onChange={(e) => setDropdown1(e.target.value)}
          >
            <option value="">Select Typ</option>
            <option value="Option1A">Traditional</option>
            <option value="Option1B">Hybrid</option>
            <option value="Option1C">Plug-In Hybrid</option>
            <option value="Option1D">Electric</option>
          </select>
        </div>

        {/* Dropdown 2 (Scrollable) */}
        <div className="col-auto">
          <select
            className="form-select"
            value={dropdown2}
            onChange={(e) => setDropdown2(e.target.value)}
            style={{
              maxHeight: "200px", // Limit height
              overflowY: "auto",  // Enable vertical scrolling
            }}
          >
            <option value="">Select Color</option>
            <option value="Option2A">Black</option>
            <option value="Option2B">White</option>
            <option value="Option2C">Silver</option>
            <option value="Option2D">Gray</option>
            <option value="Option2E">Red</option>
            <option value="Option2F">Blue</option>
            <option value="Option2G">Green</option>
            <option value="Option2H">Brown/Beige</option>
            <option value="Option2I">Orange/Yellow</option>
            <option value="Option2J">Lunar Rock</option>
            <option value="Option2K">Blueprint</option>
            <option value="Option2L">Ruby Flare Pearl</option>
            <option value="Option2M">Supersonic Red</option>
            <option value="Option2N">Solar Octane</option>
            <option value="Option2O">Cement</option>
            <option value="Option2P">Wind Chill Pearl</option>
          </select>
        </div>

        {/* Text Input 1 */}
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            value={textInput1}
            onChange={(e) => setTextInput1(e.target.value)}
            placeholder="Enter Year"
          />
        </div>

        {/* Text Input 2 */}
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            value={textInput2}
            onChange={(e) => setTextInput2(e.target.value)}
            placeholder="Enter Price"
          />
        </div>

        {/* Dropdown 3 */}
        <div className="col-auto">
          <select
            className="form-select"
            value={dropdown3}
            onChange={(e) => setDropdown3(e.target.value)}
          >
            <option value="">Select Model</option>
            <option value="Option3A">Option 3A</option>
            <option value="Option3B">Option 3B</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default App;
