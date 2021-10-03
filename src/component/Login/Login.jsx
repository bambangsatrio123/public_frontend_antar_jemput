import { Card, Col, Row, Form, Input, Button, Radio } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./Login.css";
import { useHistory } from "react-router-dom";
import useUser from "../../hooks/useUser";
import React from "react";

export default function Login() {
   const [, setUser] = useUser();

   const history = useHistory();

   const onFinish = (values) => {
     console.log(values)
     setUser({ name: values.username, role: values.roles });
     history.replace("/beranda");
   };

   const [value, setValue] = React.useState();
   const onRole = (e) => {
     console.log("radio checked", e.target.value);
     setValue(e.target.value);
   };

  
  return (
    <div className="login-wrapper">
      <div className="container">
        <Row style={{ display: "flex", justifyContent: "center", height: "100vh", alignItems: "center" }}>
          <Col xs={16} sm={18} md={14} lg={10}>
            <Card
              cover={
                <div
                  style={{
                    textAlign: "center",
                    paddingTop: "35px",
                    paddingBottom: "20px",
                  }}
                >
                  <img className="logo-login" src="/assets/logoLogin.png" alt="logo" />
                </div>
              }
              style={{ borderRadius: 16 }}
            >
              <Form name="normal_login" className="login-form" style={{ margin: "auto", textAlign: "center" }} onFinish={onFinish} autoComplete="off">
                <Form.Item name="username" rules={[{ required: true, message: "Please input your Username!" }]}>
                  <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>

                <Form.Item name="password" rules={[{ required: true, message: "Please input your Password!" }]}>
                  <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
                </Form.Item>

                <Form.Item name="roles" label="Select Roles" onChange={onRole} value={value} rules={[{ required: true, message: "Please select your role!" }]}>
                  <Radio.Group>
                    <Radio value="customer">Customer</Radio>
                    <Radio value="agen">Agen</Radio>
                  </Radio.Group>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                      Log in
                    </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}