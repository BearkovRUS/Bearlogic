<template>
    <v-layout column justify-center align-center>
        <v-card class="pa-10 my-12" min-width="600px">
            <v-form>
                <h1 class="mb-6">Create Account</h1>
                <v-text-field v-model="name" filled placeholder="Name"></v-text-field>
                <v-text-field v-model="email" filled placeholder="Email"></v-text-field>
                <v-text-field v-model="password" filled placeholder="Password" type="password"></v-text-field>
                <v-text-field v-model="organization" filled placeholder="Organizations"></v-text-field>
                <v-text-field v-model="phonenumber" filled placeholder="Phone Number"></v-text-field>
                <v-select v-model="type" :items="types" filled label="Account Type">
                </v-select>
                <v-btn @click="adminCreate" large class="green">Create Account</v-btn>
            </v-form>
        </v-card>
    </v-layout>
</template>

<script>
import firebase from 'firebase'
import 'firebase/firestore'
import db from '@/firebase/init'

export default {
    data() {
        return {
            name: null,
            email: null,
            password: null,
            organization: null,
            phonenumber: null,
            type: null,
            types: ['ORG Admin', 'User']
        }
    },
    methods: {
        adminCreate(){
        let ref = firebase.firestore().collection('users')
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
            ref.doc(user.uid).set({
                name: this.name,
                organization: this.organization,
                phonenumber: this.phonenumber,
                type: this.type
            })
        })
        }
    },
}
</script>