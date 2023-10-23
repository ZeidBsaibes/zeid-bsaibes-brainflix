import API_KEY from "./brainflix-api";
import axios from "axios";

const BASE_URL = "https://project-2-api.herokuapp.com/";

class BrainFlixApi {
  constructor(apiKey) {
    this.apiKey = API_KEY;
    this.baseURL = BASE_URL;
  }

  getVideos = async () => {
    try {
      const response = await axios.get(
        `${this.baseURL}videos?api_key=${this.apiKey}`
      );
      return response;
    } catch (error) {
      console.error(error);
    }
  };
}

export default BrainFlixApi;
