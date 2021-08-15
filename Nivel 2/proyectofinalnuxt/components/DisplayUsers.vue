<template>
    <div class="displayUsersContainer">
        <div class="row displayUsers" v-if="usersFound.length > 0">
            <div v-for="user of usersFound">
                <div class="col">
                    <div class="card mt-3" style="width: 20rem;">
                        <div class="card-header">
                        <h4 class="userTitle">{{user.name}}</h4>
                        </div>

                        <div class="card-body">
                            <p class="card-text"><strong>Email: </strong>{{user.email}}</p>
                            <p class="card-text"><strong>Phone: </strong>{{user.phone}}</p>
                            <p class="card-text"><strong>Street: </strong>{{user.address.street}}</p>
                            <p class="card-text"><strong>Suite: </strong>{{user.address.suite}}</p>
                            <p class="card-text"><strong>City: </strong>{{user.address.city}}</p>
                            <p class="card-text"><strong>Zip: </strong>{{user.address.zipcode}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="alert alert-danger w-50">Error: we can not find this user</div>
    </div>
</template>

<script>
import Vuex from 'vuex'

export default {
    components: {
     
    },
    computed:{

        ...Vuex.mapGetters({
            usersFound: 'findUsers'
        }) 
    
    },
    mounted(){
        this.$store.dispatch("getPictures")
    },
}

</script>

<style>
.userTitle{
    text-align: center;
}
.displayUsersContainer{
    margin: 100px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.displayUsers{
    margin-top: 20px;
    justify-content: center;
}

.alert{
    margin: 150px 0;
}
</style>
