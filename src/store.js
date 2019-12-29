import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        posts: []
    },
    mutations:{
        addPosts(state,payload){
            state.posts = payload
        }
    },
    actions:{
        downloadPosts({commit}){
            const fakedata = require('./fakeData.json').posts
            commit('addPosts', fakedata)    
        },
        async getPostById({state,dispatch}, id){
            if(state.posts.filter.length){
               
               await dispatch('downloadPosts')
            }
            return state.posts.filter(x=>x.id === id)[0]
        }

        
    }
    
})