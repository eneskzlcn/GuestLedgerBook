<template>
  <div>
    <InputForm @addGuestLadger="addGuestLadger($event)" class="input"/>
    <div class ="grid grid-cols-5 gap-auto mt-5 w-full m-auto" v-if="guestLadgers && guestLadgers.length != 0"> 
      <Card v-for="item,index in guestLadgers" :key="index" :index="index" :guestLadger="item" />
    </div>
  </div>
</template>

<script>
import GuestLadgerClient from '../src/GuestLadgerClient.js'
const client = new GuestLadgerClient("http://127.0.0.1:5000");
export default {
  data(){
    return{
      guestLadgers :null
    }
  },
  methods: {
     async addGuestLadger(guestLadger)
     {
      //  if(!this.guestLadgers) this.guestLadgers = []
          
      //   this.guestLadgers.push(guestLadger);
      //   this.updateLocalStorage();
      this.guestLadgers = await client.postGuestLadger(guestLadger)
     }
    //  updateLocalStorage()
    //  {
    //    localStorage.setItem('guestLadgers',JSON.stringify(this.guestLadgers));
    //  }
  }
  ,
  async mounted()
  {
   
    this.guestLadgers =  Array.from(await client.getGuestLadgerBook());

  }

}
</script>
