import React from "react";
import { Card, Image, Typography, Row, Col, Form, Input, Button } from "antd";
import { useLocation } from "react-router-dom";
const { Meta } = Card;
const { Title, Text } = Typography;
import emailjs from "emailjs-com";

import "../ProductDetail/ProductDetail_css.css";
function ProductDetail() {
  const location = useLocation();
  const item = location.state;
  const name = item?.item?.name;
  const image = item?.item?.image;

  const CompanyInfo = () => {
    return (
      <Card>
        <Title level={3}>Thông tin sản phẩm</Title>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12}>
            <p>
              <strong>CÔNG TY CỔ PHẦN ĐIỀU VÀNG</strong>
            </p>
            <p>
              <strong>Tên sản phẩm</strong>
            </p>
            <p>
                {name}
            </p>
            <p>
              <strong>Mô tả</strong>
            </p>
            <p>
                Hạt điều được nhập và chế biến tại bình phước
            </p>
          </Col>
          <Col xs={24} sm={12}>
            <p>
              <strong>Nơi sản xuất:</strong>
              <br />
              Quốc lộ 14 xã Đức Liễu, huyện Bù Đăng, tỉnh Bình Phước.
            </p>
            <p>
              <strong>Website:</strong> dieuvang.vn
            </p>
            <p>
              <strong>Văn phòng đại diện:</strong>
              <br />
              Toà nhà LM81-15.OT.03 Vinhomes Central
              <br />
              208 Nguyễn Hữu Cảnh, P22, Quận Bình Thạnh, TP.HCM.
            </p>
          </Col>
        </Row>
      </Card>
    );
  };
  const EmailForm = () => {
    const onFinish = (values) => {
      values.content += ` Mã sản phẩm : ${name}`;
      emailjs
        .send(
          "service_9lablwt",
          "template_n4be23w",
          {
            to_name: values.name,
            ...values,
          },
          "pk5LeyHE_7yugg5nT"
        )
        .then((response) => {
          console.log("Email sent successfully!", response);
        })
        .catch((error) => {
          console.error("Email sending error:", error);
        });
    };
    return (
      <Card>
        <Title level={3}>Gửi email</Title>
        <Form onFinish={onFinish} layout="vertical">
          <Form.Item
            label="Tên"
            name="name"
            rules={[{ required: true, message: "Vui lòng nhập tên!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Số điện thoại"
            name="phone"
            rules={[
              { required: true, message: "Vui lòng nhập số điện thoại!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Vui lòng nhập địa chỉ email!" },
              { type: "email", message: "Địa chỉ email không hợp lệ!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Nội dung"
            name="content"
            rules={[{ required: true, message: "Vui lòng nhập nội dung!" }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Gửi
            </Button>
          </Form.Item>
        </Form>
      </Card>
    );
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Card
        className="product-card"
        hoverable
        style={{
          display: "flex",
          alignItems: "enter",
          justifyContent: "center",
        }}
      >
        <Image className="product-image" alt={name} src={image} />
        <Meta style={{ textAlign: "center", paddingTop: 10}} title={name} />
      </Card>
      <div>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={12}>
            <EmailForm />
          </Col>
          <Col xs={24} sm={24} md={12}>
            <CompanyInfo />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ProductDetail;
