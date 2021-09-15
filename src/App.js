import React, { useState } from "react";
import Tab from "./Components/Tab";
import FormComponent from "./Components/FormComponent.";
import TableComponent from "./Components/TableComponent";

function App() {
  const [tab, setTab] = useState(0);
  return (
    <div className="App bg-light">
      <Tab tab={tab} setTab={setTab} />
      <div className="container mx-auto">
        <div className="main px-5">
          {tab === 0 && <FormComponent />}
          {tab === 1 && <TableComponent />}
        </div>
      </div>
    </div>
  );
}

export default App;
