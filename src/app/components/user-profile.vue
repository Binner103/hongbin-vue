<template>
  <component :is="currentComponents"></component>
  <small @click="onClickHintText">{{ hintText }}</small>
</template>

<script>
import UserLogin from './user-login.vue';
import UserRegister from './user-register.vue';

export default {
  data() {
    return {
      currentComponents: 'UserLogin',
      hintText: '没有账户?点击注册',
    };
  },

  methods: {
    onClickHintText() {
      switch (this.currentComponents) {
        case 'UserRegister':
          this.currentComponents = 'UserLogin';
          this.hintText = '没有账户?点击注册';
          break;
        case 'UserLogin':
          this.currentComponents = 'UserRegister';
          this.hintText = '已有账户,点击登录';
          break;
      }
    },
  },

  components: {
    UserLogin,
    UserRegister,
  },
};
</script>
