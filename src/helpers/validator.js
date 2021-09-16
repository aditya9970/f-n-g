const validator = (name) => {
  switch (name) {
    case "email":
      return {isValid :  , message : ''};
    case "customerName":
      return {isValid : , message : ''};
    case "phoneNo":
      return {isValid :  , message : ''};
    default:
      return {};
  }
};

export default validator;
