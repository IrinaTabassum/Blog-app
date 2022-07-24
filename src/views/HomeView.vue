<template>
  <div class=" min-h-screen bg-fuchsia-100">
    <HeroComp/>
    <div class="container mx-auto  px-4 md:px-8 py-12">
      <div class="flex flex-wrap">
        <HomeCard :post="post" v-for="(post, index) in homeBlockpost" :key="index"/>
      </div>
      
    </div>
    <div class=" container mx-auto py-8">
      <p class="pb-8 text-3xl font-semibold text-center">Some popular blog</p>
      <div class="flex flex-wrap">
        <BlogCard :post="post" v-for="(post, index) in blogData" :key="index" />
        
      </div>
    </div>
  </div>
</template>

<script>

import HeroComp from '@/components/home/HeroComp.vue';
import HomeCard from '@/components/home/HomeCard.vue';
import BlogCard from '@/components/BlogCard.vue';

export default {
  name: 'HomeView',
  components: {
    HeroComp,
    HomeCard,
    BlogCard
  },
  data(){
    return{
      sidenav : false,
      homeBlockpost:[
        {
          title:"Thehome jkdnsjkn sjdj",
          date: "12/09/2010",
          description: "hjsd hdyushds dgshdgsd sjdvgshdh sdgshdgghsvd",
          img:"heroh"
        },
        {
          title:"tjguiuiubh",
          date: "12/09/2010",
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.A aspernatur fuga aliquid quos voluptatibus quo cupiditate enim iusto qui quam voluptatem atque, asperiores aperiam temporibus similique ad dicta commodi minus! Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
          img:"heroh"
        },
      ],
      
    };
  },
  computed:{
    blogData(){
      return this.$store.state.blogData;
    },
  },
  mounted(){
            let user = localStorage.getItem('user-info');
            console.log(user);
            if(!user){
                this.$router.push({name: "login"})
            }
        },

}
</script>
