<template>
    <button v-if="buttonName=='edit'" class="bg-white p-2 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
</svg>
    </button>
    <button v-if="buttonName=='delete'" class="bg-white p-2 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
</svg>
    </button>
    <button v-if="buttonName=='submit'" @click="$emit('clicked')" class="px-4 py-2 bg-fuchsia-400 rounded font-semibold text-white">Submit</button>
    <button v-if="buttonName=='preview'" @click="$emit('clicked')" class="px-4 py-2 bg-fuchsia-400 rounded font-semibold text-white">View blog</button>
    
</template>
<script>
// import  from ''
export default {
   props:["buttonName"],
   emits:["clicked"]
}
</script>