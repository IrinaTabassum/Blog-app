<template>
    <div class="w-full sm:w-1/2 md:w-1/3">
        <div class="p-4 h-full space-y-4">
            <div class=" bg-fuchsia-200 rounded-md h-full relative">
                <div v-show="editPost" class=" space-x-2 absolute top-2 right-2">
                    <ButtonComp buttonName="edit"/>
                    <ButtonComp buttonName="delete"/>
                </div>
                <img class=" h-52 w-full object-cover" :src="require(`../assets/Images/${post.img}.jpg`)" alt="ewew">
                <div class="p-4">
                    <p class="text-2xl font-semibold h-20">{{post.title}}</p>
                    <p class="font-semibold">post on: {{post.date}}</p>
                    <router-link class="px-4 py-2 rounded font-semibold w-36 flex items-center mt-4 bg-slate-400" to="#">view more 
                        <img class="h-4 mt-1 pl-2" src="../assets/Icons/arow.svg" alt="">
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
        return this.$store.state.editPost;
    }
   }
}
</script>