import Vue from "vue";
import Vuex from "vuex";
import { config } from "../config";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    web3: null,
    globalConfig: config,
    tokenVesting: null,
    erc20: {
      contract: null,
      address: null,
      symbol: null,
      name: null,
    },
    isOwner: false,
  },
  getters: {
    web3Enabled: (state) => state.web3 !== null,
  },
  mutations: {},
});

export default store;
