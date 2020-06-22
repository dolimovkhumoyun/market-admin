import React, { useState } from "react";
import { Modal, Input } from "antd";

const CategoryModal = ({ visible, onSubmit, onCancel }) => {
  const [title, setTitle] = useState("");

  return (
    <Modal
      title="Basic Modal"
      visible={visible}
      onOk={() => onSubmit(title)}
      onCancel={() => onCancel(false)}
    >
      <label htmlFor="">Категория:</label>
      <Input value={title} onChange={(e) => setTitle(e.target.value)} />
    </Modal>
  );
};

export default CategoryModal;
