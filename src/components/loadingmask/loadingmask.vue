<template>
	<div class="vtdl-loading-mask"> LOADING MASK </div>
</template>

<script>
export default {
  name: 'loadingmask',
  methods: {
    showMask() {
      document.body.appendChild(this.$el);
    },
    hideMask() {
      const t1 = setTimeout(() => {
        this.$el.remove();
        clearTimeout(t1);
      }, 500);
    }
  }
};
</script>

<style lang="scss">
@import 'loadingmask.scss';
</style>
