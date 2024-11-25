import { useEffect } from "react";
import store from "../redux/store";
import { setUser } from "../redux/user/userSlice";

function Utility() {
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) {
      store.dispatch(setUser(user));
    }
  }, []);

  return;
}

export default Utility;
