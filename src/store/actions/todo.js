export const ACTION_DELETE_ITEM = "ACTION_DELETE_ITEM ";
export function deleteItem(payload) {
  return { type: ACTION_DELETE_ITEM, payload  };
}

export const ACTION_ADD_ITEM = "ACTION_ADD_ITEM";
export function addItem(payload) {
  return { type: ACTION_ADD_ITEM, payload };
}

export const ACTION_TOGGLE_ITEM = "ACTION_TOGGLE_ITEM";
export function toggleItem(payload) {
  return { type: ACTION_TOGGLE_ITEM, payload };
}