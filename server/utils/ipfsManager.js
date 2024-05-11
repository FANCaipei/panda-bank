const axios = require("axios").default;
const FormData = require("form-data");
const path = require("path");
const config = require("../config.json");

// axios.defaults.baseURL = "https://api.web3.storage";

// axios.interceptors.request.use(
//   function (req) {
//     // Do something before request is sent
//     // req.headers["Authorization"] = `Bearer ${config.web3StorageToken}`;
//     return req;
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

const IpfsManager = {
    uploadFile: fileReadableStream => {
        const data = new FormData();
        data.append("file", fileReadableStream);
        return axios.post(`https://api.web3.storage/upload`, data, {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${config.web3StorageToken}`,
            },
            proxy: false,
        });
    },

    // getImage: (cid) => {
    //   return axios.get(`${config.ipfsDelegateGateway}/${cid}`, {
    //     responseType: "stream",
    //   });
    // },

    // getTokenJson: (tokenUri) => {
    //   const ipfsPath = tokenUri.replace("ipfs://", "");
    //   return axios.get(`${config.ipfsDelegateGateway}/${ipfsPath}`);
    // },
};

module.exports = IpfsManager;
