import React, { useContext, useEffect, useState } from "react";
import appContext from "../cotext/appContext";
import validator from "../helpers/validator";

const FormComponent = ({ forms, setForms }) => {
  const { values, setValues } = useContext(appContext);

  let { temp } = values;

  const handleSubmit = (e) => {
    console.log("submited");
    e.preventDefault();
    if (
      validator("customerName", temp.customerName) &&
      validator("phoneNo", temp.phoneNo) &&
      validator("email", temp.email)
    ) {
      values.index === -1
        ? setValues({ type: "addForm" })
        : setValues({ type: "updateForm" });
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    setValues({ type: "resetTemp" });
  };

  const handleChange = (type) => (e) => {
    console.log("changed", e.target.value);
    setValues({
      type: "changeTemp",
      payload: {
        [e.target.name]: type === "range" ? e.target.value * 1 : e.target.value,
      },
    });
  };
  return (
    <div>
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
                <span className=" mx-2  text-red-600  text-xs">
                  {`${
                    !validator("customerName", temp.customerName)
                      ? "Name entered is not valid"
                      : ""
                  } `}
                </span>
              </label>
              <input
                type="text"
                id="customerName"
                name="customerName"
                placeholder="Eg: Adam Fox"
                onChange={handleChange("string")}
                value={temp.customerName}
              />
              <label for="phoneNo ">
                Phone No{" "}
                <span className=" mx-2  text-red-600  text-xs">
                  {`${
                    !validator("phoneNo", temp.phoneNo)
                      ? "Phone no entered is not valid"
                      : ""
                  } `}
                </span>
              </label>
              <input
                className="input"
                type="tel"
                id="phoneNo"
                name="phoneNo"
                placeholder="Eg: 9922002283"
                onChange={handleChange("string")}
                value={temp.phoneNo}
              />
              <label for="email">
                Email ID{" "}
                <span className=" mx-2  text-red-600  text-xs">
                  {`${
                    !validator("email", temp.email)
                      ? "Email entered is not valid"
                      : ""
                  } `}
                </span>
              </label>
              <input
                className="input"
                type="email"
                id="email"
                name="email"
                value={temp.email}
                placeholder="Eg : Example@mail.com"
                onChange={handleChange("string")}
              />
            </div>
            <div className=" flex-1 p-4  text-left">
              <p className="pt-1">
                Quality of the service you received from your Host.
              </p>
              <div>
                <input
                  type="range"
                  value={temp.question1}
                  min="0"
                  max="5"
                  name="question1"
                  onChange={handleChange("range")}
                />
              </div>
              <p>Quality of your Beverage.</p>
              <input
                type="range"
                value={temp.question2}
                min="0"
                max="5"
                name="question2"
                onChange={handleChange("range")}
              />

              <p>Cleanlines of our Restaurant</p>
              <input
                type="range"
                value={temp.question3}
                min="0"
                max="5"
                name="question3"
                onChange={handleChange("range")}
              />

              <p>Your overall Experience</p>
              <input
                type="range"
                value={temp.question4}
                min="0"
                max="5"
                name="question4"
                onChange={handleChange("range")}
              />
            </div>
          </div>
          <div className="w-100">
            <button
              className="px-6 py-2 rounded text-white m-2 mr-auto "
              style={{ color: "#48A44C" }}
              type="reset"
            >
              Reset
            </button>
            <button
              className="px-6 py-2 rounded text-white m-2 mr-auto "
              style={{ backgroundColor: "#48A44C" }}
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
