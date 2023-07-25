import React from "react";
import {Image } from "antd";
import { useTranslation } from "react-i18next";
function Processing() {
  const {i18n } = useTranslation();
  const currentLanguage = i18n.language;
  return (
    <div style={{display:'flex',alignItems:"center",flexDirection:'column'}}>
      <h2>Quy trình chế biến và sản xuất</h2>
      <div style={{width:'60%'}}>
        <Image
          src={currentLanguage == "vi" ? "http://hoangson1.vn/123.jpg" : "http://hoangson1.vn/wp-content/uploads/2017/11/DN-E-1080x1374.jpg" }
          alt={`Image`}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}

export default Processing;
