import React from "react";
import { Table, Button } from "antd";

export function TableComp(props) {
  const { data, userPermissions, currentShop } = props;

  //TODO:Normalize data to table from page-level

  const buildColumns = (dataFromAPI) => {
    let columns = [];

    if (dataFromAPI) {
      const sampleDataItem = dataFromAPI[0];

      let actions = {
        title: "Action",
        key: "action",
        render: (item) => (
          <Button
            danger
            type="primary"
            disabled={
              item.shopId !== currentShop[0]?.id &&
              !userPermissions.global.delete
            }
          >
            Delete Item
          </Button>
        ),
      };

      if (sampleDataItem) {
        Object.keys(sampleDataItem).map((dataKey) => {
          let obj = {
            title:
              dataKey.toString().charAt(0).toUpperCase() +
              dataKey.toString().slice(1),
            dataIndex: dataKey,
            key: dataKey,
          };
          columns.push(obj);
        });
        columns.push(actions);
      }
    }
    return columns;
  };

  return (
    <>
      <Table dataSource={data} columns={buildColumns(data)} />
    </>
  );
}
