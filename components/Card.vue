<template>
  <div class="rounded shadow-xl mr-4 border-2 mt-4 bg-yellow-100" :id="'cardContainer'+index" style="position:relative"  v-if="guestLadger">
     
      <div class="px-6 py-4">
        <div >
          <div class="font-bold text-xl text-center mb-3" :id="'Header'+index" style="overflow-wrap: break-word;"> {{guestLadger.email}}</div>
          <p class="text-gray-700 font-bold text-center text-xs" >
              {{guestLadger.message}}
          </p>
        </div>

      </div>
  </div>
</template>
<script>
export default {
   name:'Card',
   props:
   {
     guestLadger: null,
     index : 0
   }
}
</script>
<style>
p{
  overflow-wrap: break-word;
}

</style>
