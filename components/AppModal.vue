<template>
    <v-dialog
        v-model="dialog"
        persistent
        max-width="290"
        >
        <template v-slot:activator="{ on, attrs }">
            <v-btn
            v-if="buttonStyle"
            :color="buttonColor"
            dark
            v-bind="attrs"
            v-on="on"
            >
            {{textButton}}
            </v-btn>
            <slot name="dialogButton" :on="on" v-else></slot>
        </template>
        <slot :close="closeMethod"></slot>
    </v-dialog>
</template>

<script>
    export default {
        data () {
        return {
            dialog: false,
        }
    },
    props:{
        textButton:{
            type:String,
            require:false
        },
        buttonColor:{
            type:String,
            default:"primary"
        },
        buttonStyle:{
            type:Boolean,
            default:false
        },
    },
    methods:{
        closeMethod(){
            this.dialog = false
        }
    }
}
</script>