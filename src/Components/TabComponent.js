import React, { useContext } from "react";
import appContext from "../cotext/appContext";
import TableComponent from "./TableComponent";

const TabComponent = () => {
  const { values, setValues } = useContext(appContext);
  let { tab } = values;
  return (
    <div className="Tab  px-5 bg-white ">
      <div
        className={`inline-block px-10 py-4 text-dark ${
          tab === 0 && "text-primary selected"
        }`}
        onClick={() =>
          tab !== 0 && setValues({ type: "changeTab", payload: 0 })
        }
      >
        Form
      </div>
      <div
        className={`inline-block px-10 py-4 text-dark ${
          tab === 1 && "text-primary selected"
        }`}
        onClick={() =>
          tab !== 1 && setValues({ type: "changeTab", payload: 1 })
        }
      >
        Table
      </div>
    </div>
  );
};

export default TabComponent;
