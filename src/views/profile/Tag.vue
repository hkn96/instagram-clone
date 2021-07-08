<template>
  <div class="home"><CustomText tag="h1" />Profile Tag</div>
</template>

<script>
import CustomText from '../../components/CustomText.vue';

// @ is an alias to /src

export default {
  name: 'ProfileTag',
  components: {
    CustomText,
  },
};
</script>

<style scoped></style>
