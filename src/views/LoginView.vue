<template>
    <div class="min-h-screen bg-fuchsia-100 flex items-center justify-center">
        <div class=" bg-fuchsia-200 w-full md:w-1/3 rounded-md p-6 text-fuchsia-900">
            <div class="flex flex-wrap justify-center pb-4">
                <p class="pr-2 text-right">If you not Register please</p>
                <router-link class=" underline" :to="{name:'register'}">Register here</router-link>
            </div>
            <p class="text-2xl font-semibold text-center  pb-4">Login</p>
            <form class="" @submit.prevent="login">
                <div class="pb-4">
                    <label class="block pb-2 font-semibold" for="">Email</label>
                    <input v-model="email" class="input-style" type="email" >
                </div>
                <div class="pb-4">
                    <label class="block pb-2 font-semibold" for="">Password</label>
                    <input v-model="password" class="input-style" type="password">
                </div>
                <button type="submit" class="button-style">Login</button>
                <div class="flex flex-wrap justify-center pb-4">
                <p class="pr-2 text-right">Forget password</p>
                <router-link class=" underline" :to="{name:'forgetpassword'}">Rsate password</router-link>
            </div>
            </form>

        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: "LoginPage",
    data(){
        return{
            email:"",
            password:"",
        }
    },  
    methods:{
       async login(){
            let result = await axios.get(`http://localhost:3000/user?email=${this.email}&password=${this.password}`);
            console.log(result);
            if(result.status==200){
                // localStorage.setItem("user-info",JSON.stringify(result.data))
                this.email="",
                this.password=""
                this.$router.push({name: "home"})  
            }
            else{
                console.log("Incurrect email or passwprd")
            }
        },
         
    },
     mounted(){
            // let user = localStorage.getItem('user-info');
            // console.log(user);
            // if(user){
            //     this.$router.push({name: "home"})
            // }
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