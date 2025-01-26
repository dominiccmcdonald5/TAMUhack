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
            <option value="">Select Type</option>
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
            style={{
                maxHeight: "200px", // Limit height
                overflowY: "auto",  // Enable vertical scrolling
              }}
          >
                        <option value="">Select Model</option>
            <option value="Option3A">Corolla</option>
            <option value="Option3B">Camry</option>
            <option value="Option3C">Avalon</option>
            <option value="Option3D">Crown</option>
            <option value="Option3E">Mirai</option>
            <option value="Option3F">Prius</option>
            <option value="Option3G">RAV4</option>
            <option value="Option3H">Highlander</option>
            <option value="Option3I">Grand Highlander</option>
            <option value="Option3J">4Runner</option>
            <option value="Option3K">Sequoia</option>
            <option value="Option3L">C-HR</option>
            <option value="Option3M">Venza</option>
            <option value="Option3N">Corolla Cross</option>
            <option value="Option3O">bZ4X</option>
            <option value="Option3P">Land Cruiser</option>
            <option value="Option3Q">Tacoma</option>
            <option value="Option3R">Tundra</option>
            <option value="Option3S">Sienna</option>
            <option value="Option3T">GR86</option>
            <option value="Option3U">GR Supra</option>
            <option value="Option3V">GR Corolla</option>
            <option value="Option3W">Corolla Hybrid</option>
            <option value="Option3X">Camry Hybrid</option>
            <option value="Option3Y">RAV4 Hybrid</option>
            <option value="Option3Z">Highlander Hybrid</option>
            <option value="Option3AA">Sequoia Hybrid</option>
            <option value="Option3AB">Tundra Hybrid (i-FORCE MAX)</option>
            <option value="Option3AC">Venza Hybrid</option>
            <option value="Option3AD">Sienna Hybrid</option>
            <option value="Option3AE">Prius Prime</option>
            <option value="Option3AF">RAV4 Prime</option>
            <option value="Option3AG">bZ4X</option>
            <option value="Option3AH">bZ3</option>
            <option value="Option3AI">Tacoma TRD Pro</option>
            <option value="Option3AJ">4Runner TRD Pro</option>
            <option value="Option3AK">Sequoia TRD Pro</option>
            <option value="Option3AL">Tundra TRD Pro</option>
            <option value="Option3AM">Land Cruiser 250 Series</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default App;
