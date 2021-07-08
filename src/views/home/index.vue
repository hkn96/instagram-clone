<template>
  <div class="home">
    <h1>Home</h1>
    <CustomText class="a1">Hallo Welt</CustomText>
    <CustomText class="a2" tag="p" size="xsmall">Hallo Welt</CustomText>
    <br />
    <CustomText class="a3" tag="p" size="xxsmall">Hallo Welt</CustomText>
    <br />
    <br />
    <IconHome />
  </div>
</template>

<script>
import CustomText from '../../components/CustomText.vue';
import IconHome from '../../icons/home.svg';
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    CustomText,
    IconHome,
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
