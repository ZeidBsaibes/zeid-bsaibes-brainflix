import API_KEY from "./brainflix-api";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

class BrainFlixApi {
  constructor(apiKey) {
    this.apiKey = API_KEY;
    this.baseURL = BASE_URL;
  }

  getVideosList = async () => {
    try {
      const response = await axios.get(`${this.baseURL}/videos`);
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  getVideoById = async (id) => {
    try {
      const response = await axios.get(`${this.baseURL}/videos/${id}`);
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  postComment = async (id, body) => {
    try {
      const response = await axios.post(
        `${this.baseURL}/videos/${id}/comments?api_key=${this.apiKey}`,
        body
      );
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  deleteComment = async (videoId, commentId) => {
    try {
      const response = await axios.delete(
        `${this.baseURL}/videos/${videoId}/comments/${commentId}?api_key=${this.apiKey}`
      );
      return response;
    } catch (error) {
      console.error(error);
    }
  };
}

export default BrainFlixApi;
