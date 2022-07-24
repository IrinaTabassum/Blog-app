<template>
  <Nav></Nav>
  <router-view/>
  <Footer/>
</template>
<script>
import Nav from './components/NavComp.vue'
import Footer from './components/FooterComp.vue'
export default {
  components: { Nav, Footer, },
  
}
</script>
