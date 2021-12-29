<template>
    <form class="flex items-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ml-10 mr-10 mt-10 w-max">
        <div class="mb-4 ml-17 mr-10 mt-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="emailINP">E-mail</label>
            <input type="email" v-model="email" id="emailINP" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" >
        </div>   
        <div class="mb-4 ml-17 mr-10">
            <label for="messageINP" class="block text-gray-700 text-sm font-bold mb-2">Message</label>
            <input type="text" v-model="message" id="messageINP" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <div class="inline ml-17 mr-10">
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" @click="addGuestLadger" id="submitBTN">
                Submit
            </button>
        </div>
    </form>
    
</template>

<script>
export default {
    name:'InputForm',
    methods:
    {
        addGuestLadger()
        {
            if(this.email.length == 0 || this.message.length == 0) return;
            var guestLadger = {email:this.email, message:this.message };
            this.email ="",this.message = "";
            this.$emit('addGuestLadger',guestLadger);
        }
    },
    data()
    {
        return {
            email:"",
            message :""
        }
    }
}
</script>
<style scoped>
 input
 {
     border-width: 2px;
     
 }
 label{
     text-align: center;
     
 }
 form{
     margin:auto;
     width:max-content;
 }
</style>