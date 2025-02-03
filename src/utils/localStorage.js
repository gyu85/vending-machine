export const setItem = (key, data) => {
  const currentData = JSON.stringify(data);

  localStorage.setItem(key, currentData);
};

export const setPartItem = (storageKey, key, data) => {
  const currentData = JSON.parse(localStorage.getItem(storageKey));

  if (!key in currentData) {
    console.error('storage에 key가 없습니다.');
    return;
  }

  currentData[key] = data;

  localStorage.setItem(storageKey, JSON.stringify(currentData));
};

export const getItem = key => {
  const currentData = localStorage.getItem(key);

  return JSON.parse(currentData);
};

export const removeItem = key => {
  return localStorage.removeItem(key);
};
