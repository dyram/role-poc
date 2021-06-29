import 'antd/dist/antd.css';
import './App.css';
import ItemTable from './ItemTable';
import { render } from '@testing-library/react';

/**
 * TODO: GOALS
 *
 * 1. Table should not decide what to display, including action
 * 2. All data fetching should be feature-level, or page-level. Not component level.
 * 3. Roles are dynamic. Must check role permissions to display actions.
 */

const differentData = [
  {
    shopName: 'erer',
    productName: 'erer',
    price: 34.999,
    data: {
      name: 'iPhone'
    }
  }
];

// <whatever data> => normalize => dummyData (or shape of ItemTable.items prop)

const dummyData = [{
  "id": 0,
  "shopId": 0,
  "name": "iPhone",
  "price": "Rs 56000"
},
  {
    "id": 4,
    "shopId": 0,
    "name": "iPhone2",
    "price": "Rs 156000"
  },];

function App() {
  return (
    <div className="App">
      <header className="'App-header">
        <ItemTable items={dummyData} />
      </header>
    </div>
  );
}


export default App;
