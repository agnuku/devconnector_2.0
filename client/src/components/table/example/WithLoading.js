import React from "react";
import GetReportsSpinner from "./GetReportsSpinner";

function WithLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return <GetReportsSpinner />;
  };
}
export default WithLoading;
