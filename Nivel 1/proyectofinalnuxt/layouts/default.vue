<template>
   <div>

    <header>  
      <Header />
    </header>

    <section class="sectionClass">
      <Nuxt />
      <div class="btnSection">
        <button class="btn btn-dark" @click="goBack">Go Back</button>
      </div>
    </section>
    
    <footer>
      <Footer />
    </footer>

  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"


export default {
  components: {
    Header,
    Footer
  },
  methods:{
      goBack(){
          this.$router.go(-1)
      }
  }
}

</script>

<style>
.sectionClass{
  margin: auto;
  display:flex;
  flex-direction: column;
  justify-content:center;
}

.btnSection{
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
</style>
