import React, { useEffect } from "react";
import { Typography } from "antd";

//redux
import { useSelector, useDispatch } from "react-redux";
import { selectInventory, fetchInventory } from "../store/table/tableSlice";

//components
import { TableComp } from "../components/TableComp";

export function HomePage(props) {
  const { Text } = Typography;
  const dispatch = useDispatch();

  const inventory = useSelector(selectInventory);

  useEffect(() => {
    dispatch(fetchInventory());
  }, []);

  return (
    <>
      <Text style={{ letterSpacing: "4px", fontSize: "x-large" }}>
        Hello Shoppers
      </Text>

      <TableComp data={inventory} />
    </>
  );
}
