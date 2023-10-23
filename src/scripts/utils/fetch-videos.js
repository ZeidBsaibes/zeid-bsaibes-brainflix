import apiInstance from "../brainflix-api-instance";

const fetchVideos = async () => {
  try {
    const response = await apiInstance.getVideos();

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchVideos;
