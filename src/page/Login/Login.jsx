import React, { useState, useEffect } from "react";
import { Form, Input, Button, message } from "antd";
import Cookies from "js-cookie";
import "../Login/Login.css";

function Login() {
  const [checktoken, setChecktoken] = useState("");

  useEffect(() => {
    const token = Cookies.get("token");
    setChecktoken(token);
  }, []);

  const onFinish = (values) => {
    if (values.username === "admin" && values.password === "admin") {
      Cookies.set("token", "dieuvang.vn", { expires: 3 });
      setChecktoken("dieuvang.vn");
      message.success("Login thành công");
    } else {
      message.error("Tài khoản hoặc mật khẩu không đúng");
    }
  };

  const logOut = () => {
    Cookies.remove("token");
    setChecktoken("");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        {checktoken === "dieuvang.vn" ? (
          <Button
            onClick={logOut}
            type="primary"
            htmlType="submit"
            className="login-button"
          >
            Log Out
          </Button>
        ) : (
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input placeholder="Username" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-button">
                Log in
              </Button>
            </Form.Item>
          </Form>
        )}
      </div>
    </div>
  );
}

export default Login;
