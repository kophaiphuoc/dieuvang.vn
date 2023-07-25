import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Card } from "antd";
function Standard() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const nextPgae = () => {
    navigate(`/product/standard/afi`);
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
              alt="AFI"
              src="http://hoangson1.vn/wp-content/uploads/2018/05/CHINA-JAPAN-STANDARD-1-400x284.jpg"
            />
          }
          hoverable
        >
          <Card.Meta title="TIÊU CHUẨN AFI" />
          <p>Tiêu chuẩn</p>
        </Card>
      </div>
    </div>
  );
}

export default Standard;
