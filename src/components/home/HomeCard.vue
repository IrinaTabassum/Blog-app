<template>
<div class="md:w-1/2 w-full">
    <div class="w-full flex flex-wrap p-4 h-full">
        <div class="sm:w-1/3">
            <img class=" rounded-l-lg h-full object-cover" :src="require(`../../assets/Images/${post.img}.jpg`)" alt="">
        </div>
        <div class="sm:w-2/3 ">
            <div class="px-8 rounded-r-lg bg-white h-full py-6">
                <p>July,2022 at 12:00am</p>
                <p class="text-gray-600 text-4xl font-bold border-b-4 border-fuchsia-200 py-2 h-24 headerstyle">{{ post.title }}</p>
                <p class="py-4 h-28 linestyle">{{ post.description}}</p>

                <div class="pt-6 flex">
                <img class="h-12 w-12 rounded-full bg-slate-300" :src="require(`../../assets/Images/${post.img}.jpg`)" alt="profile">
                <div class="px-3">
                    <p>fast name last name</p>
                    <p>date</p>
                </div>
                
            </div>    
            </div>
            
        </div>
    </div>
</div>
    
</template>
<script>
export default {
    name:'HomeCard',
    props:["post"],

}
</script>
<style scoped>
.linestyle{
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
.headerstyle{
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>