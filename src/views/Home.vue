<template>
  <div>
    <Header />
    <Main />
  </div>
</template>

<script>
// @ is an alias to /src
import Main from '@/components/main/Main.vue'
import Header from '@/components/header/Header.vue'

export default {
  name: 'Home',
  components: {
    Header, Main
  }
}
</script>
