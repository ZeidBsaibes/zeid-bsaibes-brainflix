import apiInstance from "../brainflix-api-instance";

const fetchVideosList = async () => {
  try {
    const response = await apiInstance.getVideosList();

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchVideosList;
