<template>
  <HomeComponent></HomeComponent>
</template>

<script>
import HomeComponent from "@/components/HomeComponent"

export default {
  components:{
    HomeComponent
  },
  transition:{
    name: "fade",
    mode:"out-in",
    appear: true
  }
}
</script>

<style>
.fade-enter-from,
.fade-leave-to{
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.4s ease-out;
}
</style>

