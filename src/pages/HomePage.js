import React, { useEffect } from "react";
import { Typography, Row, Col, Button } from "antd";

//react-redux
import { useSelector, useDispatch } from "react-redux";

//redux - store
import { selectInventory, fetchInventory } from "../store/table/tableSlice";
import {
  selectUser,
  selectCurrentUserRole,
  loginUser,
  getAllRoles,
} from "../store/users/userSlice";
import { selectShops, getAllShops } from "../store/shops/shopSlice";

//components
import { TableComp } from "../components/TableComp";
import { LoginForm } from "../components/LoginForm";

// import { UserModel } from "../utils/User";

export function HomePage(props) {
  const { Text } = Typography;
  const dispatch = useDispatch();

  //Default login
  // const user = UserModel.getUser();

  //table selectors
  const inventory = useSelector(selectInventory);
  //user selectors
  const userDetails = useSelector(selectUser);
  const permissions = useSelector(selectCurrentUserRole);
  //shop selectors
  const shops = useSelector(selectShops);

  // TODO : Check delete URL with Roshan
  // TODO: Check Normalizr package

  useEffect(() => {
    dispatch(fetchInventory());
    dispatch(getAllRoles());
    dispatch(getAllShops());
  }, []);

  return (
    <>
      <LoginForm
        action={(e) => {
          dispatch(loginUser(e));
        }}
      />

      <Row justify="space-between" style={{ margin: "1% 0%" }}>
        <Col span={16}>
          <Text style={{ letterSpacing: "4px", fontSize: "x-large" }}>
            Hello {userDetails.name} - (Role type: {userDetails.role})
          </Text>
        </Col>
        <Col span={7}>
          <Button type="primary" disabled={!permissions?.local.write}>
            Add Item
          </Button>
        </Col>
      </Row>

      {permissions?.global.read ? (
        <TableComp
          data={inventory}
          userPermissions={permissions}
          currentShop={shops?.filter((shop) => shop.ownerId === userDetails.id)}
        />
      ) : (
        ""
      )}
    </>
  );
}
