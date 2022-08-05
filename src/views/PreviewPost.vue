<template>
  <div class="min-h-screen container mx-auto">
    <div class="md:px-8 px-4">
        <p  class="py-8 text-xl font-semibold text-center underline">{{ blogTitle }}</p>
        <div id="sss" class="sss py-8 lg:px-22" v-html="blogHTML">
       
        </div> 
    </div>
    
  </div>
</template>

<script>



export default {
  components: {
   
  },

  data() {
    return {
      

    };
  },
  methods:{
   
  },
  computed:{
    blogHTML(){
      return this.$store.state.blogHTML;
    },

    blogTitle(){
      return this.$store.state.blogTitle;
    }
    // blogTitle:{
    //   get(){
    //     return this.$store.state.blogTitle;
    //   },
    //   set(payload){
        
    //     this.$store.state.commit("updateBlogTitle",payload);

    //   }
    // },
    
  }
};
</script>
<style>
#sss > p > img{
  max-width: 50% !important;
  margin: auto !important;
  padding: 2rem 0;
}
#aaa{
  color: red;
}
</style>