<template>
    <div class="vtdl-app">
        <Header/>
        <main @showMask="showMask" @hideMask="hideMask" class="vtdl-main">
            <router-view/>
        </main>
        <Footer/>
    </div>
</template>

<script>
import Vue from 'vue';
import VueResource from 'vue-resource';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import LoadingMask from '@/components/loadingmask/loadingmask';

Vue.use(VueResource);

Vue.prototype.$eventBus = new Vue(); // Global Event Bus

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    LoadingMask
  },
  mounted() {
    // initialize loading mask component
    const loadingMaskComponent = Vue.extend(LoadingMask);
    const loadingMask = new loadingMaskComponent();
    loadingMask.$mount();
    this.$refs['loadingMask'] = loadingMask;
	// bind loading mask events
    this.$eventBus.$on('showMask', this.showMask);
    this.$eventBus.$on('hideMask', this.hideMask);
  },
  methods: {
    showMask() {
      this.$refs.loadingMask.showMask();
    },
    hideMask() {
      this.$refs.loadingMask.hideMask();
    }
  }
};
</script>

<style lang="scss">
@import 'app.scss';
</style>
