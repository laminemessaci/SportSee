import axios from 'axios';

const data = '/mockedData.json';
/**
 * A mocked data for testing component app.
 *
 * @return  {Promise<Object>}  data promise
 */
export const getAllDataMocked = async () => {
  const response = await axios.get(data);
  return response.data;
};

export const getDataByUserId = (userId, data) => {
  return data.map((obj) => obj.userId === userId);
};
