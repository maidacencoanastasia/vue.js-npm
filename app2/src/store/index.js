import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartProducts: []
  },
  mutations: {
    addToCart(state, product) {
      state.cartProducts.push(product);
    },
    removeFromCart(state, productId) {
      const productToDelete = state.cartProducts.findIndex(el => el.id = productId)
      state.cartProducts.splice(productToDelete, 1)
    }
  },
  getters: {
    getCartProducts: (state) => {
      return state.cartProducts;
    }
  },
  actions: {
    addToCart(context, product) {
      context.commit("addToCart", product);
    },
    removeFromCart(context, productId) {
      context.commit("removeFromCart", productId);
    }
  },
  modules: {},
});
