import React from "react";
import {
  Form,
  Input,
  Button,
  Card,
  Typography,
  Row,
  Col,
  notification,
} from "antd";
import emailjs from "emailjs-com";
const { Title } = Typography;
import { SmileTwoTone, FrownTwoTone } from "@ant-design/icons";
const EmailForm = (props) => {
  const {emailsuccess,emailfail} = props
  const onFinish = (values) => {
    console.log("Submitted values:", values);
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
        emailsuccess("Thành Công", "Bạn đã gửi email thành công");
      })
      .catch((error) => {
        console.error("Email sending error:", error);
        emailfail(
          "Thất Bại",
          "Hệ thống đang lỗi hãy liên hệ (0356363154) cho tôi để khắc phục"
        );
      });
  };
  return (
    <Card>
      <Title level={3}>Gửi Email</Title>
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
          rules={[{ required: true, message: "Vui lòng nhập số điện thoại!" }]}
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

const CompanyInfo = () => {
  return (
    <Card>
      <Title level={3}>Thông tin công ty</Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12}>
          <p>
            <strong>CÔNG TY TNHH ĐIỀU VÀNG</strong>
          </p>
          <p>
            <strong>PHÒNG KINH DOANH</strong>
          </p>
          <p>
            Hạt điều nhân
            <br />
            Số điện thoại: 0937685758
            <br />
            Email: sale@dieuvang.vn
          </p>
        </Col>
        <Col xs={24} sm={12}>
          <p>
            <strong>Địa chi trụ sở chính và nhà máy:</strong>
            <br />
            TỔ 2, KP6, Hớn Quản, Bình Phước
          </p>
          <p>
            <strong>Website:</strong> dieuvang.vn
          </p>
          <p>
            <strong>Văn phòng đại diện:</strong>
            <br />
            TỔ 2, KP6, Hớn Quản, Bình Phước
          </p>
        </Col>
      </Row>
    </Card>
  );
};

function Conttact() {
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
    <div>
      {contextHolder}
      <Card title="Bản đồ Google Maps">
        <iframe
          title="Google Maps"
          width="100%"
          height="400"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7613331287835!2d106.59232999999999!3d11.568959799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174ab5caffe8ab5%3A0x194b770fc2f3a60!2sDieu%20Vang%20Company%20Limited!5e0!3m2!1sen!2s!4v1689566833220!5m2!1sen!2s"
          allowFullScreen
        ></iframe>
      </Card>

      <div>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={12}>
            <EmailForm  emailsuccess={openNotification} emailfail={openNotification2}/>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <CompanyInfo />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Conttact;
