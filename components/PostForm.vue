<template>
<div>
    <v-form v-model="valid" @submit.prevent="submitForm">
            <v-text-field
                v-model="form.title"
                :rules="rules.title"
                :counter="15"
                required
                label="Post Title"
            ></v-text-field>
            <v-textarea
                v-model="form.body"
                :rules="rules.body"
                solo
                required
                label="Post Body"
                :counter="100"
                name="input-7-4"
            ></v-textarea>
            <v-btn 
            type="submit" 
            color="teal accent-4" 
            :disabled="!valid"
            :loading="addLoading">
            Submit</v-btn>
    </v-form>
</div>
</template>

<script>
export default {
    data(){
        return{
            valid:false,
            addLoading:false,
            form:{
                title:'',
                body:''
            },
            rules: {
                title:[
                    v => !!v || 'Title is required',
                    v => v.length >= 15 || 'Title must be at least 15 characters',
                ],
                body:[
                    v => !!v || 'Body is required',
                    v => v.length >= 100 || 'Body must be at least 100 characters',
                ]
            }
        }
    },
    methods:{
        submitForm(){
            this.addLoading=true
            this.$store.dispatch('addPostAction',this.form).then(()=>{
                this.$router.push('/admin')
            }).finally(()=>{
                this.addLoading = false
            })
        }
    }
}
</script>

<style>

</style>