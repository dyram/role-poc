import React from "react";
import { Table } from "antd";

export function TableComp(props) {
  const { data } = props;

  const buildColumns = (dataFromAPI) => {
    let columns = [];
    if (dataFromAPI) {
      const sampleDataItem = dataFromAPI[0];
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
