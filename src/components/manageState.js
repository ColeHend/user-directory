import React from "react";
import data from "../data";
export default function useManageSt() {
  const [viewPosition, setViewPosition] = React.useState(0);
  const [maxLength, setMaxLength] = React.useState(data.length - 1);
  return {
    viewPosition,
    setViewPosition,
    maxLength,
    setMaxLength,
  };
}
