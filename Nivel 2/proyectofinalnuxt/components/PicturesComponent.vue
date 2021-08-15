<template>
  <div class="picturesComponent">
    <h2 class="albumTitle">ALBUMS</h2>
    <div class="col">
        <div class="row  justify-content-center ">
            <div class="card"  v-for="album in newAlbum"  style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Album {{album.albumId}}</h5> 
                    <router-link :to="{path: `/albums/${album.albumId}`, query: {album}} ">
                        <button @click="countAlbum(album.albumId)" class="btn btn-dark">Check Album</button> 
                    </router-link>
                </div>
            </div>
        </div>
    
    </div>
    
  </div>
</template>

<script>

import Vuex from 'vuex'


export default {

    data(){
        return{
            
        }
    },
    computed:{
        ...Vuex.mapState(['albums']),
        ...Vuex.mapGetters({
            newAlbum: 'repeatedAlbums'
        })
    },

    mounted(){
        this.$store.dispatch("getPictures")
    },

    methods:{
       ...Vuex.mapMutations(['countAlbum'])
    },
   
}

</script>

<style>
.albumTitle{
    text-align: center;
    margin-top: 20px;
}
.card{
    margin: 15px;
}

.card-body{
    text-align: center;
}
</style>