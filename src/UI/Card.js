import React from "react";

export default function Card({ className, children }) {
  const classes = className;
  return <div className={classes}>{children}</div>;
}
