import apiInstance from "../brainflix-api-instance";

const fetchVideosFromId = async (id) => {
  try {
    const response = await apiInstance.getVideoById(id);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchVideosFromId;
