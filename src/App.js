import React, { useState, useReducer, useEffect } from "react";
import Tab from "./Components/Tab";
import FormComponent from "./Components/FormComponent.";
import TableComponent from "./Components/TableComponent";
import appContext from "./cotext/appContext";
import appReducer from "./reducer/appReducer";
import { AnimatePresence } from "framer-motion";
import AlertComponent from "./Components/AlertComponent";
import ModelComponent from "./Components/ModelComponent";

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
        <AlertComponent />
        <Tab />
        <div className="container mx-auto">
          <div className="main px-5">
            <AnimatePresence initial={false} exitBeforeEnter={true}>
              {values.tab === 0 && <FormComponent />}
              {values.tab === 1 && <TableComponent />}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </appContext.Provider>
  );
}

export default App;
