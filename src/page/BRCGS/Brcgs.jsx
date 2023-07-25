import React from "react";
import {Image } from "antd";
import brcgs from "../../assets/brgs.png"
function Brcsgs() {
  return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h2>CHỨNG CHỈ BRCGS</h2>
        <div style={{ width: "60%" }}>
          <Image
            src={brcgs}
            alt={`Image`}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
  );
}

export default Brcsgs;
