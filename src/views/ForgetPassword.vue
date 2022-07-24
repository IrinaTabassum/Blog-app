<template>
    <div class="min-h-screen bg-fuchsia-100 flex items-center justify-center">
        <div class=" bg-fuchsia-200 w-full md:w-1/3 rounded-md p-6 text-fuchsia-900">
           
            <p class="text-2xl font-semibold text-center  pb-4">Forget password</p>
            <form class="" @submit.prevent="forgotpassword">
                <div class="pb-4">
                    <label class="block pb-2 font-semibold" for="">Email</label>
                    <input class="input-style" type="email" >
                </div>
                <button @click="forgot" class="button-style">submit</button>
            </form>

        </div>
    </div>
</template>
<script>

export default {
    setup() {
        
    },
}
</script>
<style scoped>
.login-bg{
    background-image: url('../assets/Images/loginBg.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

</style>