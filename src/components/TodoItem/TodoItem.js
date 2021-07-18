import React from "react";
import { useDispatch } from "react-redux";
import { toggleItem, deleteItem } from "../../store/actions/todo";
export default function TodoItem({ items }) {
  const dispatch = useDispatch();

  function handletoggleItem() {
    dispatch(toggleItem(items.id));
  }
  function handledeleteItem(event) {
    event.stopPropagation();

    dispatch(deleteItem(items.id));
  }
  return (
    <>
      <li
        onClick={handletoggleItem}
        key={items.id}
        className={items.status ? "active list-group-item" : "list-group-item"}
      >
        {items.title}
        <div className="float-end"><span className="mx-2">{items.author}</span>
        <button
          onClick={handledeleteItem}
          type="button"
          className="btn-close"
          aria-label="Close"
        ></button>{" "}</div>
        
      </li>
    </>
  );
}
