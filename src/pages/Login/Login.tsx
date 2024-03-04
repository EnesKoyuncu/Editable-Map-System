import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import "./Login.css";

interface LoginProps {}

// Login Component ve Props
const Login: React.FC<LoginProps> = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Router olayı Redux kaynaklı

  // Form Submit Olduğunda
  const onFinish = (values: any) => {
    // ! payload username : values.username olcak sanırım
    dispatch({ type: "User", payload: { email: values.email } });
    navigate("/dashboard");
  };

  // Form Hata Alması Durumunda
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };

  return (
    <div className="login-container">
      <Form
        name="basic"
        labelCol={{ span: 8 }} // label genişliği
        wrapperCol={{ span: 16 }} // input genişliği
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }} // default değerler
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        {/* Span değişmesi durumudna genişlik değişmedi */}
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
