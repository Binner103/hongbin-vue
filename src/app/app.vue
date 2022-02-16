<template>
  <h3 @click="onClickName">
    {{ name }}
    <span v-if="loading">加载中......</span>
  </h3>
  <div>{{user.currentUser}}</div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  data() {
    return {};
  },

  computed: {
    ...mapGetters(['name']),
    ...mapState(['loading', 'user']),
  },

  created() {
    this.getName();
    this.getCurrentUser();
  },

  methods: {
    ...mapMutations(['setName']),
    ...mapActions({
      getName: 'getName',
      getCurrentUser: 'getCurrentUser',
    }),
    onClickName() {
      if (this.$store.state.name === '璇彬网') {
        // this.$store.commit('setName', 'XUANBIN')
        this.setName('XUANBIN');
      } else {
        // this.$store.commit('setName', '璇彬网')
        this.setName('璇彬网');
      }
    },
  },
};
</script>

<style>
@import './styles/app.css';
</style>
