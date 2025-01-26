import React from "react";

interface ResultBoxProps {
  dropdown1: string;
  dropdown2: string;
  textInput1: string;
  textInput2: string;
  dropdown3: string;
}

const ResultBox: React.FC<ResultBoxProps> = ({ dropdown1, dropdown2, textInput1, textInput2, dropdown3 }) => {
  return (
    <div className="mt-4 p-3 border border-secondary rounded">
      <h4 className="text-center mb-3">Selected Values</h4>
      <ul className="list-unstyled">
        <li>
          <strong>Type:</strong> {dropdown1 || "Not selected"}
        </li>
        <li>
          <strong>Color:</strong> {dropdown2 || "Not selected"}
        </li>
        <li>
          <strong>Year:</strong> {textInput1 || "Not entered"}
        </li>
        <li>
          <strong>Price:</strong> {textInput2 || "Not entered"}
        </li>
        <li>
          <strong>Model:</strong> {dropdown3 || "Not selected"}
        </li>
      </ul>
    </div>
  );
};

export default ResultBox;
