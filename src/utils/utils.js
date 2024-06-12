const API_URL = "https://unit-3-project-api-0a5620414506.herokuapp.com/";
const API_KEY = "1304392a-e6cc-4581-b86c-06ae8ca5cf0b";

export const getVideoDetails = () => API_URL + "videos/?api_key=" + API_KEY;

export const getVideoEndpoint = (id) => API_URL + "videos/" + `${id}/` + "?api_key=" + API_KEY;



