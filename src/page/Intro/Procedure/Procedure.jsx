import React from "react";
import {Image } from "antd";
function Procedure() {
  return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h2>Quy trình chế biến và sản xuất</h2>
        <div style={{ width: "60%" }}>
          <Image
            src="http://hoangson1.vn/wp-content/uploads/2017/09/Cashew-Processing-Plan1.jpg"
            alt={`Image`}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
  );
}

export default Procedure;
