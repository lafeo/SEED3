import React from "react";
import "../../App.css";
import "./login.css";
import Card from "../card2";
import professional from "../../Professional_Portal.svg";
import university from "../../University_Portal.svg";

export default function Login() {
  return (
    <div className="container-fluid">
      <div className="row-card">
        <div className="col-md-4">
          <Card title={"For Professionals"} imagePath={professional} />
        </div>
        <div className="col-md-4">
          <Card title={"For Universities"} imagePath={university} />
        </div>
      </div>
    </div>
  );
}
