import 'antd/dist/antd.css';
import './App.css';
import { Table } from 'antd';
import { render } from '@testing-library/react';

function App() {

  const data = [
    {
      name: "item 1",
      price: "100",
      action: "Action 1",
      key: "1"
    },
    {
      name: "item 2",
      price: "200",
      action: "Action 2",
      key: "2"
    }, {
      name: "item 3",
      price: "300",
      action: "Action 3",
      key: "3"
    }
  ]

  const coloumns = [
    {
      title: "Name",
      dataindex: "name",
      key: "key",
      render: tags => <p>{tags.name}</p>

    }, {
      title: "Price",
      dataindex: "price",
      key: "key",
      render: tags => <p>{tags.price}</p>
    }, {
      title: "Action",
      dataindex: "action",
      key: "key",
      render: tags => <p>{tags.action}</p>
    }

  ]

  return (
    <div className="App">
      <header className="'App-header">
        <Table
          dataSource={data}
          columns={coloumns}>

        </Table>
      </header>
    </div>
  );
}


export default App;
