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
      if (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value))
        return true;
      else return false;
    default:
      return {};
  }
};

export default validator;
