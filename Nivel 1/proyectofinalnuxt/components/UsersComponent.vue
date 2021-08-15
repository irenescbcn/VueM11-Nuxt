<template>
    <div>
        <h2 class="usersTitle">USERS</h2>
        <div class="col">
            <div class="row align-items-center justify-content-center">
                <div class="card" v-for="user in users" :key="user.id" style="width: 18rem;">
                    <div class="card-body" >
                        <h5 class="card-title">{{user.name | uppercase}}</h5>
                        <nuxt-link :to="{path: `/users/${user.name}`, query: {user}} ">
                            <button @click="countUser(user.name)" class="btn btn-dark userBtn">Check User</button> 
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import Vuex from 'vuex'

export default {

    data(){
        return{
            users: [],
        }
    },

    created(){
        this.$axios.get('http://jsonplaceholder.typicode.com/users')
        .then(response =>{
            this.users = response.data
            return this.users
        })
    },

    filters:{
        uppercase: function(value){
            return value.toUpperCase()
        },      
    },

    methods:{
       ...Vuex.mapMutations(['countUser'])
    }, 

}
</script>

<style>
.usersTitle{
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