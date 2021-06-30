import React, { useEffect } from "react";
import { Typography } from "antd";

//redux
import { useSelector, useDispatch } from "react-redux";
import { selectInventory, fetchInventory } from "../store/table/tableSlice";

//components
import { TableComp } from "../components/TableComp";
import { UserModel } from "../utils/User";

export function HomePage(props) {
  const { Text } = Typography;
  const dispatch = useDispatch();
  const user = UserModel.getUser();
  console.log({user});

  const inventory = useSelector(selectInventory);

  // TODO: Create actions in table based on user.permissions

  useEffect(() => {
    dispatch(fetchInventory());
  }, []);

  return (
    <>
      <Text style={{ letterSpacing: "4px", fontSize: "x-large" }}>
        Hello {user.name} - (Role type: {user.role})
      </Text>

      {
        user.permissions.global.read ? <TableComp data={inventory} /> : ''
      }
    </>
  );
}
