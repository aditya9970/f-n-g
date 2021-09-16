import React, { useState, useReducer, useEffect } from "react";
import Tab from "./Components/Tab";
import FormComponent from "./Components/FormComponent.";
import TableComponent from "./Components/TableComponent";
import appContext from "./cotext/appContext";
import appReducer from "./reducer/appReducer";
import { AnimatePresence } from "framer-motion";

function App() {
  const [tab, setTab] = useState(0);

  const [values, setValues] = useReducer(appReducer, {
    index: -1,
    tab: 0,
    temp: {
      customerName: "",
      phoneNo: "",
      email: "",
      question1: 3,
      question2: 3,
      question3: 3,
      question4: 3,
    },
    forms: [],
    alert: "",
  });

  useEffect(() => {
    console.log(localStorage.getItem("forms"));
    localStorage.getItem("forms") &&
      setValues({
        type: "loadForm",
      });

    localStorage.getItem("temp") &&
      setValues({
        type: "loadTemp",
      });
  }, []);
  return (
    <appContext.Provider value={{ values, setValues }}>
      <div className="App bg-light">
        <AnimatePresence initial={false} exitBeforeEnter={true}>
          <Tab />
          <div className="container mx-auto">
            <div className="main px-5">
              {values.tab === 0 && <FormComponent />}
              {values.tab === 1 && <TableComponent />}
            </div>
          </div>
        </AnimatePresence>
      </div>
    </appContext.Provider>
  );
}

export default App;
