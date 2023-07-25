import React from "react";
import { Layout, Row, Col, notification } from "antd";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  FacebookOutlined,
  ShopOutlined,
  InstagramOutlined,
  SmileTwoTone,
  FrownTwoTone,
} from "@ant-design/icons";
import EmailForm from "./Email";
function Footer() {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (title, mess) => {
    api.open({
      message: title,
      description: mess,
      icon: (
        <SmileTwoTone
          style={{
            color: "#108ee9",
          }}
        />
      ),
    });
  };
  const openNotification2 = (title, mess) => {
    api.open({
      message: title,
      description: mess,
      icon: (
        <FrownTwoTone
          style={{
            color: "#108ee9",
          }}
        />
      ),
    });
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {contextHolder}
      <Row gutter={16} style={{ padding: 20, width: "80%", display: "flex" }}>
        <Col xs={24} sm={12} md={8} lg={8} xl={8}>
          <h3>Địa chỉ</h3>
          <p style={{ width: "80%" }}>
            Group 2, Quarter 6, Tan Khai Town, Hon Quan District, Binh Phuoc
            Province, Vietnam
          </p>
        </Col>
        <Col xs={24} sm={12} md={8} lg={8} xl={8}>
          <h3>Liên hệ</h3>
          <p style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <PhoneOutlined />
            {`+84(0) 937 68 5758`}
          </p>
          <p style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <MailOutlined />
            {`sale@dieuvang.vn`}
          </p>
        </Col>
        <Col xs={24} sm={12} md={8} lg={8} xl={8}>
          <h3>Gửi thông tin</h3>
          <div
            style={{
              width: '100%',
              display: "flex"
            }}
          >
            <EmailForm
              emailsuccess={openNotification}
              emailfail={openNotification2}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
