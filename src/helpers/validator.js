const validator = (name, value) => {
  switch (name) {
    case "email":
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
        return true;
      else return false;
    case "customerName":
      if (/^[A-Za-z\s]+$/.test(value)) return true;
      else return false;
    case "phoneNo":
      if (/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/.test(value))
        return true;
      else return false;
    default:
      return {};
  }
};

export default validator;
