import { useEffect } from "react";
import { setUser } from "../redux/user/userSlice";
import { useDispatch } from "react-redux";
import {
  setCompanyAccess,
  setJobSeekerAccess,
} from "../redux/other/otherSlice";

function Utility() {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) {
      dispatch(setUser(user));

      if (user?.role === "Cp001") {
        dispatch(setCompanyAccess());
      } else if (user?.role === "Js001") {
        dispatch(setJobSeekerAccess());
      }
    }
  }, [dispatch]);

  return;
}

export default Utility;
