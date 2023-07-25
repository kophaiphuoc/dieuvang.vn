import { Form, Input, Button, Row, Col } from 'antd';
import emailjs from "emailjs-com";
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
    <Form onFinish={onFinish} layout="vertical">
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
             label="Tên"
             name="name"
            rules={[
              { required: true, message: 'Vui lòng nhập tên!' },
              { type: 'text', message: 'tên không hợp lệ!' },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Số điện thoại"
            name="phoneNumber"
            rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="Email"
            name="email2"
            rules={[
              { required: true, message: 'Vui lòng nhập email!' },
              { type: 'email', message: 'Email không hợp lệ!' },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Nội dung"
            name="content"
            rules={[{ required: true, message: 'Vui lòng nhập nội dung!' }]}
          >
            <Input.TextArea />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Gửi
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EmailForm;
