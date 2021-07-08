<template>
  <div class="home">
    <CustomText tag="h1">Profil</CustomText>
    <div id="nav">
      <router-link to="/profile">Post</router-link> |
      <router-link to="/profile/igtv">IGTV</router-link>|
      <router-link to="/profile/save">Save</router-link>|
      <router-link to="/profile/tag">Tag</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import CustomText from '../../components/CustomText.vue';

// @ is an alias to /src

export default {
  name: 'Profile',
  components: {
    CustomText,
  },
};
</script>

<style scoped></style>
