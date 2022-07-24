<template>
<div class="backfround-ing h-72 flex items-end justify-center">
  <div class=" bg-purple-300 opacity-80 p-8 rounded-t-xl font-semibold">
    <h1 class="text-3xl text-center pb-4">Love Traveling</h1>
    <p class="text-center ">I love Travellig it's work like madison for me</p>
    <p class="text-center pt-4 border-t-2 border-purple-500">Time is running enjoy</p>
  </div>
</div>
</template>

<script>

export default {

  name: 'HeroComp',
  props: {
    msg: String
  }
}
</script>
<style scoped>
.backfround-ing{
  background-image: url('../../assets/Images/hero.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

}
</style>