<template>
  <PostListItem />
</template>

<script>
import { defineComponent } from 'vue';
import PostListItem from './post-list-item.vue';

export default defineComponent({
  components: {
    PostListItem,
  },
});
</script>
