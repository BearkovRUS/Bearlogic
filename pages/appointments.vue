<template>
<v-layout column justify-center align-center>
  <v-card class="my-12" width="93%">
    <div>
      <!--Header Start-->
      <div class="pa-4" style="background: linear-gradient(to right, #0f2037, #203a43, #2c5364);">
      <v-row>
        <v-col lg="12" align-center align="center">
          <v-avatar size="200">
          <v-img v-if="profile" height="200" width="200" :src="profile.img"></v-img>
          </v-avatar>      
        </v-col>
      </v-row>
      <v-row>
        <v-col lg="12" align="center">
          <h1 v-if="profile" class="display-3">{{profile.name}}</h1>
        </v-col>
      </v-row>
      </div>
      <!--Header End-->
      <!--Buttons-->
      <v-row class="pa-4">
        <v-col lg="12" align="center">
          <div class="d-inline-flex">
            <v-btn class="mx-3" color="green">Make Appointment</v-btn>
            <v-btn class="mx-3" color="blue">Bill for Services</v-btn>
            <v-btn class="mx-3" color="red">Edit Profile Info</v-btn>
          </div>
        </v-col>
      </v-row>
      <!--Buttons End-->
      <!--Info Table-->
      <v-row justify="center">
        <v-col lg="6" align="center">
          
        </v-col>
      </v-row>
      <!--Info Table End-->
    </div>
  </v-card>
</v-layout>
</template>

<script>
import firebase from 'firebase'
import '@firebase/firestore'
import db from '@/firebase/init'


export default {
    data() {
        return {
            profile: null,
        }
    },

  
      created(){
        let ref = firebase.firestore().collection('users')
          ref.doc('bearso').get()
          .then(doc => {
            this.profile = doc.data()
          })
      }
}
    
</script>

<style>
.row-full-width{
  width: 100% !important;
}
</style>