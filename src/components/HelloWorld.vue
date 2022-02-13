<template>
  <div class="hello">
    <div v-if="loading">loading...</div>
    <h3 v-for="(item, index) in messages" :key="index">{{ item }}</h3>
    <button @click="getMessages">Load messages</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapState } from 'vuex';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },

  computed: {
    ...mapState({
      loading: 'loading',
      messages: 'messages',
    }),
  },

  methods: {
    ...mapActions({
      getMessages: 'getMessages',
    }),
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
