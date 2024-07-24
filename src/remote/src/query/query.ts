/**
 * @remarks for testing with different data from host
 */
export const getMockDataAsync = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return "successful in remote2";
};
