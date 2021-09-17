import { AnimatePresence, motion } from "framer-motion";
import React, { useContext, useEffect } from "react";
import appContext from "../cotext/appContext";
import validator from "../helpers/validator";
import { click, highlight, item, slideInLeft } from "../helpers/animation";

const FormComponent = () => {
  const { values, setValues } = useContext(appContext);

  let { temp } = values;

  const handleSubmit = (e) => {
    //submits performs
    e.preventDefault();
    //check for valiodations
    if (
      validator("customerName", temp.customerName) &&
      validator("phoneNo", temp.phoneNo) &&
      validator("email", temp.email)
    ) {
      // add/update darft to the forms & update the local storage to updated forms
      //-1 is for new forms to be added
      // !== -1 shows the forms currently under editing
      values.index === -1
        ? setValues({ type: "addForm" })
        : setValues({ type: "updateForm" });
    }
  };

  const handleReset = (e) => {
    //handleReset will clear the draft from local and app's store
    e.preventDefault();
    setValues({ type: "resetTemp" });
  };

  const handleChange = (type) => (e) => {
    //handlechange will update the draft from local & app's store
    setValues({
      type: "changeTemp",
      payload: {
        [e.target.name]:
          type === "range" ? (e.target.value * 1) / 10 : e.target.value,
      },
    });
  };

  useEffect(() => {}, [values.temp.question1]);

  return (
    <motion.div
      variants={slideInLeft}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1 className="text-3xl text-dark pt-8 text-blue-700">Aromatic Bar</h1>

      <p className="text-gray-400 pb-1	">
        We are committed to providing you with the best dining experience
        possible, so we welcome your comments. Please fill out this
        questionnaire. Thank you
      </p>
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-white  ">
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <div className="text-right flex flex-col sm:flex-row ">
            <div className="p-4 text-left flex-1">
              <label for="customerName">
                Name
                <AnimatePresence initial={false} exitBeforeEnter={true}>
                  {!validator("customerName", temp.customerName) && (
                    <motion.span
                      className=" mx-2  text-red-600  text-xs"
                      variants={item}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      (Name entered is not valid)
                    </motion.span>
                  )}
                </AnimatePresence>
              </label>
              <motion.input
                type="text"
                className="input"
                id="customerName"
                name="customerName"
                placeholder="Eg: Adam Fox"
                onChange={handleChange("string")}
                value={temp.customerName}
                whileFocus={highlight}
                whileHover={highlight}
              />
              <label for="phoneNo ">
                Phone No
                <AnimatePresence initial={false} exitBeforeEnter={true}>
                  {!validator("phoneNo", temp.phoneNo) && (
                    <motion.span
                      className=" mx-2  text-red-600  text-xs"
                      variants={item}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      (Phone no entered is not valid)
                    </motion.span>
                  )}
                </AnimatePresence>
              </label>
              <motion.input
                className="input"
                type="tel"
                id="phoneNo"
                name="phoneNo"
                placeholder="Eg: 9922002283"
                onChange={handleChange("string")}
                value={temp.phoneNo}
                whileFocus={highlight}
                whileHover={highlight}
              />
              <label for="email">
                Email ID
                {!validator("email", temp.email) && (
                  <motion.span
                    className=" mx-2  text-red-600  text-xs"
                    variants={item}
                    hidden="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    (Email entered is not valid)
                  </motion.span>
                )}
              </label>
              <motion.input
                className="input"
                type="email"
                id="email"
                name="email"
                value={temp.email}
                placeholder="Eg : Example@mail.com"
                onChange={handleChange("string")}
                whileFocus={highlight}
                whileHover={highlight}
              />
            </div>
            <div className=" flex-1 p-4  text-left">
              <div className="flex pr-4">
                <p className="pt-1 inline-block">
                  Quality of the service you received from your Host.
                </p>
                <span className="ml-auto inline-block">{temp.question1}/5</span>
              </div>
              <div>
                <motion.input
                  whileHover={highlight}
                  type="range"
                  className="range"
                  value={temp.question1 * 10}
                  min="10"
                  max="50"
                  name="question1"
                  onChange={handleChange("range")}
                />
              </div>
              <div className="flex pr-4">
                <p>Quality of your Beverage.</p>
                <motion.span className="ml-auto inline-block">
                  {temp.question2}/5
                </motion.span>
              </div>
              <motion.input
                whileHover={highlight}
                type="range"
                className="range"
                value={temp.question2 * 10}
                min="10"
                max="50"
                name="question2"
                onChange={handleChange("range")}
              />
              <div className="flex pr-4">
                <p>Cleanlines of our Restaurant</p>
                <span className="ml-auto inline-block">{temp.question3}/5</span>
              </div>
              <motion.input
                whileHover={highlight}
                type="range"
                className="range"
                value={temp.question3 * 10}
                min="10"
                max="50"
                name="question3"
                onChange={handleChange("range")}
              />
              <div className="flex pr-4">
                <p>Your overall Experience</p>
                <span className="ml-auto inline-block">{temp.question4}/5</span>
              </div>
              <motion.input
                whileHover={highlight}
                type="range"
                className="range"
                value={temp.question4 * 10}
                min="10"
                max="50"
                name="question4"
                onChange={handleChange("range")}
              />
            </div>
          </div>
          <div className="w-100">
            <motion.button
              whileHover={highlight}
              whileTap={click}
              className="px-6 py-2 rounded text-white m-2 mr-auto "
              style={{ color: "#48A44C" }}
              type="reset"
            >
              Reset
            </motion.button>
            <motion.button
              whileHover={highlight}
              whileTap={click}
              className="px-6 py-2 rounded text-white m-2 mr-auto "
              style={{ backgroundColor: "#48A44C" }}
              type="submit"
            >
              {values.index === -1 ? "Submit" : "Update"}
            </motion.button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default FormComponent;
