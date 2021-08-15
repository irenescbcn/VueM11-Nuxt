export const state = () => ({
    users: [],
    displayUsers: [],
    albums: [],
    repeatedAlbums: [],
    displayAlbums: [],
    filter:{
      query:"",
    },

})


export const mutations = {
    SET_USERS(state, users){
      state.users = users
    },
    
    countUser(state, item){
        if(state.displayUsers !== []){
            let index = state.displayUsers.findIndex(user => user.user === item);
            if(index !== -1 ){
                state.displayUsers[index].cant++;
            }else{
                state.displayUsers.push({user: item, cant:1})
            }
        }else{
            state.displayUsers.push({user: item, cant:1})
        } 
    },

    SET_PICTURES (state, albums){
        state.albums = albums
    },
    countAlbum(state, item){
        if(state.displayAlbums !== []){
          let index = state.displayAlbums.findIndex( album => album.album === item);
          if(index !== -1 ){
            state.displayAlbums[index].cant++;
          }else{
            state.displayAlbums.push({album: item, cant:1})
          }
        }else{
          state.displayAlbums.push({album: item, cant:1})
        }
      },

      SET_QUERY (state, query){
        state.filter.query = query;
      },
}



export const getters = {
    repeatedAlbums(state){
        var originalAlbums = state.albums;
        var filteredAlbums = [];
        var count = 0;
        var start = false;
  
        for (let j = 0; j < originalAlbums.length; j++){
          for (let k = 0; k < filteredAlbums.length; k++){
            if( originalAlbums[j].albumId == filteredAlbums[k].albumId ){
              start = true;
            }
          }
          count++;
          if(count == 1 && start == false){
            filteredAlbums.push(originalAlbums[j])
          }
          start = false;
          count = 0;
        }
        console.log(filteredAlbums)
        return filteredAlbums;
    },

    findUsers(state){
      let usersList = state.users;
      let finalUsers = [];

      if (state.filter.query.length > 2){
        for(let user of usersList){
          if(user.name.toUpperCase().includes(state.filter.query.toUpperCase())){
            finalUsers.push(user)
          }
        }
      }
      return finalUsers;
    }
}


import axios from "axios"
export const actions = {
    getUsers({commit}){
      axios.get('http://jsonplaceholder.typicode.com/users').then(response => {
        commit('SET_USERS', response.data)
      })
    },
    getPictures({commit}){
      axios.get('http://jsonplaceholder.typicode.com/photos').then(response => {
        commit('SET_PICTURES', response.data)
      })
    },

}