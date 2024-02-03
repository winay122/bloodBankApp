import { userLogin, userRegister } from "../redux/features/auth/authActions";
import store from "../redux/store";

export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    if (!role || !email || !password) {
      return alert("Please Privde All Feilds");
    }
    // console.log("login", e, email, password, role);
    store.dispatch(userLogin({ email, password, role }));
  } catch (error) {
    console.log(error);
  }
};

export const handleRegister = (
  e,
  name,
  role,
  email,
  password,
  phone,
  organisation,
  address,
  hospital,
  website
) => {
  e.preventDefault();
  try {
    // console.log(
    //   "register=> ",
    //   name,
    //   role,
    //   email,
    //   password,
    //   phone,
    //   organisation,
    //   address,
    //   hospital,
    //   website
    // );
    store.dispatch(
      userRegister({
        name,
        role,
        email,
        password,
        phone,
        organisation,
        address,
        hospital,
        website,
      })
    );
  } catch (error) {
    console.log(error);
  }
};
