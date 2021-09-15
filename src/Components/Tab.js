import React from "react";

const Tab = ({ tab, setTab }) => {
  return (
    <div className="Tab  px-5 bg-white ">
      <div
        className={`inline-block px-10 py-4 text-dark ${
          tab === 0 && "text-primary selected"
        }`}
        onClick={() => tab !== 0 && setTab(0)}
      >
        Form
      </div>
      <div
        className={`inline-block px-10 py-4 text-dark ${
          tab === 1 && "text-primary selected"
        }`}
        onClick={() => tab !== 1 && setTab(1)}
      >
        Table
      </div>
    </div>
  );
};

export default Tab;
