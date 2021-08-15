export const state = () => ({
    displayUsers: [],
    albums: [],
    repeatedAlbums: [],
    displayAlbums: [],

})

export const mutations = {


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
          console.log(index)
          if(index !== -1 ){
            state.displayAlbums[index].cant++;
          }else{
            state.displayAlbums.push({album: item, cant:1})
          }
        }else{
          state.displayAlbums.push({album: item, cant:1})
        }
        
      },
}

import axios from "axios"
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
        return filteredAlbums;
  
    },
}

export const actions = {
    getPictures({commit}){
      axios.get('http://jsonplaceholder.typicode.com/photos').then(response => {
        commit('SET_PICTURES', response.data)
      })
    },

}