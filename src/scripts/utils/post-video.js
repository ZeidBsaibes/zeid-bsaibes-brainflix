import apiInstance from "../brainflix-api-instance";

const postVideo = async (formData) => {
  try {
    const response = await apiInstance.postVideo(formData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default postVideo;
