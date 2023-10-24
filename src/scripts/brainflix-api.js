import API_KEY from "./brainflix-api";
import axios from "axios";

const BASE_URL = "https://project-2-api.herokuapp.com";

class BrainFlixApi {
  constructor(apiKey) {
    this.apiKey = API_KEY;
    this.baseURL = BASE_URL;
  }

  getVideosList = async () => {
    try {
      const response = await axios.get(
        `${this.baseURL}/videos?api_key=${this.apiKey}`
      );
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  getVideoById = async (id) => {
    try {
      const response = await axios.get(
        `${this.baseURL}/videos/${id}?api_key=${this.apiKey}`
      );
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
}

export default BrainFlixApi;
