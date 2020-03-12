<template> 
 <v-container style="height: 100vh; overflow: hidden;">
  <v-row>
   <v-col cols="12">
    <v-row align="center" justify="center" style="height: 100vh;">
        <v-card class="pa-8" min-width="500px" max-width="500px" :loading="loading">
            <v-img class="mb-4 mt-4" max-width="50%" src="https://i.ibb.co/NVjWkGV/Group-1.png"></v-img>
            <v-form @submit.prevent="login">
            <v-text-field
            v-model="email"
            label="Email"
            required
            filled
            :error="feedback"
          >
          </v-text-field>
           <v-text-field
            v-model="password"
            label="Password"
            type="password"
            required
            filled
            :error="feedback"
            @keyup.enter="login"
          ></v-text-field>
          <v-btn @click="login" class="green">Sign in</v-btn>
           </v-form>
        </v-card>
    </v-row>
   </v-col>
  </v-row>   
 </v-container>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'

export default {
    layout: 'loginlayout',
    data() {
      return {
        loading: null,
        email: null,
        password: null,
        feedback: null,

      }
    },
    methods: {
      login(){
      if(this.email && this.password){
        this.loading = true
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
          firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(cred => {
          this.$router.push({name: 'index'})
        })
        })
       } else {
         this.feedback = true
       }
      }
    }
}
</script>

<style>
.backgroundimage {
    background: url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
}
html,body{
margin:0;
}

</style>