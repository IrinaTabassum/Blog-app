<template>
<div class=" text-fuchsia-700 bg-fuchsia-200 border-t-4 border-fuchsia-400">
  <div class="container mx-auto py-6">
   <div class="flex flex-wrap px-4">
    <div class="sm:w-1/3 w-full sm:text-2xl text-lg font-semibold py-2">
      <router-link class="block sm:text-start text-center" to="/">Capcicum</router-link> 
      <div>
        <ul>
            
        </ul>
      </div>
    </div>
    <div class="sm:w-1/3 w-full sm:text-xl text-lg font-semibold py-2">
      <router-link class="block sm:text-start text-center" to="/">Home</router-link> 
      <router-link class="block sm:text-start text-center" :to="{name: 'blog'}">Blog </router-link>
      <router-link class="block sm:text-start text-center" :to="{name: 'login'}">Login/Register </router-link>
    </div>
    <div class="sm:w-1/3 w-full text-right text-sm font-semibold sm:justify-end sm:flex sm:items-end py-2">
      <p class="sm:text-end text-center">Copyright 2022 IrinaTabassum</p>
    </div>
  </div>
  </div>
</div>
  
</template>

<script>

export default {
  name:"FooterComp",
  data(){
    return{
      
    };
  },
}
</script>