import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/actions/todo";
export default function TodoForm() {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState({ title: "", author: "" });
  function changeHandler(e) {
    setNewTodo({
      ...newTodo,
      [e.target.name]: e.target.value,
    });
  }
  function submitHandler(e) {
    e.preventDefault();
    let data = { ...newTodo, status: false, id: Date.now() };
    dispatch(addItem(data));
    setNewTodo({ title: "", author: "" });
  }

  function resetFormHandler() {
    setNewTodo({ title: "", author: "" });
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="row g-3 align-items-center mt-2 mb-2">
          <div className=" col-auto">
            <input
              value={newTodo.title}
              type="text"
              className="form-control"
              name="title"
              onChange={changeHandler}
              required
              placeholder="Дело"
            ></input>
          </div>
          <div className="col-auto">
            <input
              value={newTodo.author}
              type="text"
              className="form-control"
              name="author"
              onChange={changeHandler}
              required
              placeholder="Автор"
            ></input>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Сохранить
        </button>
        <button onClick={resetFormHandler} type="button" className="btn btn-primary ms-1">
          Очистить форму
        </button>
      </form>
    </>
  );
}
