export const getValueFromLocalStorage = (key, initialValue) => {
  const localStorageValue = JSON.parse(localStorage.getItem(key));
  return localStorageValue || initialValue;
};

export const saveValueInLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
