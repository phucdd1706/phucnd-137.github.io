const Regex = () => {
  const regex = {
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    name: /^[a-zA-Z ]{2,30}$/,
    phone: /^[0-9]{10}$/,
    pincode: /^[0-9]{6}$/,
    address: /^[a-zA-Z0-9 ]{2,30}$/,
  };

  return regex;
};

export default Regex;
