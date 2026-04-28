import axios from "axios";

// TODO: Update to production Ella.AI API endpoint on deployment to www.ellaai.ai
const instance = axios.create({
  baseURL: "https://www.ellaai.ai/api/v1/leads/",
});

export default instance;
