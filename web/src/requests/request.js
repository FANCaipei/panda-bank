import axios from "axios";

const Request = axios.create({
    baseUrl: '',
});

// Add a request interceptor
Request.interceptors.request.use(function (config) {
    // Do something before request is sent
    // TODO: add jwt token header
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
Request.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default Request;