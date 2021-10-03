import { Card, Col, Row, Form, Input, Button, Radio } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';
import "./Login.css"

export default function Login() {
  
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
                  <Link to="/customer-beranda">
                    <Button type="primary" htmlType="submit" className="login-form-button">
                      Log in
                    </Button>
                  </Link>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}