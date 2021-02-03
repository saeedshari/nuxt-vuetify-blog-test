<template>
<div>
    <v-row justify="start" align="center" v-if="posts">
        <v-col cols="12">
        <v-btn nuxt to="/admin/post/add" color="info">Add Post</v-btn>
        </v-col>
        <v-col 
        cols="12" sm="8" md="6" 
        v-for="(post) in posts" :key="post.id"
        >
        <post-card :post="post" :is-admin="true"></post-card>
        </v-col>
    </v-row>
</div>
</template>
<script>
import PostCard from '~/components/PostCard';

export default {

    components:{
        PostCard,
    },

    head:{
        title:"Home"
    },

    fetch({$axios,store}){
        return $axios.$get('http://localhost:3001/posts').then(res=>{
            store.commit('updatePosts',res)
            })
    },

    computed:{
        posts(){
            return this.$store.state.posts;
        }
    }
}
</script>