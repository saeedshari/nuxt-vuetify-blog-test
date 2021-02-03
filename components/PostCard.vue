<template>
<div>
    <v-card
    elevation="3"
    shaped
    >
        <v-card-title>{{post.title}}</v-card-title>
        <v-card-text>{{post.body}}</v-card-text>

        <template v-if="isSelected">
        </template>

        <template v-else-if="isAdmin">
        <v-card-actions>
            <v-btn
                text
                color="teal accent-4"
                :to="`/admin/post/${post.id}/edit`"
                @click="updateSelectedPost(post)"
            >
                Edit
            </v-btn>
    <!------------- Click Delete Modal ------------>
        <app-modal
            text-button="Delete"
            button-color="error"
            :button-style="true">
            <template slot-scope="{close}">
                <v-card>
                    <v-card-title class="headline">
                    Are you sure ?
                    </v-card-title>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="green darken-1"
                        text
                        :disabled="deleteLoading"
                        @click="close"
                    >
                        cancel
                    </v-btn>
                    <v-btn
                        color="error"
                        text
                        :loading="deleteLoading"
                        @click="deletePost(post.id, close)"
                    >
                        Delete
                    </v-btn>
                    </v-card-actions>
                </v-card>
            </template>
        </app-modal>
    <!------------- /Click Delete Modal ------------>
        </v-card-actions>
        </template>

        <template v-else>
        <v-card-actions>
            <v-btn
                text
                color="teal accent-4"
                nuxt
                :to="`/post/${post.id}`"
            >
                Learn More
            </v-btn>
        </v-card-actions>
        </template>
    </v-card>
</div>
</template>
<script>
import AppModal from './AppModal.vue'
export default {
    components: { AppModal },
    props:{
        post:{
            type:Object,
            require:true
        },
        isAdmin:{
            type:Boolean,
            default:false
        },
        isSelected:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return{
            deleteLoading:false
        }
    },
    methods:{
        updateSelectedPost(post){
            this.$store.commit('updateSelectedPost',post)
        },
        deletePost(postId, callback){
            this.deleteLoading = true
            this.$store.dispatch('deletePostAction',postId).then(callback).finally(()=>{
                this.deleteLoading = false;
            })
        },
    }
}
</script>