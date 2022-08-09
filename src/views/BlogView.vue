<template>
  <div class=" container mx-auto py-8">
    <div class="flex justify-end items-center p-4">
      <p class="pr-3 font-medium text-gray-900 text-lg">Edit post</p>
      <label for="checked-toggle" class="inline-flex relative items-center cursor-pointer">
      <input v-model="editPost" @click="editPostT" type="checkbox" id="checked-toggle" class="sr-only peer">
      <div class="w-11 h-6 bg-gray-200 rounded-full peer-focus peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"> {{editdata}}</span>
    </label>
    </div>
    <div class="flex flex-wrap">
        <BlogCard :post="post" v-for="(post, index) in blogData" :key="index" />
      </div>
  </div>
</template>
<script>
import BlogCard from '@/components/BlogCard.vue'
export default {
  name:"BlogView",
  components: {
    BlogCard
  },
  data(){
    return{
        editPost: false
    };
  },
  methods:{
    editPostT(){
      this.$store.commit("toggleEditPost",{value: this.editPost})
    }
  },
  computed:{
    blogData(){
      return this.$store.state.blogData;
    },
    // editPost:{
    //   get(){
    //     return this.$store.state.editPost
    //   },
    //   set(payload){
    //     this.$store.commit("toggleEditPost", payload);
    //   }
    // },
    editdata(){
      if(this.editPost==true){
        return 'YES';
      }
      else{
        return 'NO';
      }
    },
    
  },
beforeUnmount(){
  this.$store.commit("toggleEditPost", false);
}
  
}
</script>
