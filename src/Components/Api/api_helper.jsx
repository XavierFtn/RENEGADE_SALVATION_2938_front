import axios from "axios";

// default
axios.defaults.baseURL ='http://127.0.0.1:8000/api';
axios.defaults.withCredentials = true;
// content type
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.get["Content-Type"] = "application/json";

axios.interceptors.response.use(
  function (response) {
    return response.data ? response.data : response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    let message;
    switch (error.status) {
      case 500:
        message = "Internal Server Error";
        break;
      case 401:
        message = "Invalid credentials";
        break;
      case 404:
        message = "Sorry! the data you are looking for could not be found";
        break;
      default:
        message = error.message || error;
    }
    return Promise.reject(message);
  }
);

function getCredential(){
  let token = sessionStorage.getItem("token");
  if (token != null){
    return JSON.parse(token);
  }
return null;
}

axios.interceptors.request.use((config) => {
  let token = getCredential();
  if (token != null) {
   
      config.headers.Authorization = `Bearer ${token}`;
      return Promise.resolve(config);
   
  }
});

class APIClient {
 
  get = async  (url, params) => {
    let response;

    let paramKeys = [];

    if (params) {
      Object.keys(params).map(key => {
        paramKeys.push(key + '=' + params[key]);
        return paramKeys;
      });

      const queryString = paramKeys && paramKeys.length ? paramKeys.join('&') : "";
      response = axios.get(`${url}?${queryString}`, params).then((response) => response);
    } else {
      response = await axios.get(`${url}`, params).then((response) => 
      {
        console.log(response);
       return  response;
      })}
    return response;
  };
  /**
   * post given data to url
   */
  create = (url, data) => {
    return axios.post(url, data);
  };
  /**
   * Updates data
   */
  update = (url, data) => {
    return axios.patch(url, data);
  };

  put = (url, data) => {
    return axios.put(url, data);
  };
  /**
   * Delete
   */
  delete = (url, config) => {
    return axios.delete(url, { ...config });
  };

  attack = (url, formData) => {
    return axios.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}

export { APIClient };