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
        deletePostAction({state,commit}, postId){
            return this.$axios.$delete(`http://localhost:3001/posts/${postId}`).then(()=>{
                commit('updatePosts', state.posts.filter(post=> post.id != postId))
            })
        }
    },
}