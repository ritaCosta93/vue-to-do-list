<template>
    <div class="vtdl-app">
        <Header/>
        <main class="vtdl-main">
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

Vue.use(VueResource);

export default {
  name: 'App',

  components: {
      Header,
      Footer
  }
};
</script>

<style lang="scss">
    @import 'app.scss';
</style>
