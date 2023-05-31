import React, { useState } from "react";
import { formattedDate } from "./utils/time";
function Clock() {
  const [dateVal, setDateVal] = useState(formattedDate());
  setInterval(() => {
    setDateVal(formattedDate());
  }, 1000);
  return <div>Date: {dateVal}</div>;
}
export default Clock;
