import React from "react";
import "./Loadingbox.scss";
export default function LoadingBox() {
  return (
    <div className="loading">
      <i className="fa fa-spinner fa-spin loading__content"></i>
    </div>
  );
}
