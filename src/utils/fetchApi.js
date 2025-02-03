export const mockApi = async function (mockUrl) {
  const fetchData = await fetch(mockUrl);

  return fetchData.json();
};
