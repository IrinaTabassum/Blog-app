<template>
    <div class="w-full sm:w-1/2 md:w-1/3">
        <div class="p-4 h-full space-y-4">
            <div class=" bg-fuchsia-100 rounded-md h-full relative shadow-lg">
                <div v-show="editPost" class=" space-x-2 absolute top-2 right-2">
                    <ButtonComp buttonName="edit"/>
                    <ButtonComp buttonName="delete"/>
                </div>
                <img class=" h-48 w-full object-cover" :src="require(`../assets/Images/${post.img}.jpg`)" alt="ewew">
                <div class="p-4">
                    <p class="text-2xl font-semibold h-20">{{post.title}}</p>
                    <p class="border-b-2 border-fuchsia-400 -mx-4 mb-2"></p>
                    <p class="font-semibold">post on: {{post.date}}</p>
                    <router-link class="px-4 py-2 rounded font-semibold w-36 flex items-center mt-4 bg-fuchsia-400 text-white" to="#">view more 
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 pl-2 pt-1 font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </router-link>

                </div>
            </div> 
        </div>
    </div>
</template>
<script>
import ButtonComp from '../components/ButtonComp.vue'
export default {
   name:"BlogCard",
   props:["post"],
   components:{
    ButtonComp,
   },
   computed:{
    editPost(){
        console.log(this.$store.state.editPost)
        return this.$store.state.editPost;
    }
   }
}
</script>