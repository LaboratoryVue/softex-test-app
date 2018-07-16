import Vue from 'vue';
import Vuex from 'vuex';
import axios from '../plugins/axios.js';
Vue.use(Vuex);

const state = {
  pictures: []
};

const mutations = {
  GET_PICLAS(state) {
    axios
      .get('photos')
      .then(response => response.data.slice(0, 21))
      .then(data => (state.pictures = data))
      .catch(error => console.log(error));
  }
};

const getters = {
  getAllPiclas(state) {
    return state.pictures;
  },
  getSelectedPicture(state) {
    return id => {
      return state.pictures.find(picture => picture.id === Number(id));
    };
  }
};

const actions = {
  getPiclas({ commit }) {
    commit('GET_PICLAS');
  }
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
