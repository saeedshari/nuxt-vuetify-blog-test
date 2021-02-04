export default {
    state:()=>({
        posts:null,
        selectedPost:null
    }),
    mutations:{
        updatePosts(state,posts){
            state.posts = posts
        },
        updateSelectedPost(state,post){
            state.selectedPost = post
        }
    },
    actions:{
        addPostAction({state,commit}, payload){
            return this.$axios.$post('http://localhost:3001/posts',payload).then((post)=>{
                commit('updatePosts', [...state.posts,post])
            })
        },
        deletePostAction({state,commit}, postId){
            return this.$axios.$delete(`http://localhost:3001/posts/${postId}`).then(()=>{
                commit('updatePosts', state.posts.filter(post=> post.id != postId))
            })
        }
    },
}