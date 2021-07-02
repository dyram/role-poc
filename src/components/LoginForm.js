import React, { useState } from "react";
import { Input, Button, Typography, Divider, Row, Col } from "antd";

export function LoginForm(props) {
  const { action } = props;
  const { Title } = Typography;

  //state
  const [username, setUsername] = useState("");

  return (
    <>
      <Divider />

      <Title level={2}>User Select</Title>
      <Row justify="space-between">
        <Col span={16}>
          <Input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Col>
        <Col span={7}>
          <Button
            type="primary"
            onClick={(e) => {
              action(username);
              setUsername("");
            }}
          >
            Select
          </Button>
        </Col>
      </Row>
      <Divider />
    </>
  );
}
