<template>
<v-layout column justify-center align-center>
  <v-card  width="100%">
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
      <!--Info-->
      <v-row justify="center" class="pa-12">
        <v-col lg="4" align="center">
          <v-list v-if="profile" color="#2b2b2b">
            <v-list-item>
              <v-list-item-icon><v-icon size="40">mdi-identifier</v-icon></v-list-item-icon>
              <h2>ID: {{profile.id}}</h2>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item>
              <v-list-item-icon><v-icon size="40">mdi-human-greeting</v-icon></v-list-item-icon>
              <h2>Status: {{profile.status}}</h2>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item>
              <v-list-item-icon><v-icon size="40">mdi-doctor</v-icon></v-list-item-icon>
              <h2>Staff: {{profile.staff}}</h2>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item>
              <v-list-item-icon><v-icon size="40">mdi-gender-male-female</v-icon></v-list-item-icon>
              <h2>Gender: {{profile.gender}}</h2>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item>
              <v-list-item-icon><v-icon size="40">mdi-alert</v-icon></v-list-item-icon>
              <h2>Allergies: {{profile.allergies}}</h2>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item>
              <v-list-item-icon><v-icon size="40">mdi-pill</v-icon></v-list-item-icon>
              <h2>Medications: {{profile.meds}}</h2>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item>
              <v-list-item-icon><v-icon size="40">mdi-information-outline</v-icon></v-list-item-icon>
              <h2> Diagnosis: {{profile.diagnosis}}</h2>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item>
              <v-list-item-icon><v-icon size="40">mdi-map-marker-outline</v-icon></v-list-item-icon>
              <h2 class="text-left">Address: {{profile.address}}</h2>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col lg="8" align="center">
        </v-col>
      </v-row>
      <!--Info-->
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