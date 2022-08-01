<template>
<div class=" text-fuchsia-700 bg-fuchsia-100 shadow-lg">
  <div class="container mx-auto py-6">
   <nav class="flex flex-wrap px-4 md:px-8 items-center">
    <div class="sm:w-1/3 w-2/3 text-2xl font-semibold">
      <router-link to="/">Capcicum</router-link> 
    </div>
    <div class="sm:block hidden sm:w-2/3 w-1/3 text-right text-xl font-semibold sm:space-x-4">
      <router-link class="" to="/">Home</router-link> 
      <router-link class="" :to="{name: 'blog'}">Blog </router-link>
      <router-link class="" :to="{name: 'creatBlog'}">Create </router-link>

      <router-link class="" :to="{name: 'login'}">Login/Register </router-link>
    </div>
    <div class="sm:hidden w-1/3 flex justify-end">
       <img @click="sidenav = !sidenav" class="h-7" src="../assets/Icons/menu.svg" alt="menu">
    </div>
    <!-- nav for mobile bruser -->
    <div v-show = "sidenav" class="text-xl font-semibold absolute top-0 left-0 h-screen bg-purple-700 pl-6 pr-10 pt-4 sm:hidden">
      <button @click="sidenav = false" class="h-4 absolute top-2 right-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="white">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
      <router-link class="block" to="/">Home</router-link> 
      <router-link class="block" :to="{name: 'blog'}">Blog </router-link>
      <router-link class="block" :to="{name: 'creatBlog'}">Create </router-link>
      <router-link class="block" :to="{name: 'login'}">Login/Register </router-link>
    </div>
  </nav>
  </div>
</div>
  
</template>

<script>
export default {
  name:"NavComp",
  data:()=>{
    return{
      sidenav : false,
    };
  },
}
</script>