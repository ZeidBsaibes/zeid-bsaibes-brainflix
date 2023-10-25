import apiInstance from "../../scripts/brainflix-api-instance";

const deleteComment = async (videoId, commentId) => {
  try {
    const response = await apiInstance.deleteComment(videoId, commentId);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default deleteComment;
