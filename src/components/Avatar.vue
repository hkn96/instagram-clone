<template>
  <figure class="avatar">
    <img :src="src" :alt="alt" :width="size" :height="size" />
  </figure>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    src: {
      type: String,
      default:
        'https://www.facebook.com/profile/pic.php?cuid=AYjR5O6UYPGZ3C5yZBtQOjwYhFV2qMA3F0f4LdPlXsgyiplZO9kjOnVJsHWVoJrpwUDuW7k35csfR6L7MLi-ev74RPuEEZ05PZFyFI5Tbshh4Q&square_px=160',
    },
    alt: {
      type: String,
    },
    size: {
      type: Number,
    },
  },
};
</script>

<style lang="postcss" scoped>
.avatar {
  display: inline-flex;
  padding: 2px;
  border-radius: 999px;
  background: linear-gradient(
    219deg,
    rgba(184, 63, 140, 1) 0%,
    rgba(237, 158, 90, 1) 100%
  );
  img {
    border-radius: inherit;
    border: 2px solid white;
  }
}
</style>
