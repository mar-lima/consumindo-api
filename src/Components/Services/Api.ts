import md5 from "md5";
import axios from "axios";

const publicKey = "6a547423776cf1ff79885622450a0d14";
const privateKey = "83584ec8b8119b5d78a7c7db8f38be93e82d831c";

const ts = Number(new Date());

const hash = md5(ts + privateKey + publicKey);

const api = axios.create({
  baseURL: `http://gateway.marvel.com/v1/public/`,
  params: {
    apikey: publicKey,
    ts,
    hash,
  },
});

export default api;
