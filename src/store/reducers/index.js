import { ACTION_ADD_ITEM, ACTION_DELETE_ITEM, ACTION_TOGGLE_ITEM } from "../actions/todo";
const initialState = {
  todoItems: [
    {
      id: 1,
      author: "Ivan",
      title: "Work",
      status: false,
    },
    {
      id: 2,
      author: "Ivanko",
      title: "Working",
      status: true,
    },
  ],
};

export default function rootReducer(state = initialState, { type, payload = null }) {
  switch (type) {
    case ACTION_TOGGLE_ITEM:
      let newItem = state.todoItems.find((item) => item.id === payload);
      newItem = { ...newItem, status: !newItem.status };
      const newItems = state.todoItems.map((item) => (item.id === payload ? newItem : item));
      return { ...state, todoItems: newItems };
    case ACTION_DELETE_ITEM:
      return { ...state, todoItems: state.todoItems.filter((item) => item.id !== payload) };
    case ACTION_ADD_ITEM:
      return { ...state, todoItems: [...state.todoItems, payload] };
    default:
      return state;
  }
}
