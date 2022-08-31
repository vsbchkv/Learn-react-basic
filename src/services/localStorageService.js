export const setLocalData = (key, obj) => {
  localStorage.setItem(key, JSON.stringify(obj));
};

export const getLocalData = (key) => {
  try {
    const serializedState = localStorage.getItem(key);

    if (serializedState) {
      return JSON.parse(serializedState);
    }
  } catch (err) {
    return;
  }
};
