import { instance } from './instance';

export const goodsAPI = {
  async getCategories() {
    return await instance.get('getCategoryes').then(response => response.data);
  },
  async getRecipes() {
    return await instance.get('getRecepts').then(response => response.data);
  },
  async getCategory(id) {
    return await instance.get(`getReceptsByCategory?id=${id}`).then(response => response.data);
  },
};

