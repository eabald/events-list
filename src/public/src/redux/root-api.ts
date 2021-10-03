// External
import axios from 'axios';

/**
 * Axios wrapper for api requests
 * @author Maciej Krawczyk
 */
const api = axios.create({
  baseURL: `/api/`,
});

export default api;
