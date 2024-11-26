import { useEffect, useState } from "react";

function ProfileUtility() {
  const [canAccess, setCanAccess] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    setCanAccess(user?.role === "Js001");
  }, [canAccess]);

  return { canAccess };
}

export default ProfileUtility;
