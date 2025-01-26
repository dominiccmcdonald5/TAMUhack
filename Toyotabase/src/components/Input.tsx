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
            <option value="Option1B">Plug-In Hybrid</option>
            <option value="Option1B">Electric</option>
          </select>
        </div>

        {/* Dropdown 2 */}
        <div className="col-auto">
          <select
            className="form-select"
            value={dropdown2}
            onChange={(e) => setDropdown2(e.target.value)}
          >
            <option value="">Select Color</option>
            <option value="Option2A">Black</option>
            <option value="Option2B">White</option>
            <option value="Option2B">Silver</option>
            <option value="Option2B">Gray</option>
            <option value="Option2B">Red</option>
            <option value="Option2B">Blue</option>
            <option value="Option2B">Green</option>
            <option value="Option2B">Brown/Beige</option>
            <option value="Option2B">Orange/Yellow</option>
            <option value="Option2B">Lunar Rock</option>
            <option value="Option2B">Blueprint</option>
            <option value="Option2B">Ruby Flare Pearl</option>
            <option value="Option2B">Supersonic Red</option>
            <option value="Option2B">Solar Octane</option>
            <option value="Option2B">Cement</option>
            <option value="Option2B">Wind Chill Pearl</option>
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
