<template>
    <div>
        <form v-on:submit.prevent="onSubmit()" class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" v-model="search" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-light my-2" id="search-addon" type="submit">
                <i class="fas fa-search"></i>
            </button>
        </form>
    </div>
</template>

<script>
import Vuex from 'vuex'
import store from './../store/index'

export default {
    data(){
        return{
            
        }
    },
    computed:{
        search:{
            get (){
                return this.$store.state.filter.query;
            },
            set (val){
                this.$store.commit('SET_QUERY', val)
            }
        }, 
        ...Vuex.mapGetters({
            usersFound: 'findUsers'
        }),
    },

    methods:{
        onSubmit(){
            this.$router.push('/users/viewUsers')
        },
    }
}
</script>