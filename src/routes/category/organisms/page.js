import React, { useState, useEffect } from "react";
import CategoryTable from "../molecules/CategoryTable";
import { getCategories, editCategory } from "../../../api";
import CategoryModal from "../molecules/CategoryModal";

const Page = () => {
  const [response, setResponse] = useState();
  const [data, setData] = useState({ isFetching: true, data: [] });
  const [category, setCategory] = useState({});

  const [isModal, setModal] = useState(false);

  useEffect(() => {
    getCategories(setData);
  }, []);

  const onEditClick = (item) => {
    setModal(true);
    setCategory(item);
  };

  const onSubmit = (value) => {
    setModal(false);
    editCategory(value, setResponse);
  };
  console.log(response);
  return (
    <>
      <CategoryTable data={data.data} loading={data.isFetching} onEditClick={onEditClick} />
      <CategoryModal input={category} visible={isModal} onCancel={setModal} onSubmit={onSubmit} />
    </>
  );
};

export default Page;
