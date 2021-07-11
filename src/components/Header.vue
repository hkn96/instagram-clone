<template>
  <header class="head">
    <Container class="head-inner">
      <router-link to="/"> INSTAGRAM </router-link>
      <form class="search">
        <input type="text" placeholder="Search" />
      </form>
      <nav class="navigation">
        <router-link to="/">
          <IconHomeFill v-if="$route.name === 'Home'" />
          <IconHome v-else />
        </router-link>
        <router-link to="/direct">
          <IconDirectFill v-if="$route.name === 'Direct'" />
          <IconDirect v-else />
        </router-link>
        <router-link to="/explore">
          <IconExploreFill v-if="$route.name === 'Explore'" />
          <IconExplore v-else />
        </router-link>
        <router-link to="/profile">Profile</router-link>
      </nav>
    </Container>
  </header>
</template>

<script>
import IconHome from '../icons/home.svg';
import IconHomeFill from '../icons/home-fill.svg';
import Container from './Container.vue';
import IconDirect from '../icons/direct.svg';
import IconDirectFill from '../icons/direct-fill.svg';
import IconExplore from '../icons/explore.svg';
import IconExploreFill from '../icons/explore-fill.svg';

export default {
  name: 'MasterHeader',
  components: {
    IconHome,
    IconHomeFill,
    Container,
    IconDirect,
    IconDirectFill,
    IconExplore,
    IconExploreFill,
  },
};
</script>

<style lang="postcss" scoped>
.head {
  border-bottom: 1px solid rgb(var(--b6a));
}
.head-inner {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 57px;

  align-items: center;
}
.search {
  text-align: center;

  input {
    border: 1px solid rgb(var(--b6a));
    border-radius: 4px;
    background-color: rgb(var(--b3f));
    width: 215px;
    height: 28px;
    padding-left: 20px;
    padding-right: 20px;
  }
}
.navigation {
  border-top: 1px solid rgb(var(--b6a));
  z-index: 90;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (--t) {
    border: 0;
    height: auto;
    position: static;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    a {
      margin-left: 20px;
    }
  }
}
</style>
