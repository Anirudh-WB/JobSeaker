import { useEffect, useState } from "react";

function CompanyProfileUtility() {
  const [canAccess, setCanAccess] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    setCanAccess(user?.role === "Cp001");
  }, [canAccess]);

  return { canAccess };
}

export default CompanyProfileUtility;
