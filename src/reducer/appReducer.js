//appReducer contains all actions taken for internal store & localstorage

const appReducer = (state, action) => {
  //appReducer returns the updated state(app's store) based on type of action & payload provided
  switch (action.type) {
    case "loadForm":
      return {
        ...state,
        forms: JSON.parse(localStorage.getItem("forms")),
      };
    case "loadTemp":
      return {
        ...state,
        temp: JSON.parse(localStorage.getItem("temp")),
      };
    case "addForm":
      localStorage.setItem(
        "forms",
        JSON.stringify([...state.forms, state.temp])
      );
      return {
        ...state,
        forms: [...state.forms, state.temp],
        temp: {
          customerName: "",
          phoneNo: "",
          email: "",
          question1: 3,
          question2: 3,
          question3: 3,
          question4: 3,
        },
        index: -1,
        alert: "Feedback Submited Successfully",
      };
    case "editForm":
      return {
        ...state,
        temp: state.forms[action.payload],
        index: action.payload,
        tab: 0,
      };
    case "updateForm":
      state.forms[state.index] = state.temp;
      localStorage.setItem("forms", JSON.stringify(state.forms));
      return {
        ...state,
        temp: {
          customerName: "",
          phoneNo: "",
          email: "",
          question1: 3,
          question2: 3,
          question3: 3,
          question4: 3,
        },
        index: -1,
        alert: "Feedback Updated Successfully",
      };

    case "deleteForm":
      let temp = [];
      state.forms.forEach((item, i) => {
        i !== action.payload && temp.push(item);
      });
      localStorage.setItem("forms", JSON.stringify(state.forms));
      return {
        ...state,
        forms: temp,
        alert: "Feedback Deleted Successfully",
      };

    case "changeTab":
      return { ...state, tab: action.payload };

    case "resetTemp":
      localStorage.setItem(
        "temp",
        JSON.stringify({
          customerName: "",
          phoneNo: "",
          email: "",
          question1: 3,
          question2: 3,
          question3: 3,
          question4: 3,
        })
      );
      return {
        ...state,
        temp: {
          customerName: "",
          phoneNo: "",
          email: "",
          question1: 3,
          question2: 3,
          question3: 3,
          question4: 3,
        },
        index: -1,
      };
    case "changeTemp":
      localStorage.setItem(
        "temp",
        JSON.stringify({
          ...state.temp,
          ...action.payload,
        })
      );
      return {
        ...state,
        temp: {
          ...state.temp,
          ...action.payload,
        },
        alert: "",
      };
    case "closeAlert":
      return { ...state, alert: "" };
    default:
      return state;
  }
};

export default appReducer;
