<template>
    <div>
        <form v-on:submit.prevent="onSubmit()" class="form my-2 my-lg-0">
            <input class="form-control mr-sm-2" v-model="search" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-light my-2" id="search-addon" type="submit">
                <i class="fas fa-search"></i>
            </button>
        </form>
        <div class="list-group" v-show="showResults()" v-if="usersFound.length > 0">
            <div class="searchResults" v-for="user of usersFound">
                <a @click="onSubmitResult(user.name)" class="list-group-item list-group-item-action">
                {{user.name}}
                </a>  
            </div>
        </div>
    </div>
</template>

<script>
import Vuex from 'vuex'
import store from './../store/index'

export default {
    data(){
        return{
            show: true,
          
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
        ...Vuex.mapState(['displayUsers']),
        ...Vuex.mapGetters({
            usersFound: 'findUsers'
        }),
        
    },

    methods:{
        selectUser(){
            let result;
            for (let user of this.usersFound){
                if(user.name.toUpperCase().includes(this.search.toUpperCase())){
                    result = user.name;
                    if(this.displayUsers !== []){
                        let index = this.displayUsers.findIndex(user => user.user === result);
                        if(index !== -1 ){
                        this.displayUsers[index].cant++;
                        }else{
                        this.displayUsers.push({user: result, cant:1})
                        }
                    }else{
                        this.displayUsers.push({user: result, cant:1})
                    }    
                }
            }
        }, 
        showResults(){
            for (let user of this.usersFound){
                if(this.search == user.name){
                    this.show = false;
                    break;
                }else{
                    this.show = true;
                } 
            }
            if(this.search == ""){
                    this.show = true;
            }

            return this.show
        },
        onSubmitResult(val){
            this.$router.push('/users/viewUsers');
            this.search = val;
            this.countUser(val);
        },
        onSubmit(){
            this.$router.push('/users/viewUsers');
            this.selectUser();
        },
        ...Vuex.mapMutations(['countUser']),
    }
}
</script>

<style>
.form{
    margin-bottom: 0 !important;
    display: flex;
    align-items: baseline
}
.searchResults{
    border-radius: 3px;
    
}

#search-addon{
    margin-left: 5px
}

.list-group-item{
    color: #111 !important;
    z-index: 9 !important;
}
.list-group a{
    cursor: pointer
}
.list-group{
    z-index: 9 !important;
    position:fixed;
    margin-top: -10px;
}
</style>