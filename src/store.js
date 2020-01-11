import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        posts: []
    },
    mutations: {
        addPosts(state, payload) {
            state.posts = payload
        },
        
    },
    actions: {
        downloadPosts({commit}) {
            if (!localStorage.getItem('__data__')) {
                const fakedata = require('./fakeData.json')
                commit('addPosts', fakedata.posts)
                localStorage.setItem('__data__', JSON.stringify(fakedata))
            }
            const memory = JSON.parse(localStorage.getItem('__data__'))
            commit('addPosts', memory.posts)

        },
        getPostById({state}, id) {
            return state.posts.filter(x => x.id === id)[0]
        },
        async updatePost({commit}, arr) {
            const [editPost, id] = arr
            let data = JSON.parse(localStorage.getItem('__data__'))
            await (data.posts).map(x => {
                if (x.id === id) {
                    if (editPost.description) {
                        x.content.description = editPost.description
                    }
                    if(editPost.tags.length>0){
                        x.content.tags = editPost.tags
                    }
                    

                }


            })
            localStorage['__data__'] = JSON.stringify(data)
            commit('addPosts', data.posts)
        },
        async addNewPost(context, newPost){
            let post = context.state.posts[context.state.posts.length-1];
            let data = JSON.parse(localStorage.getItem('__data__'))
            post.id = post.id+1
            post.content.image = []
            post.content.image.push(newPost.image)
            post.content.description = newPost.description
            post.content.tags = newPost.tags
            await data.posts.unshift(post)
            localStorage['__data__'] = JSON.stringify(data)
            context.commit('addPosts', data.posts)
        },
        async deletePost({commit},id){
            let data = JSON.parse(localStorage.getItem('__data__'))
            data.posts = await data.posts.filter(x=>x.id !== id)
            console.log(data);
            localStorage['__data__'] = JSON.stringify(data)
            commit('addPosts', data.posts)
        }


    }

})