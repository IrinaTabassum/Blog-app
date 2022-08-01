<template>
    <div class="min-h-screen bg-fuchsia-100 flex items-center justify-center">
        <div class=" bg-fuchsia-200 w-full md:w-1/3 rounded-md p-6 text-fuchsia-900">
            <div class="flex justify-center pb-4">
                <p class="pr-2 text-right">If you Registered</p>
                <router-link class=" underline" :to="{name:'login'}">login here</router-link>
            </div>
            <p class="text-2xl font-semibold text-center  pb-4">Register</p>
            <form class="" @submit.prevent="register">
                <div class="pb-4">
                    <label class="block pb-2 font-semibold" for="">First Name</label>
                    <input v-model="firstName" class="input-style" type="text" >
                </div>
                <div class="pb-4">
                    <label class="block pb-2 font-semibold" for="">Last Name</label>
                    <input v-model="lastName" class="input-style" type="text" >
                </div>
                <div class="pb-4">
                    <label class="block pb-2 font-semibold" for="">Phone Number</label>
                    <input v-model="phoneNumber" class="input-style" type="text" >
                </div>
                <div class="pb-4">
                    <label class="block pb-2 font-semibold" for="">Email</label>
                    <input v-model="email" class="input-style" type="email" >
                </div>
                <div class="pb-4">
                    <label class="block pb-2 font-semibold" for="">Password</label>
                    <input v-model="password" class="input-style" type="password">
                </div>
                <button type="submit" class="button-style">Register</button>

            </form>

        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: "RegisterPage",
    data(){
        return{
            firstName:"",
            lastName:"",
            phoneNumber:"",
            email:"",
            password:"",
        }
    },  
    methods:{
       async register(){
            let result = await axios.post("http://localhost:3000/user",{
                fastname:this.firstName,
                lastname:this.lastName,
                phoneNumber:this.phoneNumber,
                email:this.email,
                password:this.password
            });
            console.log(result);
            if(result.status==201){
                // localStorage.setItem("user-info",JSON.stringify(result.data))
                this.firstName="",
                this.lastName="",
                this.phoneNumber="",
                this.email="",
                this.password=""
                this.$router.push({name: "home"})  
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