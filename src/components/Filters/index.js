import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "./index.css";

const Filters = () => {
  const [isFilterOpened, setIsFilterOpened] = useState({
    idealFor: false,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitable: false,
    rawMaterial: false,
    pattern: false,
  });

  const convertToStateKey = (text) => {
    const map = {
      "IDEAL FOR": "idealFor",
      "OCCASION": "occasion",
      "WORK": "work",
      "FABRIC": "fabric",
      "SEGMENT": "segment",
      "SUITABLE FOR": "suitable",
      "RAW MATERIAL": "rawMaterial",
      "PATTERN": "pattern",
    };
    return map[text] || "";
  };

  const handleExpandCollapse = (text) => {
    const key = convertToStateKey(text);
    setIsFilterOpened((prev) => ({
      ...prev,
      [key]: !prev[key], 
    }));
  };

  const getFilterElement = (text) => {
    const stateKey = convertToStateKey(text);
    const isOpen = isFilterOpened[stateKey];

    return (
      <div key={text}>
        <div
          className="filter-heading-text"
          onClick={() => handleExpandCollapse(text)}
        >
          <p>{text}</p>
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        <p className="filte-all-text">ALL</p>

        {isOpen && (
          <>
            <p className="filter-unselect-text">Unselect All</p>
            <div>
              <input type="checkbox" />
              <label className="label-text">MEN</label>
            </div>
            <div>
              <input type="checkbox" />
              <label className="label-text">WOMEN</label>
            </div>
            <div>
              <input type="checkbox" />
              <label className="label-text">BABY & KIDS</label>
            </div>
          </>
        )}
        <hr />
      </div>
    );
  };

  return (
    <div className="filters-component-container">
      <div>
        <input type="checkbox" />
        <label className="label-text">CUSTOMIZABLE</label>
      </div>
      <hr />
      {[
        "IDEAL FOR",
        "OCCASION",
        "WORK",
        "FABRIC",
        "SEGMENT",
        "SUITABLE FOR",
        "RAW MATERIAL",
        "PATTERN",
      ].map(getFilterElement)}
    </div>
  );
};

export default Filters;
