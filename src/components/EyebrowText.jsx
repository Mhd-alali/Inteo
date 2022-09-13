import React from "react";
function EyebrowText({ children }) {
  return (
    <div className="flex items-center h-10 gap-3">
      <hr className="border-primary-600 w-16"/>
      <h3 className="font-body text-body-sm font-semibold uppercase  text-primary-600">{children}</h3>
    </div>
  );
}

export default EyebrowText;
