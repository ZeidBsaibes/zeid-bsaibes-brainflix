import apiInstance from "../brainflix-api-instance";

const postVideo = async (newVideo) => {
  try {
    const response = await apiInstance.postVideo(newVideo);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default postVideo;
