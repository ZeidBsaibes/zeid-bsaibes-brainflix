import apiInstance from "../../scripts/brainflix-api-instance";

const PostComment = async (id, post) => {
  try {
    const response = await apiInstance.postComment(id, post);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default PostComment;
