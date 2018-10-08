import axios from "axios";

const API_SOURCE = process.env.REACT_APP_PORTFOLIO_API;
const URI = process.env.NODE_ENV === 'development' 
	? `https://cors-anywhere.herokuapp.com/${API_SOURCE}`
	: API_SOURCE;

export default {
  getProjects: () => {
		return axios.get(`https://cors-anywhere.herokuapp.com/${API_SOURCE}/api/projects/all`);
  },
  getProject: (id) => {
    return axios.get(`https://cors-anywhere.herokuapp.com/${API_SOURCE}/api/projects/${id}`);
  }
}
