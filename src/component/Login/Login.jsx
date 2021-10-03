import { Card, Col, Row, Form, Input, Button, Select, Radio } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';
import "./Login.css"

const { Option } = Select;

export default function Login() {
  
  return (
    <div className="login-wrapper">
      <div className="container">
        <Row style={{ display: "flex", justifyContent: "center", height: "100vh", alignItems: "center" }}>
          <Col md={9}>
            <Card
              cover={
                <div
                  style={{
                    textAlign: "center",
                    padding: "30px 0px",
                  }}
                >
                  <img alt="logo" src="/assets/logoLogin.png" width={220} />
                </div>
              }
              style={{ borderRadius: 16 }}
            >
              <Form name="normal_login" className="login-form" style={{ margin: "auto", textAlign: "center" }}>
                <Form.Item name="username" rules={[{ required: true, message: "Please input your Username!" }]}>
                  <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>

                <Form.Item name="password" rules={[{ required: true, message: "Please input your Password!" }]}>
                  <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
                </Form.Item>

                <Form.Item name="radio-group" label="Select Roles" rules={[{ required: true, message: "Please select your role!" }]}>
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