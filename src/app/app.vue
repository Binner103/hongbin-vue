<template>
  <h3>{{ name }}</h3>
  <label for="subscription-annual">
    <input
      type="radio"
      value="annual"
      id="subscription-annual"
      v-model="subscription"
    />
    一年
  </label>
  <label for="subscription-quarterly">
    <input
      type="radio"
      value="quarterly"
      id="subscription-quarterly"
      v-model="subscription"
    />
    季度
  </label>
  <span>→subscription: {{subscription}}</span>
</template>

<script>
export default {
  data() {
    return {
      name: 'HONGBIN',
      subscription: 'annual',
    };
  },
};
</script>

<style>
@import './styles/app.css';
</style>
