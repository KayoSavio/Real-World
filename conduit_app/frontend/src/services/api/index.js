import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import jwt from "../../token/jwt.service";
import BASE_URL from "./base/base_url";

const api = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = BASE_URL;
    //process.env.API_URL
  },
  setHeader() {
    Vue.axios.defaults.headers.common[
      "Authorization"
    ] = `Token ${jwt.getToken()}`;
  },
  /**
 * @description usado em Article Service no feed global
 * @throws {Error} - Para saberemos se algo falhou durante a requisição da API.
 * Receberei uma tela de erro e um log do console.
 * @param {*} resource
 * @param {*} params
 * @returns {object []} lista de artigos
 */
  query(resource, params) {
    return Vue.axios.get(resource, params).catch(error => {
      throw new Error(`api ${error}`);
    });
  },
  /**
 * @throws {Error} Para saberemos se algo falhou durante a requisição da API.
 * Receberei uma tela de erro e um log do console.
 * @description Usado para fazer uma requisição tipo get para a api
 * @param {*} resource Rota da api a ser utilizada
 * @param {*} slug  Informado pelos services(article, comment, favorite, tag). Id ou nome
 * @returns {object []} artigos, comentários, tags
 */
  get(resource, slug = "") {
    return Vue.axios.get(`${resource}/${slug}`).catch(error => {
      throw new Error(`api ${error}`);
    });
  },
  /**
 * @description Responsável pelas requisições do tipo post para api
 * @param {*} resource parâmetro passado pelos services
 * @param {*} params parâmetro passado pelos services
 */
  post(resource, params) {
    return Vue.axios.post(`${resource}`, params);
  },
  /**
   * @description Usada para atualizar os artigos
   * @param {*} resource Rota da api a ser utilizada
   * @param {*} slug ID ou nome informado pelo services
   * @param {*} params Corpo da requisição com a nova informação a ser atualizada
   */
  update(resource, slug, params) {
    return Vue.axios.put(`${resource}/${slug}`, params);
  },
  /**
   * @description Usado no modules.auth para ver a autenticação do usuário
   * @param {*} resource Rota da api a ser utilizada
   * @param {*} params Corpo da requisição com a nova informação a ser atualizada
   */
  put(resource, params) {
    return Vue.axios.put(`${resource}`, params);
  },
  /**
   * @description Responsável pelas requisições do tipo delete para api
   * @param {*} resource Rota da api a ser utilizada
   * @returns
   */
  delete(resource) {
    return Vue.axios.delete(resource).catch(error => {
      throw new Error(`api ${error}`);
    });
  }
};

export default api;





