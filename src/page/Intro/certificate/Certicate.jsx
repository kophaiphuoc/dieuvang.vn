import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Card } from "antd";
import logo from "../../../assets/brgs.png"
function Certicate() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const nextPgae = () => {
    navigate(`/intro/certificate/brcgs`);
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "80%",
          height: "100%",
          padding: 10,
        }}
      >
        <Card
          onClick={() => nextPgae()}
          style={{
            width: 200,
            height: 240,
            marginTop: 10,
          }}
          cover={
            <img
              style={{objectFit:'cover',height:140}}
              alt="AFI"
              src={logo}
            />
          }
          hoverable
        >
          <Card.Meta title="CHỨNG CHỈ BRCGS" />
          <p>Chứng chỉ</p>
        </Card>
      </div>
    </div>
  );
}

export default Certicate;
