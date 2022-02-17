<template>
  <h3>{{ name }}</h3>
</template>

<script>
export default {
  data() {
    return {
      name: 'HONGBIN',
    };
  },

  created() {
    const user = {
      name: 'HONGBIN',
    };

    const handler = {
      get(target, property) {
        return target[property];
      },

      set(target, property, value) {
        if (property === 'name') {
          if (value.length > 10) {
            throw Error('名字太长了');
          }
        }

        return Reflect.set(target, property, value);
      },
    };

    const userProxy = new Proxy(user, handler);

    try {
      userProxy.name = 'HONGBINHONGBINHONGBIN'
    } catch (error) {
      console.log('错误:', error.message);
    }

    console.log(userProxy.name);
  },
};
</script>

<style>
@import './styles/app.css';
</style>
