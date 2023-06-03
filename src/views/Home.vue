<template>
  <div>
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Main from '@/components/main/Main.vue'
import Header from '@/components/header/Header.vue'
import Footer from '@/components/footer/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header, Main, Footer
  }
}
</script>
