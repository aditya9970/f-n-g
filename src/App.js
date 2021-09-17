import React, { useReducer, useEffect } from "react";
import FormComponent from "./Components/FormComponent.";
import TableComponent from "./Components/TableComponent";
import appContext from "./cotext/appContext";
import appReducer from "./reducer/appReducer";
import { AnimatePresence } from "framer-motion";
import AlertComponent from "./Components/AlertComponent";
import TabComponent from "./Components/TabComponent";

function App() {
  const [values, setValues] = useReducer(appReducer, {
    index: -1, //index -1 shows new forms
    tab: 0, //tab 0 = forms 1 = table
    temp: {
      customerName: "",
      phoneNo: "",
      email: "",
      question1: 3,
      question2: 3,
      question3: 3,
      question4: 3,
    },
    forms: [], //collection of all submited forms
    alert: "", //alert after performing actions
  });

  useEffect(() => {
    //load locally stored forms when mounting app to the app's store
    localStorage.getItem("forms") &&
      setValues({
        type: "loadForm",
      });
    //load locally stored draft form when mounting app to the app's store
    localStorage.getItem("temp") &&
      setValues({
        type: "loadTemp",
      });
  }, []);
  return (
    //appcontext will provide actions & global state to the components inside
    //alert component is fixed to the top and and only rendered when alrts are available
    //AnimatePresence will help retain the component till exit animations are done
    <appContext.Provider value={{ values, setValues }}>
      <div className="App bg-light pt-14">
        <AlertComponent />
        <TabComponent />
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
