<template>
  <div class="min-h-screen container mx-auto">
    <div class="md:px-8 px-4">
        <p class="py-8 text-xl font-semibold">Wright your Blog</p>
        <div class="">
          <div class="pb-8 flex flex-wrap items-center">
            <div class="md:w-1/3 w-full">
             <input type="text" class="border border-gray-300 p-2 w-full rounded focus:outline-fuchsia-400" v-model="blogTitle" placeholder="Blog title">
            </div>
            <div class="md:w-1/3 w-full flex justify-center px-4">
              <input @change="takeInput($event)"  type="file" class="hidden" ref="fileUpload" accept=".png, .jpg, .jpeg">
              <span  v-if="images == ''" @click="chooseFile('fileUpload')" class="bg-fuchsia-400 text-white font-semibold py-2 px-4 rounded">Upload Image</span>
              <span v-if="images != ''" @click="chooseFile('fileUpload')" class="bg-fuchsia-400 text-white font-semibold py-2 px-4 rounded">{{ images.name }}</span>
            </div>
            <div class="md:w-1/3 w-full">
              <button class=" bg-fuchsia-400 text-white font-semibold py-2 px-4 rounded" :class="{'butt': !this.$store.state.blogPhotoFileURL}">Preview Photo</button>
            </div>
        </div>
        <vue-editor v-model="content"></vue-editor>
        <div class="flex justify-between pt-4 pb-8">
           <ButtonComp buttonName="submit" @clicked="blogdata"/>
           <ButtonComp buttonName="preview" @clicked="preview"/>
           
          <!-- <router-link @click="submit" class="bg-fuchsia-400 text-white font-semibold py-2 px-4 rounded" :to="{name: 'preview-post'}">View Blog</router-link> -->
        </div>
       
        </div> 
    </div>
    
  </div>
</template>

<script>

import ButtonComp from '../components/ButtonComp.vue';
import { VueEditor } from "vue3-editor";


export default {
  components: {
    VueEditor,
    ButtonComp
  },

  data() {
    return {
      content: "",
      blogTitle:"",
      images:"",

    };
  },
  methods:{
    submit(){
    },
    chooseFile(refValue){
      this.$refs[refValue].click();
    },
    takeInput(e){
      this.images= e.target.files[0];
      console.log(this.images);
    },
    blogdata(){
        this.$store.commit({
          type: 'newBlogPost',
          value : this.content
        })
        this.$store.commit({
          type: 'updateBlogTitle',
          value : this.blogTitle
        })
        this.$store.commit("profileImg",{value:this.images});
    },
     preview(){
        this.$store.commit("newBlogPost",{value : this.content});
        this.$store.commit({
          type: 'updateBlogTitle',
          value : this.blogTitle
        })
        this.$store.commit("profileImg",{value : this.images});
        this.$router.push({name: 'preview-post'});

    },
    
  },
  computed:{
    
  }
};
</script>
<style scoped>
 img{
    width: 50%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-right: auto;
    margin-left: auto;
 }
</style>