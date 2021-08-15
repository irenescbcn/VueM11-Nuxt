<template>

    <div class="picturesAlbum">
        <div class="col">
            <div class="row justify-content-center align-items-center" >
                <h4 class="albumPhotosTitle">Album {{$route.params.albumId}}</h4>
                <div class="albumPhotos">
                    <img v-for="(photo) in photoAlbum(albums, $route.params.albumId)" :src="photo.thumbnailUrl" class="img-thumbnail rounded float-left">
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import Vuex from 'vuex'
export default {

    computed:{
        ...Vuex.mapState(['albums']),
    },

    methods:{
        photoAlbum(array, id){
            let photosArray = [];
            for(let item of array){
                if(item.albumId == id){
                    photosArray.push(item)
                }
            }
            return photosArray;
        }
    }
}
</script>

<style>
.albumPhotosTitle{
    margin: 20px 0;
}
.albumPhotos{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content:center;
    margin-bottom: 20px;

}
</style>