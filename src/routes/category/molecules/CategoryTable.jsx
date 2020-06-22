import React from "react";

import { Table, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const CategoryTable = ({ data, loading, onEditClick }) => {
  const columns = [
    { key: "id", title: "#", dataIndex: "id" },
    { key: "name", title: "Наименование категории", dataIndex: "name" },
    {
      key: "actions",
      title: "Действия",
      render: (item) => (
        <>
          <Button type="primary" icon={<EditOutlined />} onClick={() => onEditClick(item)}>
            Редактировать
          </Button>
          <Button type="danger" icon={<DeleteOutlined />} className="ml-4">
            Удалить
          </Button>
        </>
      ),
    },
  ];
  !loading && data.map((item) => (item.key = item.id));
  return <Table columns={columns} dataSource={data} loading={loading} bordered />;
};

export default CategoryTable;
