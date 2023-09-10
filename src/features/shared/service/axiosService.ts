import { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';
/**
 * POST Request
 * @template P - Request Payload Type
 * @template R - Request Response Type
 * @param {AxiosInstance} client - Request client
 * @param {string} url - Request url
 * @param {P} payload - Request Payload
 * @param {AxiosRequestConfig} options : Request config options
 **/
async function requestPost<P = any, R = any>(
  client: AxiosInstance,
  url: string,
  payload: P,
  options: AxiosRequestConfig<P> = {},
) {
  return client
    .post<R, AxiosResponse<R>, P>(url, payload, options)
    .then((res) => {
      return res.data;
    });
}

/**
 * GET Request
 * @template R - Request Response Type
 * @param {AxiosInstance} client - Request client
 * @param {string} url - Request url
 * @param {AxiosRequestConfig} options : Request config options
 **/
async function requestGet<R = any>(
  client: AxiosInstance,
  url: string,
  options: AxiosRequestConfig = {},
) {
  return client.get<R>(url, options).then((res) => res.data);
}

export { requestPost, requestGet };
