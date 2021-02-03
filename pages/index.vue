<template>
  <v-row justify="start" align="center" v-if="posts">
    <v-col 
      cols="12" md="6" 
      v-for="(post) in posts" :key="post.id"
    >
      <post-card :post="post"></post-card>
    </v-col>
  </v-row>
</template>

<script>
import PostCard from '~/components/PostCard';

export default {

  components:{
    PostCard
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
