<template>
  <h3 @click="onClickName">{{ name }}</h3>
</template>

<script>
import { mapState, mapGetters, mapMutations} from 'vuex';

export default {
  data() {
    return {};
  },

  computed: {
    ...mapGetters(['name'])
  },

  created() {
    this.$store.dispatch('getName')
  },

  methods: {
    ...mapMutations(['setName']),
    onClickName() {
      if (this.$store.state.name === '璇彬网') {
        // this.$store.commit('setName', 'XUANBIN')
        this.setName('XUANBIN')
      } else {
        // this.$store.commit('setName', '璇彬网')
        this.setName('璇彬网')
      }
    }
  }
};
</script>

<style>
@import './styles/app.css';
</style>
