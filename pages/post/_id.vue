<template>
<div>
    <v-row justify="center" align="center" v-if="selectedPost">
        <v-col 
        cols="12" md="6" 
        >
        <post-card :post="selectedPost" :isSelected="true"></post-card>
        </v-col>
    </v-row>
</div>
</template>

<script>
import PostCard from '~/components/PostCard';
export default {

    components:{
        PostCard
    },

    fetch({$axios,store,params}){
        return $axios.$get(`http://localhost:3001/posts/${params.id}`).then(res=>{
            store.commit('updateSelectedPost',res)
        })
    },
    computed:{
        selectedPost(){
            return this.$store.state.selectedPost;
        }
    }

}
</script>

<style>

</style>