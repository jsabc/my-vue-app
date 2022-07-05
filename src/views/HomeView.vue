<template>
  <div class="w-[95%] mx-auto">
    <div class="py-2.5">
      <h2>
        <span class="text-white text-lg p-2.5 my-2 bg-orange-400 rounded-full inline-block">
          Counter: {{ counter }}
        </span>
      </h2>
      <div class="flex">
        <button
          type="button"
          class="text-white text-bold px-5 py-2.5 mr-2.5 bg-cyan-500 rounded-full hover:bg-cyan-600"
          @click="handleIncrementCounter"
        >
          + Increment counter
        </button>
        <button
          type="button"
          class="text-white text-bold px-5 py-2.5 bg-red-500 rounded-full hover:bg-red-600"
          @click="handleDecrementCounter"
        >
          - Decrement counter
        </button>
      </div>
    </div>

    <hr/>

    <div class="py-2.5">
      <coin-info></coin-info>
    </div>
  </div>
</template>

<script>
import CoinInfo from '@/components/CoinInfo.vue';

export default {
  name: 'HomeView',

  components: {
    CoinInfo,
  },

  data() {
    return this.$store.state;
  },

  methods: {
    handleIncrementCounter() {
      this.$store.commit('increment');
    },

    handleDecrementCounter() {
      this.$store.commit('decrement');
    },
  },
};
</script>
