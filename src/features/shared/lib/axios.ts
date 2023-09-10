import axios from 'axios';

/**
 * Create axios client based on input baseUrl
 * @param {string} baseUrl - The base url for the client.
 **/
function createAxiosClient(baseUrl: string) {
  return axios.create({
    baseURL: baseUrl,
  });
}

export { createAxiosClient };
