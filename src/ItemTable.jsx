import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';

ItemTable.propTypes = {
    items: PropTypes.shape([{
        itemId: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired
    }])
};

const columnHeaders = [
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
        render: tags => <p>{tags.price}</p>
    }

];

const buildDataSource = (items) => {
    return items.map((item, index) => {
        return {
            key: index,
            name: item.name,
            price: item.price,
        }
    });
};

function ItemTable(props) {
    const { items } = props;
    const data = buildDataSource(items);
    return (
        <div>
            <Table
                dataSource={data}
                columns={columnHeaders}>
            </Table>
        </div>
    );
}

export default ItemTable;