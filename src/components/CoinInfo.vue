<template>
  <div>
    <h2 class="text-lg font-bold">{{ coinInfo.name }}</h2>
    <p>There are {{ coinPropsCount }} properties of {{ coinInfo.name }}.</p>
    <div class="flex justify-center items-center">
      <svg
        class="animate-spin w-8 h-8"
        viewBox="0 0 24 24"
      >
      </svg>
    </div>
    <table>
      <tr>
        <td>Enabled</td>
        <td>{{ coinInfo.enabled }}</td>
      </tr>
      <tr>
        <td>Name</td>
        <td>{{ coinInfo.name }}</td>
      </tr>
      <tr>
        <td>Base currency</td>
        <td>{{ coinInfo.baseCurrency }}</td>
      </tr>
      <tr>
        <td>Ask</td>
        <td class="text-orange-400">{{ coinInfo.ask }}</td>
      </tr>
      <tr>
        <td>Bid</td>
        <td class="text-green-400">{{ coinInfo.bid }}</td>
      </tr>
      <tr>
        <td>Last</td>
        <td class="text-sky-400">{{ coinInfo.last }}</td>
      </tr>
      <tr>
        <td>Change 1H</td>
        <td>{{ coinInfo.change1h }}</td>
      </tr>
      <tr>
        <td>Change 24H</td>
        <td>{{ coinInfo.change24h }}</td>
      </tr>
      <tr>
        <td>Change bod</td>
        <td>{{ coinInfo.bod }}</td>
      </tr>
      <tr>
        <td>Price</td>
        <td class="text-blue-500">{{ coinInfo.price }}</td>
      </tr>
      <tr>
        <td>Price increment</td>
        <td>{{ coinInfo.priceIncrement }}</td>
      </tr>
      <tr>
        <td>Price high 24H</td>
        <td>{{ coinInfo.priceHigh24h }}</td>
      </tr>
      <tr>
        <td>Price low 24H</td>
        <td>{{ coinInfo.priceLow24h }}</td>
      </tr>
      <tr>
        <td>Volume USD 24H</td>
        <td class="text-cyan-400">{{ coinInfo.volumeUsd24h }}</td>
      </tr>
      <tr>
        <td>Future type</td>
        <td>{{ coinInfo.futureType }}</td>
      </tr>
      <tr>
        <td>High leverage fee exempt</td>
        <td>{{ coinInfo.highLeverageFeeExempt }}</td>
      </tr>
      <tr>
        <td>Is ETF market?</td>
        <td>{{ coinInfo.isEtfMarket }}</td>
      </tr>
      <tr>
        <td>Large order threshold</td>
        <td>{{ coinInfo.largeOrderThreshold }}</td>
      </tr>
      <tr>
        <td>Min provide size</td>
        <td>{{ coinInfo.minProvideSize }}</td>
      </tr>
      <tr>
        <td>Post only?</td>
        <td>{{ coinInfo.postOnly }}</td>
      </tr>
      <tr>
        <td>Quote currency</td>
        <td>{{ coinInfo.quoteCurrency }}</td>
      </tr>
      <tr>
        <td>Quote volume 24H</td>
        <td>{{ coinInfo.quoteVolume24h }}</td>
      </tr>
      <tr>
        <td>Restricted</td>
        <td>{{ coinInfo.restricted }}</td>
      </tr>
      <tr>
        <td>Size increment</td>
        <td>{{ coinInfo.sizeIncrement }}</td>
      </tr>
      <tr>
        <td>Type</td>
        <td>{{ coinInfo.type }}</td>
      </tr>
      <tr>
        <td>Underlying</td>
        <td>{{ coinInfo.underlying }}</td>
      </tr>
    </table>
    <button
      type="button"
      class="text-white text-bold px-5 py-2.5 bg-indigo-500 rounded-full hover:bg-indigo-600"
      @click="handleRefreshCoinInfo"
    >
      Refresh
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    coinInfo() {
      return this.$store.state.coinInfo;
    },

    coinPropsCount() {
      return this.$store.getters.coinPropsCount;
    },
  },

  mounted() {
    this.$store.dispatch('loadCoinInfo');
  },

  methods: {
    handleRefreshCoinInfo() {
      this.$store.dispatch('refreshCoinInfo');
    },
  },
};
</script>

<style lang="less" scoped>
td:nth-child(1) {
  @apply text-slate-400;
}
</style>
