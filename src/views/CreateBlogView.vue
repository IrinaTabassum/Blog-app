<template>
  <div class="min-h-screen container mx-auto">
    <div class="md:px-8 px-4">
        <p class="py-8 text-xl font-semibold">Wright your Blog</p>
        <div class="pb-8">
            <input type="text" class="border border-gray-300 p-2 md:w-1/3 w-full rounded" v-model="blogTitle" placeholder="Blog title">
            <input type="file" class=" p-2 md:w-1/3 w-full rounded" reg="blogPhoto" accept=".png, .jpg, .jpeg">
            <button class=" bg-fuchsia-400 text-white font-semibold py-2 px-4 rounded" :class="{'butt': !this.$store.state.blogPhotoFileURL}">Preview Photo</button>
        </div>
        <vue-editor v-model="blogHTML"></vue-editor>
        <button @click="submit" class="my-4 px-4 py-2 bg-fuchsia-300 rounded font-semibold">Submit</button>
        
    </div>
    
  </div>
</template>

<script>
import { VueEditor } from "vue3-editor";

export default {
  components: {
    VueEditor
  },

  data() {
    return {
      content: ""
    };
  },
  methods:{
    submit(){
      
    }
  },
  computed:{
    profileId(){
      return this.$store.state.profileId;
    },
    blogCoverPhotoName(){
      return this.$store.state.blogCoverPhotoName;
    },
    blogTitle:{
      get(){
        return this.$store.state.blogTitle;
      },
      set(payload){
        
        this.$store.state.commit("updateBlogTitle",payload);

      }
    },
    blogHTML:{
      get(){
        return this.$store.state.blogHTML;
      },
      set(payload){
        this.$store.state.commit("newBlogPost",payload);

      }
    },
  }
};
</script>