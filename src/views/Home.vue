<template lang="">
  <div class="home">
    <h1>Home</h1>
    <CustomText class="a1">Hallo Welt</CustomText>
    <CustomText class="a2" tag="p" size="xsmall">Hallo Welt</CustomText>
    <CustomText class="a3" tag="p" size="xxsmall">Hallo Welt</CustomText>
    <CustomText class="a4" tag="p" size="normal">Hallo Welt</CustomText>
  </div>
</template>

<script>
import CustomText from '../components/CustomText.vue';
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    CustomText,
  },
};
</script>

<style scoped>
.a1 {
  color: rgb(var(--ba8));
}
.a2 {
  color: var(--b3f);
}
.a3 {
  color: var(--ba8);
}
</style>
