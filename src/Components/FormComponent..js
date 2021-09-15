import React, { useState } from "react";

const FormComponent = () => {
  const [formData, setformData] = useState({
    customerName: "",
    phoneNo: "",
    email: "",
    question1: 3,
    question2: 3,
    question3: 3,
    question4: 3,
  });

  const handleChange = (type) => (e) => {
    console.log("changed", e.target.value);
    setformData({
      ...formData,
      [e.target.name]: type === "range" ? e.target.value * 1 : e.target.value,
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
        <form className="flex">
          <div className="xs:w-12/12  sm:w-12/12 w-6/12 sm:p-2 lg:p-4">
            <label for="customerName">Name</label>
            <input
              type="text"
              id="customerName"
              name="customerName"
              placeholder="Eg: Adam Fox"
              onChange={handleChange("string")}
              value={formData.customerName}
            />
            <label for="phoneNo">Phone No</label>
            <input
              className="input"
              type="tel"
              id="phoneNo"
              name="phoneNo"
              placeholder="Eg: 9922002283"
              onChange={handleChange("string")}
              value={formData.phoneNo}
            />
            <label for="email">Email ID</label>
            <input
              className="input"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Eg : Example@mail.com"
              onChange={() => handleChange("string")}
            />
          </div>
          <div className="sm:w-100 lg:w-6/12 sm:p-2 lg:p-4">
            <p className="pt-1">
              Quality of the service you received from your Host.
            </p>
            <div>
              <input
                type="range"
                value={formData.question1}
                min="0"
                max="5"
                name="question1"
                onChange={handleChange("range")}
              />
            </div>
            <p>Quality of your Beverage.</p>
            <input
              type="range"
              value={formData.question2}
              min="0"
              max="5"
              name="question2"
              onChange={handleChange("range")}
            />

            <p>Cleanlines of our Restaurant</p>
            <input
              type="range"
              value={formData.question3}
              min="0"
              max="5"
              name="question3"
              onChange={handleChange("range")}
            />

            <p>Your overall Experience</p>
            <input
              type="range"
              value={formData.question4}
              min="0"
              max="5"
              name="question4"
              onChange={handleChange("range")}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
