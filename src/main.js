import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import axios from '@/plugins/axios';

import App from './App.vue';

import '@/assets/tailwind.css';

Vue.config.productionTip = false;

Vue.use(axios);
Vue.use(VueRouter);
Vue.use(Vuex);

window.$vm = new Vue({
  router: new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
      path: '/',
      // Here is the component name registered inside the router.
      name: 'Home',
      component: () => import('@/views/HomeView.vue'),
    }, {
      // route level code-splitting
      // this generates a separate chunk (Todos.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      path: '/todos',
      name: 'TodosView',
      component: () => import('@/views/TodosView.vue'/* Webpack chunk */),
    }],
  }),

  store: new Vuex.Store({
    state: {
      counter: 0,
      coinInfo: {},
    },

    getters: {
      coinPropsCount(state) {
        return Object.keys(state.coinInfo).length;
      },
    },

    mutations: {
      increment(state) {
        // eslint-disable-next-line
        state.counter++;
      },

      decrement(state) {
        if (state.counter) {
          // eslint-disable-next-line
          state.counter--;
        }
      },

      setCoinInfo(state, coinInfo) {
        state.coinInfo = coinInfo;
      },
    },

    actions: {
      loadCoinInfo({ commit }) {
        // FIXME: this._vm
        // eslint-disable-next-line
        this._vm.$http.get('/markets/BTC-PERP')
          .then((res) => {
            commit('setCoinInfo', res.data.result);
          });
      },

      refreshCoinInfo({ dispatch }) {
        dispatch('loadCoinInfo');
      },
    },

    modules: {
      todos: {
        namespaced: true,

        state: () => ({
          list: [{ text: 'sample todo!', done: true }],
        }),

        getters: {
          todosLength(state) {
            return state.list.length;
          },

          doneTodos(state) {
            return state.list.filter((todo) => todo.done);
          },
        },

        mutations: {
          add(state, text) {
            state.list.push({
              text,
              done: false,
            });
          },

          remove(state, todo) {
            state.list.splice(
              state.list.indexOf(todo),
              1,
            );
          },

          toggle(state, todo) {
            // eslint-disable-next-line
            todo.done = !todo.done;
          },
        },
      },
    },
  }),

  render: (b) => b(App),
}).$mount('#app');
