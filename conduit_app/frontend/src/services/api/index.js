import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import jwt from "../jwt.service";
import BASE_URL from "./base/base_url";
const api = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = BASE_URL;
    //process.env.API_URL
  },
  //variavel de ambiente base_url
  setHeader() {
    Vue.axios.defaults.headers.common[
      "Authorization"
    ] = `Token ${jwt.getToken()}`;
  },
/**
 * @throws {Error} - Quando ocorre um erro na api
 * @param {*} resource
 * @param {*} params
 * @returns
 */
  query(resource, params) {
    return Vue.axios.get(resource, params).catch(error => {
      throw new Error(`api ${error}`);
    });
  },
/**
 *
 * @param {*} resource
 * @param {*} slug
 * @returns
 */
  get(resource, slug = "") {
    return Vue.axios.get(`${resource}/${slug}`).catch(error => {
      throw new Error(`api ${error}`);
    });
  },
/**
 *
 * @param {*} resource
 * @param {*} params
 * @returns
 */
  post(resource, params) {
    return Vue.axios.post(`${resource}`, params);
  },
/**
 *
 * @param {*} resource
 * @param {*} slug
 * @param {*} params
 * @returns
 */
  update(resource, slug, params) {
    return Vue.axios.put(`${resource}/${slug}`, params);
  },
/**
 *
 * @param {*} resource
 * @param {*} params
 * @returns
 */
  put(resource, params) {
    return Vue.axios.put(`${resource}`, params);
  },
/**
 *
 * @param {*} resource
 * @returns
 */
  delete(resource) {
    return Vue.axios.delete(resource).catch(error => {
      throw new Error(`api ${error}`);
    });
  }
};

export default api;





